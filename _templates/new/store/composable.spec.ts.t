---
to: "src/app/composables/actions/use-<%= h.inflection.dasherize(h.inflection.underscore(name)) %>-actions.spec.ts"
unless_exists: true
---
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { use<%= h.inflection.camelize(name) %>Actions } from './use-<%= h.inflection.dasherize(h.inflection.underscore(name)) %>-actions';

const fetchSpy = vi.fn().mockResolvedValue(undefined);
const fetchDetailsSpy = vi.fn().mockResolvedValue(undefined);
const createSpy = vi.fn().mockResolvedValue(undefined);
const updateSpy = vi.fn().mockResolvedValue(undefined);
const deleteSpy = vi.fn().mockResolvedValue(undefined);

vi.mock('@/store/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>', () => ({
  use<%= h.inflection.camelize(name) %>Store: () => ({
    getError: null,
    get<%= h.inflection.camelize(h.inflection.pluralize(name)) %>: [{ id: '1' }],
    get<%= h.inflection.camelize(name) %>Count: 1,
    getCurrent<%= h.inflection.camelize(name) %>: { id: '1' },
    fetch<%= h.inflection.camelize(h.inflection.pluralize(name)) %>: fetchSpy,
    fetch<%= h.inflection.camelize(name) %>Details: fetchDetailsSpy,
    create<%= h.inflection.camelize(name) %>: createSpy,
    update<%= h.inflection.camelize(name) %>: updateSpy,
    delete<%= h.inflection.camelize(name) %>: deleteSpy,
  }),
}));

describe('use<%= h.inflection.camelize(name) %>Actions', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('exposes computed getters from store', () => {
    const api = use<%= h.inflection.camelize(name) %>Actions();

    expect(api.<%= h.inflection.pluralize(h.inflection.camelize(name, true)) %>.value).toEqual([{ id: '1' }]);
    expect(api.<%= h.inflection.camelize(name, true) %>Count.value).toBe(1);
    expect(api.current<%= h.inflection.camelize(name) %>.value).toEqual({ id: '1' });
    expect(api.error.value).toBeNull();
  });

  it('fetch<%= h.inflection.camelize(h.inflection.pluralize(name)) %> toggles isReading and delegates to store', async () => {
    const api = use<%= h.inflection.camelize(name) %>Actions();
    const params = { page: 1, size: 10 } as any;
    const func = api.fetch<%= h.inflection.camelize(h.inflection.pluralize(name)) %>(params);

    expect(api.isReading.value).toBe(true);

    await func;

    expect(api.isReading.value).toBe(false);
    expect(fetchSpy).toHaveBeenCalledWith(params);
  });

  it('fetch<%= h.inflection.camelize(name) %>Details toggles isReading', async () => {
    const api = use<%= h.inflection.camelize(name) %>Actions();
    const func = api.fetch<%= h.inflection.camelize(name) %>Details('x1');

    expect(api.isReading.value).toBe(true);

    await func;

    expect(api.isReading.value).toBe(false);
    expect(fetchDetailsSpy).toHaveBeenCalledWith('x1');
  });

  it('create<%= h.inflection.camelize(name) %> toggles isCreating', async () => {
    const api = use<%= h.inflection.camelize(name) %>Actions();
    const data = { foo: 'bar' } as any;
    const func = api.create<%= h.inflection.camelize(name) %>(data);

    expect(api.isCreating.value).toBe(true);

    await func;

    expect(api.isCreating.value).toBe(false);
    expect(createSpy).toHaveBeenCalledWith(data);
  });

  it('update<%= h.inflection.camelize(name) %> toggles isUpdating', async () => {
    const api = use<%= h.inflection.camelize(name) %>Actions();
    const data = { foo: 'bar' } as any;
    const func = api.update<%= h.inflection.camelize(name) %>('id1', data);

    expect(api.isUpdating.value).toBe(true);

    await func;

    expect(api.isUpdating.value).toBe(false);
    expect(updateSpy).toHaveBeenCalledWith('id1', data);
  });

  it('delete<%= h.inflection.camelize(name) %> toggles isDeleting', async () => {
    const api = use<%= h.inflection.camelize(name) %>Actions();
    const func = api.delete<%= h.inflection.camelize(name) %>('id1');

    expect(api.isDeleting.value).toBe(true);

    await func;

    expect(api.isDeleting.value).toBe(false);
    expect(deleteSpy).toHaveBeenCalledWith('id1');
  });
});
