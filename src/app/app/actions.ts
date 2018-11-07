import { ActionContext } from 'vuex';
import { IAppState } from './state';

export interface IAppActions {
  changeLocale(context: ActionContext<IAppState, IAppState>, locale: string): void;

  setCookieConsentVersion(context: ActionContext<IAppState, IAppState>, version: string): void;
}

export const AppActions: IAppActions = {
  changeLocale: ({ commit }: ActionContext<IAppState, IAppState>, locale: string) => commit('CHANGE_LOCALE', locale),
  setCookieConsentVersion: ({ commit }: ActionContext<IAppState, IAppState>, version: string) =>
    commit('SET_COOKIE_CONSENT_VERSION', version),
};
