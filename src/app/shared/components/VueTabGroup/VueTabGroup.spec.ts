import { mount, createLocalVue } from '@vue/test-utils';
import VueTabGroup               from './VueTabGroup.vue';
import VueTabItem                from './VueTabItem/VueTabItem.vue';
import { Component }             from 'vue';

const localVue = createLocalVue();

describe('VueTabGroup.vue', () => {

  test('renders component with a tab', () => {
    const tabWrapper = mount(VueTabItem, {
      localVue,
      propsData: {
        title: 'foo',
        icon:  'bar',
      },
    });
    const wrapper = mount(VueTabGroup, {
      localVue,
      slots: {
        default: [tabWrapper.vm as Component],
      },
    });

    (tabWrapper as any).vm.$parent = wrapper.vm;
    (tabWrapper as any).vm.$options.created['1'].call(tabWrapper.vm);

    expect(wrapper.findAll('li')).toHaveLength(1);
    expect(wrapper.find('li').text()).toMatch('foo');

    wrapper.destroy();
  });

  test('should change tab', () => {
    const tabWrapper = mount(VueTabItem, {
      localVue,
      propsData: {
        title: 'foo',
        icon:  'bar',
      },
    });
    const tabWrapper2 = mount(VueTabItem, {
      localVue,
      propsData: {
        title: 'foo2',
        icon:  'bar',
      },
    });
    const wrapper = mount(VueTabGroup, {
      localVue,
      slots: {
        default: [tabWrapper.vm as Component, tabWrapper2.vm as Component],
      },
    });

    (tabWrapper as any).vm.$parent = wrapper.vm;
    (tabWrapper as any).vm.$options.created['1'].call(tabWrapper.vm);

    (tabWrapper2 as any).vm.$parent = wrapper.vm;
    (tabWrapper2 as any).vm.$options.created['1'].call(tabWrapper2.vm);

    expect(wrapper.findAll('li')).toHaveLength(2);

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

});
