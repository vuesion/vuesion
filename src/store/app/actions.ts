import { ActionContext } from 'vuex';
import { IAppState } from './state';

export interface IAppActions {
  setCookieConsentVersion(context: ActionContext<IAppState, IAppState>, version: string): void;

  changeTheme(context: ActionContext<IAppState, IAppState>, theme: string): void;
}

export const AppActions: IAppActions = {
  setCookieConsentVersion: ({ commit }, version: string) => commit('SET_COOKIE_CONSENT_VERSION', version),
  changeTheme: ({ commit }, theme) => commit('CHANGE_THEME', theme),
};

export default AppActions;
