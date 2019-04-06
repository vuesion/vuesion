import { createLocalVue, mount } from '@vue/test-utils';
import VueLoader from './VueLoader.vue';
import { brandVariations } from '@components/utils';

const localVue = createLocalVue();

describe('VueLoader.vue', () => {
  test('renders default loader', () => {
    const wrapper = mount(VueLoader, {
      localVue,
    });

    expect(wrapper.findAll(`.loader`)).toHaveLength(1);
  });

  test('renders medium loader', () => {
    const wrapper = mount(VueLoader, {
      localVue,
      propsData: {
        medium: true,
      },
    });

    expect(wrapper.findAll(`.medium`)).toHaveLength(1);
  });

  test('renders large loader', () => {
    const wrapper = mount(VueLoader, {
      localVue,
      propsData: {
        large: true,
      },
    });

    expect(wrapper.findAll(`.large`)).toHaveLength(1);
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
