import { ActionContext, Commit, Dispatch } from 'vuex';
import { IAppState } from './state';
import { AppActions } from './actions';

describe('AppActions', () => {
  let testContext: ActionContext<IAppState, IAppState>;

  beforeEach(() => {
    testContext = {
      dispatch: jest.fn() as Dispatch,
      commit: jest.fn() as Commit,
    } as ActionContext<IAppState, IAppState>;
  });

  test('it should change the locale', () => {
    AppActions.changeLocale(testContext, 'de');

    expect(testContext.commit).toHaveBeenCalled();
    expect(testContext.commit).toHaveBeenCalledWith('CHANGE_LOCALE', 'de');
  });

  test('it should change the cookie consent version', () => {
    AppActions.setCookieConsentVersion(testContext, '1.0.0');

    expect(testContext.commit).toHaveBeenCalled();
    expect(testContext.commit).toHaveBeenCalledWith('SET_COOKIE_CONSENT_VERSION', '1.0.0');
  });
});
