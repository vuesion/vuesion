import { createLocalVue, mount } from '@vue/test-utils';
import VueTabItem                from './VueTabItem.vue';

const localVue = createLocalVue();

describe('VueTabItem.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueTabItem, {
      localVue,
      slots:     {
        default: '<p>TEST</p>',
      },
      propsData: {
        title: 'foo',
      },
    }) as any;

    expect((wrapper as any).vm.cssClasses).toEqual(['vueTab']);
    wrapper.setData({ active: true });
    expect((wrapper as any).vm.cssClasses).toEqual(['vueTab', 'active']);

    wrapper.setData({ active: false });
    expect(wrapper.findAll('p')).toHaveLength(0);

    (wrapper as any).vm.$parent.register = jest.fn();

    (wrapper as any).vm.$options.created['1'].call(wrapper.vm);

    expect((wrapper as any).vm.$parent.register).toHaveBeenCalledTimes(1);

    wrapper.setData({ active: true });
    expect(wrapper.findAll('p')).toHaveLength(1);

    wrapper.setData({ active: false });
    expect(wrapper.findAll('p')).toHaveLength(0);

    wrapper.setData({ active: true });
    expect(wrapper.findAll('p')).toHaveLength(1);

    wrapper.vm.beforeEnter(wrapper.vm.$el);
    wrapper.vm.enter(wrapper.vm.$el, jest.fn());
    wrapper.vm.beforeLeave(wrapper.vm.$el);
    wrapper.vm.leave(wrapper.vm.$el, jest.fn());
  });

});
