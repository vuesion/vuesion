export interface IHomeState {
  home: any[];
}

export interface IHomeMutations {
  HOME(state: IHomeState, home: any): void;
}

export const HomeDefaultState: IHomeState = {
  home: [],
};

export const HomeMutations: IHomeMutations = {
  HOME: (state: IHomeState, home: any) => {
    state.home = home;
  },
};
