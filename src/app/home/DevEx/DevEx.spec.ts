import { mount, createLocalVue } from '@vue/test-utils';
import DevEx from './DevEx.vue';
import $style from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('DevEx.vue', () => {

  test('renders component', () => {
    const wrapper = mount(DevEx, { localVue, mocks: { $style } });

    expect(wrapper.find('h2').text()).toBe('Development Experience');
  });

});
