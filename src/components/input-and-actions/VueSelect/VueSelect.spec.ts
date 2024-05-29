import { describe, test, expect } from 'vitest';
import flushPromises from 'flush-promises';
import { fireEvent, render, type RenderResult } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { defineRule } from 'vee-validate';
import { required } from '@vee-validate/rules';
import VueSelect from './VueSelect.vue';
import { sleep, triggerWindow } from '~/test/test-utils';
import type { IItem } from '~/interfaces/IItem';

defineRule('required', required);

describe('VueSelect.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueSelect, {
      props: {
        id: 'select',
        name: 'select',
        label: 'Select-Label',
        placeholder: 'Placeholder',
        items: [
          { label: 'Value 1', value: 'Value 1', description: 'Description 1' },
          { label: 'Value 2', value: 'Value 2', description: 'Description 2' },
          { label: 'Value 3', value: 'Value 3', description: 'Description 3' },
          { label: 'Value 4', value: 'Value 4', description: 'Description 4' },
        ],
        duration: 0,
        required: true,
        validation: 'required',
      },
    });
  });

  test('renders component', () => {
    const { getByText, queryAllByText } = harness;

    getByText('Select-Label');
    expect(queryAllByText('Placeholder')).toHaveLength(2);
  });

  test('should emit update:modelValue event of the native select', async () => {
    const { getByTestId, emitted } = harness;

    await userEvent.selectOptions(getByTestId('native-select'), ['Value 2']);

    expect(emitted()['update:modelValue']).toEqual([
      [
        {
          label: 'Value 2',
          value: 'Value 2',
        },
      ],
    ]);
  });

  test('should not emit update:modelValue event of the native select is disabled', async () => {
    const { getByTestId, rerender, emitted } = harness;

    await rerender({ disabled: true });
    await userEvent.selectOptions(getByTestId('native-select'), ['Value 2']);

    expect(emitted()['update:modelValue']).toBeFalsy();
  });

  test('should emit update:modelValue event of the custom select', async () => {
    const { getByTestId, emitted } = harness;

    await fireEvent.click(getByTestId('custom-select'));
    await fireEvent.click(getByTestId('Value 2-1'));

    expect(emitted()['update:modelValue']).toEqual([
      [
        {
          description: 'Description 2',
          label: 'Value 2',
          trailingIcon: null,
          value: 'Value 2',
        },
      ],
    ]);
  });

  test('should not emit update:modelValue event of the custom select is disabled', async () => {
    const { getByTestId, queryAllByTestId, rerender } = harness;

    await rerender({ disabled: true });
    await fireEvent.click(getByTestId('custom-select'));

    expect(queryAllByTestId('Value 2-1')).toHaveLength(0);
  });

  test('should open and close menu via keyboard', async () => {
    const { getByText, queryAllByText } = harness;
    const select = getByText('Select-Label').parentElement as HTMLElement;

    await fireEvent.keyDown(select, { key: 'Tab', code: 'Tab' });
    await fireEvent.keyDown(select, { key: 'ShiftLeft', code: 'ShiftLeft' });
    await fireEvent.keyDown(select, { key: 'ShiftRight', code: 'ShiftRight' });

    expect(queryAllByText('Value 1')).toHaveLength(1);

    await fireEvent.keyDown(select, { key: 'Enter', code: 'Enter' });

    expect(queryAllByText('Value 1')).toHaveLength(2);

    await fireEvent.keyDown(select, { key: 'Escape', code: 'Escape' });

    expect(queryAllByText('Value 1')).toHaveLength(1);
  });

  test('should open menu on toggle icon click', async () => {
    const { getByTestId, queryAllByText } = harness;
    const toggle = getByTestId('toggle-select');

    expect(queryAllByText('Value 1')).toHaveLength(1);

    await fireEvent.click(toggle);

    expect(queryAllByText('Value 1')).toHaveLength(2);

    await fireEvent.click(toggle);

    expect(queryAllByText('Value 1')).toHaveLength(1);
  });

  test('should open menu and close it via outside click', async () => {
    const { getByText, queryAllByText } = harness;
    const select = getByText('Select-Label').parentElement as HTMLElement;

    await fireEvent.keyDown(select, { key: 'Enter', code: 'Enter' });

    expect(queryAllByText('Value 1')).toHaveLength(2);

    triggerWindow.click({ target: null, composedPath: () => [] });

    await sleep(10);

    expect(queryAllByText('Value 1')).toHaveLength(1);
  });

  test('should support string as input value', async () => {
    const { getByText, getByTestId, rerender } = harness;

    await rerender({ value: 'Value 1' });

    const select = getByText('Select-Label').parentElement as HTMLElement;

    await fireEvent.keyDown(select, { key: 'Enter', code: 'Enter' });

    expect(getByTestId('Value 1-0').innerHTML).toMatch('Value 1');
  });

  test('should support IItem as input value', async () => {
    const { getByText, getByTestId, rerender } = harness;

    await rerender({ value: { label: 'Value 1', value: 'value-1' } });

    const select = getByText('Select-Label').parentElement as HTMLElement;

    await fireEvent.keyDown(select, { key: 'Enter', code: 'Enter' });

    expect(getByTestId('Value 1-0').innerHTML).toMatch('Value 1');
  });

  test('renders component with different menu alignment', async () => {
    const { getByText, rerender, html } = harness;
    const select = getByText('Select-Label').parentElement as HTMLElement;

    await rerender({ alignMenu: 'right', alignYMenu: 'top' });
    await fireEvent.keyDown(select, { key: 'Enter', code: 'Enter' });

    const markup = html();

    expect(markup).toMatch('right');
    expect(markup).toMatch('top');
  });

  test('custom select should support multi-select', async () => {
    const { getByTestId, rerender, emitted } = harness;

    await rerender({
      multiSelect: true,
      modelValue: [{ label: 'Value 1', value: 'Value 1', description: 'Description 1' }],
    });
    await fireEvent.click(getByTestId('custom-select'));
    await fireEvent.click(getByTestId('Value 2-1'));

    expect(emitted<Array<IItem>>()['update:modelValue'][0][0]).toEqual([
      {
        description: 'Description 1',
        label: 'Value 1',
        value: 'Value 1',
      },
      {
        description: 'Description 2',
        label: 'Value 2',
        value: 'Value 2',
      },
    ]);

    await fireEvent.click(getByTestId('Value 1-0'));

    expect(emitted<Array<IItem>>()['update:modelValue'][1][0]).toEqual([]);
  });

  test('should show validation error', async () => {
    const { getByText, getByTestId, rerender } = harness;

    await rerender({
      description: 'description',
      errorMessage: 'error',
      items: [
        { label: 'nothing', value: '' },
        { label: 'Value 1', value: 'Value 1', description: 'Description 1' },
        { label: 'Value 2', value: 'Value 2', description: 'Description 2' },
      ],
    });

    getByText('description');

    await fireEvent.click(getByTestId('custom-select'));
    await fireEvent.click(getByTestId('-0'));
    await flushPromises();

    getByText('error');
  });

  test('renders component without label and description', async () => {
    const { getByText, rerender } = harness;

    await rerender({
      label: 'label',
      description: 'description',
      hideLabel: true,
      hideDescription: true,
    });

    expect(getByText('label').classList.contains('sr-only'));
    expect(getByText('description').classList.contains('sr-only'));
  });

  test('should display badge for multiple selections', async () => {
    const { getByTestId, getByText, rerender } = harness;

    await rerender({
      multiSelect: true,
      modelValue: [
        { label: 'Value 1', value: 'Value 1', description: 'Description 1' },
        { label: 'Value 2', value: 'Value 2', description: 'Description 2' },
      ],
    });

    getByText('+1');

    await fireEvent.click(getByTestId('custom-select'));
    await fireEvent.click(getByTestId('Value 2-1'));

    getByText('+1');

    triggerWindow.click({ target: null, composedPath: () => [] });
  });
});
