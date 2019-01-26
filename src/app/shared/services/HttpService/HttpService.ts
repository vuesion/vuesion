import VueRouter from 'vue-router';
import axios, { AxiosInstance } from 'axios';
import { Store } from 'vuex';
import { IState } from '@/app/state';
import { setupResponseInterceptor } from './setupResponseInterceptor';
import { setupRequestInterceptor } from './setupRequestInterceptor';

export interface IHttpService extends AxiosInstance {
  store?: Store<IState>;
  router?: VueRouter;
}

export let HttpService: IHttpService = axios.create();

export const initHttpService = (store?: Store<IState>, router?: VueRouter) => {
  /* istanbul ignore next */
  HttpService = axios.create({
    baseURL: store && store.state.app.config.api.baseUrl,
  });

  HttpService.store = store;
  HttpService.router = router;

  setupRequestInterceptor(HttpService);

  setupResponseInterceptor(HttpService);
};
