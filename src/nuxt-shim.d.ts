import '@nuxt/types';

declare module '@nuxt/vue-app' {
  interface Context {
    $config: any;
  }
  interface NuxtAppOptions {
    $config: any;
  }
}

declare module '@nuxt/types' {
  interface Context {
    $config: any;
  }

  interface NuxtAppOptions {
    $config: any;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $config: any;
  }
}
