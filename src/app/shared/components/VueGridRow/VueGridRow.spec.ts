import { createLocalVue, mount } from '@vue/test-utils';
import VueGridRow                from './VueGridRow.vue';

const localVue = createLocalVue();

describe('VueGridRow.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueGridRow, { localVue });

    expect(wrapper.findAll(`.vueGridRow`)).toHaveLength(1);
  });

});
