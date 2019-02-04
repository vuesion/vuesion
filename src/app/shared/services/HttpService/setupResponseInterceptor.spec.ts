import MockAdapter from 'axios-mock-adapter';
import { HttpService } from './HttpService';

xdescribe('ResponseInterceptor', () => {
  let mockAxios: MockAdapter;

  beforeEach(() => {
    mockAxios = new MockAdapter(HttpService);

    HttpService.store = {
      state: {
        auth: {
          accessToken: 'foo',
          refreshToken: 'bar',
        },
      },
      commit: jest.fn(),
      dispatch: jest.fn(() => Promise.resolve()),
    } as any;

    HttpService.router = {
      push: jest.fn(),
    } as any;
  });

  test('dispatch auth/refresh-token when response status is 401', async () => {
    mockAxios.onGet('/api/me').replyOnce(401);
    mockAxios.onGet('/api/me').replyOnce(200, { username: 'foo' });

    await HttpService.get('/api/me');

    const actual = HttpService.store.dispatch;
    const expected = 'auth/refreshToken';

    expect(actual).toBeCalledWith(expected);
  });

  test('not dispatch auth/refresh-token when it is already refreshing', async () => {
    mockAxios.onGet('/api/me').replyOnce(401);
    mockAxios.onGet('/api/protected-route').replyOnce(401);

    mockAxios.onGet('/api/me').replyOnce(200, { username: 'foo' });
    mockAxios.onGet('/api/protected-route').replyOnce(200, { username: 'foo' });

    await Promise.all([HttpService.get('/api/me'), HttpService.get('/api/protected-route')]);

    const actual = HttpService.store.dispatch;

    expect(actual).toBeCalledTimes(1);
  });

  test('reject all pending promises when refresh-token failed', async () => {
    HttpService.store.state.auth.accessToken = null;

    mockAxios.onGet('/api/me').replyOnce(401);
    mockAxios.onGet('/api/protected-route').replyOnce(401);

    try {
      await Promise.all([HttpService.get('/api/me'), HttpService.get('/api/protected-route')]);
    } catch (e) {
      const actual = HttpService.store.dispatch;

      expect(actual).toBeCalledTimes(1);
    }
  });

  test('redirect to / page when auth/refresh-token fails', async () => {
    HttpService.store.state.auth.accessToken = null;

    mockAxios.onGet('/api/me').replyOnce(401);

    try {
      await HttpService.get('/api/me');
    } catch (e) {
      const actual = HttpService.router.push;
      const expected = '/';

      expect(actual).toBeCalledWith(expected);
    }
  });
});
