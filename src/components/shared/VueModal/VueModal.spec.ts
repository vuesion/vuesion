import Vue from 'vue';
import { render } from '@testing-library/vue';
import VueModal from './VueModal.vue';
import { triggerDocument } from '@/components/testing/test-utils';

describe('VueModal.vue', () => {
  test('renders slot', async () => {
    const { queryByText, getByText, updateProps } = render<any>(VueModal as any, {
      slots: {
        default: '<p>TEST</p>',
      },
    });

    await updateProps({ show: true });
    getByText('TEST');

    await updateProps({ show: false });
    expect(queryByText('TEST')).toBe(null);
  });

  test('should close on outside click', async () => {
    const { queryByText, emitted } = render<any>(VueModal as any, {
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
    const { emitted, updateProps } = render<any>(VueModal as any, {
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
