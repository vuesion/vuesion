---
to: "src/pages/<%= path %>.vue"
---
<template>
  <vue-content-block :class="$style.page">
    <%= path %>
<% if (store !== 'None') { -%>

    {{ <%= h.inflection.pluralize(h.inflection.camelize(store, true)) %> }}
<% } -%>
  </vue-content-block>
</template>

<script setup lang="ts">
import { computed, useHead } from '#imports';
<% if (store !== 'None') { -%>
import { usePrefillStoreAction } from '~/composables/use-prefill-store-action';
import { use<%= store %>Store } from '~/store/<%= store.toLowerCase() %>';
<% } -%>
import VueContentBlock from '~/components/layout/VueContentBlock/VueContentBlock.vue';

// Deps
<% if (store !== 'None') { -%>
const store = use<%= store %>Store();
<% } %>
// Config
useHead({ title: 'Page Title' });
<% if (auth === false) { -%>
definePageMeta({ auth: false });
<% } %>
// Data
<% if (store !== 'None') { -%>
const <%= h.inflection.pluralize(h.inflection.camelize(store, true)) %> = computed(() => store.get<%= h.inflection.camelize(h.inflection.pluralize(store)) %>);
<% } %>
// Event Handler

// Data fetching
<% if (store !== 'None') { -%>
usePrefillStoreAction(store.fetch<%= h.inflection.camelize(h.inflection.pluralize(store)) %>, store.get<%= h.inflection.camelize(h.inflection.pluralize(store)) %>);
<% } -%>
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.page {
  padding-top: $navbar-height;
}
</style>

