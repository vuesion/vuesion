export interface ICounterState {
  counter: {
    count: number,
  };
}

export interface ICounterMutations {
  INCREMENT(state: ICounterState): void;
  DECREMENT(state: ICounterState): void;
}

export const CounterDefaultState: ICounterState = {
  counter: {
    count: 0,
  },
};

export const CounterMutations: ICounterMutations = {
  INCREMENT: (state: ICounterState) => {
    state.counter.count += 1;
  },
  DECREMENT: (state: ICounterState) => {
    state.counter.count -= 1;
  },
};
