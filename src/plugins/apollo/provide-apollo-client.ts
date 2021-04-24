import { Context } from '@nuxt/types';
import { defineNuxtPlugin, onGlobalSetup, provide } from '@nuxtjs/composition-api';
import { DefaultApolloClient } from '@vue/apollo-composable/dist';

export default defineNuxtPlugin(({ app }: Context): void => {
  onGlobalSetup(() => {
    provide(DefaultApolloClient, app.apolloProvider.defaultClient);
  });
});
