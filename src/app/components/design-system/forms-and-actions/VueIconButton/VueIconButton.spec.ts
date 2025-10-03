import { beforeEach, describe, expect, test } from 'vitest';
import { fireEvent, render, type RenderResult } from '@testing-library/vue';
import VueIconButton from './VueIconButton.vue';
import { Default } from './VueIconButton.stories';

describe('VueIconButton.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueIconButton, {
      props: { ...Default.args },
    });
  });

  test('renders component', () => {
    const { getByLabelText } = harness;

    getByLabelText('Label');
  });

  test('emits click event', async () => {
    const { getByLabelText, emitted } = harness;

    await fireEvent.click(getByLabelText('Label'));

    expect(emitted<any>().click).toBeTruthy();
  });
});
