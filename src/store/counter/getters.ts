import { ICounterState } from './state';

export interface ICounterGetters {
  incrementPending(state: ICounterState): boolean;
  decrementPending(state: ICounterState): boolean;
  count(state: ICounterState): number;
}

export const CounterGetters: ICounterGetters = {
  incrementPending(state) {
    return state.incrementPending;
  },
  decrementPending(state) {
    return state.decrementPending;
  },
  count(state): number {
    return state.count;
  },
};

export default CounterGetters;
