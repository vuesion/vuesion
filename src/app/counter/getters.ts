import { ICounterState } from './state';

export interface ICounterGetters {
  incrementPending(state: ICounterState): boolean;
  decrementPending(state: ICounterState): boolean;
  count(state: ICounterState): number;
}

export const CounterGetters: ICounterGetters = {
  incrementPending(state: ICounterState): boolean {
    return state.incrementPending;
  },
  decrementPending(state: ICounterState): boolean {
    return state.decrementPending;
  },
  count(state: ICounterState): number {
    return state.count;
  },
};
