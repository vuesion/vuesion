export interface ICounterState {
  incrementPending: boolean;
  decrementPending: boolean;
  count: number;
}

export const CounterDefaultState = (): ICounterState => {
  return {
    incrementPending: false,
    decrementPending: false,
    count: 0,
  };
};

export default CounterDefaultState;
