import { ActionContext, ActionTree }               from 'vuex';
import { IState }                                  from './mutations';
import { ICounterActions, CounterActions }         from './counter/actions';
import { IVuexExampleActions, VuexExampleActions } from './vuexExample/actions';

export interface IActions extends ActionTree<IState, IState>, ICounterActions, IVuexExampleActions {
  changeLocale(context: ActionContext<IState, IState>, locale: string): void;
}

export const Actions: IActions = {
  changeLocale: ({ commit }: ActionContext<IState, IState>, locale: string) => commit('CHANGE_LOCALE', locale),
  ...CounterActions,
  ...VuexExampleActions,
};
