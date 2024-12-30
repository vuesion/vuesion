import { describe, test, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/vue';
import flushPromises from 'flush-promises';
import { defineRule } from 'vee-validate';
import { required, integer } from '@vee-validate/rules';
import VueTextarea from './VueTextarea.vue';
import { sleep } from '~~/test/test-utils';

defineRule('required', required);
defineRule('integer', integer);

describe('VueTextarea.vue', () => {
  test('should render label and description', () => {
    const { getByText } = render(VueTextarea, {
      props: {
        label: 'this is the label',
        description: 'this is the description',
        name: 'name',
        id: 'id',
      },
    });

    getByText('this is the label');
    getByText('this is the description');
  });

  test('renders disabled component', () => {
    const { getByDisplayValue } = render(VueTextarea, {
      props: {
        label: 'this is the label',
        modelValue: 'this is the text box value',
        disabled: true,
        name: 'name',
        id: 'id',
      },
    });

    expect(getByDisplayValue('this is the text box value')).toBeDisabled();
  });

  test('renders readonly component', () => {
    const { getByDisplayValue } = render(VueTextarea, {
      props: {
        label: 'this is the label',
        modelValue: 'this is the text box value',
        readonly: true,
        name: 'name',
        id: 'id',
      },
    });

    expect(getByDisplayValue('this is the text box value')).toHaveAttribute('readonly');
  });

  test('should emit update:modelValue', async () => {
    const { getByDisplayValue, emitted } = render(VueTextarea, {
      props: {
        label: 'this is the label',
        modelValue: 'this is the value',
        name: 'name',
        id: 'id',
      },
    });

    await fireEvent.update(getByDisplayValue('this is the value'), 'this is the new value');

    const actual = emitted<Array<any>>()['update:modelValue'][0][0];
    const expected = 'this is the new value';

    expect(actual).toBe(expected);
  });

  test('should emit debounced-input', async () => {
    const { getByDisplayValue, emitted } = render(VueTextarea, {
      props: {
        label: 'this is the label',
        modelValue: 'this is the value',
        name: 'name',
        id: 'id',
        debounce: 0,
      },
    });

    await fireEvent.update(getByDisplayValue('this is the value'), 'this is the new value');
    await sleep(10);

    const actual = emitted<Array<any>>()['debounced-input'][0][0];
    const expected = 'this is the new value';

    expect(actual).toBe(expected);
  });

  test('should display error state', async () => {
    const { getByText, getByLabelText } = render(VueTextarea, {
      props: {
        label: 'this is the label',
        description: 'this is the description',
        errorMessage: 'this is the error',
        name: 'test',
        id: 'test',
        validation: 'required|integer',
        modelValue: 'this is the value',
        required: true,
        hideLabel: true,
        hideDescription: true,
      },
    });

    getByText('this is the description');

    await fireEvent.update(getByLabelText('this is the label *'), 'foo bar');
    await fireEvent.blur(getByLabelText('this is the label *'));
    await flushPromises();

    getByText('this is the error');

    await fireEvent.update(getByLabelText('this is the label *'), '123');
  });

  test('should handle new modelValue', async () => {
    const { rerender, getByDisplayValue } = render(VueTextarea, {
      props: {
        label: 'this is the label',
        name: 'test',
        id: 'test',
        modelValue: 'initial value',
      },
    });

    getByDisplayValue('initial value');

    await rerender({ modelValue: 'new value' });

    getByDisplayValue('new value');
  });
});
