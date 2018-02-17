import { mount, createLocalVue } from '@vue/test-utils';
import VueLoader                 from './VueLoader.vue';
import $style                    from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('VueLoader.vue', () => {

  test('renders default loader', () => {
    const wrapper = mount(
      VueLoader,
      {
        localVue,
        mocks: { $style },
      });

    expect(wrapper.findAll(`.${$style.loader}`)).toHaveLength(1);
  });

  test('renders medium loader', () => {
    const wrapper = mount(
      VueLoader,
      {
        localVue,
        mocks:     { $style },
        propsData: {
          medium: true,
        },
      });

    expect(wrapper.findAll(`.${$style.medium}`)).toHaveLength(1);
  });

  test('renders large loader', () => {
    const wrapper = mount(
      VueLoader,
      {
        localVue,
        mocks:     { $style },
        propsData: {
          large: true,
        },
      });

    expect(wrapper.findAll(`.${$style.large}`)).toHaveLength(1);
  });

  test('renders primary loader', () => {
    const wrapper = mount(
      VueLoader,
      {
        localVue,
        mocks:     { $style },
        propsData: {
          primary: true,
        },
      });

    expect(wrapper.findAll(`.${$style.primary}`)).toHaveLength(1);
  });

  test('renders accent loader', () => {
    const wrapper = mount(
      VueLoader,
      {
        localVue,
        mocks:     { $style },
        propsData: {
          accent: true,
        },
      });

    expect(wrapper.findAll(`.${$style.accent}`)).toHaveLength(1);
  });

  test('renders warn loader', () => {
    const wrapper = mount(
      VueLoader,
      {
        localVue,
        mocks:     { $style },
        propsData: {
          warn: true,
        },
      });

    expect(wrapper.findAll(`.${$style.warn}`)).toHaveLength(1);
  });

});
