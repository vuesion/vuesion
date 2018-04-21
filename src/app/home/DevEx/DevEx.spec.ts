import { mount, createLocalVue } from '@vue/test-utils';
import DevEx                     from './DevEx.vue';

const localVue = createLocalVue();

describe('DevEx.vue', () => {

  test('renders component', () => {
    const wrapper = mount(DevEx, { localVue });

    expect(wrapper.find('h2').text()).toBe('Development Experience');
  });

});
