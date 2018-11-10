import { IHttpService } from './HttpService';
import { AxiosRequestConfig, AxiosError } from 'axios';

export function RequestInterceptor(httpService: IHttpService) {
  const getToken = (): string => {
    /**
     * return the access token e.g.
     * httpService.store && httpService.store.state.auth.accessToken;
     */
    return 'accessToken';
  };
  const getBaseUrl = (): string => {
    return httpService.store && httpService.store.state.app.config
      ? httpService.store.state.app.config.api.baseUrl
      : '';
  };
  const isExternalUrl = (url: string): boolean => {
    return url.indexOf('://') > -1 && url.indexOf('i18n') === -1;
  };
  const onFulfilled = (config: AxiosRequestConfig) => {
    const token: string = getToken();
    const baseUrl: string = getBaseUrl();
    const isExternal: boolean = isExternalUrl(config.url);

    if (!isExternal) {
      config.url = `${baseUrl}${config.url}`;
    }

    if (token && !isExternal && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  };

  /* istanbul ignore next */
  httpService.interceptors.request.use(onFulfilled, (error: AxiosError) => Promise.reject(error));
}
