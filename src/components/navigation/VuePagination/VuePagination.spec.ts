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
    expect(getByTestId('pagination-prev')).toHaveAttribute('disabled');
    expect(getByTestId('pagination-next')).not.toHaveAttribute('disabled');
  });

  test('should render slim version of component', async () => {
    const { getByTestId, queryAllByTestId, rerender } = harness;

    await rerender({ slim: true });

    expect(queryAllByTestId('pagination-active-page')).toHaveLength(0);
    expect(queryAllByTestId('pagination-page')).toHaveLength(0);
    expect(getByTestId('pagination-prev')).toHaveAttribute('disabled');
    expect(getByTestId('pagination-next')).not.toHaveAttribute('disabled');
  });

  test('should have disabled next button when last page is reached', async () => {
    const { getByTestId, rerender } = harness;

    await rerender({ selectedPage: 5 });

    expect(getByTestId('pagination-prev')).not.toHaveAttribute('disabled');
    expect(getByTestId('pagination-next')).not.toHaveAttribute('disabled');

    await rerender({ selectedPage: 10 });

    expect(getByTestId('pagination-prev')).not.toHaveAttribute('disabled');
    expect(getByTestId('pagination-next')).toHaveAttribute('disabled');
  });

  test('should not disable buttons when infinite property is set', async () => {
    const { getByTestId, rerender } = harness;

    await rerender({ infinite: true });

    expect(getByTestId('pagination-prev')).not.toHaveAttribute('disabled');
    expect(getByTestId('pagination-next')).not.toHaveAttribute('disabled');

    await rerender({ selectedPage: 10 });

    expect(getByTestId('pagination-prev')).not.toHaveAttribute('disabled');
    expect(getByTestId('pagination-next')).not.toHaveAttribute('disabled');
  });
});
