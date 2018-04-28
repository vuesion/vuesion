import { ICounterState } from './state';

export interface ICounterMutations {
  SET_INCREMENT_PENDING(state: ICounterState, pending: boolean): void;

  SET_DECREMENT_PENDING(state: ICounterState, pending: boolean): void;

  SET_COUNT(state: ICounterState, count: number): void;
}

export const CounterMutations: ICounterMutations = {
  SET_INCREMENT_PENDING: (state: ICounterState, pending: boolean) => {
    state.incrementPending = pending;
  },
  SET_DECREMENT_PENDING: (state: ICounterState, pending: boolean) => {
    state.decrementPending = pending;
  },
  SET_COUNT:             (state: ICounterState, count: number) => {
    state.count = count;
  },
};
