import { mount, createLocalVue } from '@vue/test-utils';
import VueInput                  from './VueInput.vue';

const localVue = createLocalVue();

describe('VueInput.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueInput, { localVue });

    expect(wrapper.findAll(`.vueInput`)).toHaveLength(1);
  });

  test('renders disabled component', () => {
    const wrapper = mount(VueInput, {
      localVue,
      propsData: {
        disabled: true,
      },
    });

    expect(wrapper.findAll(`.disabled`)).toHaveLength(1);
  });

  test('should emit change', () => {
    const wrapper = mount(VueInput, { localVue }) as any;

    wrapper.vm.onChange('foo');
    expect(wrapper.emitted('change')).toBeTruthy();
  });

  test('should handle focus', () => {
    const wrapper = mount(VueInput, {
      localVue,
    }) as any;
    const event: any = {
      target: {
        blur: jest.fn(),
      },
    };

    wrapper.vm.onFocus(event);
    expect(event.target.blur).not.toHaveBeenCalled();

    wrapper.setProps({ readonly: true });
    wrapper.vm.onFocus(event);
    expect(event.target.blur).toHaveBeenCalled();
  });

  test('should display error state', () => {
    const wrapper = mount(VueInput, {
      localVue,
      propsData: {
        isValid: false,
      },
    });

    expect(wrapper.findAll(`.error`)).toHaveLength(1);
  });

});
