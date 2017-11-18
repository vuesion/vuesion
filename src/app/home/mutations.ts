export const homeDefaultState: any = {
  home: [],
};

export const homeMutations = {
  HOME: (state: any, home: any) => {
    state.home = home;
  },
};
