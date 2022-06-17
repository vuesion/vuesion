import { describe, beforeEach, test, expect } from 'vitest';
import { render, RenderResult } from '@testing-library/vue';
import VuePagination from './VuePagination.vue';

describe('VuePagination.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VuePagination, {
      props: {
        pages: 10,
        selectedPage: 1,
        displayPages: 5,
      },
    });
  });

  test('should render component', async () => {
    const { getByTestId, queryAllByTestId, rerender } = harness;

    await rerender({ displayPages: 'sdflkjnbaksvfkasc89hq3fvcs d' });

    expect(queryAllByTestId('pagination-active-page')).toHaveLength(1);
    expect(queryAllByTestId('pagination-page')).toHaveLength(4);
    expect(getByTestId('pagination-prev').getAttribute('disabled')).toBe('true');
    expect(getByTestId('pagination-next').getAttribute('disabled')).toBe('false');
  });

  test('should render slim version of component', async () => {
    const { getByTestId, queryAllByTestId, rerender } = harness;

    await rerender({ slim: true });

    expect(queryAllByTestId('pagination-active-page')).toHaveLength(0);
    expect(queryAllByTestId('pagination-page')).toHaveLength(0);
    expect(getByTestId('pagination-prev').getAttribute('disabled')).toBe('true');
    expect(getByTestId('pagination-next').getAttribute('disabled')).toBe('false');
  });

  test('should have disabled next button when last page is reached', async () => {
    const { getByTestId, rerender } = harness;

    await rerender({ selectedPage: 5 });

    expect(getByTestId('pagination-prev').getAttribute('disabled')).toBe('false');
    expect(getByTestId('pagination-next').getAttribute('disabled')).toBe('false');

    await rerender({ selectedPage: 10 });

    expect(getByTestId('pagination-prev').getAttribute('disabled')).toBe('false');
    expect(getByTestId('pagination-next').getAttribute('disabled')).toBe('true');
  });

  test('should not disable buttons when infinite property is set', async () => {
    const { getByTestId, rerender } = harness;

    await rerender({ infinite: true });

    expect(getByTestId('pagination-prev').getAttribute('disabled')).toBe('false');
    expect(getByTestId('pagination-next').getAttribute('disabled')).toBe('false');

    await rerender({ selectedPage: 10 });

    expect(getByTestId('pagination-prev').getAttribute('disabled')).toBe('false');
    expect(getByTestId('pagination-next').getAttribute('disabled')).toBe('false');
  });
});
