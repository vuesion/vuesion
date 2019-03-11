import { createLocalVue, mount } from '@vue/test-utils';
import VueTabItem from './VueTabItem.vue';

const localVue = createLocalVue();

describe('VueTabItem.vue', () => {
  test('renders component', () => {
    const register = jest.fn();
    const updateHeader = jest.fn();
    const wrapper = mount<any>(VueTabItem, {
      localVue,
      slots: {
        default: '<p>TEST</p>',
      },
      propsData: {
        title: 'foo',
      },
      provide: { register, updateHeader },
    });

    expect(wrapper.vm.cssClasses).toEqual(['vueTab']);
    wrapper.setData({ active: true });
    expect(wrapper.vm.cssClasses).toEqual(['vueTab', 'active']);

    wrapper.setData({ active: false });
    expect(wrapper.findAll('p')).toHaveLength(0);

    expect(register).toHaveBeenCalledTimes(1);

    wrapper.setData({ active: true });
    expect(wrapper.findAll('p')).toHaveLength(1);

    wrapper.setData({ active: false });
    expect(wrapper.findAll('p')).toHaveLength(0);

    wrapper.setData({ active: true });
    expect(wrapper.findAll('p')).toHaveLength(1);

    wrapper.setProps({ title: 'bar' });
    expect(updateHeader).toHaveBeenCalledTimes(1);

    wrapper.vm.beforeEnter(wrapper.vm.$el);
    wrapper.vm.enter(wrapper.vm.$el, jest.fn());
    wrapper.vm.beforeLeave(wrapper.vm.$el);
    wrapper.vm.leave(wrapper.vm.$el, jest.fn());
  });
});
