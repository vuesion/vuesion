import { ActionContext } from 'vuex';
import { IAppState } from './state';
import { IState } from '@/store/IState';

export interface IAppActions {
  changeTheme(context: ActionContext<IAppState, IState>, theme: string): void;
}

export const AppActions: IAppActions = {
  changeTheme: ({ commit }, theme) => commit('CHANGE_THEME', theme),
};

export default AppActions;
