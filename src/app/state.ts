import { IAppState } from './app/state';
import { IAuthState } from '@shared/modules/auth/state';
import { ICounterState } from './example/counter/state';

export interface IState {
  [key: string]: any;

  app?: IAppState;
  auth?: IAuthState;
  counter?: ICounterState;
}

export const DefaultState: IState = {};
