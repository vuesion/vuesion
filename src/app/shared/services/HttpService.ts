import axios, { AxiosInstance } from 'axios';
import { Store } from 'vuex';
import { IState } from '../../state';
import { RequestInterceptor } from './RequestInterceptor';
import { ResponseInterceptor } from './ResponseInterceptor';

export interface IHttpService extends AxiosInstance {
  store?: Store<IState>;
}

export const HttpService: IHttpService = axios.create();

RequestInterceptor(HttpService);
ResponseInterceptor(HttpService);
