import { IState } from '../mutations';

export interface ICounterGetters {
  getCount(state: IState): number;
}

export const CounterGetters: ICounterGetters = {
  getCount(state: IState): number {
    return state.counter.count;
  },
};
