import { mount, createLocalVue } from '@vue/test-utils';
import VueAccordion from './VueAccordion.vue';
import $style from 'identity-obj-proxy';
import VueAccordionItem from '../VueAccordionItem/VueAccordionItem.vue';
import { Component } from 'vue';

const localVue = createLocalVue();

describe('VueAccordion.vue', () => {

  test('renders component with an accordion item', () => {
    const accordionItemWrapper = mount(VueAccordionItem, {
      localVue,
      mocks: { $style },
      propsData: {
        title: 'foo',
        initOpen: false,
      },
    });
    const wrapper = mount(VueAccordion, {
      localVue,
      mocks: { $style },
      slots: {
        default: [accordionItemWrapper.vm as Component],
      },
    });

    expect((wrapper as any).vm.items).toHaveLength(0);

    (accordionItemWrapper as any).vm.$parent = wrapper.vm;
    (accordionItemWrapper as any).vm.$options.created['0'].call(accordionItemWrapper.vm);

    wrapper.update();

    expect((wrapper as any).vm.items).toHaveLength(1);

    wrapper.destroy();
  });

  test('renders component with an open accordion item', () => {
    const accordionItemWrapper = mount(VueAccordionItem, {
      localVue,
      mocks: { $style },
      propsData: {
        title: 'foo',
        initOpen: true,
      },
    });
    const wrapper = mount(VueAccordion, {
      localVue,
      mocks: { $style },
      slots: {
        default: [accordionItemWrapper.vm as Component],
      },
    });

    expect((wrapper as any).vm.items).toHaveLength(0);

    (accordionItemWrapper as any).vm.$parent = wrapper.vm;
    (accordionItemWrapper as any).vm.$options.created['0'].call(accordionItemWrapper.vm);

    wrapper.update();

    expect((wrapper as any).vm.items).toHaveLength(1);

    wrapper.destroy();
  });

  test('should handle single accordion', () => {
    const wrapper = mount(VueAccordion, {
      localVue,
      mocks: { $style },
      propsData: {
        multi: false,
      },
    }) as any;

    expect(wrapper.vm.openItems).toEqual([]);

    wrapper.vm.openItem(0);
    expect(wrapper.vm.openItems).toEqual([0]);

    wrapper.vm.openItem(1);
    expect(wrapper.vm.openItems).toEqual([1]);

    wrapper.vm.openItem(1);
    expect(wrapper.vm.openItems).toEqual([]);
  });

  test('should handle multi accordion', () => {
    const wrapper = mount(VueAccordion, {
      localVue,
      mocks: { $style },
      propsData: {
        multi: true,
      },
    }) as any;

    expect(wrapper.vm.openItems).toEqual([]);

    wrapper.vm.openItem(0);
    expect(wrapper.vm.openItems).toEqual([0]);

    wrapper.vm.openItem(1);
    expect(wrapper.vm.openItems).toEqual([0, 1]);

    wrapper.vm.openItem(1);
    expect(wrapper.vm.openItems).toEqual([0]);

    wrapper.vm.openItem(0);
    expect(wrapper.vm.openItems).toEqual([]);
  });

});
