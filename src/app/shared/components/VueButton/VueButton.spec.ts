import { createLocalVue, mount } from '@vue/test-utils';
import VueButton from './VueButton.vue';

const localVue = createLocalVue();

describe('VueButton.vue', () => {
  test('renders component', () => {
    const wrapper = mount<any>(VueButton, { localVue });

    expect(wrapper.findAll(`.button`)).toHaveLength(1);
    expect(wrapper.findAll(`.active`)).toHaveLength(0);
  });

  test('should emit onClick event', () => {
    const wrapper = mount<any>(VueButton, {
      localVue,
    });

    wrapper.find('button').trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });

  test('should disable button and not emit onClick event', () => {
    const wrapper = mount<any>(VueButton, {
      localVue,
      propsData: {
        disabled: true,
      },
    });

    expect(wrapper.findAll(`.disabled`)).toHaveLength(1);

    wrapper.find('button').trigger('click');
    expect(wrapper.emitted().click).toBeFalsy();
  });

  test('should show loader and not emit onClick event', () => {
    const wrapper = mount<any>(VueButton, {
      localVue,
      propsData: {
        loading: true,
      },
    });

    wrapper.find('button').trigger('click');
    expect(wrapper.emitted().click).toBeFalsy();
  });

  test('should show primary color', () => {
    const wrapper = mount<any>(VueButton, {
      localVue,
      propsData: {
        color: 'primary',
      },
    });

    expect(wrapper.findAll(`.primary`)).toHaveLength(1);
  });

  test('should show secondary color', () => {
    const wrapper = mount<any>(VueButton, {
      localVue,
      propsData: {
        color: 'secondary',
      },
    });

    expect(wrapper.findAll(`.secondary`)).toHaveLength(1);
  });

  test('should show tertiary color', () => {
    const wrapper = mount<any>(VueButton, {
      localVue,
      propsData: {
        color: 'tertiary',
      },
    });

    expect(wrapper.findAll(`.tertiary`)).toHaveLength(1);
  });

  test('should show danger color', () => {
    const wrapper = mount<any>(VueButton, {
      localVue,
      propsData: {
        color: 'danger',
      },
    });

    expect(wrapper.findAll(`.danger`)).toHaveLength(1);
  });

  test('should show warning color', () => {
    const wrapper = mount<any>(VueButton, {
      localVue,
      propsData: {
        color: 'warning',
      },
    });

    expect(wrapper.findAll(`.warning`)).toHaveLength(1);
  });

  test('should show success color', () => {
    const wrapper = mount<any>(VueButton, {
      localVue,
      propsData: {
        color: 'success',
      },
    });

    expect(wrapper.findAll(`.success`)).toHaveLength(1);
  });

  test('should show outlined color', () => {
    const wrapper = mount<any>(VueButton, {
      localVue,
      propsData: {
        outlined: true,
      },
    });

    expect(wrapper.findAll(`.outlined`)).toHaveLength(1);
  });

  test('should show ghost color', () => {
    const wrapper = mount<any>(VueButton, {
      localVue,
      propsData: {
        ghost: true,
      },
    });

    expect(wrapper.findAll(`.ghost`)).toHaveLength(1);
  });

  test('should apply fixed width when loading', () => {
    const wrapper = mount<any>(VueButton, {
      localVue,
    });

    (wrapper as any).vm.$refs.button.getBoundingClientRect = () => {
      return {
        width: 134,
      };
    };

    expect(wrapper.vm.actualWidth).toBeNull();
    wrapper.setProps({ loading: true });
    expect(wrapper.vm.actualWidth).toBe('134px');
  });
});
