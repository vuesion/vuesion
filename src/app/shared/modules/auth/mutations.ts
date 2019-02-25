import { IAuthState } from './state';

export interface IAuthMutations {
  SET_ACCESS_TOKEN(state: IAuthState, accessToken: string): void;

  SET_REFRESH_TOKEN(state: IAuthState, refreshToken: string): void;
}

export const AuthMutations: IAuthMutations = {
  SET_ACCESS_TOKEN: (state, accessToken) => {
    state.accessToken = accessToken;
  },
  SET_REFRESH_TOKEN: (state, refreshToken) => {
    state.refreshToken = refreshToken;
  },
};
