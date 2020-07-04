import { createLocalVue, mount } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import Counter from './counter.vue';
import { CounterDefaultState, ICounterState } from '@/store/counter/state';
import { CounterActions } from '@/store/counter/actions';
import { CounterGetters } from '@/store/counter/getters';
import { CounterMutations } from '@/store/counter/mutations';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Counter.vue', () => {
  let store: Store<ICounterState>;

  const CounterModule = {
    namespaced: true,
    state: () => CounterDefaultState(),
    mutations: CounterMutations,
    actions: CounterActions,
    getters: CounterGetters,
  };

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        counter: CounterModule,
      },
    } as any);
  });

  test('renders component', () => {
    const wrapper = mount<any>(Counter, {
      store,
      localVue,
      stubs: ['nuxt-link'],
    });

    expect(wrapper.find('h1').text()).toBe('Counter: 0');
  });

  test('should increment and decrement', () => {
    store.dispatch = jest.fn();
    const wrapper = mount<any>(Counter, {
      store,
      localVue,
      stubs: ['nuxt-link'],
    });

    wrapper.vm.increment();
    expect(store.dispatch).toHaveBeenCalledWith(`counter/increment`, undefined);

    wrapper.vm.decrement();
    expect(store.dispatch).toHaveBeenCalledWith(`counter/decrement`, undefined);
  });

  test('dispatches action on the server', () => {
    store.dispatch = jest.fn();

    (Counter as any).fetch({ store });

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(`counter/increment`);
  });
});
