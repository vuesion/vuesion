import { render, fireEvent, RenderResult } from '@testing-library/vue';
import Vuex, { Store } from 'vuex';
import { CounterDefaultState, ICounterState } from '@/store/counter/state';
import { CounterActions } from '@/store/counter/actions';
import { CounterGetters } from '@/store/counter/getters';
import { CounterMutations } from '@/store/counter/mutations';
import Counter from './counter.vue';

describe('Counter.vue', () => {
  let store: Store<ICounterState>;
  let harness: RenderResult;

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

    store.dispatch = jest.fn();

    harness = render(Counter, {
      mocks: {
        $nuxt: {
          context: {
            store,
          },
        },
      },
      stubs: ['nuxt-link'],
    });
  });

  test('renders component and fetches data', () => {
    const { getByText } = harness;

    getByText('Current count: 0');

    expect(store.dispatch).toHaveBeenCalledWith(`counter/increment`);
  });

  test('should increment and decrement', async () => {
    const { getByText } = harness;
    const incrementButton = getByText('Increment');
    const decrementButton = getByText('Decrement');

    await fireEvent.click(incrementButton);
    await fireEvent.click(decrementButton);

    expect(store.dispatch).toHaveBeenNthCalledWith(1, 'counter/increment');
    expect(store.dispatch).toHaveBeenNthCalledWith(2, 'counter/increment');
    expect(store.dispatch).toHaveBeenNthCalledWith(3, 'counter/decrement');
  });
});
