import { beforeEach, describe, expect, it, vi } from 'vitest';
import { nextTick } from 'vue';
import { usePagination } from './use-pagination';

describe('usePagination', () => {
  let cb: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    cb = vi.fn().mockResolvedValue(undefined);
  });

  it('initializes with defaults', () => {
    const { selectedPage, itemsPerPage } = usePagination(cb, 25);
    expect(selectedPage.value).toBe(1);
    expect(itemsPerPage.value).toBe(25);
  });

  it('onSelectedPageChange updates page and calls cb once', async () => {
    const { selectedPage, onSelectedPageChange } = usePagination(cb, 10);

    await onSelectedPageChange(3);
    await nextTick();

    expect(selectedPage.value).toBe(3);
    expect(cb).toHaveBeenCalledTimes(1);
  });

  it('onItemsPerPageChange resets page to 1, updates amount and calls cb once', async () => {
    const { selectedPage, itemsPerPage, onSelectedPageChange, onItemsPerPageChange } = usePagination(cb, 5);

    await onSelectedPageChange(4);
    await onItemsPerPageChange(50);
    await nextTick();

    expect(itemsPerPage.value).toBe(50);
    expect(selectedPage.value).toBe(1);
    expect(cb).toHaveBeenCalledTimes(2);
  });

  it('awaits the callback (propagates promise)', async () => {
    const slow = vi.fn().mockImplementation(() => new Promise<void>((resolve) => setTimeout(resolve, 0)));
    const { onSelectedPageChange } = usePagination(slow, 10);

    await onSelectedPageChange(2);
    expect(slow).toHaveBeenCalledTimes(1);
  });
});
