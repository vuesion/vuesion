import MockAdapter from 'axios-mock-adapter';
import { HttpService, initHttpService } from './HttpService';
import { AxiosResponse } from 'axios';

describe('RequestInterceptor', () => {
  let mockAxios: MockAdapter;

  beforeEach(() => {
    initHttpService();
    mockAxios = new MockAdapter(HttpService);
  });

  test('should add the accessToken as header', async () => {
    HttpService.store = {
      state: {},
      dispatch: jest.fn(),
    } as any;

    mockAxios.onGet('/foo').reply(200);

    const res = await HttpService.get('/foo');

    expect(res.config.headers.Authorization).toBe('Bearer TOKEN');
  });
});
