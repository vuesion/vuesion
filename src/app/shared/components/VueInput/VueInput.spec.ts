import { mount, createLocalVue } from '@vue/test-utils';
import VueInput from './VueInput.vue';
import $style from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('VueInput.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueInput, { localVue, mocks: { $style } });

    expect(wrapper.findAll(`.${$style.vueInput}`)).toHaveLength(1);
  });

  test('should emit change', () => {
    const wrapper = mount(VueInput, { localVue, mocks: { $style } }) as any;

    wrapper.vm.onChange('foo');
    expect(wrapper.emitted('change')).toBeTruthy();
  });

});
