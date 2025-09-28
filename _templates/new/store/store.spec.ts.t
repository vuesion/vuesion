---
to: "src/app/store/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>.spec.ts"
unless_exists: true
---
import { setActivePinia, createPinia } from 'pinia';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { use<%= h.inflection.camelize(name) %>Store } from '@/store/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>';
import { $fetchWithCookies } from '@/utils/fetch-with-cookies';
import { handleStoreError } from '@/utils/handle-store-error';
import { getQueryParams } from '@/utils/get-query-params';

vi.mock('@/utils/fetch-with-cookies', () => ({
  $fetchWithCookies: vi.fn(),
}));
vi.mock('@/utils/handle-store-error', () => ({
  handleStoreError: vi.fn((store: any, e: any) => {
    store.error = e;
  }),
}));
vi.mock('@/utils/get-query-params', () => ({
  getQueryParams: vi.fn(() => '?selectedPage=1&itemsPerPage=10'),
}));

describe('use<%= h.inflection.camelize(name) %>Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  it('initial state & getters', () => {
    const store = use<%= h.inflection.camelize(name) %>Store();

    expect(store.get<%= h.inflection.camelize(h.inflection.pluralize(name)) %>).toEqual([]);
    expect(store.get<%= h.inflection.camelize(name) %>Count).toBe(0);
    expect(store.getCurrent<%= h.inflection.camelize(name) %>).toBeUndefined();
    expect(store.getError).toBeNull();
  });

  describe('success', () => {
    it('fetch<%= h.inflection.camelize(h.inflection.pluralize(name)) %> → sets records & count and clears error', async () => {
      ($fetchWithCookies as any).mockResolvedValueOnce({
        records: [{ id: 'a1' }, { id: 'a2' }],
        totalRecords: 2,
      });

      const store = use<%= h.inflection.camelize(name) %>Store();
      await store.fetch<%= h.inflection.camelize(h.inflection.pluralize(name)) %>({ page: 1, size: 10 } as any);

      expect(getQueryParams).toHaveBeenCalledWith({ page: 1, size: 10 });
      expect($fetchWithCookies).toHaveBeenCalledWith('/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>?selectedPage=1&itemsPerPage=10');

      expect(store.get<%= h.inflection.camelize(h.inflection.pluralize(name)) %>).toEqual([{ id: 'a1' }, { id: 'a2' }]);
      expect(store.get<%= h.inflection.camelize(name) %>Count).toBe(2);
      expect(store.getError).toBeNull();
    });

    it('fetch<%= h.inflection.camelize(name) %>Details → sets current<%= h.inflection.camelize(name) %> and clears error', async () => {
      ($fetchWithCookies as any).mockResolvedValueOnce({ id: 'x1', foo: 'bar' });

      const store = use<%= h.inflection.camelize(name) %>Store();
      await store.fetch<%= h.inflection.camelize(name) %>Details('x1');

      expect($fetchWithCookies).toHaveBeenCalledWith('/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/x1');
      expect(store.getCurrent<%= h.inflection.camelize(name) %>).toEqual({ id: 'x1', foo: 'bar' });
      expect(store.getError).toBeNull();
    });

    it('create<%= h.inflection.camelize(name) %> → pushes new item and sets current', async () => {
      const created = { id: 'new', v: 1 };
      ($fetchWithCookies as any).mockResolvedValueOnce(created);

      const store = use<%= h.inflection.camelize(name) %>Store();
      await store.create<%= h.inflection.camelize(name) %>({ any: 'payload' } as any);

      expect($fetchWithCookies).toHaveBeenCalledWith('/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>', 'POST', { any: 'payload' });
      expect(store.get<%= h.inflection.camelize(h.inflection.pluralize(name)) %>).toEqual([created]);
      expect(store.getCurrent<%= h.inflection.camelize(name) %>).toEqual(created);
      expect(store.getError).toBeNull();
    });

    it('update<%= h.inflection.camelize(name) %> → replaces item by id & sets current', async () => {
      const store = use<%= h.inflection.camelize(name) %>Store();

      store.<%= h.inflection.camelize(name, true) %> = [{ id: 'x1' }, { id: 'x2' }] as any;

      const updated = { id: 'x2', patched: true };
      ($fetchWithCookies as any).mockResolvedValueOnce(updated);

      await store.update<%= h.inflection.camelize(name) %>('x2', { patched: true } as any);

      expect($fetchWithCookies).toHaveBeenCalledWith('/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/x2', 'PUT', { patched: true });
      expect(store.get<%= h.inflection.camelize(h.inflection.pluralize(name)) %>).toEqual([{ id: 'x1' }, updated]);
      expect(store.getCurrent<%= h.inflection.camelize(name) %>).toEqual(updated);
      expect(store.getError).toBeNull();
    });

    it('delete<%= h.inflection.camelize(name) %> → removes item & clears current', async () => {
      const store = use<%= h.inflection.camelize(name) %>Store();
      store.<%= h.inflection.camelize(name, true) %> = [{ id: 'x1' }, { id: 'x2' }] as any;
      store.current<%= h.inflection.camelize(name) %> = { id: 'x2' } as any;

      ($fetchWithCookies as any).mockResolvedValueOnce(undefined);

      await store.delete<%= h.inflection.camelize(name) %>('x2');

      expect($fetchWithCookies).toHaveBeenCalledWith('/api/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/x2', 'DELETE');
      expect(store.get<%= h.inflection.camelize(h.inflection.pluralize(name)) %>).toEqual([{ id: 'x1' }]);
      expect(store.getCurrent<%= h.inflection.camelize(name) %>).toBeUndefined();
      expect(store.getError).toBeNull();
    });
  });

  describe('error', () => {
    it('fetch<%= h.inflection.camelize(h.inflection.pluralize(name)) %> (error) → calls handleStoreError, preserves list/count', async () => {
      const err = new Error('boom-list');
      ($fetchWithCookies as any).mockRejectedValueOnce(err);

      const store = use<%= h.inflection.camelize(name) %>Store();

      store.<%= h.inflection.camelize(name, true) %> = [{ id: 'keep' }] as any;
      store.<%= h.inflection.camelize(name, true) %>Count = 1;

      await store.fetch<%= h.inflection.camelize(h.inflection.pluralize(name)) %>({ page: 1, size: 10 } as any);

      expect(handleStoreError).toHaveBeenCalled();
      expect(store.getError).toBe(err);

      expect(store.get<%= h.inflection.camelize(h.inflection.pluralize(name)) %>).toEqual([{ id: 'keep' }]);
      expect(store.get<%= h.inflection.camelize(name) %>Count).toBe(1);
    });

    it('fetch<%= h.inflection.camelize(name) %>Details (error) → calls handleStoreError, preserves current', async () => {
      const err = new Error('boom-details');
      ($fetchWithCookies as any).mockRejectedValueOnce(err);

      const store = use<%= h.inflection.camelize(name) %>Store();
      store.current<%= h.inflection.camelize(name) %> = { id: 'stay' } as any;

      await store.fetch<%= h.inflection.camelize(name) %>Details('x1');

      expect(handleStoreError).toHaveBeenCalled();
      expect(store.getError).toBe(err);
      expect(store.getCurrent<%= h.inflection.camelize(name) %>).toEqual({ id: 'stay' });
    });

    it('create<%= h.inflection.camelize(name) %> (error) → calls handleStoreError, does not push', async () => {
      const err = new Error('boom-create');
      ($fetchWithCookies as any).mockRejectedValueOnce(err);

      const store = use<%= h.inflection.camelize(name) %>Store();
      store.<%= h.inflection.camelize(name, true) %> = [{ id: 'keep' }] as any;

      await store.create<%= h.inflection.camelize(name) %>({ foo: 'bar' } as any);

      expect(handleStoreError).toHaveBeenCalled();
      expect(store.getError).toBe(err);
      expect(store.get<%= h.inflection.camelize(h.inflection.pluralize(name)) %>).toEqual([{ id: 'keep' }]);
      expect(store.getCurrent<%= h.inflection.camelize(name) %>).toBeUndefined();
    });

    it('update<%= h.inflection.camelize(name) %> (error) → calls handleStoreError, does not mutate items', async () => {
      const err = new Error('boom-update');
      ($fetchWithCookies as any).mockRejectedValueOnce(err);

      const store = use<%= h.inflection.camelize(name) %>Store();
      store.<%= h.inflection.camelize(name, true) %> = [{ id: 'x1' }, { id: 'x2' }] as any;
      store.current<%= h.inflection.camelize(name) %> = { id: 'x1' } as any;

      await store.update<%= h.inflection.camelize(name) %>('x2', { patched: true } as any);

      expect(handleStoreError).toHaveBeenCalled();
      expect(store.getError).toBe(err);
      expect(store.get<%= h.inflection.camelize(h.inflection.pluralize(name)) %>).toEqual([{ id: 'x1' }, { id: 'x2' }]);
      expect(store.getCurrent<%= h.inflection.camelize(name) %>).toEqual({ id: 'x1' });
    });

    it('delete<%= h.inflection.camelize(name) %> (error) → calls handleStoreError, does not remove item', async () => {
      const err = new Error('boom-delete');
      ($fetchWithCookies as any).mockRejectedValueOnce(err);

      const store = use<%= h.inflection.camelize(name) %>Store();
      store.<%= h.inflection.camelize(name, true) %> = [{ id: 'x1' }, { id: 'x2' }] as any;
      store.current<%= h.inflection.camelize(name) %> = { id: 'x2' } as any;

      await store.delete<%= h.inflection.camelize(name) %>('x2');

      expect(handleStoreError).toHaveBeenCalled();
      expect(store.getError).toBe(err);
      expect(store.get<%= h.inflection.camelize(h.inflection.pluralize(name)) %>).toEqual([{ id: 'x1' }, { id: 'x2' }]);
      expect(store.getCurrent<%= h.inflection.camelize(name) %>).toEqual({ id: 'x2' });
    });
  });
});
