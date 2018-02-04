import { IHomeState, IHomeMutations, HomeDefaultState, HomeMutations } from './home/mutations';
import { ICounterState, ICounterMutations, CounterDefaultState, CounterMutations } from './counter/mutations';
import { MutationTree } from 'vuex';

export interface IState extends IHomeState, ICounterState {
  app: {
    lang: string,
  };
}

export interface IMutations extends MutationTree<IState>, IHomeMutations, ICounterMutations {
  CHANGE_LANG(state: IState, lang: string): void;
}

export const DefaultState: IState = {
  app: {
    lang: null,
  },
  ...HomeDefaultState,
  ...CounterDefaultState,
};

export const Mutations: IMutations = {
  CHANGE_LANG: (state: IState, lang: string) => {
    state.app.lang = lang;
  },
  ...HomeMutations,
  ...CounterMutations,
};
