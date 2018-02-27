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

declare module 'marked' {
  const marked: any;
  export = marked;
}

declare module '@storybook/vue' {
  export function storiesOf(name: string, ...params: any[]): any;
}

declare module '@storybook/addon-actions' {
  export function action(name: string, ...params: any[]): any;
}
