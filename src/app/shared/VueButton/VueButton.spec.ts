import { mount, createLocalVue } from 'vue-test-utils';
import VueButton from './VueButton.vue';
import $style from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('VueButton.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueButton, { localVue, mocks: { $style } });

    expect(wrapper.findAll(`.${$style.button}`)).toHaveLength(1);
    expect(wrapper.findAll(`.${$style.active}`)).toHaveLength(0);
  });

  test('renders active button', () => {
    const wrapper = mount(VueButton, {
      localVue,
      mocks: { $style },
    });

    wrapper.setProps({ isActive: true });

    expect(wrapper.findAll(`.${$style.button}`)).toHaveLength(1);
    expect(wrapper.findAll(`.${$style.active}`)).toHaveLength(1);
  });

  test('should emit onClick event', () => {
    const wrapper = mount(VueButton, {
      localVue,
      mocks: { $style },
    });

    wrapper.find('button').trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });

});
