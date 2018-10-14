import { createLocalVue, mount } from '@vue/test-utils';
import VueAccordion              from './VueAccordion.vue';
import VueAccordionItem          from './VueAccordionItem/VueAccordionItem.vue';

const localVue = createLocalVue();

localVue.component('vueA-accordion-item', VueAccordionItem);

describe('VueAccordion.vue', () => {

  test('renders component with an accordion item', () => {
    const wrapper = mount(VueAccordion, {
      localVue,
      slots: {
        default: '<vueA-accordion-item title="foo" :initOpen="false"/>',
      },
    });

    const accordionItemWrapper: any = wrapper.find(VueAccordionItem);

    accordionItemWrapper.vm.$parent = wrapper.vm;
    accordionItemWrapper.vm.$options.created[1].call(accordionItemWrapper.vm);

    expect((wrapper as any).vm.items.length).toBeGreaterThan(0);
    expect((wrapper as any).vm.openItems.length).toBe(0);

    wrapper.destroy();
  });

  test('renders component with an open accordion item', () => {
    const wrapper = mount(VueAccordion, {
      localVue,
      slots: {
        default: '<vueA-accordion-item title="foo" :initOpen="true"/>',
      },
    });

    const accordionItemWrapper: any = wrapper.find(VueAccordionItem);

    accordionItemWrapper.vm.$parent = wrapper.vm;
    accordionItemWrapper.vm.$options.created[1].call(accordionItemWrapper.vm);

    expect((wrapper as any).vm.items.length).toBeGreaterThan(0);
    expect((wrapper as any).vm.openItems.length).toBeGreaterThan(0);

    wrapper.destroy();
  });

  test('should handle single accordion', () => {
    const wrapper = mount(VueAccordion, {
      localVue,
      propsData: {
        multiple: false,
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

  test('should handle multiple accordion', () => {
    const wrapper = mount(VueAccordion, {
      localVue,
      propsData: {
        multiple: true,
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
