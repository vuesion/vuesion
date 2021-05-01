import { Context } from '@nuxt/types';
import { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

let isReAuthenticating = false;
let pendingRequests: any[] = [];

const flushPendingRequests = (error: any) => {
  pendingRequests.forEach((promise: any) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve();
    }
  });

  isReAuthenticating = false;
  pendingRequests = [];
};
const isAuthError = (error: AxiosError): boolean => {
  return error.response && error.response.status === 401;
};

export default ({ $axios, $auth }: Context) => {
  const onRejected = (error: AxiosError) => {
    const originalRequest: AxiosRequestConfig = error.config;

    if (isAuthError(error)) {
      if (isReAuthenticating) {
        return new Promise((resolve, reject) => {
          pendingRequests.push({ resolve, reject });
        })
          .then(() => {
            return $axios(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      isReAuthenticating = true;

      console.log('refreshing token ...'); // eslint-disable-line
      return new Promise(async (resolve, reject) => {
        try {
          await $auth.refreshTokens();

          console.log('refreshing token successful ...'); // eslint-disable-line

          flushPendingRequests(null);
          resolve($axios(originalRequest));
        } catch (e) {
          console.log('refreshing token failure ...'); // eslint-disable-line
          e.status = 403;

          flushPendingRequests(e);
          reject(e);
          $auth.logout();
        }
      });
    }

    return Promise.reject(error);
  };

  $axios.interceptors.response.use((response: AxiosResponse) => response, onRejected);
};
