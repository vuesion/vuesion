import { ActionContext } from 'vuex';
import { ICounterState } from './state';
import { HttpService } from '~/plugins/http-service/HttpService';

export interface ICounterResponse {
  count: number;
}

export interface ICounterActions {
  increment(context: ActionContext<ICounterState, ICounterState>): Promise<any>;

  decrement(context: ActionContext<ICounterState, ICounterState>): Promise<any>;
}

export const CounterActions: ICounterActions = {
  async increment({ commit, state }: ActionContext<ICounterState, ICounterState>) {
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
  async decrement({ commit, state }: ActionContext<ICounterState, ICounterState>) {
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
