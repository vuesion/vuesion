import { render, fireEvent } from '@testing-library/vue';
import flushPromises from 'flush-promises';
import { sleep } from '@/test/test-utils';
import VueInput from './VueInput.vue';

describe('VueInput.vue', () => {
  test('should render label and description', () => {
    const { getByText } = render(VueInput, {
      propsData: {
        label: 'this is the label',
        description: 'this is the description',
        name: 'name',
        id: 'id',
      },
      mocks: {
        errors: null,
      },
    });

    getByText('this is the label');
    getByText('this is the description');
  });

  test('renders disabled component', () => {
    const { getByDisplayValue } = render(VueInput, {
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
    const { getByDisplayValue } = render(VueInput, {
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
    const { getByDisplayValue, emitted } = render(VueInput, {
      propsData: {
        label: 'this is the label',
        value: 'this is the value',
        name: 'name',
        id: 'id',
      },
    });

    await fireEvent.update(getByDisplayValue('this is the value'), 'this is the new value');

    const actual = emitted().input[0][0];
    const expected = 'this is the new value';

    expect(actual).toBe(expected);
  });

  test('should emit debounced-input', async () => {
    const { getByDisplayValue, emitted } = render(VueInput, {
      propsData: {
        label: 'this is the label',
        value: 'this is the value',
        name: 'name',
        id: 'id',
        debounce: 0,
      },
    });

    await fireEvent.update(getByDisplayValue('this is the value'), 'this is the new value');
    await sleep(10);

    const actual = emitted()['debounced-input'][0][0];
    const expected = 'this is the new value';

    expect(actual).toBe(expected);
  });

  test('should display error state', async () => {
    const { getByText, getByLabelText } = render(VueInput, {
      propsData: {
        label: 'this is the label',
        errorMessage: 'this is the error',
        name: 'test',
        id: 'test',
        validation: 'required|integer',
        value: 'this is the value',
      },
    });

    await fireEvent.update(getByLabelText('this is the label'), 'foo bar');
    await fireEvent.blur(getByLabelText('this is the label'));
    await flushPromises();

    getByText('this is the label');
    getByText('this is the error');
  });

  test('should autofocus input element', () => {
    const entry = {
      target: {
        focus: jest.fn(),
      },
    };

    (global as any).IntersectionObserver = class {
      constructor(callback: any) {
        callback([entry]);
      }

      observe() {
        return false;
      }
    };

    render(VueInput, {
      propsData: {
        label: 'this is the label',
        name: 'test',
        id: 'test',
        value: 'this is the value',
        autofocus: true,
      },
    });

    expect(entry.target.focus).toHaveBeenCalled();
  });

  test('should not autofocus input element', () => {
    const entry = {
      target: {
        focus: jest.fn(),
      },
    };

    (global as any).IntersectionObserver = class {
      constructor(callback: any) {
        callback([entry]);
      }

      observe() {
        return false;
      }
    };

    render(VueInput, {
      propsData: {
        label: 'this is the label',
        name: 'test',
        id: 'test',
        value: 'this is the value',
        autofocus: false,
      },
    });

    expect(entry.target.focus).not.toHaveBeenCalled();
  });
});
