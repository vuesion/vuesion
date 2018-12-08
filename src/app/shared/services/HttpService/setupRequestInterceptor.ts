import { IHttpService } from './HttpService';
import { AxiosRequestConfig, AxiosError } from 'axios';

export function setupRequestInterceptor(HttpService: IHttpService) {
  HttpService.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      // TODO: get token from HttpService.store e.g. const token: string = HttpService.store.state.auth.accessToken;
      const token: string = 'TOKEN';

      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        },
      };
    },
    /* istanbul ignore next */
    (error: AxiosError) => {
      return Promise.reject(error);
    },
  );
}
