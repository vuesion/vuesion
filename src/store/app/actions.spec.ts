import { ActionContext, Commit, Dispatch } from 'vuex';
import { IAppState } from '@/store/app/state';
import { AppActions } from '@/store/app/actions';
import { IState } from '@/store/IState';

describe('AppActions', () => {
  let testContext: ActionContext<IAppState, IState>;

  beforeEach(() => {
    testContext = {
      dispatch: jest.fn() as Dispatch,
      commit: jest.fn() as Commit,
    } as ActionContext<IAppState, IState>;
  });

  test('it should change the cookie consent version', () => {
    AppActions.setCookieConsentVersion(testContext, '1.0.0');

    expect(testContext.commit).toHaveBeenCalled();
    expect(testContext.commit).toHaveBeenCalledWith('SET_COOKIE_CONSENT_VERSION', '1.0.0');
  });

  test('it should change the theme', () => {
    AppActions.changeTheme(testContext, 'dark');

    expect(testContext.commit).toHaveBeenCalled();
    expect(testContext.commit).toHaveBeenCalledWith('CHANGE_THEME', 'dark');
  });
});
