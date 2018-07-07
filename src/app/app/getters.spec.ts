import { AppGetters }      from './getters';
import { AppDefaultState } from './state';

describe('AppGetters', () => {

  test('it should get the locale', () => {
    expect(AppGetters.getLocale(AppDefaultState)).toBe(null);
  });

  test('it should get the cookie consent version', () => {
    expect(AppGetters.cookieConsentVersion(AppDefaultState)).toBe('');
  });

});
