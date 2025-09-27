---
to: "src/app/pages/<%= path %>.vue"
---
<template>
  <vue-content-block padding="32 0" :class="$style.page">
    <vue-stack space="0" as="main">
      <%= path %>
<% if (stores.length > 0) { -%>
<%  for (let store of stores){ -%>
      <pre>{{ <%= h.inflection.pluralize(h.inflection.camelize(store, true)) -%> }}</pre>
<% } -%>
<% } -%>
    </vue-stack>
  </vue-content-block>
</template>

<script setup lang="ts">
import { computed, <% if (auth === true) { -%>definePageMeta, <% } %><% if (stores.length > 0) { -%>useAsyncData, <% } -%>useHead, useI18n } from '#imports';
<% if (stores.length > 0) { -%>
<%  for (let store of stores){ -%>
import { use<%= h.inflection.camelize(store, false) %>Actions } from '@/composables/actions/use-<%= h.inflection.dasherize(h.inflection.underscore(store)) %>-actions';
<% } -%>
<% } -%>
import VueContentBlock from '@/components/layout/VueContentBlock/VueContentBlock.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';

<% if (auth === true) { -%>
definePageMeta({ middleware: 'sidebase-auth', auth: { unauthenticatedOnly: false, navigateUnauthenticatedTo: '/' } });
<% } -%>

const { t } = useI18n();
<% if (stores.length > 0) { -%>
<%  for (let store of stores){ -%>
const { <%= h.inflection.pluralize(h.inflection.camelize(store, true)) %>, fetch<%= h.inflection.pluralize(h.inflection.camelize(store, false)) %> } = use<%= h.inflection.camelize(store, false) %>Actions();
<% } -%>
<% } -%>

<% if (stores.length === 1) { -%>
// Initial Data Fetching
await useAsyncData(async () => {
  await fetch<%= h.inflection.pluralize(h.inflection.camelize(stores[0], false)) %>({ selectedPage: 1, itemsPerPage: 25 });

  return <%= h.inflection.pluralize(h.inflection.camelize(stores[0], true)) %>.value;
});
<% } -%>
<% if (stores.length > 1) { -%>
// Initial Data Fetching
await useAsyncData(async () => {
  await Promise.all([
  <%  for (let store of stores){ -%>
  fetch<%= h.inflection.pluralize(h.inflection.camelize(store, false)) %>({ selectedPage: 1, itemsPerPage: 25 }),
  <% } %>]);

  return [
  <%  for (let store of stores){ -%>
  <%= h.inflection.pluralize(h.inflection.camelize(store, true)) %>.value,
  <% } %>];
});
<% } -%>

// Seo Information
const title = computed(() => t('pages.<%= h.pathToKey(path) %>.title' /* Title */));
const description = computed(() => t('pages.<%= h.pathToKey(path) %>.description' /* Description */));

useHead({
  title,
  meta: [
    { name: 'description', content: description },
  ],
});
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.page {
  // this class is only applied if you add css properties
}
</style>

