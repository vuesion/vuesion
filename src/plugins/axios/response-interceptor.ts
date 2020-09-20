import { Context } from '@nuxt/types';
import { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

let isReAuthenticating = false;
let pendingRequests: AxiosRequestConfig[] = [];

const isAuthError = (error: AxiosError): boolean => {
  return error.response && error.response.status === 401;
};

export default function({ $axios, $auth }: Context) {
  const onRejected = async (error: AxiosError) => {
    const originalRequest: AxiosRequestConfig = error.config;

    if (isAuthError(error)) {
      pendingRequests.push(originalRequest);

      if (isReAuthenticating) {
        return Promise.resolve();
      }

      isReAuthenticating = true;

      try {
        await $auth.refreshTokens();

        const retryRequests = pendingRequests.map((request) => {
          return $axios(request);
        });

        await Promise.all(retryRequests);

        isReAuthenticating = false;
        pendingRequests = [];
      } catch (e) {
        await $auth.logout();
      }
    }

    return Promise.reject(error);
  };

  $axios.interceptors.response.use((response: AxiosResponse) => response, onRejected);
}
