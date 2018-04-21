import { createLocalVue, mount } from '@vue/test-utils';
import VueAccordionItem          from './VueAccordionItem.vue';

const localVue = createLocalVue();

describe('VueAccordionItem.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueAccordionItem, {
      localVue,
      propsData: {
        title: 'foo',
      },
    });

    expect(wrapper.find(`.header`).text()).toMatch('foo');
  });

  test('opens component', () => {
    const wrapper = mount(VueAccordionItem, {
      localVue,
      propsData: {
        title:    'foo',
        initOpen: false,
      },
    });

    wrapper.setData({ idx: 0, open: true });

    expect(wrapper.findAll(`.open`)).toHaveLength(1);
  });

  test('calls parent functions', () => {
    const wrapper = mount(VueAccordionItem, {
      localVue,
      propsData: {
        title:    'foo',
        initOpen: false,
      },
    }) as any;
    const parent = {
      openItem: jest.fn(),
      register: jest.fn(),
    };

    wrapper.vm.$options.created['1'].call(wrapper.vm);
    expect(parent.register).not.toHaveBeenCalled();

    wrapper.vm.$parent = parent;

    wrapper.vm.click();
    wrapper.vm.$options.created['1'].call(wrapper.vm);

    expect(parent.openItem).toHaveBeenCalled();
    expect(parent.register).toHaveBeenCalled();

  });

});
