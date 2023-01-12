export const $fetchWithCookies = async <T>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  body: any = null,
  headers: Record<string, string> = {},
) => {
  const cookies = useRequestHeaders(['cookie']);

  headers.cookie = cookies.cookie as string;

  return await $fetch<T>(url, {
    method,
    headers,
    body: body && JSON.stringify(body),
  });
};
