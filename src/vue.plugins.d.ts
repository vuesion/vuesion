import Vue from 'vue';
import { DefaultProps, PropsDefinition } from 'vue/types/options';
import { VeeValidateComponentOptions } from 'vee-validate';

declare module 'vue/types/vue' {
  interface Vue {
    $_veeValidate?: VeeValidateComponentOptions;
  }

  interface VueConstructor {
    prefetch?: (options: IPrefetch) => Promise<any>;
    $_veeValidate?: VeeValidateComponentOptions;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    $_veeValidate?: VeeValidateComponentOptions;
  }

  interface FunctionalComponentOptions<Props = DefaultProps, PropDefs = PropsDefinition<Props>> {
    $_veeValidate?: VeeValidateComponentOptions;
  }
}
