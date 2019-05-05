import { IAppState } from './state';

export interface IAppGetters {
  getLocale(state: IAppState): string;

  cookieConsentVersion(state: IAppState): string;

  theme(state: IAppState): string;
}

export const AppGetters: IAppGetters = {
  getLocale(state) {
    return state.locale;
  },
  cookieConsentVersion(state) {
    return state.cookieConsentVersion;
  },
  theme(state) {
    return state.theme;
  },
};
