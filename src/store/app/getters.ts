import { IState } from '@/store/IState';
import { IAppState } from '@/store/app/state';

export interface IAppGetters {
  locale(state: IAppState, getters: IAppGetters, rootState: IState): string;

  cookieConsentVersion(state: IAppState): string;

  theme(state: IAppState): string;
}

export const AppGetters: IAppGetters = {
  locale(_, __, rootsState) {
    return rootsState.i18n.locale;
  },
  cookieConsentVersion(state) {
    return state.cookieConsentVersion;
  },
  theme(state) {
    return state.theme;
  },
};

export default AppGetters;
