import { AuthMutations } from './mutations';
import { AuthDefaultState, IAuthState } from './state';

describe('AuthMutations', () => {
  let testState: IAuthState;

  beforeEach(() => {
    testState = AuthDefaultState();
  });

  test('it should set the access token', () => {
    AuthMutations.SET_ACCESS_TOKEN(testState, 'foo');

    const actual = testState.accessToken;
    const expected = 'foo';

    expect(actual).toBe(expected);
  });

  test('it should set the refresh token', () => {
    AuthMutations.SET_REFRESH_TOKEN(testState, 'foo');

    const actual = testState.refreshToken;
    const expected = 'foo';

    expect(actual).toBe(expected);
  });
});
