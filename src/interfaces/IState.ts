import { IAppState } from '@/store/app/state';
import { ICounterState } from '@/store/counter/state';

export interface IState {
  i18n: {
    locale: string;
  };
  app: IAppState;
  counter: ICounterState;
}
