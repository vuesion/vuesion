import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * TODO: import store to access auth token
 * import { store } from '../../store';
 * @type {number}
 */

const RETRY_COUNT: number = 3;

const baseUrl: string = '';
const isExternalUrl = (url: string): boolean => {
  return url.indexOf('://') > -1;
};
let retries: number = RETRY_COUNT;

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // TODO: get token from store e.g. const token: string = store.state.auth.accessToken;
    const token: string = 'accessToken';
    const isExternal: boolean = isExternalUrl(config.url);

    if (token && !isExternal) {
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

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    const originalRequest = error.config;
    /**
     * TODO: add condition for refreshing the token
     * const shouldRefresh: boolean = store.state.auth.accessToken !== null &&
     * (error.response.status === 401 || error.response.status === 403) &&
     * retries > 0;
     */

    const shouldRefresh: boolean = false;

    if (shouldRefresh) {
      retries = retries - 1;
      /**
       * TODO: return function that refreshes the token
       * return store.dispatch('refreshToken')
       * .then(() => {
       *   return axios(originalRequest);
       * });
       */
    }

    if (retries <= 0) {
      retries = RETRY_COUNT;
    }

    return Promise.reject(error);
  });

export const HttpService = axios;
