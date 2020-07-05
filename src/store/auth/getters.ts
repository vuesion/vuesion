import { IAuthState } from './state';

export interface IAuthGetters {
  isAuthenticated(state: IAuthState): boolean;
}

export const AuthGetters: IAuthGetters = {
  isAuthenticated(state) {
    return state.accessToken !== null;
  },
};

export default AuthGetters;
