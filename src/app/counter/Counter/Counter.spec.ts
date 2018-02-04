import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { getI18n } from '../../shared/plugins/i18n/i18n';
import Counter from './Counter.vue';
import $style from 'identity-obj-proxy';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Counter.vue', () => {

  test('renders component', () => {
    const store = new Vuex.Store({
      getters: {
        getCount: () => 0,
      },
      actions: {
        increment: jest.fn(),
        decrement: jest.fn(),
      },
    });
    const wrapper = mount(Counter, {
      store,
      localVue,
      i18n: getI18n(),
      mocks: { $style },
  });

    expect(wrapper.find('h1').text()).toBe('Counter');
  });

  test('should increment and decrement', () => {
    const actions = {
      increment: jest.fn(),
      decrement: jest.fn(),
    };
    const store = new Vuex.Store({
      getters: {
        getCount: () => 0,
      },
      actions,
    });
    const wrapper: any = mount(Counter, {
      store,
      localVue,
      i18n: getI18n(),
      mocks: { $style },
    });

    wrapper.vm.increment();
    expect(actions.increment).toHaveBeenCalled();

    wrapper.vm.decrement();
    expect(actions.decrement).toHaveBeenCalled();
  });

});
