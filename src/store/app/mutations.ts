import { IAppState } from './state';

export interface IAppMutations {
  SET_COOKIE_CONSENT_VERSION(state: IAppState, version: string): void;

  CHANGE_THEME(state: IAppState, theme: string): void;
}

export const AppMutations: IAppMutations = {
  SET_COOKIE_CONSENT_VERSION: (state, version) => {
    state.cookieConsentVersion = version;
  },
  CHANGE_THEME: (state, theme) => {
    state.theme = theme;
  },
};

export default AppMutations;
