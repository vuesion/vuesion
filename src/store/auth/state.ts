export interface IAuthState {
  accessToken: string;
  refreshToken: string;
}

export const AuthDefaultState = (): IAuthState => {
  return {
    accessToken: '',
    refreshToken: '',
  };
};

export default AuthDefaultState;
