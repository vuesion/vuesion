import { describe, beforeEach, test, expect } from 'vitest';
import { fireEvent, render, type RenderResult } from '@testing-library/vue';
import VuePagination from './VuePagination.vue';

describe('VuePagination.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VuePagination, {
      props: {
        numberOfRecords: 133,
        itemsPerPage: 5,
        selectedPage: 1,
        slim: false,
        buttonsOnly: false,
        buttonLook: 'primary',
        infinite: false,
        debounce: 0,
      },
    });
  });

  test('should render component in full mode', () => {
    const { getByTestId, queryAllByTestId, getByText } = harness;

    expect(queryAllByTestId('custom-page')).toHaveLength(1);
    expect(queryAllByTestId('custom-itemsPerPage')).toHaveLength(1);
    expect(getByTestId('pagination-prev')).toHaveAttribute('disabled');
    expect(getByTestId('pagination-next')).not.toHaveAttribute('disabled');
    getByText('133 common.Results');
    getByText('common.of 27');
  });

  test('should render component in slim mode', async () => {
    const { getByTestId, queryAllByTestId, queryAllByText, rerender } = harness;

    await rerender({ slim: true });

    expect(queryAllByTestId('custom-page')).toHaveLength(1);
    expect(queryAllByTestId('custom-itemsPerPage')).toHaveLength(0);
    expect(getByTestId('pagination-prev')).toHaveAttribute('disabled');
    expect(getByTestId('pagination-next')).not.toHaveAttribute('disabled');
    expect(queryAllByText('133 common.Results')).toHaveLength(0);
    expect(queryAllByText('common.of 27')).toHaveLength(1);
  });

  test('should render component in buttonsOnly mode', async () => {
    const { getByTestId, queryAllByTestId, queryAllByText, rerender } = harness;

    await rerender({ buttonsOnly: true });

    expect(queryAllByTestId('custom-page')).toHaveLength(0);
    expect(queryAllByTestId('custom-itemsPerPage')).toHaveLength(0);
    expect(getByTestId('pagination-prev')).toHaveAttribute('disabled');
    expect(getByTestId('pagination-next')).not.toHaveAttribute('disabled');
    expect(queryAllByText('133 common.Results')).toHaveLength(0);
    expect(queryAllByText('common.of 27')).toHaveLength(0);
  });

  test('should render component without disabled buttons when set infinite to true', async () => {
    const { getByTestId, queryAllByTestId, queryAllByText, rerender } = harness;

    await rerender({ buttonsOnly: true, infinite: true });

    expect(queryAllByTestId('custom-page')).toHaveLength(0);
    expect(queryAllByTestId('custom-itemsPerPage')).toHaveLength(0);
    expect(getByTestId('pagination-prev')).not.toHaveAttribute('disabled');
    expect(getByTestId('pagination-next')).not.toHaveAttribute('disabled');
    expect(queryAllByText('133 common.Results')).toHaveLength(0);
    expect(queryAllByText('common.of 27')).toHaveLength(0);
  });

  test('should render disable next button when page is last page', async () => {
    const { getByTestId, rerender } = harness;

    await rerender({ buttonsOnly: true, selectedPage: 27 });

    expect(getByTestId('pagination-prev')).not.toHaveAttribute('disabled');
    expect(getByTestId('pagination-next')).toHaveAttribute('disabled');
  });

  test('should update items per page', async () => {
    const { getByTestId, emitted } = harness;

    await fireEvent.click(getByTestId('custom-itemsPerPage'));
    await fireEvent.click(getByTestId('100-4'));

    expect(emitted<any>()['update:itemsPerPage'][0][0]).toEqual(100);
  });

  test('should update selected page with select', async () => {
    const { getByTestId, emitted } = harness;

    await fireEvent.click(getByTestId('custom-page'));
    await fireEvent.click(getByTestId('13-12'));

    expect(emitted<any>()['update:selectedPage'][0][0]).toEqual(13);
  });

  test('should update selected page with buttons', async () => {
    const { getByTestId, rerender, emitted } = harness;

    await rerender({ buttonsOnly: true, infinite: true });

    await fireEvent.click(getByTestId('pagination-prev'));
    expect(emitted<any>()['update:selectedPage'][0][0]).toEqual(27);

    await fireEvent.click(getByTestId('pagination-next'));
    expect(emitted<any>()['update:selectedPage'][1][0]).toEqual(2);
  });

  test('should use text box for large numbers of pages', async () => {
    const { getByText, getByLabelText, rerender, emitted } = harness;

    await rerender({ numberOfRecords: 50000000 });

    getByText('50000000 common.Results');
    getByText('common.of 10000000');

    await fireEvent.update(getByLabelText('common.SelectPage'), '1337');
    await fireEvent.blur(getByLabelText('common.SelectPage'));
    expect(emitted<any>()['update:selectedPage'][0][0]).toEqual(1337);
  });

  test('should jump from last to first page when infinite', async () => {
    const { getByTestId, rerender, emitted } = harness;

    await rerender({ infinite: true, numberOfRecords: 50, itemsPerPage: 10, selectedPage: 10 });
    await fireEvent.click(getByTestId('pagination-next'));

    expect(emitted<any>()['update:selectedPage'][0][0]).toEqual(1);
  });
});
