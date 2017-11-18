export const counterDefaultState: any = {
  counter: 0,
};

export const counterMutations = {
  INCREMENT: (state: any) => {
    state.counter += 1;
  },
  DECREMENT: (state: any) => {
    state.counter -= 1;
  },
};
