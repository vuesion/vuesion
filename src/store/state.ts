import { IAppConfig } from '@/config/IAppConfig';

export interface IAppState {
  locale: string;
  config: IAppConfig;
  defaultMessages: any;
  redirectTo: string;
  cookieConsentVersion: string;
  theme: string;
}

export default (): IAppState => {
  return {
    locale: '',
    config: {
      api: {
        baseUrl: '',
      },
      features: {
        disableParticles: false,
      },
    },
    defaultMessages: {},
    redirectTo: '',
    cookieConsentVersion: '',
    theme: 'light',
  };
};
