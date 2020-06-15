import { render, fireEvent } from '@testing-library/vue';
import VueInput from '@/components/VueInput/VueInput.vue';

describe('VueInput.vue', () => {
  test('should render label and message', () => {
    const { getByText } = render<any>(VueInput, {
      propsData: {
        label: 'this is the label',
        message: 'this is the message',
        name: 'name',
        id: 'id',
      },
      mocks: {
        errors: null,
      },
    });

    getByText('this is the label');
    getByText('this is the message');
  });

  test('renders disabled component', () => {
    const { getByDisplayValue } = render<any>(VueInput, {
      propsData: {
        label: 'this is the label',
        value: 'this is the text box value',
        disabled: true,
        name: 'name',
        id: 'id',
      },
    });

    expect(getByDisplayValue('this is the text box value')).toBeDisabled();
  });

  test('renders readonly component', () => {
    const { getByDisplayValue } = render<any>(VueInput, {
      propsData: {
        label: 'this is the label',
        value: 'this is the text box value',
        readonly: true,
        name: 'name',
        id: 'id',
      },
    });

    expect(getByDisplayValue('this is the text box value')).toHaveAttribute('readonly');
  });

  test('should emit input', async () => {
    const { getByDisplayValue, emitted } = render<any>(VueInput, {
      propsData: {
        label: 'this is the label',
        value: 'this is the value',
        name: 'name',
        id: 'id',
      },
    });

    await fireEvent.input(getByDisplayValue('this is the value'), { target: { value: 'this is the new value' } });

    const actual = emitted().input[0][0];
    const expected = 'this is the new value';

    expect(actual).toBe(expected);
  });

  test('should display error state', () => {
    const { getByText } = render<any>(VueInput, {
      mocks: {
        errors: {
          first() {
            return true;
          },
        },
      },
      propsData: {
        label: 'this is the label',
        errorMessage: 'this is the error',
        name: 'name',
        id: 'id',
      },
    });

    getByText('this is the label');
    getByText('this is the error');
  });
});
