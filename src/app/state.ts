import { AppDefaultState, IAppState }         from './app/state';
import { CounterDefaultState, ICounterState } from './counter/state';

export interface IState {
  [key: string]: any;

  app?: IAppState;
  counter?: ICounterState;
}

export const DefaultState: IState = {
  app:     {
    ...AppDefaultState,
  },
  counter: {
    ...CounterDefaultState,
  },
};
