import { mount, createLocalVue } from '@vue/test-utils';
import VuePanel from './VuePanel.vue';
import $style from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('VuePanel.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VuePanel, { localVue, mocks: { $style } });

    expect(wrapper.findAll(`.${$style.vuePanel}`)).toHaveLength(1);
  });

});
