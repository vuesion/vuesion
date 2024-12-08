import { describe, beforeEach, test, expect } from 'vitest';
import { fireEvent, render, type RenderResult } from '@testing-library/vue';
import { defineRule } from 'vee-validate';
import { required } from '@vee-validate/rules';
import VueToggle from './VueToggle.vue';
import { sleep } from '~/test/test-utils';

defineRule('required', required);

describe('VueToggle.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueToggle, {
      props: {
        name: 'foo',
        id: 'foo',
        label: 'Test',
        description: 'Description',
      },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('Test');
    getByText('Description');
  });

  test('should emit click event', async () => {
    const { getByText, emitted } = harness;

    await fireEvent.click(getByText('Test'));
    await sleep(1);

    expect(emitted().click).toBeTruthy();
  });

  test('should set checked attribute', async () => {
    const { rerender, getByText } = harness;
    const input: any = getByText('Test')?.parentElement?.parentElement?.querySelector('#foo');

    expect(input.checked).toBeFalsy();

    await rerender({ checked: true });

    expect(input.checked).toBeTruthy();
  });

  test('should disable checkbox', async () => {
    const { getByText, emitted, rerender } = harness;

    await rerender({ disabled: true });

    await fireEvent.click(getByText('Test'));

    expect(emitted().click).toBeFalsy();
  });

  test('should show error', async () => {
    const { html, rerender } = harness;

    await rerender({ required: true });

    await rerender({ modelValue: true });
    await rerender({ modelValue: false });
    await sleep(1);

    expect(html()).toMatch('error');
  });

  test('should hide label and description', async () => {
    const { getByText, rerender } = harness;

    await rerender({ hideLabel: true });

    expect(getByText('Test').classList.contains('sr-only')).toBeTruthy();
    expect(getByText('Description').classList.contains('sr-only')).toBeTruthy();
  });
});
