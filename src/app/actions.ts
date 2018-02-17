import { ActionContext, ActionTree }               from 'vuex';
import { IState }                                  from './mutations';
import { ICounterActions, CounterActions }         from './counter/actions';
import { IVuexExampleActions, VuexExampleActions } from './vuexExample/actions';

export interface IActions extends ActionTree<IState, IState>, ICounterActions, IVuexExampleActions {
  changeLang(context: ActionContext<IState, IState>, lang: string): void;
}

export const Actions: IActions = {
  changeLang: ({ commit }: ActionContext<IState, IState>, lang: string) => commit('CHANGE_LANG', lang),
  ...CounterActions,
  ...VuexExampleActions,
};
