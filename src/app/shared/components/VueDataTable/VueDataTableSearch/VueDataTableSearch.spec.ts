import { createLocalVue, mount } from '@vue/test-utils';
import VueDataTableSearch from './VueDataTableSearch.vue';

const localVue = createLocalVue();

describe('VueDataTableSearch.vue', () => {
  test('renders component', () => {
    const wrapper = mount(VueDataTableSearch, {
      localVue,
    });

    expect(wrapper.isVueInstance()).toBe(true);
  });
});
