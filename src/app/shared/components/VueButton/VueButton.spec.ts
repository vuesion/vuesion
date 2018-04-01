import { mount, createLocalVue } from '@vue/test-utils';
import VueButton                 from './VueButton.vue';

const localVue = createLocalVue();

describe('VueButton.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueButton, { localVue });

    expect(wrapper.findAll(`.button`)).toHaveLength(1);
    expect(wrapper.findAll(`.active`)).toHaveLength(0);
  });

  test('should emit onClick event', () => {
    const wrapper = mount(VueButton, {
      localVue,
    });

    wrapper.find('button').trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });

  test('should disable button and not emit onClick event', () => {
    const wrapper = mount(VueButton, {
      localVue,
      propsData: {
        disabled: true,
      },
    });

    expect(wrapper.findAll(`.disabled`)).toHaveLength(1);

    wrapper.find('button').trigger('click');
    expect(wrapper.emitted().click).toBeFalsy();
  });

  test('should show loader and not emit onClick event', () => {
    const wrapper = mount(VueButton, {
      localVue,
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
      propsData: {
        primary: true,
      },
    });

    expect(wrapper.findAll(`.primary`)).toHaveLength(1);
  });

  test('should show accent color', () => {
    const wrapper = mount(VueButton, {
      localVue,
      propsData: {
        accent: true,
      },
    });

    expect(wrapper.findAll(`.accent`)).toHaveLength(1);
  });

  test('should show warn color', () => {
    const wrapper = mount(VueButton, {
      localVue,
      propsData: {
        warn: true,
      },
    });

    expect(wrapper.findAll(`.warn`)).toHaveLength(1);
  });

  test('should add pulse animation', () => {
    const wrapper = mount(VueButton, {
      localVue,
      propsData: {
        pulse: true,
      },
    });

    expect(wrapper.findAll(`.pulse`)).toHaveLength(1);
  });

  test('should add icon', () => {
    const wrapper = mount(VueButton, {
      localVue,
      propsData: {
        icon: 'user',
      },
    });

    expect(wrapper.findAll(`.fa-user`)).toHaveLength(1);
  });

});
