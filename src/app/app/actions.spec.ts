import { ActionContext, Commit, Dispatch } from 'vuex';
import { IAppState }                       from './state';
import { AppActions }                      from './actions';
import { AppGetters }                      from './getters';

describe('AppActions', () => {
  let testContext: ActionContext<IAppState, IAppState>;

  beforeEach(() => {
    testContext = {
      dispatch: jest.fn() as Dispatch,
      commit:   jest.fn() as Commit,
      state:    {} as IAppState,
      getters:  {
        ...AppGetters,
      },
    }  as ActionContext<IAppState, IAppState>;
  });

  test('it should change the locale', () => {
    AppActions.changeLocale(testContext, 'de');

    expect(testContext.commit).toHaveBeenCalled();
    expect(testContext.commit).toHaveBeenCalledWith('CHANGE_LOCALE', 'de');
  });

});
