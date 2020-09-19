export interface IAppState {
  theme: string;
}

export const AppDefaultState = (): IAppState => {
  return {
    theme: 'light',
  };
};

export default AppDefaultState;
