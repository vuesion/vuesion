import { describe, beforeEach, test, expect } from 'vitest';
import { nextTick } from 'vue';
import { fireEvent, render, RenderResult } from '@testing-library/vue';
import VueModal from './VueModal.vue';
import { sleep } from '~/test/test-utils';

describe('VueModal.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueModal, {
      slots: {
        default: '<p>TEST</p>',
      },
    });
  });

  test('opens and closes modal', async () => {
    const { queryAllByText, rerender } = harness;

    await rerender({ show: true });

    expect(queryAllByText('TEST')).toHaveLength(1);

    await rerender({ show: false });

    expect(queryAllByText('TEST')).toHaveLength(0);
  });

  test('should close on outside click', async () => {
    const { getByText, getByTestId, emitted, rerender } = harness;

    await rerender({ show: true });

    const modal = getByTestId('modal');
    const paragraph = getByText('TEST');

    await nextTick();

    await fireEvent.click(paragraph);
    expect(emitted().close).toBeFalsy();

    await fireEvent.click(modal);
    expect(emitted().close).toBeTruthy();
  });

  test('should prevent the body from scrolling', async () => {
    const { rerender } = harness;

    await rerender({ show: true, disablePageScroll: true });
    await sleep(1);

    expect(document.body.style.overflow).toBe('hidden');
  });
});
