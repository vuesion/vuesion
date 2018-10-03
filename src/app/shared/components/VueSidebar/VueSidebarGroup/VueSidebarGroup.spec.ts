import { createLocalVue, mount } from '@vue/test-utils';
import VueSidebarGroup           from './VueSidebarGroup.vue';

const localVue = createLocalVue();

describe('VueSidebarGroup.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueSidebarGroup,
                          {
                            localVue,
                            propsData: {
                              title: 'foo',
                            },
                            slots:     {
                              default: 'foo',
                            },
                          },
    );

    expect(wrapper.text()).toBe('foo foo');
  });

});
