---
to: "src/pages/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/[id]/index.vue"
unless_exists: true
---
<template>
  <vue-content-block padding="32 0" :class="$style.bookDetailsPage">
    <vue-stack space="64">
      <vue-columns>
        <vue-column width="5/12" no-grow>
          <form @submit.prevent="onUpdate<%= h.inflection.camelize(name) %>">
            <vue-stack space="24">
              <vue-text look="h1">Update <%= h.inflection.camelize(name) %></vue-text>
              <vue-inline space="8" align-y="end" no-wrap>
                <vue-input
                  id="name"
                  v-model="update<%= h.inflection.camelize(name) %>Model.name as string"
                  label="Name"
                  name="name"
                  hide-description
                />
                <vue-button look="primary" type="submit" trailing-icon="save" :loading="loading">Update</vue-button>
              </vue-inline>
            </vue-stack>
          </form>
        </vue-column>
      </vue-columns>

      <vue-card space="16">
        <vue-text look="h2" weight="black"> Current <%= h.inflection.camelize(name) %> </vue-text>
        <pre>{{ current<%= h.inflection.camelize(name) %> }}</pre>
      </vue-card>
    </vue-stack>
  </vue-content-block>
</template>

<script setup lang="ts">
import { computed, <% if (auth === true) { -%>definePageMeta, <% } %>onMounted, ref, useHead, useRoute } from '#imports';
import { use<%= h.inflection.camelize(name) %>Store } from '~/store/<%= h.inflection.camelize(name, true) %>';
import VueContentBlock from '~/components/layout/VueContentBlock/VueContentBlock.vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueInput from '~/components/input-and-actions/VueInput/VueInput.vue';
import VueButton from '~/components/input-and-actions/VueButton/VueButton.vue';
import type { I<%= h.inflection.camelize(name) %>Update } from '~/interfaces/I<%= h.inflection.camelize(name) %>';
import VueColumns from '~/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '~/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueCard from '~/components/data-display/VueCard/VueCard.vue';
import VueInline from '~/components/layout/VueInline/VueInline.vue';

// Deps
const store = use<%= h.inflection.camelize(name) %>Store();
const route = useRoute();

// Config
useHead({ title: '<%= h.inflection.camelize(name) %> Details Page' });
<% if (auth === true) { -%>
definePageMeta({ middleware: 'auth' });
<% } %>
// Data
const current<%= h.inflection.camelize(name) %> = computed(() => store.getCurrent<%= h.inflection.camelize(name) %>);
const update<%= h.inflection.camelize(name) %>Model = ref<I<%= h.inflection.camelize(name) %>Update>({
  name: '',
  id: '',
});
const loading = ref(false);

// Event Handler
const onUpdate<%= h.inflection.camelize(name) %> = async () => {
  if (update<%= h.inflection.camelize(name) %>Model.value) {
    loading.value = true;

    await store.update<%= h.inflection.camelize(name) %>(update<%= h.inflection.camelize(name) %>Model.value);

    loading.value = false;
  }
};

// Data fetching
await useAsyncData(async () => {
  await store.fetch<%= h.inflection.camelize(name) %>(route.params.id.toString());
  return store.getCurrent<%= h.inflection.camelize(name) %>;
});

// Life Cycle
onMounted(() => {
  update<%= h.inflection.camelize(name) %>Model.value = {
    name: current<%= h.inflection.camelize(name) %>.value.name,
    id: current<%= h.inflection.camelize(name) %>.value.id,
  };
});
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.<%= h.inflection.camelize(name, true) %>DetailsPage {
  padding-top: $navbar-height;
}
</style>
