import { createLocalVue, mount } from '@vue/test-utils';
import VueBadge from './VueBadge.vue';
import { brandVariations } from '@components/utils';

const localVue = createLocalVue();

describe('VueBadge.vue', () => {
  test('renders component', () => {
    const wrapper = mount(VueBadge, {
      localVue,
      slots: {
        default: 'VueBadge',
      },
    });

    expect(wrapper.find('span').text()).toBe('VueBadge');
  });

  test('renders color variations', () => {
    brandVariations.forEach((variation: string) => {
      const wrapper = mount(VueBadge, {
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

  test('renders outlined', () => {
    const wrapper = mount(VueBadge, {
      localVue,
      propsData: {
        outlined: true,
      },
    });

    expect(wrapper.findAll('.outlined')).toHaveLength(1);
  });
});
