---
to: "src/pages/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/[id].vue"
unless_exists: true
---
<template>
  <vue-content-block :class="$style.<%= h.inflection.camelize(name, true) %>DetailsPage">
    <vue-stack space="64">
      <vue-columns>
        <vue-column width="4/12" :can-grow="false">
          <form @submit.prevent="onUpdate<%= h.inflection.camelize(name) %>">
            <vue-stack space="24">
              <vue-text look="h1">Update <%= h.inflection.camelize(name) %></vue-text>
              <vue-stack space="0">
                <vue-input id="name" v-model="update<%= h.inflection.camelize(name) %>Model.name" label="Name" name="name" />
                <vue-button look="primary" type="submit">Update</vue-button>
              </vue-stack>
            </vue-stack>
          </form>
        </vue-column>
      </vue-columns>

      <vue-text>
        Current <%= h.inflection.camelize(name) %>:
        <pre>{{ current<%= h.inflection.camelize(name) %> }}</pre>
      </vue-text>
    </vue-stack>
  </vue-content-block>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, useHead, useRoute } from '#imports';
import { use<%= h.inflection.camelize(name) %>Store } from '~/store/<%= h.inflection.camelize(name, true) %>';
import VueContentBlock from '~/components/layout/VueContentBlock/VueContentBlock.vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueInput from '~/components/input-and-actions/VueInput/VueInput.vue';
import VueButton from '~/components/input-and-actions/VueButton/VueButton.vue';
import { I<%= h.inflection.camelize(name) %>Update } from '~/interfaces/I<%= h.inflection.camelize(name) %>';
import { usePrefillStoreAction } from '~/composables/use-prefill-store-action';
import VueColumns from '~/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '~/components/layout/VueColumns/VueColumn/VueColumn.vue';

// Deps
const store = use<%= h.inflection.camelize(name) %>Store();
const route = useRoute();

// Config
useHead({ title: '<%= h.inflection.camelize(name) %> Details Page' });
<% if (auth === false) { -%>
definePageMeta({ auth: false });
<% } %>
// Data
const current<%= h.inflection.camelize(name) %> = computed(() => store.getCurrent<%= h.inflection.camelize(name) %>);
const update<%= h.inflection.camelize(name) %>Model = ref<I<%= h.inflection.camelize(name) %>Update>({
  name: '',
  ownerId: '',
  id: '',
});

// Event Handler
const onUpdate<%= h.inflection.camelize(name) %> = async () => {
  if (update<%= h.inflection.camelize(name) %>Model.value) {
    await store.update<%= h.inflection.camelize(name) %>(update<%= h.inflection.camelize(name) %>Model.value);
  }
};

// Data fetching
await usePrefillStoreAction(async () => await store.fetch<%= h.inflection.camelize(name) %>(route.params.id.toString()), store.getCurrent<%= h.inflection.camelize(name) %>);

onMounted(() => {
  update<%= h.inflection.camelize(name) %>Model.value = { ...current<%= h.inflection.camelize(name) %>.value };
});
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.<%= h.inflection.camelize(name, true) %>DetailsPage {
  padding-top: $navbar-height;
}
</style>
