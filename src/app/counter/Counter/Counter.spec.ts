import { createLocalVue, mount }               from '@vue/test-utils';
import Vuex, { ActionTree, GetterTree, Store } from 'vuex';
import Counter                                 from './Counter.vue';
import { CounterGetters, ICounterGetters }     from '../getters';
import { CounterDefaultState, ICounterState }  from '../state';
import { CounterActions, ICounterActions }     from '../actions';
import { i18n }                                from '../../shared/plugins/i18n/i18n';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Counter.vue', () => {
  let store: Store<ICounterState>;
  let getters: GetterTree<ICounterState, ICounterGetters>;
  let actions: ActionTree<ICounterState, ICounterActions>;
  let state: ICounterState;

  beforeEach(() => {
    getters = {
      ...CounterGetters,
    };
    actions = {
      ...CounterActions,
      increment: jest.fn(),
      decrement: jest.fn(),
    };
    state = {
      ...CounterDefaultState(),
    };

    store = new Vuex.Store({
                             modules: {
                               counter: {
                                 namespaced: true,
                                 getters,
                                 actions,
                                 state,
                               },
                             },
                           } as any);
  });

  test('renders component', () => {
    const wrapper = mount(Counter, {
      store,
      localVue,
      i18n,
    });

    expect(wrapper.find('h1').text()).toBe('Counter');
  });

  test('should increment and decrement', () => {
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

  test('dispatches action on the server', () => {
    store.dispatch =  jest.fn();

    Counter.prefetch({ store });

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(`counter/increment`);
  });

});
