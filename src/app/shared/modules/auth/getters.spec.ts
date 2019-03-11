import { AuthGetters } from './getters';
import { AuthDefaultState, IAuthState } from './state';

describe('AuthGetters', () => {
  let testState: IAuthState;

  beforeEach(() => {
    testState = AuthDefaultState();
  });

  test('isAuthenticated should return false', () => {
    const actual = AuthGetters.isAuthenticated(testState);
    const expected = false;

    expect(actual).toBe(expected);
  });

  test('isAuthenticated should return true', () => {
    testState.accessToken = 'foo';

    const actual = AuthGetters.isAuthenticated(testState);
    const expected = true;

    expect(actual).toBe(expected);
  });
});
