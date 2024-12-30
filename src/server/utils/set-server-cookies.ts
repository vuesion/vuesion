export const setServerCookies = (cookies: string | null | undefined) => {
  globalThis.serverCookies = cookies;
};
