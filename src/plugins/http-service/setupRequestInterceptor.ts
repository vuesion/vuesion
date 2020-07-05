import { AxiosRequestConfig, AxiosError } from 'axios';
import { HttpService } from '@/plugins/http-service/HttpService';

export function setupRequestInterceptor() {
  HttpService.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token: string = HttpService.store.state.auth.accessToken;

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
