import { mount, createLocalVue } from '@vue/test-utils';
import QuickStart                from './QuickStart.vue';

const localVue = createLocalVue();

describe('QuickStart.vue', () => {

  test('renders component', () => {
    const wrapper = mount(QuickStart, { localVue });

    expect(wrapper.find('h2').text()).toBe('Quick start');
  });

});
