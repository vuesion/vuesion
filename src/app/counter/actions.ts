import { ActionContext } from 'vuex';
import { ICounterState } from './state';
import { HttpService }   from '../shared/services/HttpService';
import { AxiosResponse } from 'axios';

export interface ICounterResponse {
  count: number;
}

export interface ICounterActions {
  increment(context: ActionContext<ICounterState, ICounterState>): Promise<any>;

  decrement(context: ActionContext<ICounterState, ICounterState>): Promise<any>;
}

export const CounterActions: ICounterActions = {
  increment({ commit, state }: ActionContext<ICounterState, ICounterState>): Promise<any> {
    commit('SET_INCREMENT_PENDING', true);

    return HttpService
    .put('/counter/increment', { count: state.count })
    .then((res: AxiosResponse<ICounterResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_INCREMENT_PENDING', false);
    })
    .catch(() => {
      commit('SET_INCREMENT_PENDING', false);
    });
  },
  decrement({ commit, state }: ActionContext<ICounterState, ICounterState>): Promise<any> {
    commit('SET_DECREMENT_PENDING', true);

    return HttpService
    .put('/counter/decrement', { count: state.count })
    .then((res: AxiosResponse<ICounterResponse>) => {
      commit('SET_COUNT', res.data.count);
      commit('SET_DECREMENT_PENDING', false);
    })
    .catch(() => commit('SET_DECREMENT_PENDING', false));
  },
};
