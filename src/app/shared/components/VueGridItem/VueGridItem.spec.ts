import { mount, createLocalVue } from '@vue/test-utils';
import VueGridItem               from './VueGridItem.vue';
import $style                    from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('VueGridItem.vue', () => {

  test('renders gridItem with flow layout', () => {
    const wrapper = mount(VueGridItem, { localVue, mocks: { $style } });

    expect(wrapper.findAll(`.${$style.gridItem}`)).toHaveLength(1);
  });

  test('renders gritItem 100%', () => {
    const wrapper = mount(VueGridItem, {
      localVue,
      mocks:     { $style },
      propsData: {
        fill: true,
      },
    });

    expect(wrapper.findAll(`.${$style.gridItem}`)).toHaveLength(1);
    expect(wrapper.findAll(`.${$style.fill}`)).toHaveLength(1);
  });

});
