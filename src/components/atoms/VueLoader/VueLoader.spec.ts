import { createLocalVue, mount } from '@vue/test-utils';
import { brandColorVariations } from '../../prop-validators';
import VueLoader from './VueLoader.vue';

const localVue = createLocalVue();

describe('VueLoader.vue', () => {
  test('renders default loader', () => {
    const wrapper = mount(VueLoader, {
      localVue,
    });

    expect(wrapper.findAll(`.vueLoader`)).toHaveLength(1);
  });

  test('renders medium loader', () => {
    const wrapper = mount(VueLoader, {
      localVue,
      propsData: {
        size: '24',
      },
    });

    expect(wrapper.findAll(`.s24`)).toHaveLength(1);
  });

  test('renders large loader', () => {
    const wrapper = mount(VueLoader, {
      localVue,
      propsData: {
        size: '64',
      },
    });

    expect(wrapper.findAll(`.s64`)).toHaveLength(1);
  });

  test('renders color variations', () => {
    brandColorVariations.forEach((variation: string) => {
      const wrapper = mount(VueLoader, {
        localVue,
        propsData: {
          color: variation,
        },
      });
      const actual = wrapper.findAll(`.${variation}`);
      const expected = 1;
      expect(actual).toHaveLength(expected);
    });
  });
});
