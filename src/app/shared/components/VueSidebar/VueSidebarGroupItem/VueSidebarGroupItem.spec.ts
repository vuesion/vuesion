import { createLocalVue, mount } from '@vue/test-utils';
import VueSidebarGroupItem       from './VueSidebarGroupItem.vue';

const localVue = createLocalVue();

describe('VueSidebarGroupItem.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueSidebarGroupItem,
                          {
                            localVue,
                            stubs: ['router-link'],
                            slots:     {
                              default: 'foo',
                            },
                          },
    );

    expect(wrapper.text()).toBe('foo');
  });

});
