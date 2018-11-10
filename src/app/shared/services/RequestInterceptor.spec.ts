import MockAdapter from 'axios-mock-adapter';
import { HttpService } from './HttpService';
import { AxiosResponse } from 'axios';

describe('RequestInterceptor', () => {
  let mockAxios: MockAdapter;

  beforeEach(() => {
    mockAxios = new MockAdapter(HttpService);
  });

  test('should add the baseUrl from the appConfig', (done) => {
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
      dispatch: jest.fn(),
    } as any;

    mockAxios.onGet('http://localhost:3000/foo').reply(200);

    HttpService.get('/foo').then((res: AxiosResponse) => {
      expect(res.config.url).toBe('http://localhost:3000/foo');
      expect(res.config.headers.Authorization).toBeDefined();
      done();
    });
  });

  test('should add the accessToken as header', (done) => {
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
      dispatch: jest.fn(),
    } as any;

    mockAxios.onGet('http://localhost:3000/foo').reply(200);

    HttpService.get('/foo').then((res: AxiosResponse) => {
      expect(res.config.headers.Authorization).toBe('Bearer accessToken');
      done();
    });
  });

  test('should request external url without side effects', (done) => {
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
      dispatch: jest.fn(),
    } as any;

    mockAxios.onGet('https://google.de').reply(200, { username: 'foo' });

    HttpService.get('https://google.de').then((res: AxiosResponse) => {
      expect(res.config.url).toBe('https://google.de');
      expect(res.config.headers.Authorization).not.toBeDefined();
      done();
    });
  });
});
