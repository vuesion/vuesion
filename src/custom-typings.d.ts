interface Window {
  store: any;
  __NUXT__: any;
}

declare let nodeRequire: any;

declare module 'marked' {
  const marked: any;
  export = marked;
}
