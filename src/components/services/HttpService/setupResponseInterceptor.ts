import { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { HttpService, replaceOldToken } from '@/components/services/HttpService/HttpService';

function flushPendingRequests(error: any, accessToken?: string) {
  HttpService.pendingRequests.forEach((promise: any) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(accessToken);
    }
  });

  HttpService.isReAuthenticating = false;
  HttpService.pendingRequests = [];
}

const isAuthError = (error: AxiosError): boolean => {
  return error.response && error.response.status === 401;
};

export const setupResponseInterceptor = () => {
  const onRejected = (error: AxiosError) => {
    const originalRequest: AxiosRequestConfig = error.config;

    if (isAuthError(error)) {
      if (HttpService.isReAuthenticating) {
        return new Promise((resolve, reject) => {
          HttpService.pendingRequests.push({ resolve, reject });
        })
          .then((accessToken: string) => {
            return HttpService(replaceOldToken(originalRequest, accessToken));
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      HttpService.isReAuthenticating = true;

      console.log('refreshing token ...');
      return new Promise(async (resolve, reject) => {
        try {
          await HttpService.store.dispatch('auth/refreshToken');

          console.log('refreshing token successful ...');
          const {
            auth: { accessToken },
          } = HttpService.store.state;

          flushPendingRequests(null, accessToken);
          resolve(HttpService(replaceOldToken(originalRequest, accessToken)));
        } catch (e) {
          console.log('refreshing token failure ...');
          e.status = 403;

          flushPendingRequests(e);
          reject(e);
          HttpService.router.push('/');
        }
      });
    }

    return Promise.reject(error);
  };

  HttpService.interceptors.response.use((response: AxiosResponse) => response, onRejected);
};
