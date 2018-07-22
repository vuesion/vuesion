import { createLocalVue, mount } from '@vue/test-utils';
import VueNavigationProgress                       from './VueNavigationProgress.vue';

const localVue = createLocalVue();

describe('VueNavigationProgress.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueNavigationProgress,
                          {
                            localVue,
                          },
    );

    expect(wrapper.find('h1').text()).toBe('VueNavigationProgress');
  });

});
