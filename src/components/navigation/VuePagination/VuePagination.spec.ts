import { render, RenderResult } from '@testing-library/vue';
import { i18n } from '@/test/i18n';
import VuePagination from './VuePagination.vue';

describe('VuePagination.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VuePagination, {
      i18n,
      props: {
        pages: 10,
        selectedPage: 1,
        displayPages: 5,
      },
    });
  });

  test('should render component', async () => {
    const { getByTestId, queryAllByTestId, updateProps } = harness;

    await updateProps({ displayPages: 'sdflkjnbaksvfkasc89hq3fvcs d' });

    expect(queryAllByTestId('pagination-active-page')).toHaveLength(1);
    expect(queryAllByTestId('pagination-page')).toHaveLength(4);
    expect(getByTestId('pagination-prev')).toHaveAttribute('disabled');
    expect(getByTestId('pagination-next')).not.toHaveAttribute('disabled');
  });

  test('should render slim version of component', async () => {
    const { getByTestId, queryAllByTestId, updateProps } = harness;

    await updateProps({ slim: true });

    expect(queryAllByTestId('pagination-active-page')).toHaveLength(0);
    expect(queryAllByTestId('pagination-page')).toHaveLength(0);
    expect(getByTestId('pagination-prev')).toHaveAttribute('disabled');
    expect(getByTestId('pagination-next')).not.toHaveAttribute('disabled');
  });

  test('should have disabled next button when last page is reached', async () => {
    const { getByTestId, updateProps } = harness;

    await updateProps({ selectedPage: 5 });

    expect(getByTestId('pagination-prev')).not.toHaveAttribute('disabled');
    expect(getByTestId('pagination-next')).not.toHaveAttribute('disabled');

    await updateProps({ selectedPage: 10 });

    expect(getByTestId('pagination-prev')).not.toHaveAttribute('disabled');
    expect(getByTestId('pagination-next')).toHaveAttribute('disabled');
  });

  test('should not disable buttons when infinite property is set', async () => {
    const { getByTestId, updateProps } = harness;

    await updateProps({ infinite: true });

    expect(getByTestId('pagination-prev')).not.toHaveAttribute('disabled');
    expect(getByTestId('pagination-next')).not.toHaveAttribute('disabled');

    await updateProps({ selectedPage: 10 });

    expect(getByTestId('pagination-prev')).not.toHaveAttribute('disabled');
    expect(getByTestId('pagination-next')).not.toHaveAttribute('disabled');
  });
});
