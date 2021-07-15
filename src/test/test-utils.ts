import axios, { AxiosRequestConfig } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { NuxtAxiosInstance } from '@nuxtjs/axios';

export const TestComponent = (
  setup: (props?: any, options?: any) => void,
  template = '<div/>',
  components: any = {},
): any => ({
  setup,
  template,
  components,
});

export const triggerDocument: any = {};
export const triggerWindow: any = {};

if (typeof beforeEach !== 'undefined') {
  const addEventListener = document.addEventListener;
  const removeEventListener = document.removeEventListener;

  beforeEach(() => {
    document.addEventListener = jest.fn((event, cb) => {
      triggerDocument[event] = cb;
    });

    document.removeEventListener = jest.fn((event) => {
      delete triggerDocument[event];
    });

    window.addEventListener = jest.fn((event, cb) => {
      triggerWindow[event] = cb;
    });

    window.removeEventListener = jest.fn((event) => {
      delete triggerWindow[event];
    });
  });

  afterEach(() => {
    document.addEventListener = addEventListener;
    document.removeEventListener = removeEventListener;
  });
}

export interface AxiosMock extends NuxtAxiosInstance, MockAdapter {}

export const getAxiosMock = (): AxiosMock => {
  const axiosMock: any = new MockAdapter(axios);

  axiosMock.$request = async (config?: AxiosRequestConfig) => {
    const res = await axiosMock.axiosInstance.request(config);

    return res.data;
  };
  axiosMock.$get = async (url: string, config?: AxiosRequestConfig) => {
    const res = await axiosMock.axiosInstance.get(url, config);

    return res.data;
  };
  axiosMock.$delete = async (url: string, config?: AxiosRequestConfig) => {
    const res = await axiosMock.axiosInstance.delete(url, config);

    return res.data;
  };
  axiosMock.$head = async (url: string, config?: AxiosRequestConfig) => {
    const res = await axiosMock.axiosInstance.head(url, config);

    return res.data;
  };
  axiosMock.$options = async (url: string, config?: AxiosRequestConfig) => {
    const res = await axiosMock.axiosInstance.options(url, config);

    return res.data;
  };
  axiosMock.$post = async (url: string, data?: any, config?: AxiosRequestConfig) => {
    const res = await axiosMock.axiosInstance.post(url, data, config);

    return res.data;
  };
  axiosMock.$put = async (url: string, data?: any, config?: AxiosRequestConfig) => {
    const res = await axiosMock.axiosInstance.put(url, data, config);

    return res.data;
  };
  axiosMock.$patch = async (url: string, data?: any, config?: AxiosRequestConfig) => {
    const res = await axiosMock.axiosInstance.patch(url, data, config);

    return res.data;
  };

  return axiosMock;
};

export const sleep = (ms: number): Promise<unknown> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
