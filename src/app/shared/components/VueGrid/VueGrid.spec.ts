import { mount, createLocalVue } from '@vue/test-utils';
import VueGrid from './VueGrid.vue';
import $style from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('VueGrid.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueGrid, { localVue, mocks: { $style } });

    expect(wrapper.findAll(`.${$style.grid}`)).toHaveLength(1);
  });

});
