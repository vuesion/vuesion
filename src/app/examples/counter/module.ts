import { Module } from 'vuex';
import { CounterDefaultState, ICounterState } from './state';
import { IState } from '@/app/state';
import { CounterActions } from './actions';
import { CounterGetters } from './getters';
import { CounterMutations } from './mutations';

export const CounterModule: Module<ICounterState, IState> = {
  namespaced: true,
  actions: {
    ...CounterActions,
  },
  getters: {
    ...CounterGetters,
  },
  state: {
    ...CounterDefaultState(),
  },
  mutations: {
    ...CounterMutations,
  },
};
