import { mount, createLocalVue } from '@vue/test-utils';
import EnterpriseReady           from './EnterpriseReady.vue';
import $style                    from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('EnterpriseReady.vue', () => {

  test('renders component', () => {
    const wrapper = mount(EnterpriseReady, { localVue, mocks: { $style } });

    expect(wrapper.find('h2').text()).toBe('Enterprise ready');
  });

});
