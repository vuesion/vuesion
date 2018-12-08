import { IHttpService } from './HttpService';
import { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

let isRefreshing = false;
let failedQueue: any = [];

/* istanbul ignore next because refresh token code is commented out */
function processQueue(error: any, accessToken?: string) {
  failedQueue.forEach((promise: any) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(accessToken);
    }
  });

  isRefreshing = false;
  failedQueue = [];
}

/* istanbul ignore next because refresh token code is commented out */
function isAuthError(error: AxiosError): boolean {
  return error.response && error.response.status === 401;
}

/* istanbul ignore next because refresh token code is commented out */
function replaceOldToken(request: AxiosRequestConfig, accessToken: string): AxiosRequestConfig {
  request.headers.Authorization = `Bearer ${accessToken}`;
  return request;
}

export function setupResponseInterceptor(httpService: IHttpService) {
  /* istanbul ignore next */
  const onRejected = (error: AxiosError) => {
    const originalRequest: AxiosRequestConfig = error.config;

    if (isAuthError(error)) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((accessToken: string) => {
            return httpService(replaceOldToken(originalRequest, accessToken));
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      isRefreshing = true;

      return new Promise((resolve, reject) => {
        // TODO: enable refresh token endpoint call
        // httpService.store.dispatch('auth/refreshToken').then(() => {
        //   const {
        //     auth: { accessToken },
        //   } = httpService.store.state;

        //   if (accessToken) {
        //     processQueue(null, accessToken);
        //     resolve(httpService(replaceOldToken(originalRequest, accessToken)));
        //   } else {
        //     const responseError = new Error('Error on refreshing user token');
        //     (responseError as any).status = 403;

        //     processQueue(responseError);
        //     reject(responseError);
        //     // redirect to main page in case of failure to refresh the user token.
        //     httpService.router.push('/');
        //   }
        // });

        resolve(); // TODO: disable after enable refresh token.
      });
    }

    return Promise.reject(error);
  };

  httpService.interceptors.response.use((response: AxiosResponse) => response, onRejected);
}
