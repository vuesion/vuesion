/* tslint:disable:no-shadowed-variable */

import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    $meta?: any;
  }

  interface VueConstructor {
    prefetch?: (options: any) => {};
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    metaInfo?: any;
    prefetch?: any;
  }
}
