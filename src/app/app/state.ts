import { IAppConfig } from '../config/IAppConfig';

export interface IAppState {
  locale: string;
  config: IAppConfig;
  defaultMessages: any;
  redirectTo: string;
}

export const AppDefaultState: IAppState = {
  locale:          null,
  config:          null,
  defaultMessages: {},
  redirectTo:      null,
};
