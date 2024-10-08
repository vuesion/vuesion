declare global {
  // eslint-disable-next-line no-var
  var serverCookies: string | null | undefined;
}

export const setServerCookies = (cookies: string | null | undefined) => {
  globalThis.serverCookies = cookies;
};

export const $fetchWithCookies = <T>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  body: Record<string, unknown> | string | null = null,
  headers: Record<string, string> = {},
) => {
  if (globalThis.serverCookies) {
    headers.cookie = globalThis.serverCookies;
  }

  return $fetch<T>(url, {
    method,
    headers,
    body: body && JSON.stringify(body),
  });
};
