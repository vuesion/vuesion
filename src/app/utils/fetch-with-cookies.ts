export const $fetchWithCookies = <R, T = R>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  body: T | null = null,
  headers: Record<string, string> = {},
): Promise<R> => {
  if ((globalThis as any).serverCookies) {
    headers.cookie = (globalThis as any).serverCookies;
  }

  return $fetch<R>(url, {
    method,
    headers,
    body: body && JSON.stringify(body),
  });
};
