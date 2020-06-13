import { createLocalVue, mount } from '@vue/test-utils';
import Error from '@/layouts/error.vue';

const localVue = createLocalVue();

describe('error.vue', () => {
  test('renders component for error', () => {
    const wrapper = mount(Error, {
      localVue,
      propsData: {
        error: {
          statusCode: 500,
        },
      },
    });

    expect(wrapper.find('h1').text()).toBe('Error');
  });

  test('renders component for 404', () => {
    const wrapper = mount(Error, {
      localVue,
      propsData: {
        error: {
          statusCode: 404,
        },
      },
    });

    expect(wrapper.find('h1').text()).toBe('404');
  });
});
