import { mount, createLocalVue } from '@vue/test-utils';
import QuickStart from './QuickStart.vue';
import $style from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('QuickStart.vue', () => {

  test('renders component', () => {
    const wrapper = mount(QuickStart, { localVue, mocks: { $style } });

    expect(wrapper.find('h2').text()).toBe('Quick start');
  });

});
