import Vue from 'vue';

declare module 'vue/types/vue' {
  interface VueConstructor {
    prefetch?: (options: any) => {};
  }
}
