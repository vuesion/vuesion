import { IAppState } from './state';

export interface IAppGetters {
  getLocale(state: IAppState): string;

  cookieConsentVersion(state: IAppState): string;
}

export const AppGetters: IAppGetters = {
  getLocale(state: IAppState): string {
    return state.locale;
  },
  cookieConsentVersion(state: IAppState): string {
    return state.cookieConsentVersion;
  },
};
