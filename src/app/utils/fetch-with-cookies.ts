export const $fetchWithCookies = <T>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  body: any = null,
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
