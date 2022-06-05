import { ICounterState } from '@/store/counter/state';

export interface IState {
  i18n: {
    locale: string;
  };
  counter: ICounterState;
}
