/* tslint:disable:no-shadowed-variable */

import Vue                               from 'vue';
import { DefaultProps, PropsDefinition } from 'vue/types/options';
import { Route, VueRouter }              from 'vue-router/types/router';

declare module 'vue/types/vue' {
  interface Vue {
    $meta?: any;
    $_veeValidate?: any;
  }

  interface VueConstructor {
    prefetch?: (options: any) => {};
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    metaInfo?: any;
    prefetch?: any;
    $_veeValidate?: any;
  }

  interface FunctionalComponentOptions<Props = DefaultProps, PropDefs = PropsDefinition<Props>> {
    metaInfo?: any;
    prefetch?: any;
    $_veeValidate?: any;
  }
}

declare module 'vue-router/types/router' {
  interface VueRouter {
    history: {
      router: VueRouter,
      base: string,
      current: Route,
      pending?: Route,
    };
  }
}
