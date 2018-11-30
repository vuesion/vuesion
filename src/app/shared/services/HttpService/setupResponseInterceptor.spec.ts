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

  test('dispatch auth/refresh-token when response status is 401', (done) => {
    mockAxios.onGet('/api/me').replyOnce(401);
    mockAxios.onGet('/api/me').replyOnce(200, { username: 'foo' });

    HttpService.get('/api/me').then(() => {
      const actual = HttpService.store.dispatch;
      const expected = 'auth/refreshToken';

      expect(actual).toBeCalledWith(expected);

      done();
    });
  });

  test('not dispatch auth/refresh-token when it is already refreshing', (done) => {
    mockAxios.onGet('/api/me').replyOnce(401);
    mockAxios.onGet('/api/protected-route').replyOnce(401);

    mockAxios.onGet('/api/me').replyOnce(200, { username: 'foo' });
    mockAxios.onGet('/api/protected-route').replyOnce(200, { username: 'foo' });

    Promise.all([HttpService.get('/api/me'), HttpService.get('/api/protected-route')]).then(() => {
      const actual = HttpService.store.dispatch;

      expect(actual).toBeCalledTimes(1);

      done();
    });
  });

  test('reject all pending promises when refresh-token failed', (done) => {
    HttpService.store.state.auth.accessToken = null;

    mockAxios.onGet('/api/me').replyOnce(401);
    mockAxios.onGet('/api/protected-route').replyOnce(401);

    Promise.all([HttpService.get('/api/me'), HttpService.get('/api/protected-route')]).catch(() => {
      const actual = HttpService.store.dispatch;

      expect(actual).toBeCalledTimes(1);

      done();
    });
  });

  test('redirect to / page when auth/refresh-token fails', (done) => {
    HttpService.store.state.auth.accessToken = null;

    mockAxios.onGet('/api/me').replyOnce(401);

    HttpService.get('/api/me').catch(() => {
      const actual = HttpService.router.push;
      const expected = '/';

      expect(actual).toBeCalledWith(expected);
      done();
    });
  });
});
