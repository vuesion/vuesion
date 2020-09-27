import { createLocalVue, mount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import VueInput from './VueInput.vue';

const localVue = createLocalVue();

describe('VueInput.vue', () => {
  test('renders component', () => {
    const wrapper = mount<any>(VueInput, {
      localVue,
      propsData: {
        message: 'MESSAGE!',
        name: 'name',
        id: 'id',
      },
      mocks: {
        errors: null,
      },
    });

    expect(wrapper.findAll(`.vueInput`)).toHaveLength(1);
    expect(wrapper.find(`.message`).text()).toBe('MESSAGE!');
  });

  test('renders disabled component', () => {
    const wrapper = mount<any>(VueInput, {
      localVue,
      propsData: {
        disabled: true,
        name: 'name',
        id: 'id',
      },
    });

    expect(wrapper.findAll(`.disabled`)).toHaveLength(1);
  });

  test('should emit input', () => {
    const wrapper = mount<any>(VueInput, {
      localVue,
      propsData: {
        name: 'name',
        id: 'id',
      },
    }) as any;

    wrapper.find('input').trigger('input');
    expect(wrapper.emitted('input')).toBeTruthy();
  });

  test('should display error state', async () => {
    const wrapper = mount<any>(VueInput, {
      localVue,
      propsData: {
        errorMessage: 'ERROR!',
        name: 'name',
        id: 'id',
        validation: 'required|integer',
        value: 'this is the value',
      },
    });
    const input: any = wrapper.find('input');
    input.element.value = 'foo bar';
    input.trigger('input');

    await flushPromises();

    expect(wrapper.findAll(`.error`)).toHaveLength(1);
    expect(wrapper.find(`.message`).text()).toBe('ERROR!');
  });

  test('autofocus fallback', () => {
    const wrapper = mount<any>(VueInput, {
      localVue,
      propsData: {
        name: 'name',
        id: 'id',
        autofocus: true,
      },
    });

    expect(wrapper.vm.observer).toBeNull();
  });

  test('autofocus in modern browsers', () => {
    (window as any).IntersectionObserver = class IntersectionObserver {
      public cb: any;
      public options: any;

      constructor(cb: any, options: any) {
        this.cb = cb;
        this.options = options;
      }

      public observe() {
        this.cb();
      }
    };
    const wrapper = mount<any>(VueInput, {
      localVue,
      propsData: {
        name: 'name',
        id: 'id',
        autofocus: false,
      },
    });

    wrapper.vm.$refs.input.focus = jest.fn();

    expect(wrapper.vm.observer).not.toBeNull();
    expect(wrapper.vm.$refs.input.focus).not.toHaveBeenCalled();

    wrapper.setProps({ autofocus: true });
    wrapper.vm.observer.observe();
    expect(wrapper.vm.$refs.input.focus).toHaveBeenCalled();

    wrapper.destroy();
  });
});
