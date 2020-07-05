import { ActionContext } from 'vuex';
import { ICounterState } from './state';
import { HttpService } from '@/plugins/http-service/HttpService';
import { IState } from '@/store/IState';

export interface ICounterResponse {
  count: number;
}

export interface ICounterActions {
  increment(context: ActionContext<ICounterState, IState>): Promise<any>;

  decrement(context: ActionContext<ICounterState, IState>): Promise<any>;
}

export const CounterActions: ICounterActions = {
  async increment({ commit, state }) {
    commit('SET_INCREMENT_PENDING', true);

    try {
      const res = await HttpService.put<ICounterResponse>('/counter/increment', { count: state.count });

      commit('SET_COUNT', res.data.count);
      commit('SET_INCREMENT_PENDING', false);
    } catch (e) {
      commit('SET_INCREMENT_PENDING', false);
      throw new Error(e);
    }
  },
  async decrement({ commit, state }) {
    commit('SET_DECREMENT_PENDING', true);

    try {
      const res = await HttpService.put<ICounterResponse>('/counter/decrement', { count: state.count });

      commit('SET_COUNT', res.data.count);
      commit('SET_DECREMENT_PENDING', false);
    } catch (e) {
      commit('SET_DECREMENT_PENDING', false);
      throw new Error(e);
    }
  },
};

export default CounterActions;
