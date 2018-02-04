import { GetterTree } from 'vuex';
import { IState } from './mutations';
import { IHomeGetters, HomeGetters } from './home/getters';
import { ICounterGetters, CounterGetters } from './counter/getters';

export interface IGetters extends GetterTree<IState, IState>, IHomeGetters, ICounterGetters {
  getLang(state: IState): string;
}

export const Getters: IGetters = {
  getLang: (state: IState): string => state.app.lang,
  ...HomeGetters,
  ...CounterGetters,
};
