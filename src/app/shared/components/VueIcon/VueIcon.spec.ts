import { createLocalVue, mount } from '@vue/test-utils';
import VueIcon                   from './VueIcon.vue';

const localVue = createLocalVue();

describe('VueIcon.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueIcon, { localVue });

    expect(wrapper.contains('i')).toBe(true);
  });

});
