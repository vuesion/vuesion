import { createLocalVue, mount } from '@vue/test-utils';
import VueBreadcrumb from './VueBreadcrumb.vue';

const localVue = createLocalVue();

describe('VueBreadcrumb.vue', () => {
  test('renders component', () => {
    const wrapper = mount(VueBreadcrumb, {
      localVue,
      propsData: {
        items: [
          { label: 'Home', href: '/' },
          { label: 'Components', href: '/components' },
        ],
      },
      stubs: ['nuxt-link'],
    });

    expect(wrapper.findAll('ul')).toHaveLength(1);
    expect(wrapper.findAll('li')).toHaveLength(2);
    expect(wrapper.findAll('nuxt-link-stub')).toHaveLength(1);
  });
});
