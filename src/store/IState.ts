import { IAppState } from '@/store/app/state';
import { IAuthState } from '@/store/auth/state';
import { ICounterState } from '@/store/counter/state';

export interface IState {
  i18n: {
    locale: string;
  };
  app: IAppState;
  auth: IAuthState;
  counter: ICounterState;
}
