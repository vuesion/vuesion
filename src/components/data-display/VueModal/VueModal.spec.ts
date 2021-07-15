import Vue from 'vue';
import { render, RenderResult } from '@testing-library/vue';
import { triggerDocument } from '@/test/test-utils';
import VueModal from './VueModal.vue';

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
    const { queryAllByText, updateProps } = harness;

    await updateProps({ show: true });

    expect(queryAllByText('TEST')).toHaveLength(1);

    await updateProps({ show: false });

    expect(queryAllByText('TEST')).toHaveLength(0);
  });

  test('should close on outside click', async () => {
    const { queryByText, emitted, updateProps } = harness;

    await updateProps({ show: true });

    const paragraph = queryByText('TEST');

    await Vue.nextTick();

    triggerDocument.mousedown({ target: paragraph });
    expect(emitted().close).toBeFalsy();

    triggerDocument.mousedown({ target: null });
    expect(emitted().close).toBeTruthy();
  });

  test('should close on ESC press', async () => {
    const { emitted, updateProps } = harness;

    await updateProps({ closeOnEscape: false, backdrop: false });

    triggerDocument.keydown({ key: 'Enter' });
    expect(emitted().close).toBeFalsy();

    triggerDocument.keydown({ key: 'Escape' });
    expect(emitted().close).toBeFalsy();

    await updateProps({ show: true });
    triggerDocument.keydown({ key: 'Escape' });
    expect(emitted().close).toBeFalsy();

    await updateProps({ show: true, closeOnEscape: true });
    triggerDocument.keydown({ key: 'Escape' });
    expect(emitted().close).toBeTruthy();
  });
});
