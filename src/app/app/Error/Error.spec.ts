import { createLocalVue, mount } from '@vue/test-utils';
import Error                       from './Error.vue';

const localVue = createLocalVue();

describe('Error.vue', () => {

  test('renders component', () => {
    const wrapper = mount(Error,
                          {
                            localVue,
                          },
    );

    expect(wrapper.find('h1').text()).toBe('Error');
  });

});
