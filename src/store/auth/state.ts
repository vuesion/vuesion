export interface IAuthState {
  accessToken: string;
  refreshToken: string;
}

export default (): IAuthState => {
  return {
    accessToken: '',
    refreshToken: '',
  };
};
