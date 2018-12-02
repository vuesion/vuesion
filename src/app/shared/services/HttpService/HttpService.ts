import VueRouter from 'vue-router';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Store } from 'vuex';
import { IState } from '../../../state';
import { setupResponseInterceptor } from './setupResponseInterceptor';
import { setupRequestInterceptor } from './setupRequestInterceptor';

export interface IHttpService extends AxiosInstance {
  store?: Store<IState>;
  router?: VueRouter;
}

let baseURL;

/* istanbul ignore if */
if (!CLIENT) {
  const config = require('../../../config/AppConfig');
  baseURL = config.AppConfig.api.baseUrl;
}

export const HttpService: IHttpService = axios.create({
  baseURL,
});

/* istanbul ignore next */
setupRequestInterceptor(HttpService);

/* istanbul ignore next */
setupResponseInterceptor(HttpService);
