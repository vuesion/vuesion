import { createLocalVue, mount } from '@vue/test-utils';
import HomeSection from './HomeSection.vue';

const localVue = createLocalVue();

describe('HomeSection.vue', () => {
  test('renders component with alternative background', () => {
    const wrapper = mount<any>(HomeSection, {
      localVue,
      propsData: {
        alternative: true,
        image: 'foo',
      },
    });
    const actual = wrapper.findAll('.alternative');
    const expected = 1;

    expect(actual).toHaveLength(expected);
  });

  test('renders component in reversed order', () => {
    const wrapper = mount<any>(HomeSection, {
      localVue,
      propsData: {
        flip: true,
        image: 'foo',
      },
    });
    const actual = wrapper.findAll('.flip');
    const expected = 1;

    expect(actual).toHaveLength(expected);
  });
});
