import { ActionContext } from 'vuex';
import { IAppState } from './state';

export interface IAppActions {
  changeLocale(context: ActionContext<IAppState, IAppState>, locale: string): void;

  setCookieConsentVersion(context: ActionContext<IAppState, IAppState>, version: string): void;

  changeTheme(context: ActionContext<IAppState, IAppState>, theme: string): void;
}

export const AppActions: IAppActions = {
  changeLocale: ({ commit }, locale) => commit('CHANGE_LOCALE', locale),
  setCookieConsentVersion: ({ commit }, version: string) => commit('SET_COOKIE_CONSENT_VERSION', version),
  changeTheme: ({ commit }, theme) => commit('CHANGE_THEME', theme),
};
