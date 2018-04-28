export interface ICounterState {
  incrementPending: boolean;
  decrementPending: boolean;
  count: number;
}

export const CounterDefaultState: ICounterState = {
  incrementPending: false,
  decrementPending: false,
  count:            0,
};
