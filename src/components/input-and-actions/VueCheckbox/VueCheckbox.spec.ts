import { describe, beforeEach, test, expect } from 'vitest';
import { fireEvent, render, RenderResult } from '@testing-library/vue';
import { defineRule } from 'vee-validate';
import { required } from '@vee-validate/rules';
import VueCheckbox from './VueCheckbox.vue';
import { sleep } from '~/test/test-utils';

defineRule('required', required);

describe('VueCheckbox.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueCheckbox, {
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
    const input: any = getByText('Test').parentElement.querySelector('#foo');

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
    const { getByTestId, html, rerender } = harness;

    await rerender({ required: true });

    const input = getByTestId<HTMLInputElement>('checkbox-input');

    await fireEvent.click(input);
    await fireEvent.click(input);
    await sleep(1);

    expect(html()).toMatch('error');
  });
});
