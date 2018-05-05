import { createLocalVue, mount } from '@vue/test-utils';
import VueInput                  from './VueInput.vue';

const localVue = createLocalVue();

describe('VueInput.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueInput, {
      localVue,
      propsData: {
        message: 'MESSAGE!',
        name:    'name',
        id:      'id',
      },
      mocks:     {
        errors: null,
      },
    });

    expect(wrapper.findAll(`.vueInput`)).toHaveLength(1);
    expect(wrapper.find(`.message`).text()).toBe('MESSAGE!');
  });

  test('renders disabled component', () => {
    const wrapper = mount(VueInput, {
      localVue,
      propsData: {
        disabled: true,
        name:     'name',
        id:       'id',
      },
    });

    expect(wrapper.findAll(`.disabled`)).toHaveLength(1);
  });

  test('should emit input', () => {
    const wrapper = mount(VueInput, {
      localVue,
      propsData: {
        name: 'name',
        id:   'id',
      },
    }) as any;

    wrapper.find('input').trigger('input');
    expect(wrapper.emitted('input')).toBeTruthy();
  });

  test('should display error state', () => {
    const wrapper = mount(VueInput, {
      localVue,
      mocks:     {
        errors: {
          first() {
            return true;
          },
        },
      },
      propsData: {
        errorMessage: 'ERROR!',
        name:    'name',
        id:      'id',
      },
    });

    expect(wrapper.findAll(`.error`)).toHaveLength(1);
    expect(wrapper.find(`.message`).text()).toBe('ERROR!');
  });

});
