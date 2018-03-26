import { MutationTree } from 'vuex';
import {
  ICounterState,
  ICounterMutations,
  CounterDefaultState,
  CounterMutations,
}                       from './counter/mutations';
import {
  IVuexExampleState,
  IVuexExampleMutations,
  VuexExampleDefaultState,
  VuexExampleMutations,
}                       from './vuexExample/mutations';
import { IAppConfig }   from './config/IAppConfig';

export interface IState extends ICounterState, IVuexExampleState {
  [key: string]: any;

  app: {
    lang: string,
    config: IAppConfig,
  };
}

export interface IMutations extends MutationTree<IState>, ICounterMutations, IVuexExampleMutations {
  CHANGE_LANG(state: IState, lang: string): void;
}

export const DefaultState: IState = {
  app: {
    lang: null,
    config: null,
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
