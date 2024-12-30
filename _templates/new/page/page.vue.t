---
to: "src/app/pages/<%= path %>.vue"
---
<template>
  <vue-stack space="0" as="main" :class="$style.page">
    <%= path %>
<% if (store !== 'None') { -%>

    {{ <%= h.inflection.pluralize(h.inflection.camelize(store, true)) %> }}
<% } -%>
  </vue-stack>
</template>

<script setup lang="ts">
import { <% if (store !== 'None') { -%>computed, <% } -%><% if (auth === true) { -%>definePageMeta, <% } %><% if (store !== 'None') { -%>useAsyncData, <% } -%>useHead, useI18n } from '#imports';
<% if (store !== 'None') { -%>
import { use<%= store %>Store } from '~/app/store/<%= store.toLowerCase() %>';
<% } -%>
import VueStack from '~/app/components/layout/VueStack/VueStack.vue';

// Deps
const { t } = useI18n();
<% if (store !== 'None') { -%>
const store = use<%= store %>Store();
<% } %>
// Config
<% if (auth === true) { -%>
definePageMeta({ middleware: 'auth' });
<% } %>
// Data
<% if (store !== 'None') { -%>
const <%= h.inflection.pluralize(h.inflection.camelize(store, true)) %> = computed(() => store.get<%= h.inflection.camelize(h.inflection.pluralize(store)) %>);
<% } %>
// Event Handler

// Data fetching
<% if (store !== 'None') { -%>
await useAsyncData('<%= h.inflection.pluralize(h.inflection.camelize(store)) %>', async () => {
  await store.fetch<%= h.inflection.pluralize(h.inflection.camelize(store)) %>();
  return store.get<%= h.inflection.pluralize(h.inflection.camelize(store)) %>;
});
<% } -%>

// Head
const url = 'https://vuesion.herokuapp.com/';
const logo = '/logo.png';
const title = t('pages.<%= h.pathToKey(path) %>.title' /* Title */);
const description = t(
  'pages.<%= h.pathToKey(path) %>.description' /* Description */,
);

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { name: 'robots', content: 'INDEX,FOLLOW' },
    { name: 'og:url', content: url },
    { name: 'og:site_name', content: 'vuesion' },
    { name: 'og:type', content: 'website' },
    { name: 'og:locale', content: 'en' },
    { name: 'og:title', content: title },
    { name: 'og:description', content: description },
    { name: 'og:image:url', content: logo },
  ],
});
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.page {
  // this class is only applied if you add css properties
}
</style>
