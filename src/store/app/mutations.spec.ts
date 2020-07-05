import { AppMutations } from '@/store/app/mutations';
import { AppDefaultState, IAppState } from '@/store/app/state';

describe('AppMutations', () => {
  let testState: IAppState;

  beforeEach(() => {
    testState = AppDefaultState();
  });

  test('it should change the cookie consent version', () => {
    AppMutations.SET_COOKIE_CONSENT_VERSION(testState, '1.0.0');
    expect(testState.cookieConsentVersion).toBe('1.0.0');
  });

  test('it should change the theme', () => {
    AppMutations.CHANGE_THEME(testState, 'dark');
    expect(testState.theme).toBe('dark');
  });
});
