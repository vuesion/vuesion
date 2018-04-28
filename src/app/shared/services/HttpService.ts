import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { store }                                                from '../../store';

export const HttpService = axios.create();

/* istanbul ignore next */
HttpService.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // TODO: get token from store e.g. const token: string = store.state.auth.accessToken;
    const token: string = 'accessToken';
    const baseUrl: string = store.state.app.config ? store.state.app.config.api.baseUrl : '';
    const isExternal: boolean = config.url.indexOf('://') > -1 && config.url.indexOf('i18n') === -1;

    if (token && !isExternal && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (!isExternal) {
      config.url = `${baseUrl}${config.url}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

/* istanbul ignore next */
HttpService.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    const originalRequest: any = error.config;
    /**
     * TODO: add condition for refreshing the token
     * const shouldRefresh: boolean = store.state.auth.accessToken !== null &&
     * (error.response.status === 401 || error.response.status === 403) &&
     * !originalRequest._retry;
     */

    const shouldRefresh: boolean = false;

    if (shouldRefresh) {
      originalRequest._retry = true;

      /**
       * TODO: return function that refreshes the token
       * return store.dispatch('refreshToken')
       * .then(() => {
       *     if (originalRequest.headers.Authorization && originalRequest.headers.Authorization.indexOf('Bearer') > -1) {
       *       originalRequest.headers.Authorization = `Bearer ${store.state.auth.accessToken}`;
       *     }
       *
       *     return Promise.resolve(HttpService(originalRequest));
       * });
       */
    }

    return Promise.reject(error);
  });
