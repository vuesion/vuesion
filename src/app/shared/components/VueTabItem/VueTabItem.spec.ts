import { mount, createLocalVue } from '@vue/test-utils';
import VueTabItem                from './VueTabItem.vue';
import $style                    from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('VueTab.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueTabItem, {
      localVue,
      mocks:     {
        $style,
      },
      slots:     {
        default: '<p>TEST</p>',
      },
      propsData: {
        title: 'foo',
        icon:  'bar',
      },
    }) as any;

    expect(wrapper.findAll('p')).toHaveLength(0);

    (wrapper as any).vm.$parent = {
      register: jest.fn(),
    };

    (wrapper as any).vm.$options.created['0'].call(wrapper.vm);

    expect((wrapper as any).vm.$parent.register).toHaveBeenCalledTimes(1);

    wrapper.setProps({ isActive: true });
    wrapper.update();

    expect(wrapper.findAll('p')).toHaveLength(1);

    wrapper.setProps({ isActive: false });
    wrapper.update();

    expect(wrapper.findAll('p')).toHaveLength(0);

    wrapper.setProps({ isActive: true });
    wrapper.update();

    expect(wrapper.findAll('p')).toHaveLength(1);

    wrapper.vm.beforeEnter(wrapper.vm.$el);
    wrapper.vm.enter(wrapper.vm.$el, jest.fn());
    wrapper.vm.beforeLeave(wrapper.vm.$el);
    wrapper.vm.leave(wrapper.vm.$el, jest.fn());
  });

});
