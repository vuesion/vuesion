import { MutationTree } from 'vuex';
import { ICounterState, ICounterMutations, CounterDefaultState, CounterMutations } from './counter/mutations';
import { IVuexExampleState, IVuexExampleMutations, VuexExampleDefaultState, VuexExampleMutations } from './vuexExample/mutations';

export interface IState extends ICounterState, IVuexExampleState {
  app: {
    lang: string,
  };
}

export interface IMutations extends MutationTree<IState>, ICounterMutations, IVuexExampleMutations {
  CHANGE_LANG(state: IState, lang: string): void;
}

export const DefaultState: IState = {
  app: {
    lang: null,
  },
  ...CounterDefaultState,
  ...VuexExampleDefaultState,
};

export const Mutations: IMutations = {
  CHANGE_LANG: (state: IState, lang: string) => {
    state.app.lang = lang;
  },
  ...CounterMutations,
  ...VuexExampleMutations,
};
