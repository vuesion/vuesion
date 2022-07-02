import { describe, beforeEach, test, expect } from 'vitest';
import { nextTick } from 'vue';
import { render, RenderResult } from '@testing-library/vue';
import VueModal from './VueModal.vue';
import { triggerWindow } from '@/test/test-utils';

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
    const { queryByText, getByTestId, emitted, rerender } = harness;

    await rerender({ show: true });

    const modal = getByTestId('modal');
    const paragraph = queryByText('TEST');

    await nextTick();

    triggerWindow.click({ target: paragraph, composedPath: () => [modal] });
    expect(emitted().close).toBeFalsy();

    triggerWindow.click({ target: null, composedPath: () => [] });
    expect(emitted().close).toBeTruthy();
  });

  test('should close on ESC press', async () => {
    const { emitted, rerender } = harness;

    await rerender({ closeOnEscape: false, backdrop: false });

    triggerWindow.keydown({ key: 'Enter' });
    expect(emitted().close).toBeFalsy();

    triggerWindow.keydown({ key: 'Escape' });
    expect(emitted().close).toBeFalsy();

    await rerender({ show: true });
    triggerWindow.keydown({ key: 'Escape' });
    expect(emitted().close).toBeFalsy();

    await rerender({ show: true, closeOnEscape: true });
    triggerWindow.keydown({ key: 'Escape' });
    expect(emitted().close).toBeTruthy();
  });
});
