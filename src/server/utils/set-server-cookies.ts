declare global {
  var serverCookies: string | null | undefined;
}

export const setServerCookies = (cookies: string | null | undefined) => {
  globalThis.serverCookies = cookies;
};
