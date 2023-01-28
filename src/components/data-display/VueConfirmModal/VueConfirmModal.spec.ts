import { describe, beforeEach, test, expect } from 'vitest';
import { fireEvent, render, RenderResult } from '@testing-library/vue';
import VueConfirmModal from './VueConfirmModal.vue';
import { triggerWindow } from '~/test/test-utils';

describe('VueConfirmModal.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueConfirmModal, {
      props: {
        show: true,
      },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('Are you sure you want to delete this item?');
    getByText('Yes');
    getByText('No');
  });

  test('Emits confirm event', async () => {
    const { getByText, emitted } = harness;

    await fireEvent.click(getByText('Yes'));

    expect(emitted().confirm).toBeTruthy();
  });

  test('Emits abort event', async () => {
    const { getByText, emitted } = harness;

    await fireEvent.click(getByText('No'));

    expect(emitted().abort).toBeTruthy();
  });

  test('Emits close event', () => {
    const { emitted } = harness;

    triggerWindow.click({ target: null, composedPath: () => [] });

    expect(emitted().close).toBeTruthy();
  });
});
