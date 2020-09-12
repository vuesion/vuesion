import { IAppState } from './state';

export interface IAppMutations {
  CHANGE_THEME(state: IAppState, theme: string): void;
}

export const AppMutations: IAppMutations = {
  CHANGE_THEME: (state, theme) => {
    state.theme = theme;
  },
};

export default AppMutations;
