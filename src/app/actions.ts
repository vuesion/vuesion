import { ActionContext, ActionTree } from 'vuex';
import { IState } from './mutations';
import { IHomeActions, HomeActions } from './home/actions';
import { ICounterActions, CounterActions } from './counter/actions';

export interface IActions extends ActionTree<IState, IState>, IHomeActions, ICounterActions {
  changeLang(context: ActionContext<IState, IState>, lang: string): void;
}

export const Actions: IActions = {
  changeLang: ({ commit }: ActionContext<IState, IState>, lang: string) => commit('CHANGE_LANG', lang),
  ...HomeActions,
  ...CounterActions,
};
