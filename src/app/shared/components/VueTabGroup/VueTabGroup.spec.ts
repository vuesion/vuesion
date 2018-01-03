import { mount, createLocalVue } from 'vue-test-utils';
import VueTabGroup from './VueTabGroup.vue';
import $style from 'identity-obj-proxy';
import VueTabItem from '../VueTabItem/VueTabItem.vue';
import { Component } from 'vue';

const localVue = createLocalVue();

describe('VueTabGroup.vue', () => {

  test('renders component with a tab', () => {
    const tabWrapper = mount(VueTabItem, {
      localVue,
      mocks: { $style },
      propsData: {
        title: 'foo',
        icon: 'bar',
      },
    });
    const wrapper = mount(VueTabGroup, {
      localVue,
      mocks: { $style },
      slots: {
        default: [tabWrapper.vm as Component],
      },
    });

    (tabWrapper as any).vm.$parent = wrapper.vm;
    (tabWrapper as any).vm.$options.created['0'].call(tabWrapper.vm);

    wrapper.update();

    expect(wrapper.findAll('li')).toHaveLength(1);
    expect(wrapper.find('li').text()).toMatch('foo');

    wrapper.destroy();
  });

  test('should change tab', () => {
    const tabWrapper = mount(VueTabItem, {
      localVue,
      mocks: { $style },
      propsData: {
        title: 'foo',
        icon: 'bar',
      },
    });
    const tabWrapper2 = mount(VueTabItem, {
      localVue,
      mocks: { $style },
      propsData: {
        title: 'foo2',
        icon: 'bar',
      },
    });
    const wrapper = mount(VueTabGroup, {
      localVue,
      mocks: { $style },
      slots: {
        default: [tabWrapper.vm as Component, tabWrapper2.vm as Component],
      },
    });

    (tabWrapper as any).vm.$parent = wrapper.vm;
    (tabWrapper as any).vm.$options.created['0'].call(tabWrapper.vm);

    (tabWrapper2 as any).vm.$parent = wrapper.vm;
    (tabWrapper2 as any).vm.$options.created['0'].call(tabWrapper2.vm);

    wrapper.update();

    expect(wrapper.findAll('li')).toHaveLength(2);

    expect(wrapper.find('li').text()).toMatch('foo');
    expect(wrapper.find('li').hasClass($style.active)).toBe(true);

    expect(wrapper.findAll('li').at(1).text()).toMatch('foo2');
    expect(wrapper.findAll('li').at(1).hasClass($style.active)).toBe(false);

    (wrapper as any).vm.changeTab(1);
    wrapper.update();
    tabWrapper.update();
    tabWrapper2.update();

    expect(wrapper.find('li').text()).toMatch('foo');
    expect(wrapper.find('li').hasClass($style.active)).toBe(false);

    expect(wrapper.findAll('li').at(1).text()).toMatch('foo2');
    expect(wrapper.findAll('li').at(1).hasClass($style.active)).toBe(true);
  });

});
