import MockAdapter from 'axios-mock-adapter';
import { HttpService } from './HttpService';
import { AxiosResponse } from 'axios';

describe('ResponseInterceptor', () => {
  let mockAxios: MockAdapter;

  beforeEach(() => {
    mockAxios = new MockAdapter(HttpService);
  });

  test('should re-authenticate if response status is 401/403', (done) => {
    HttpService.store = {
      state: {
        app: {
          config: {
            api: {
              baseUrl: 'http://localhost:3000',
            },
          },
        },
      },
      commit: jest.fn(),
      dispatch: jest.fn(),
    } as any;

    mockAxios.onGet('http://localhost:3000/foo').replyOnce(401);
    mockAxios.onGet('http://localhost:3000/foo').replyOnce(200);
    mockAxios.onPost('http://localhost:3000/YOUR_LOGIN_URL').reply(200);

    HttpService.get('/foo').then(() => {
      expect((HttpService as any).store.commit.mock.calls[0]).toEqual(['SET_NEW_TOKEN_PAIR', undefined]);
      done();
    });
  });

  test('should not replace old token if basic auth header is present', (done) => {
    HttpService.store = {
      state: {
        app: {
          config: {
            api: {
              baseUrl: 'http://localhost:3000',
            },
          },
        },
      },
      commit: jest.fn(),
      dispatch: jest.fn(),
    } as any;

    mockAxios.onGet('http://localhost:3000/foo').replyOnce(401);
    mockAxios.onGet('http://localhost:3000/foo').replyOnce(200);
    mockAxios.onPost('http://localhost:3000/YOUR_LOGIN_URL').reply(200);

    HttpService.get('/foo', { headers: { Authorization: 'foo' } }).then((res: AxiosResponse) => {
      expect(res.config.headers.Authorization).toBe('foo');
      done();
    });
  });

  test('should log out on re-authentication error', (done) => {
    HttpService.store = {
      state: {
        app: {
          config: {
            api: {
              baseUrl: 'http://localhost:3000',
            },
          },
        },
      },
      commit: jest.fn(),
      dispatch: jest.fn(),
    } as any;

    mockAxios.onGet('http://localhost:3000/foo').replyOnce(401);
    mockAxios.onPost('http://localhost:3000/YOUR_LOGIN_URL').reply(500);

    HttpService.get('/foo').catch(() => {
      expect((HttpService as any).store.dispatch.mock.calls[0]).toEqual(['YOUR_LOGOUT_ACTION']);
      done();
    });
  });
});
