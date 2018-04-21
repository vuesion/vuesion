import { mount, createLocalVue } from '@vue/test-utils';
import VueGrid                   from './VueGrid.vue';

const localVue = createLocalVue();

describe('VueGrid.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueGrid, { localVue });

    expect(wrapper.findAll(`.grid`)).toHaveLength(1);
  });

});
