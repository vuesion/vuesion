import { ActionContext } from 'vuex';
import { IState } from '../mutations';

export interface ICounterActions {
  increment(context: ActionContext<IState, IState>): void;

  decrement(context: ActionContext<IState, IState>): void;
}

export const CounterActions: ICounterActions = {
  increment({ commit }: ActionContext<IState, IState>) {
    commit('INCREMENT');
  },
  decrement({ commit }: ActionContext<IState, IState>) {
    commit('DECREMENT');
  },
};
