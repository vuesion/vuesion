import { mount, createLocalVue } from '@vue/test-utils';
import VueGridItem               from './VueGridItem.vue';

const localVue = createLocalVue();

describe('VueGridItem.vue', () => {

  test('renders gridItem with flow layout', () => {
    const wrapper = mount(VueGridItem, { localVue });

    expect(wrapper.findAll(`.gridItem`)).toHaveLength(1);
  });

  test('renders gridItem 100%', () => {
    const wrapper = mount(VueGridItem, {
      localVue,
      propsData: {
        fill: true,
      },
    });

    expect(wrapper.findAll(`.gridItem`)).toHaveLength(1);
    expect(wrapper.findAll(`.fill`)).toHaveLength(1);
  });

});
