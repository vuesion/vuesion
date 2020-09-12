import { IAppConfig } from '@/plugins/app-config/IAppConfig';

export interface IAppState {
  config: IAppConfig;
  theme: string;
}

export const AppDefaultState = (): IAppState => {
  return {
    config: null,
    theme: 'light',
  };
};

export default AppDefaultState;
