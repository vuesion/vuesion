interface Window {
  store: any;
  __INITIAL_STATE__: any;
}

declare var nodeRequire: any;

declare module 'identity-obj-proxy' {
  const $style: any;
  export = $style;
}

declare module 'vue-meta' {
  const meta: any;
  export = meta;
}
