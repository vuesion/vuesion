import { Response, Headers } from 'node-fetch';
import mapKeys from 'lodash/mapKeys';
import identity from 'lodash/identity';
import FormData from 'form-data';
import { NuxtAxiosInstance } from '@nuxtjs/axios';

/**
 * A Fetch WebAPI implementation based on the Axios client
 */
async function axiosFetch(axios: NuxtAxiosInstance, transformer?: any, input?: any, init: any = {}) {
  // Convert the `fetch` style arguments into a Axios style config
  transformer = transformer || identity;

  const lowerCasedHeaders = mapKeys(init.headers, (_, key) => {
    return key.toLowerCase();
  });

  if (!('content-type' in lowerCasedHeaders)) {
    lowerCasedHeaders['content-type'] = 'text/plain;charset=UTF-8';
  }

  const config = transformer(
    {
      url: input,
      method: init.method || 'GET',
      data: init.body instanceof FormData ? init.body : String(init.body),
      headers: { common: {}, ...lowerCasedHeaders }, // Auth-next always expects a common key to check if the axios-module added an Authorization header
      validateStatus: () => true,
    },
    input,
    init,
  );

  let result: any = { data: {}, headers: {} };

  try {
    result = await axios.request(config);
  } catch (e) {
    console.log(e); // eslint-disable-line
  }

  // Convert the Axios style response into a `fetch` style response
  const responseBody = typeof result.data === `object` ? JSON.stringify(result.data) : result.data;

  const headers = new Headers();
  Object.entries(result.headers).forEach(([key, value]) => {
    headers.append(key, value as string);
  });

  return new Response(responseBody, {
    status: result.status,
    statusText: result.statusText,
    headers,
  });
}

export function transformAxiosToFetch(axios: NuxtAxiosInstance, transformer?: any) {
  return axiosFetch.bind(undefined, axios, transformer);
}
