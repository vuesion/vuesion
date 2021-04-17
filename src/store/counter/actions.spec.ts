import Vuex, { Store } from 'vuex';
import { CounterDefaultState } from '@/store/counter/state';
import { IState } from '@/interfaces/IState';
import { CounterActions } from '@/store/counter/actions';
import { CounterMutations } from '@/store/counter/mutations';
import { CounterGetters } from '@/store/counter/getters';
import { AxiosMock, getAxiosMock } from '@/test/test-utils';

describe('CounterActions', () => {
  let store: Store<IState>;
  let axiosMock: AxiosMock;

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

    axiosMock = getAxiosMock();

    store.$axios = axiosMock;
    store.commit = jest.fn();
  });

  describe('increment', () => {
    test('it should call INCREMENT action on success', async () => {
      axiosMock.onPut('/counter/increment').reply(200, { count: 1337 });

      await store.dispatch('counter/increment');

      expect(store.commit).toHaveBeenNthCalledWith(1, 'counter/SET_INCREMENT_PENDING', true, undefined);
      expect(store.commit).toHaveBeenNthCalledWith(2, 'counter/SET_COUNT', 1337, undefined);
      expect(store.commit).toHaveBeenNthCalledWith(3, 'counter/SET_INCREMENT_PENDING', false, undefined);
    });

    test('it should set INCREMENT pending to false on fail', async () => {
      axiosMock.onPut('/counter/increment').reply(500);

      try {
        await store.dispatch('counter/increment');
      } catch (e) {
        expect(store.commit).toHaveBeenNthCalledWith(1, 'counter/SET_INCREMENT_PENDING', true, undefined);
        expect(store.commit).toHaveBeenNthCalledWith(2, 'counter/SET_INCREMENT_PENDING', false, undefined);
      }
    });
  });

  describe('decrement', () => {
    test('it should call DECREMENT action on success', async () => {
      axiosMock.onPut('/counter/decrement').reply(200, { count: 1337 });

      await store.dispatch('counter/decrement');

      expect(store.commit).toHaveBeenNthCalledWith(1, 'counter/SET_DECREMENT_PENDING', true, undefined);
      expect(store.commit).toHaveBeenNthCalledWith(2, 'counter/SET_COUNT', 1337, undefined);
      expect(store.commit).toHaveBeenNthCalledWith(3, 'counter/SET_DECREMENT_PENDING', false, undefined);
    });

    test('it should set DECREMENT pending to false on fail', async () => {
      axiosMock.onPut('/counter/decrement').reply(500);

      try {
        await store.dispatch('counter/decrement');
      } catch (e) {
        expect(store.commit).toHaveBeenNthCalledWith(1, 'counter/SET_DECREMENT_PENDING', true, undefined);
        expect(store.commit).toHaveBeenNthCalledWith(2, 'counter/SET_DECREMENT_PENDING', false, undefined);
      }
    });
  });
});
