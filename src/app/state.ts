import { AppDefaultState, IAppState } from './app/state';
import { ICounterState } from './counter/state';
import { IAuthState } from './shared/modules/auth/state';

export interface IState {
  [key: string]: any;

  app?: IAppState;
  counter?: ICounterState;
  auth?: IAuthState;
}

export const DefaultState: IState = {
  app: {
    ...AppDefaultState(),
  },
};
