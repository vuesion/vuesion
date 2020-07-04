import { AppGetters } from '~/store/app/getters';
import { AppDefaultState, IAppState } from '~/store/app/state';

describe('AppGetters', () => {
  let testState: IAppState;

  beforeEach(() => {
    testState = AppDefaultState();
  });

  test('it should get the cookie consent version', () => {
    expect(AppGetters.cookieConsentVersion(testState)).toBe('');
  });

  test('it should get the theme', () => {
    expect(AppGetters.theme(testState)).toBe('light');
  });
});
