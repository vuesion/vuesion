import { mount, createLocalVue } from '@vue/test-utils';
import VueAccordionItem from './VueAccordionItem.vue';
import $style from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('VueAccordionItem.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueAccordionItem, {
      localVue,
      mocks: { $style },
      propsData: {
        title: 'foo',
      },
    });

    expect(wrapper.find(`.${$style.header}`).text()).toMatch('foo');
  });

  test('opens component', () => {
    const wrapper = mount(VueAccordionItem, {
      localVue,
      mocks: { $style },
      propsData: {
        title: 'foo',
        initOpen: false,
      },
    });

    wrapper.setData({ idx: 0, open: true });

    expect(wrapper.findAll(`.${$style.open}`)).toHaveLength(1);
  });

  test('calls parent functions', () => {
    const wrapper = mount(VueAccordionItem, {
      localVue,
      mocks: { $style },
      propsData: {
        title: 'foo',
        initOpen: false,
      },
    }) as any;
    const parent = {
      openItem: jest.fn(),
      register: jest.fn(),
    };

    wrapper.vm.$options.created['0'].call(wrapper.vm);
    expect(parent.register).not.toHaveBeenCalled();

    wrapper.vm.$parent = parent;

    wrapper.vm.click();
    wrapper.vm.$options.created['0'].call(wrapper.vm);

    expect(parent.openItem).toHaveBeenCalled();
    expect(parent.register).toHaveBeenCalled();

  });

});
