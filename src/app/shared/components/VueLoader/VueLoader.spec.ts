import { createLocalVue, mount } from '@vue/test-utils';
import VueLoader                 from './VueLoader.vue';

const localVue = createLocalVue();

describe('VueLoader.vue', () => {

  test('renders default loader', () => {
    const wrapper = mount(
      VueLoader,
      {
        localVue,
      });

    expect(wrapper.findAll(`.loader`)).toHaveLength(1);
  });

  test('renders medium loader', () => {
    const wrapper = mount(
      VueLoader,
      {
        localVue,
        propsData: {
          medium: true,
        },
      });

    expect(wrapper.findAll(`.medium`)).toHaveLength(1);
  });

  test('renders large loader', () => {
    const wrapper = mount(
      VueLoader,
      {
        localVue,
        propsData: {
          large: true,
        },
      });

    expect(wrapper.findAll(`.large`)).toHaveLength(1);
  });

  test('renders primary loader', () => {
    const wrapper = mount(
      VueLoader,
      {
        localVue,
        propsData: {
          primary: true,
        },
      });

    expect(wrapper.findAll(`.primary`)).toHaveLength(1);
  });

  test('renders secondary loader', () => {
    const wrapper = mount(
      VueLoader,
      {
        localVue,
        propsData: {
          secondary: true,
        },
      });

    expect(wrapper.findAll(`.secondary`)).toHaveLength(1);
  });

  test('renders tertiary loader', () => {
    const wrapper = mount(
      VueLoader,
      {
        localVue,
        propsData: {
          tertiary: true,
        },
      });

    expect(wrapper.findAll(`.tertiary`)).toHaveLength(1);
  });

  test('renders danger loader', () => {
    const wrapper = mount(
      VueLoader,
      {
        localVue,
        propsData: {
          danger: true,
        },
      });

    expect(wrapper.findAll(`.danger`)).toHaveLength(1);
  });

  test('renders warn loader', () => {
    const wrapper = mount(
      VueLoader,
      {
        localVue,
        propsData: {
          warn: true,
        },
      });

    expect(wrapper.findAll(`.warn`)).toHaveLength(1);
  });

  test('renders success loader', () => {
    const wrapper = mount(
      VueLoader,
      {
        localVue,
        propsData: {
          success: true,
        },
      });

    expect(wrapper.findAll(`.success`)).toHaveLength(1);
  });

});
