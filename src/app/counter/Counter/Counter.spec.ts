import { mount, createLocalVue } from 'vue-test-utils';
import Vuex from 'vuex';
import Counter from './Counter.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Counter.vue', () => {

  test('renders component', () => {
    const store = new Vuex.Store({
      getters: {
        getCounter: () => 0,
      },
      actions: {
        increment: jest.fn(),
        decrement: jest.fn(),
      },
    });
    const wrapper = mount(Counter, { store, localVue });

    expect(wrapper.find('h1').text()).toBe('Counter');
  });

  test('should increment and decrement', () => {
    const actions = {
      increment: jest.fn(),
      decrement: jest.fn(),
    };
    const store = new Vuex.Store({
      getters: {
        getCounter: () => 0,
      },
      actions,
    });
    const wrapper: any = mount(Counter, { store, localVue });

    wrapper.findAll('button').at(0).trigger('click');
    expect(actions.increment).toHaveBeenCalled();

    wrapper.findAll('button').at(1).trigger('click');
    expect(actions.decrement).toHaveBeenCalled();
  });

});
