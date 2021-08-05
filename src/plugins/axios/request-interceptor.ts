import { Context } from '@nuxt/types';
import { AxiosRequestConfig, AxiosError } from 'axios';

export default ({ $axios }: Context) => {
  $axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      return {
        ...config,
        headers: {
          common: {}, // Auth-next always expects a common key to check if the axios-module added an Authorization header
          ...config.headers,
        },
      };
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    },
  );
};
