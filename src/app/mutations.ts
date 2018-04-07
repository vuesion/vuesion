import { MutationTree } from 'vuex';
import {
  CounterDefaultState,
  CounterMutations,
  ICounterMutations,
  ICounterState,
}                       from './counter/mutations';
import {
  IVuexExampleMutations,
  IVuexExampleState,
  VuexExampleDefaultState,
  VuexExampleMutations,
}                       from './vuexExample/mutations';
import { IAppConfig }   from './config/IAppConfig';

export interface IState extends ICounterState, IVuexExampleState {
  [key: string]: any;

  app: {
    locale: string,
    config: IAppConfig,
    defaultMessages: any;
  };
}

export interface IMutations extends MutationTree<IState>, ICounterMutations, IVuexExampleMutations {
  CHANGE_LOCALE(state: IState, locale: string): void;
}

export const DefaultState: IState = {
  app: {
    locale:          null,
    config:          null,
    defaultMessages: {},
  },
  ...CounterDefaultState,
  ...VuexExampleDefaultState,
};

export const Mutations: IMutations = {
  CHANGE_LOCALE: (state: IState, locale: string) => {
    state.app.locale = locale;
  },
  ...CounterMutations,
  ...VuexExampleMutations,
};
