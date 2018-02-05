import { GetterTree } from 'vuex';
import { IState } from './mutations';
import { ICounterGetters, CounterGetters } from './counter/getters';
import { IVuexExampleGetters, VuexExampleGetters } from './vuexExample/getters';

export interface IGetters extends GetterTree<IState, IState>, ICounterGetters, IVuexExampleGetters {
  getLang(state: IState): string;
}

export const Getters: IGetters = {
  getLang: (state: IState): string => state.app.lang,
  ...CounterGetters,
  ...VuexExampleGetters,
};
