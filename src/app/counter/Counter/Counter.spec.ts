import { mount, createLocalVue } from '@vue/test-utils';
import Vuex                      from 'vuex';
import { i18n }               from '../../shared/plugins/i18n/i18n';
import Counter                   from './Counter.vue';

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
      i18n,
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
      i18n,
    });

    wrapper.vm.increment();
    expect(actions.increment).toHaveBeenCalled();

    wrapper.vm.decrement();
    expect(actions.decrement).toHaveBeenCalled();
  });

});
