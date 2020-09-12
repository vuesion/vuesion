import Vue from 'vue';
import { render } from '@testing-library/vue';
import { triggerDocument } from '@/test/test-utils';
import VueModal from './VueModal.vue';

describe('VueModal.vue', () => {
  test('opens modal', async () => {
    const { getByText, updateProps } = render(VueModal, {
      slots: {
        default: '<p>TEST</p>',
      },
    });

    await updateProps({ show: true });
    getByText('TEST');
  });

  test('closes modal', async () => {
    const { queryByText, updateProps } = render(VueModal, {
      slots: {
        default: '<p>TEST</p>',
      },
      propsData: {
        show: true,
      },
    });

    await updateProps({ show: false });
    expect(queryByText('TEST')).toBe(null);
  });

  test('should close on outside click', async () => {
    const { queryByText, emitted } = render(VueModal, {
      slots: {
        default: '<p>TEST</p>',
      },
      propsData: {
        show: true,
      },
    });
    const paragraph = queryByText('TEST');

    await Vue.nextTick();

    triggerDocument.mousedown({ target: paragraph });
    expect(emitted().close).toBeFalsy();

    triggerDocument.mousedown({ target: null });
    expect(emitted().close).toBeTruthy();
  });

  test('should close on ESC press', async () => {
    const { emitted, updateProps } = render(VueModal, {
      propsData: { closeOnEscape: false, backdrop: false },
    });

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
