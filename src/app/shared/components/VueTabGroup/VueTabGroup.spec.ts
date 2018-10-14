import { createLocalVue, mount } from '@vue/test-utils';
import VueTabGroup               from './VueTabGroup.vue';
import VueTabItem                from './VueTabItem/VueTabItem.vue';

const localVue = createLocalVue();

localVue.component('vue-tab-item', VueTabItem);

describe('VueTabGroup.vue', () => {

  test('renders component with a tab', () => {
    const wrapper = mount(VueTabGroup, {
      localVue,
      slots: {
        default: '<vue-tab-item title="foo" />',
      },
    });

    const tabWrapper: any = wrapper.find(VueTabItem);

    tabWrapper.vm.$parent = wrapper.vm;
    tabWrapper.vm.$options.created[2].call(tabWrapper.vm);

    expect(wrapper.find('li').text()).toMatch('foo');

    wrapper.destroy();
  });

  test('should change tab', () => {
    const wrapper = mount(VueTabGroup, {
      localVue,
      slots: {
        default: ['<vue-tab-item title="foo" />', '<vue-tab-item title="foo2" />'],
      },
    });

    const tabWrapper: any = wrapper.findAll(VueTabItem).at(0);
    const tabWrapper2: any = wrapper.findAll(VueTabItem).at(1);

    tabWrapper.vm.$parent = wrapper.vm;
    tabWrapper.vm.$options.created[2].call(tabWrapper.vm);

    tabWrapper2.vm.$parent = wrapper.vm;
    tabWrapper2.vm.$options.created[2].call(tabWrapper2.vm);

    expect(wrapper.find('li').text()).toMatch('foo');
    expect(wrapper.find('li').classes()).toEqual(['active']);

    expect(wrapper.findAll('li').at(1).text()).toMatch('foo2');
    expect(wrapper.findAll('li').at(1).classes()).toEqual([]);

    (wrapper as any).vm.changeTab(1);

    expect(wrapper.find('li').text()).toMatch('foo');
    expect(wrapper.find('li').classes()).toEqual([]);

    expect(wrapper.findAll('li').at(1).text()).toMatch('foo2');
    expect(wrapper.findAll('li').at(1).classes()).toEqual(['active']);
  });

  test('should select second tab because of its properties', () => {
    const wrapper = mount(VueTabGroup, {
      localVue,
      slots: {
        default: '<vue-tab-item title="foo" /><vue-tab-item title="foo" :is-active="true" />',
      },
    });

    expect((wrapper as any).vm.currentTab).toBe(1);

    wrapper.destroy();
  });

});
