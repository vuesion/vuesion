import { describe, beforeEach, test, expect } from 'vitest';
import { fireEvent, render, type RenderResult } from '@testing-library/vue';
import VueToast from './VueToast.vue';
import { addToast } from '~/app/components/utils';
import { sleep } from '~/test/test-utils';

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

    addToast({ title: 'warning', text: 'this is a test', type: 'success' });
    await sleep(50);

    expect(queryAllByText('warning')).toHaveLength(1);
    expect(queryAllByText('this is a test')).toHaveLength(1);

    await fireEvent.click(getByTestId('toast-close-button'));

    expect(queryAllByText('info')).toHaveLength(0);
    expect(queryAllByText('this is a test')).toHaveLength(0);
  });
});
