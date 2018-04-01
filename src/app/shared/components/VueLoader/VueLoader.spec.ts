import { mount, createLocalVue } from '@vue/test-utils';
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

  test('renders accent loader', () => {
    const wrapper = mount(
      VueLoader,
      {
        localVue,
        propsData: {
          accent: true,
        },
      });

    expect(wrapper.findAll(`.accent`)).toHaveLength(1);
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

});
