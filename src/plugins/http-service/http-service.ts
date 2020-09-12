import { Context } from '@nuxt/types';
import { initHttpService } from '@/plugins/http-service/HttpService';

export default function({ $axios, store, redirect }: Context) {
  initHttpService($axios, store, redirect);
}
