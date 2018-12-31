import { createLocalVue, mount } from '@vue/test-utils';
import VueDatePicker from './VueDatePicker.vue';
import { i18n } from '../../plugins/i18n/i18n';

const localVue = createLocalVue();

describe('VueDatePicker.vue', () => {
  const defaultProps = {
    name: 'test',
    id: 'test',
  };

  test('renders component', () => {
    const wrapper = mount<any>(VueDatePicker, {
      localVue,
      i18n,
      propsData: defaultProps,
    });

    expect(wrapper.findAll(`.vueDatePicker`)).toHaveLength(1);
    expect(wrapper.findAll('input')).toHaveLength(1);
    expect(wrapper.vm.inputValue).toBe('');
  });

  test('renders component with selected date', () => {
    const wrapper = mount<any>(VueDatePicker, {
      localVue,
      i18n,
      propsData: defaultProps,
    });

    expect(wrapper.vm.inputValue).toBe('');

    wrapper.vm.$data.selectedDate = new Date();
    expect(wrapper.vm.inputValue).not.toBe('');
  });

  test('renders component with current date', () => {
    const wrapper = mount<any>(VueDatePicker, {
      localVue,
      i18n,
      propsData: {
        currentDate: new Date(),
        ...defaultProps,
      },
    });

    expect(wrapper.vm.inputValue).not.toBe('');
  });

  test('should emit change', () => {
    const wrapper = mount<any>(VueDatePicker, {
      localVue,
      i18n,
      propsData: defaultProps,
    });

    wrapper.vm.onChange();

    expect(wrapper.emitted('change')).toBeTruthy();
  });

  test('should open calendar on focus', () => {
    const wrapper = mount<any>(VueDatePicker, {
      localVue,
      i18n,
      propsData: defaultProps,
    });

    expect(wrapper.vm.show).toBeFalsy();

    wrapper.find('input').trigger('focus');
    expect(wrapper.vm.show).toBeTruthy();
  });

  test('should blur on focus', () => {
    const wrapper = mount<any>(VueDatePicker, {
      localVue,
      i18n,
      propsData: defaultProps,
    });

    const event: any = {
      currentTarget: {
        blur: jest.fn(),
      },
    };

    wrapper.vm.onFocus(event);
    expect(event.currentTarget.blur).toHaveBeenCalled();
  });
});
