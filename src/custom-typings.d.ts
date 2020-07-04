interface Window {
  store: any;
  __NUXT__: any;
}

declare module 'marked' {
  const marked: any;
  export = marked;
}
