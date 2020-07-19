import { createLocalVue, mount } from '@vue/test-utils';
import { brandVariations } from '../../utils';
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
        size: 'md',
      },
    });

    expect(wrapper.findAll(`.md`)).toHaveLength(1);
  });

  test('renders large loader', () => {
    const wrapper = mount(VueLoader, {
      localVue,
      propsData: {
        size: 'lg',
      },
    });

    expect(wrapper.findAll(`.lg`)).toHaveLength(1);
  });

  test('renders color variations', () => {
    brandVariations.forEach((variation: string) => {
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
