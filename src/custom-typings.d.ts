interface Window {
  store: any;
  __NUXT__: any;
  $workbox: any;
}

declare module 'marked' {
  const marked: any;
  export = marked;
}

declare module 'form-data';
