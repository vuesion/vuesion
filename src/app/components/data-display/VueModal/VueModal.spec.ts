import { describe, beforeEach, test, expect } from 'vitest';
import { nextTick } from 'vue';
import { render, type RenderResult } from '@testing-library/vue';
import VueModal from './VueModal.vue';
import { sleep, triggerWindow } from '~~/test/test-utils';

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
    const { emitted, rerender } = harness;

    await rerender({ show: true });

    await nextTick();

    const target = document.createElement('span');
    triggerWindow.click({ target, composedPath: () => [] });
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

  test('should prevent the body from scrolling', async () => {
    const { rerender } = harness;

    await rerender({ show: true, disablePageScroll: true });
    await sleep(1);

    expect(document.body.style.overflow).toBe('hidden');
  });
});
