import { IAppConfig } from '@/plugins/app-config/IAppConfig';

export interface IAppState {
  config: IAppConfig;
  cookieConsentVersion: string;
  theme: string;
}

export const AppDefaultState = (): IAppState => {
  return {
    config: null,
    cookieConsentVersion: '',
    theme: 'light',
  };
};

export default AppDefaultState;
