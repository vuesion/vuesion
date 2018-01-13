import { mount, createLocalVue } from '@vue/test-utils';
import VueTabItem from './VueTabItem.vue';
import $style from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('VueTab.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueTabItem, {
      localVue,
      mocks: {
        $style,
      },
      slots: {
        default: '<p>TEST</p>',
      },
      propsData: {
        title: 'foo',
        icon: 'bar',
      },
    });

    expect(wrapper.findAll('p')).toHaveLength(0);

    (wrapper as any).vm.$parent = {
      register: jest.fn(),
    };

    (wrapper as any).vm.$options.created['0'].call(wrapper.vm);

    expect((wrapper as any).vm.$parent.register).toHaveBeenCalledTimes(1);

    wrapper.setProps({ isActive: true });
    wrapper.update();

    expect(wrapper.findAll('p')).toHaveLength(1);

    wrapper.setProps({ isActive: false });
    wrapper.update();

    expect(wrapper.findAll('p')).toHaveLength(0);

    wrapper.setProps({ isActive: true });
    wrapper.update();

    expect(wrapper.findAll('p')).toHaveLength(1);

    const testElement: HTMLElement = wrapper.find('p').element;

    (wrapper as any).vm.beforeLeave(testElement);
    (wrapper as any).vm.leave(testElement, jest.fn());
  });

});
