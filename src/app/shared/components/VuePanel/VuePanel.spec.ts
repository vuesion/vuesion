import { mount, createLocalVue } from '@vue/test-utils';
import VuePanel                  from './VuePanel.vue';

const localVue = createLocalVue();

describe('VuePanel.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VuePanel, { localVue });

    expect(wrapper.findAll(`.vuePanel`)).toHaveLength(1);
  });

});
