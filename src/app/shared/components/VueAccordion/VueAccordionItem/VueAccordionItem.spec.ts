import { createLocalVue, mount } from '@vue/test-utils';
import VueAccordionItem from './VueAccordionItem.vue';

const localVue = createLocalVue();

describe('VueAccordionItem.vue', () => {
  test('renders component', () => {
    const wrapper = mount<any>(VueAccordionItem, {
      localVue,
      propsData: {
        title: 'foo',
      },
      provide: {
        register: jest.fn(),
        openItem: jest.fn(),
      },
    });

    expect(wrapper.find(`.header`).text()).toMatch('foo');
  });

  test('opens component', () => {
    const wrapper = mount<any>(VueAccordionItem, {
      localVue,
      propsData: {
        title: 'foo',
        initOpen: false,
      },
      provide: {
        register: jest.fn(),
        openItem: jest.fn(),
      },
    });

    wrapper.setData({ idx: 0, open: true });

    expect(wrapper.findAll(`.open`)).toHaveLength(1);
  });

  test('calls register', () => {
    const register = jest.fn();
    const openItem = jest.fn();
    const wrapper = mount<any>(VueAccordionItem, {
      localVue,
      propsData: {
        title: 'foo',
        initOpen: false,
      },
      provide: {
        register,
        openItem,
      },
    });

    wrapper.vm.click();

    expect(openItem).toHaveBeenCalled();
    expect(register).toHaveBeenCalled();
  });
});
