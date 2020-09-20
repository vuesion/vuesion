import { ActionContext } from 'vuex';
import { IState } from '@/interfaces/IState';
import { ICounterState } from './state';

export interface ICounterActions {
  increment(context: ActionContext<ICounterState, IState>): Promise<any>;

  decrement(context: ActionContext<ICounterState, IState>): Promise<any>;
}

export const CounterActions: ICounterActions = {
  async increment({ commit, state }) {
    commit('SET_INCREMENT_PENDING', true);

    try {
      const res = await this.$axios.$put('/counter/increment', { count: state.count });

      commit('SET_COUNT', res.count);
      commit('SET_INCREMENT_PENDING', false);
    } catch (e) {
      commit('SET_INCREMENT_PENDING', false);
      throw new Error(e);
    }
  },
  async decrement({ commit, state }) {
    commit('SET_DECREMENT_PENDING', true);

    try {
      const res = await this.$axios.$put('/counter/decrement', { count: state.count });

      commit('SET_COUNT', res.count);
      commit('SET_DECREMENT_PENDING', false);
    } catch (e) {
      commit('SET_DECREMENT_PENDING', false);
      throw new Error(e);
    }
  },
};

export default CounterActions;
