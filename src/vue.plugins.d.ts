/* tslint:disable:no-shadowed-variable */

import Vue from 'vue';
import { MetaInfo } from 'vue-meta';
import { DefaultProps, PropsDefinition } from 'vue/types/options';
import { Route, VueRouter } from 'vue-router/types/router';
import { VeeValidateComponentOptions } from 'vee-validate';
import { IPreLoad } from './server/isomorphic';

declare module 'vue/types/vue' {
  interface Vue {
    $meta?: any;
    $_veeValidate?: VeeValidateComponentOptions;
  }

  interface VueConstructor {
    metaInfo?: MetaInfo | (() => MetaInfo);
    prefetch?: (options: IPreLoad) => Promise<any>;
    $_veeValidate?: VeeValidateComponentOptions;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    metaInfo?: MetaInfo | (() => MetaInfo);
    prefetch?: (options: IPreLoad) => Promise<any>;
    $_veeValidate?: VeeValidateComponentOptions;
  }

  interface FunctionalComponentOptions<Props = DefaultProps, PropDefs = PropsDefinition<Props>> {
    metaInfo?: MetaInfo | (() => MetaInfo);
    prefetch?: (options: IPreLoad) => Promise<any>;
    $_veeValidate?: VeeValidateComponentOptions;
  }
}

declare module 'vue-router/types/router' {
  interface VueRouter {
    history: {
      router: VueRouter;
      base: string;
      current: Route;
      pending?: Route;
    };
  }
}
