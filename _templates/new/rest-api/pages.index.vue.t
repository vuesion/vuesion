---
to: "src/pages/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/index.vue"
unless_exists: true
---
<template>
  <vue-content-block padding="32 0" :class="$style.<%= h.inflection.camelize(name, true) %>Page">
    <vue-stack space="64">
      <vue-columns>
        <vue-column width="5/12" no-grow>
          <form @submit.prevent="onCreate<%= h.inflection.camelize(name) %>">
            <vue-inline space="24">
              <vue-text look="h1">Create <%= h.inflection.camelize(name) %></vue-text>
              <vue-inline space="8" no-wrap align-y="end">
                <vue-input
                  id="name"
                  v-model="create<%= h.inflection.camelize(name) %>Model.name"
                  label="Name"
                  name="name"
                  placeholder="Choose a unique name"
                  hide-description
                />
                <vue-button look="primary" type="submit" trailing-icon="save" :loading="loading"> Create </vue-button>
              </vue-inline>
            </vue-inline>
          </form>
        </vue-column>
      </vue-columns>

      <vue-card v-if="<%= h.inflection.pluralize(h.inflection.camelize(name, true)) %>.length > 0" space="16">
        <vue-text look="h2" weight="black">All <%= h.inflection.pluralize(h.inflection.camelize(name)) %></vue-text>

        <vue-stack space="8">
          <vue-columns>
            <vue-column width="4/12" no-grow>
              <vue-text weight="semi-bold">ID</vue-text>
            </vue-column>
            <vue-column width="4/12" no-grow>
              <vue-text weight="semi-bold">Name</vue-text>
            </vue-column>
            <vue-column width="4/12" no-grow align-x="end">
              <vue-text weight="semi-bold"></vue-text>
            </vue-column>
          </vue-columns>
          <vue-columns v-for="<%= h.inflection.camelize(name, true) %> in <%= h.inflection.pluralize(h.inflection.camelize(name, true)) %>" :key="<%= h.inflection.camelize(name, true) %>.id" align-y="center">
            <vue-column width="4/12" no-grow>
              <vue-text>{{ <%= h.inflection.camelize(name, true) %>.id }}</vue-text>
            </vue-column>
            <vue-column width="4/12" no-grow>
              <nuxt-link :to="`/<%= h.inflection.camelize(name, true) %>/${<%= h.inflection.camelize(name, true) %>.id}`">
                <vue-text>{{ <%= h.inflection.camelize(name, true) %>.name }}</vue-text>
              </nuxt-link>
            </vue-column>
            <vue-column width="4/12" no-grow align-x="end">
              <vue-inline space="8">
                <vue-button
                  look="danger"
                  trailing-icon="trash"
                  size="sm"
                  :class="$style.button"
                  @click="onDelete<%= h.inflection.camelize(name) %>Click(<%= h.inflection.camelize(name, true) %>.id)"
                />
              </vue-inline>
            </vue-column>
          </vue-columns>
        </vue-stack>
      </vue-card>
    </vue-stack>

    <vue-confirm-modal
      :show="showDialog"
      :loading="loading"
      @close="onCloseModal"
      @confirm="onDelete<%= h.inflection.camelize(name) %>"
      @abort="onCloseModal"
    />
  </vue-content-block>
</template>

<script setup lang="ts">
import { computed, <% if (auth === true) { -%>definePageMeta, <% } %>ref, useHead } from '#imports';
import { use<%= h.inflection.camelize(name) %>Store } from '~/store/<%= h.inflection.camelize(name, true) %>';
import VueContentBlock from '~/components/layout/VueContentBlock/VueContentBlock.vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueInput from '~/components/input-and-actions/VueInput/VueInput.vue';
import VueButton from '~/components/input-and-actions/VueButton/VueButton.vue';
import type { I<%= h.inflection.camelize(name) %>Create } from '~/interfaces/I<%= h.inflection.camelize(name) %>';
import VueColumns from '~/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '~/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueInline from '~/components/layout/VueInline/VueInline.vue';
import VueConfirmModal from '~/components/data-display/VueConfirmModal/VueConfirmModal.vue';
import VueCard from '~/components/data-display/VueCard/VueCard.vue';

// Deps
const store = use<%= h.inflection.camelize(name) %>Store();

// Config
useHead({ title: 'All <%= h.inflection.pluralize(h.inflection.camelize(name)) %>' });
<% if (auth === true) { -%>
definePageMeta({ middleware: 'auth' });
<% } %>
// Data
const <%= h.inflection.pluralize(h.inflection.camelize(name, true)) %> = computed(() => store.get<%= h.inflection.pluralize(h.inflection.camelize(name)) %>);
const create<%= h.inflection.camelize(name) %>Model = ref<I<%= h.inflection.camelize(name) %>Create>({
  name: '',
});
const selected<%= h.inflection.camelize(name) %>Id = ref('');
const showDialog = ref(false);
const loading = ref(false);

// Event Handler
const onCloseModal = () => (showDialog.value = false);
const onCreate<%= h.inflection.camelize(name) %> = async () => {
  loading.value = true;

  await store.create<%= h.inflection.camelize(name) %>(create<%= h.inflection.camelize(name) %>Model.value);

  create<%= h.inflection.camelize(name) %>Model.value.name = '';
  loading.value = false;
};
const onDelete<%= h.inflection.camelize(name) %>Click = (<%= h.inflection.camelize(name, true) %>Id: string) => {
  selected<%= h.inflection.camelize(name) %>Id.value = <%= h.inflection.camelize(name, true) %>Id;
  showDialog.value = true;
};
const onDelete<%= h.inflection.camelize(name) %> = async () => {
  loading.value = true;

  await store.delete<%= h.inflection.camelize(name) %>(selected<%= h.inflection.camelize(name) %>Id.value);

    loading.value = false;
  onCloseModal();
};

// Data fetching
await useAsyncData(async () => {
  await store.fetch<%= h.inflection.pluralize(h.inflection.camelize(name)) %>();
  return store.get<%= h.inflection.pluralize(h.inflection.camelize(name)) %>;
});
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.<%= h.inflection.camelize(name, true) %>Page {
  padding-top: $navbar-height;

  .button {
    padding: 0;
  }
}
</style>
