import { createLocalVue, mount } from '@vue/test-utils';
import VueNavBar                 from './VueNavBar.vue';

const localVue = createLocalVue();

describe('VueNavBar.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueNavBar, {
      localVue,
      stubs: ['router-link'],
    });

    expect(wrapper.findAll(`.vueNavBar`)).toHaveLength(1);
  });
});
