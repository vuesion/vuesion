import VueRouter from 'vue-router';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Store }                                                               from 'vuex';
import { IState }                                                              from '../../../state';
import { setupResponseInterceptor }                                            from './ResponseInterceptor';

export interface IHttpService extends AxiosInstance {
  store?: Store<IState>;
  router?: VueRouter;
}

export const HttpService: IHttpService = axios.create();

/* istanbul ignore next */
HttpService.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // TODO: get token from HttpService.store e.g. const token: string = HttpService.store.state.auth.accessToken;
    const token: string = '';
    const baseUrl: string = HttpService.store && HttpService.store.state.app.config ? HttpService.store.state.app.config.api.baseUrl : '';
    const isExternal: boolean = config.url.indexOf('://') > -1 && config.url.indexOf('i18n') === -1;

    if (token && !isExternal && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (!isExternal && config.url !== '/log/error') {
      config.url = `${baseUrl}${config.url}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

/* istanbul ignore next */
setupResponseInterceptor(HttpService);
