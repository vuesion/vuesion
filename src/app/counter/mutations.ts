export const counterDefaultState: any = {
  counter: {
    count: 0,
  },
};

export const counterMutations: any = {
  INCREMENT: (state: any) => {
    state.counter.count += 1;
  },
  DECREMENT: (state: any) => {
    state.counter.count -= 1;
  },
};
