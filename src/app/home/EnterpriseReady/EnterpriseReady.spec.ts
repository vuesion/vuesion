import { mount, createLocalVue } from '@vue/test-utils';
import EnterpriseReady           from './EnterpriseReady.vue';

const localVue = createLocalVue();

describe('EnterpriseReady.vue', () => {

  test('renders component', () => {
    const wrapper = mount(EnterpriseReady, { localVue });

    expect(wrapper.find('h2').text()).toBe('Enterprise ready');
  });

});
