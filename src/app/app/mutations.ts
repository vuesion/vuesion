import { IAppState } from './state';

export interface IAppMutations {
  CHANGE_LOCALE(state: IAppState, locale: string): void;
}

export const AppMutations: IAppMutations = {
  CHANGE_LOCALE: (state: IAppState, locale: string) => {
    state.locale = locale;
  },
};
