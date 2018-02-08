import { mount, createLocalVue } from '@vue/test-utils';
import VueDatePicker from './VueDatePicker.vue';
import $style from 'identity-obj-proxy';
import { getI18n } from '../../plugins/i18n/i18n';

const localVue = createLocalVue();

describe('VueDatePicker.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueDatePicker, {
      localVue,
      i18n: getI18n(),
      mocks: { $style },
    }) as any;

    expect(wrapper.findAll(`.${$style.vueDatePicker}`)).toHaveLength(1);
    expect(wrapper.findAll('input')).toHaveLength(1);
    expect(wrapper.vm.inputValue).toBe('');
  });

  test('renders component with selected date', () => {
    const wrapper = mount(VueDatePicker, {
      localVue,
      i18n: getI18n(),
      mocks: { $style },
    }) as any;

    expect(wrapper.vm.inputValue).toBe('');

    wrapper.vm.$data.selectedDate = new Date();
    wrapper.update();
    expect(wrapper.vm.inputValue).not.toBe('');
  });

  test('renders component with current date', () => {
    const wrapper = mount(VueDatePicker, {
      localVue,
      i18n: getI18n(),
      mocks: { $style },
      propsData: {
        currentDate: new Date(),
      },
    }) as any;

    wrapper.update();
    expect(wrapper.vm.inputValue).not.toBe('');
  });

  test('should emit change', () => {
    const wrapper = mount(VueDatePicker, {
      localVue,
      i18n: getI18n(),
      mocks: { $style },
    }) as any;

    wrapper.vm.onChange();

    expect(wrapper.emitted('change')).toBeTruthy();
  });

});
