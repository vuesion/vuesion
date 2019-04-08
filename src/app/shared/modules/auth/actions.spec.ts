import { ActionContext, Commit, Dispatch } from 'vuex';
import MockAdapter from 'axios-mock-adapter';
import { AuthDefaultState, IAuthState } from './state';
import { IState } from '@/app/state';
import { AuthActions } from './actions';
import { HttpService } from '@shared/services/HttpService/HttpService';

describe('AuthActions', () => {
  let testContext: ActionContext<IAuthState, IState>;
  let mockAxios: MockAdapter;

  beforeEach(() => {
    testContext = {
      dispatch: jest.fn() as Dispatch,
      commit: jest.fn() as Commit,
      state: AuthDefaultState(),
    } as ActionContext<IAuthState, IState>;

    mockAxios = new MockAdapter(HttpService);
  });

  describe('createToken', () => {
    test('it should set tokens on success', async () => {
      const commitMock: jest.Mock = testContext.commit as jest.Mock;

      mockAxios.onPost('/token').reply(200, { access_token: 'accessToken', refresh_token: 'refreshToken' });

      await AuthActions.createToken(testContext, { username: 'foo', password: 'bar' });
      expect(commitMock.mock.calls[0]).toEqual(['SET_ACCESS_TOKEN', 'accessToken']);
      expect(commitMock.mock.calls[1]).toEqual(['SET_REFRESH_TOKEN', 'refreshToken']);
    });

    test('it should reset tokens on failure', async () => {
      const commitMock: jest.Mock = testContext.commit as jest.Mock;

      mockAxios.onPost('/token').reply(500);

      try {
        await AuthActions.createToken(testContext, { username: 'foo', password: 'bar' });
      } catch (e) {
        expect(commitMock.mock.calls[0]).toEqual(['SET_ACCESS_TOKEN', null]);
        expect(commitMock.mock.calls[1]).toEqual(['SET_REFRESH_TOKEN', null]);
      }
    });
  });

  describe('refreshToken', () => {
    test('it should set tokens on success', async () => {
      const commitMock: jest.Mock = testContext.commit as jest.Mock;

      mockAxios.onPost('/token').reply(200, { access_token: 'accessToken', refresh_token: 'refreshToken' });

      await AuthActions.refreshToken(testContext);
      expect(commitMock.mock.calls[0]).toEqual(['SET_ACCESS_TOKEN', 'accessToken']);
      expect(commitMock.mock.calls[1]).toEqual(['SET_REFRESH_TOKEN', 'refreshToken']);
    });

    test('it should reset tokens on failure', async () => {
      const commitMock: jest.Mock = testContext.commit as jest.Mock;

      mockAxios.onPost('/token').reply(500);

      try {
        await AuthActions.refreshToken(testContext);
      } catch (e) {
        expect(commitMock.mock.calls[0]).toEqual(['SET_ACCESS_TOKEN', null]);
        expect(commitMock.mock.calls[1]).toEqual(['SET_REFRESH_TOKEN', null]);
      }
    });
  });

  describe('revokeToken', () => {
    test('it should reset tokens on success', async () => {
      const commitMock: jest.Mock = testContext.commit as jest.Mock;

      mockAxios.onDelete('/token').reply(200);

      await AuthActions.revokeToken(testContext);
      expect(commitMock.mock.calls[0]).toEqual(['SET_ACCESS_TOKEN', null]);
      expect(commitMock.mock.calls[1]).toEqual(['SET_REFRESH_TOKEN', null]);
    });

    test('it should reset tokens on failure', async () => {
      const commitMock: jest.Mock = testContext.commit as jest.Mock;

      mockAxios.onDelete('/token').reply(500);

      try {
        await AuthActions.revokeToken(testContext);
      } catch (e) {
        expect(commitMock.mock.calls[0]).toEqual(['SET_ACCESS_TOKEN', null]);
        expect(commitMock.mock.calls[1]).toEqual(['SET_REFRESH_TOKEN', null]);
      }
    });
  });
});
