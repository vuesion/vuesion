interface Window {
  store: any;
  __INITIAL_STATE__: any;
}

declare var nodeRequire: any;

declare module 'vue-meta' {
  const meta: any;
  export = meta;
}

declare module 'marked' {
  const marked: any;
  export = marked;
}
