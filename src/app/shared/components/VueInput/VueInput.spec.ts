import { mount, createLocalVue } from '@vue/test-utils';
import VueInput                  from './VueInput.vue';
import $style                    from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('VueInput.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueInput, { localVue, mocks: { $style } });

    expect(wrapper.findAll(`.${$style.vueInput}`)).toHaveLength(1);
  });

  test('renders disabled component', () => {
    const wrapper = mount(VueInput, {
      localVue,
      mocks:     { $style },
      propsData: {
        disabled: true,
      },
    });

    expect(wrapper.findAll(`.${$style.disabled}`)).toHaveLength(1);
  });

  test('should emit change', () => {
    const wrapper = mount(VueInput, { localVue, mocks: { $style } }) as any;

    wrapper.vm.onChange('foo');
    expect(wrapper.emitted('change')).toBeTruthy();
  });

  test('should handle focus', () => {
    const wrapper = mount(VueInput, {
      localVue,
      mocks: { $style },
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
      mocks:     { $style },
      propsData: {
        isValid: false,
      },
    });

    expect(wrapper.findAll(`.${$style.error}`)).toHaveLength(1);
  });

});
