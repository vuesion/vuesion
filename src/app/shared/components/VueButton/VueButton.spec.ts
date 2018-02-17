import { mount, createLocalVue } from '@vue/test-utils';
import VueButton                 from './VueButton.vue';
import $style                    from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('VueButton.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueButton, { localVue, mocks: { $style } });

    expect(wrapper.findAll(`.${$style.button}`)).toHaveLength(1);
    expect(wrapper.findAll(`.${$style.active}`)).toHaveLength(0);
  });

  test('should emit onClick event', () => {
    const wrapper = mount(VueButton, {
      localVue,
      mocks: { $style },
    });

    wrapper.find('button').trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });

  test('should disable button and not emit onClick event', () => {
    const wrapper = mount(VueButton, {
      localVue,
      mocks:     { $style },
      propsData: {
        disabled: true,
      },
    });

    expect(wrapper.findAll(`.${$style.disabled}`)).toHaveLength(1);

    wrapper.find('button').trigger('click');
    expect(wrapper.emitted().click).toBeFalsy();
  });

  test('should show loader and not emit onClick event', () => {
    const wrapper = mount(VueButton, {
      localVue,
      mocks:     { $style },
      propsData: {
        loading: true,
      },
    });

    wrapper.find('button').trigger('click');
    expect(wrapper.emitted().click).toBeFalsy();
  });

  test('should show primary color', () => {
    const wrapper = mount(VueButton, {
      localVue,
      mocks:     { $style },
      propsData: {
        primary: true,
      },
    });

    expect(wrapper.findAll(`.${$style.primary}`)).toHaveLength(1);
  });

  test('should show accent color', () => {
    const wrapper = mount(VueButton, {
      localVue,
      mocks:     { $style },
      propsData: {
        accent: true,
      },
    });

    expect(wrapper.findAll(`.${$style.accent}`)).toHaveLength(1);
  });

  test('should show warn color', () => {
    const wrapper = mount(VueButton, {
      localVue,
      mocks:     { $style },
      propsData: {
        warn: true,
      },
    });

    expect(wrapper.findAll(`.${$style.warn}`)).toHaveLength(1);
  });

  test('should add pulse animation', () => {
    const wrapper = mount(VueButton, {
      localVue,
      mocks:     { $style },
      propsData: {
        pulse: true,
      },
    });

    expect(wrapper.findAll(`.${$style.pulse}`)).toHaveLength(1);
  });

});
