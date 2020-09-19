import { Context } from '@nuxt/types';
import { initHttpService } from '@/plugins/http-service/HttpService';

export default function({ $axios, store, redirect, $config }: Context) {
  $axios.setBaseURL($config.baseUrl);
  initHttpService($axios, store, redirect);
}
