import { describe, test, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/vue';
import { defineRule } from 'vee-validate';
import { required, email } from '@vee-validate/rules';
import flushPromises from 'flush-promises';
import VueInput from './VueInput.vue';
import VueCollapse from '~/components/behavior/VueCollapse/VueCollapse.vue';
import { sleep } from '~/test/test-utils';

defineRule('required', required);
defineRule('email', email);

describe('VueInput.vue', () => {
  test('should render label and description', () => {
    const { getByText } = render(VueInput, {
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

  test('should hide label and description', () => {
    const { getByText } = render(VueInput, {
      props: {
        label: 'this is the label',
        description: 'this is the description',
        name: 'name',
        id: 'id',
        hideLabel: true,
        hideDescription: true,
      },
    });

    expect(getByText('this is the label').classList.contains('sr-only')).toBeTruthy();
    expect(getByText('this is the description').classList.contains('sr-only')).toBeTruthy();
  });

  test('renders disabled component', () => {
    const { getByDisplayValue } = render(VueInput, {
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
    const { getByDisplayValue } = render(VueInput, {
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
    const { getByDisplayValue, emitted } = render(VueInput, {
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
    const { getByDisplayValue, emitted } = render(VueInput, {
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
    const { getByText, getByLabelText } = render(VueInput, {
      props: {
        label: 'this is the label',
        errorMessage: 'this is the error',
        description: 'this is the description',
        name: 'test',
        id: 'test',
        validation: 'email',
        modelValue: 'this is the value',
      },
    });

    getByText('this is the description');

    await fireEvent.update(getByLabelText('this is the label'), 'foo bar');
    await fireEvent.blur(getByLabelText('this is the label'));
    await flushPromises();

    getByText('this is the error');

    await fireEvent.update(getByLabelText('this is the label'), 'example@example.com');
  });

  test('should handle new modelValue', async () => {
    const { rerender, getByDisplayValue } = render(VueInput, {
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

  test('should emit leading-icon-click event', async () => {
    const { getByTestId, emitted } = render(VueInput, {
      props: {
        label: 'this is the label',
        description: 'this is the description',
        name: 'name',
        id: 'id',
        required: true,
        leadingIcon: 'email',
      },
    });

    await fireEvent.click(getByTestId('id-leading-icon'));

    expect(emitted()['leading-icon-click']).toBeTruthy();
  });

  test('should emit trailing-icon-click event', async () => {
    const { getByTestId, emitted } = render(VueInput, {
      props: {
        label: 'this is the label',
        description: 'this is the description',
        name: 'name',
        id: 'id',
        required: true,
        trailingIcon: 'email',
      },
    });

    await fireEvent.click(getByTestId('id-trailing-icon'));

    expect(emitted()['trailing-icon-click']).toBeTruthy();
  });

  test('should autofocus input element', () => {
    const entry = {
      target: {
        focus: vi.fn(),
      },
    };

    (global as any).IntersectionObserver = class {
      constructor(callback: any) {
        // eslint-disable-next-line n/no-callback-literal
        callback([entry]);
      }

      observe() {
        return false;
      }
    };

    render(VueInput, {
      props: {
        label: 'this is the label',
        name: 'test',
        id: 'test',
        modelValue: 'this is the value',
        autofocus: true,
      },
    });

    expect(entry.target.focus).toHaveBeenCalled();
  });

  test('should display collapse with menu', () => {
    const { queryAllByText } = render(VueInput, {
      global: {
        stubs: {
          VueCollapse,
        },
      },
      props: {
        label: 'this is the label',
        name: 'test',
        id: 'test',
        modelValue: 'this is the value',
        autofocus: true,
      },
      slots: {
        menu: `<vue-collapse :show="false"><span>MENU</span></vue-collapse>`,
      },
    });

    expect(queryAllByText('MENU')).toHaveLength(0);

    const { queryAllByText: queryAllByText2 } = render(VueInput, {
      global: {
        stubs: {
          VueCollapse,
        },
      },
      props: {
        label: 'this is the label',
        name: 'test',
        id: 'test',
        modelValue: 'this is the value',
        autofocus: true,
      },
      slots: {
        menu: `<vue-collapse :show="true"><span>MENU</span></vue-collapse>`,
      },
    });

    expect(queryAllByText2('MENU')).toHaveLength(1);
  });
});
