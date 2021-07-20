import { fireEvent, render, RenderResult } from '@testing-library/vue';
import { addToast } from '@/components/utils';
import { sleep } from '@/test/test-utils';
import VueToast from './VueToast.vue';

describe('VueToast.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueToast);
  });

  test('displays toast for a user specified time (100ms)', async () => {
    const { queryAllByText } = harness;

    addToast({ title: 'info', text: 'this is a test', displayTimeInMs: 100 });
    await sleep(10);

    expect(queryAllByText('info')).toHaveLength(1);
    expect(queryAllByText('this is a test')).toHaveLength(1);

    await sleep(150);

    expect(queryAllByText('info')).toHaveLength(0);
    expect(queryAllByText('this is a test')).toHaveLength(0);
  });

  test('displays toast for until user clicks close icon', async () => {
    const { queryAllByText, getByTestId } = harness;

    addToast({ title: 'info', text: 'this is a test' });
    await sleep(50);

    expect(queryAllByText('info')).toHaveLength(1);
    expect(queryAllByText('this is a test')).toHaveLength(1);

    await fireEvent.click(getByTestId('toast-close-button'));

    expect(queryAllByText('info')).toHaveLength(0);
    expect(queryAllByText('this is a test')).toHaveLength(0);
  });
});
