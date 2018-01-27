import { mount, createLocalVue } from '@vue/test-utils';
import VueCheckBox from './VueCheckBox.vue';
import $style from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('VueCheckBox.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueCheckBox, { localVue, mocks: { $style } });

    expect(wrapper.find('h1').text()).toBe('VueCheckBox');
  });

});
