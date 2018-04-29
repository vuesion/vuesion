import { createLocalVue, mount } from '@vue/test-utils';
import NotFound                       from './NotFound.vue';

const localVue = createLocalVue();

describe('NotFound.vue', () => {

  test('renders component', () => {
    const wrapper = mount(NotFound,
                          {
                            localVue,
                          },
    );

    expect(wrapper.find('h1').text()).toBe('404');
  });

});
