import MockAdapter from 'axios-mock-adapter';
import { HttpService } from './HttpService';
import { AxiosResponse } from 'axios';

describe('RequestInterceptor', () => {
  let mockAxios: MockAdapter;

  beforeEach(() => {
    mockAxios = new MockAdapter(HttpService);
  });

  test('should add the accessToken as header', (done) => {
    HttpService.store = {
      state: {},
      dispatch: jest.fn(),
    } as any;

    mockAxios.onGet('/foo').reply(200);

    HttpService.get('/foo').then((res: AxiosResponse) => {
      expect(res.config.headers.Authorization).toBe('Bearer TOKEN');
      done();
    });
  });
});
