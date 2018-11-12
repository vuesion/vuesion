import { IHttpService } from './HttpService';
import { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

export function ResponseInterceptor(httpService: IHttpService) {
  const isAuthError = (error: AxiosError): boolean => {
    return error && error.response && error.response.status && [401, 403].indexOf(error.response.status) > -1;
  };
  const hasRefreshToken = (): boolean => {
    /**
     * check for refreshToken e.g.
     * httpService.store && httpService.store.state.auth.refreshToken !== null
     */
    return true;
  };
  /**
   * replace old access token with the new refreshed one e.g.
   * if (request.headers.Authorization && request.headers.Authorization.indexOf('Bearer') > -1) {
   *   request.headers.Authorization = `Bearer ${httpService.store.state.auth.accessToken}`;
   * }
   */
  const replaceOldToken = (request: AxiosRequestConfig): AxiosRequestConfig => {
    return request;
  };
  const onRejected = (error: AxiosError) => {
    const originalRequest: AxiosRequestConfig = error.config;
    const shouldRetry: boolean = !(originalRequest as any)._retry;
    const isNotTokenRefreshUrl: boolean = originalRequest.url.indexOf('YOUR_REFRESH_TOKEN_URL') === -1;
    const shouldRefresh: boolean = hasRefreshToken() && isAuthError(error) && shouldRetry && isNotTokenRefreshUrl;

    if (shouldRefresh) {
      (originalRequest as any)._retry = true;

      return httpService
        .post('/YOUR_LOGIN_URL')
        .then((response: AxiosResponse) => {
          httpService.store.commit('SET_NEW_TOKEN_PAIR', response.data);

          replaceOldToken(originalRequest);

          return Promise.resolve(httpService(originalRequest));
        })
        .catch((err: any) => {
          httpService.store.dispatch('YOUR_LOGOUT_ACTION');
          throw err;
        });
    }
    // else if (isAuthError && shouldRefresh === false) {
    //   httpService.store.dispatch('YOUR_LOGOUT_ACTION');
    // }

    return Promise.reject(error);
  };

  httpService.interceptors.response.use((response: AxiosResponse) => response, onRejected);
}
