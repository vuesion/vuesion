export interface IAuthState {
  accessToken: string;
  refreshToken: string;
}

export const AuthDefaultState = (): IAuthState => {
  return {
    accessToken: null,
    refreshToken: null,
  };
};
