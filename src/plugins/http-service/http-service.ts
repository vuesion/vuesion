import { Context } from '@nuxt/types';
import { initHttpService } from '@/plugins/http-service/HttpService';

export default function ({ store, $axios, redirect }: Context) {
  initHttpService($axios, store, redirect);
}
