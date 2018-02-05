import { CounterActions } from './actions';
import { ActionContext, Commit, Dispatch } from 'vuex';
import { IState } from '../mutations';

describe('CounterActions', () => {
  let testContext: ActionContext<IState, IState>;

  beforeEach(() => {
    testContext = {
      dispatch: jest.fn() as Dispatch,
      commit: jest.fn() as Commit,
      state: {} as IState,
      getters: {},
      rootState: {} as IState,
      rootGetters: {},
    };
  });

  test('it should call INCREMENT action', () => {
    CounterActions.increment(testContext);

    expect(testContext.commit).toHaveBeenCalled();
    expect(testContext.commit).toHaveBeenCalledWith('INCREMENT');
  });

  test('it should call DECREMENT action', () => {
    CounterActions.decrement(testContext);

    expect(testContext.commit).toHaveBeenCalled();
    expect(testContext.commit).toHaveBeenCalledWith('DECREMENT');
  });

});
