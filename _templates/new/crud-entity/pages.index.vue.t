---
to: "src/pages/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/index.vue"
unless_exists: true
---
<template>
  <vue-content-block :class="$style.<%= h.inflection.camelize(name, true) %>Page">
    <vue-stack space="64">
      <vue-columns>
        <vue-column width="4/12" :can-grow="false">
          <form @submit.prevent="onCreate<%= h.inflection.camelize(name) %>">
            <vue-stack space="24">
              <vue-text look="h1">Create <%= h.inflection.camelize(name) %></vue-text>
              <vue-stack space="0">
                <vue-input
                  id="name"
                  v-model="create<%= h.inflection.camelize(name) %>Model.name"
                  label="Name"
                  name="name"
                  placeholder="Choose a unique name"
                />
                <vue-button look="primary" type="submit">Create</vue-button>
              </vue-stack>
            </vue-stack>
          </form>
        </vue-column>
      </vue-columns>

      <vue-stack>
        <vue-text look="h2">All <%= h.inflection.pluralize(h.inflection.camelize(name)) %></vue-text>

        <vue-stack space="8">
          <vue-columns>
            <vue-column width="4/12" :can-grow="false">
              <vue-text look="medium-title" weight="semi-bold">ID</vue-text>
            </vue-column>
            <vue-column width="4/12" :can-grow="false">
              <vue-text look="medium-title" weight="semi-bold">Name</vue-text>
            </vue-column>
            <vue-column width="4/12" :can-grow="false" align-x="end">
              <vue-text look="medium-title" weight="semi-bold">Actions</vue-text>
            </vue-column>
          </vue-columns>
          <vue-columns v-for="<%= h.inflection.camelize(name, true) %> in <%= h.inflection.pluralize(h.inflection.camelize(name, true)) %>" :key="<%= h.inflection.camelize(name, true) %>.id">
            <vue-column width="4/12" :can-grow="false">
              <vue-text look="small-title">{{ <%= h.inflection.camelize(name, true) %>.id }}</vue-text>
            </vue-column>
            <vue-column width="4/12" :can-grow="false">
              <nuxt-link :to="localePath(`/<%= h.inflection.camelize(name, true) %>/${<%= h.inflection.camelize(name, true) %>.id}`)">
                <vue-text look="small-title">{{ <%= h.inflection.camelize(name, true) %>.name }}</vue-text>
              </nuxt-link>
            </vue-column>
            <vue-column width="4/12" :can-grow="false" align-x="end">
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
      </vue-stack>
    </vue-stack>

    <vue-confirm-modal :show="showDialog" @close="onCloseModal" @confirm="onDelete<%= h.inflection.camelize(name) %>" @abort="onCloseModal" />
  </vue-content-block>
</template>

<script setup lang="ts">
import { computed, ref, useHead } from '#imports';
import { use<%= h.inflection.camelize(name) %>Store } from '~/store/<%= h.inflection.camelize(name, true) %>';
import VueContentBlock from '~/components/layout/VueContentBlock/VueContentBlock.vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueInput from '~/components/input-and-actions/VueInput/VueInput.vue';
import VueButton from '~/components/input-and-actions/VueButton/VueButton.vue';
import { I<%= h.inflection.camelize(name) %>Create } from '~/interfaces/I<%= h.inflection.camelize(name) %>';
import { usePrefillStoreAction } from '~/composables/use-prefill-store-action';
import VueColumns from '~/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '~/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueInline from '~/components/layout/VueInline/VueInline.vue';
import VueConfirmModal from '~/components/data-display/VueConfirmModal/VueConfirmModal.vue';

// Deps
const store = use<%= h.inflection.camelize(name) %>Store();

// Config
useHead({ title: 'All <%= h.inflection.pluralize(h.inflection.camelize(name)) %>' });
<% if (auth === false) { -%>
definePageMeta({ auth: false });
<% } %>
// Data
const <%= h.inflection.pluralize(h.inflection.camelize(name, true)) %> = computed(() => store.get<%= h.inflection.pluralize(h.inflection.camelize(name)) %>);
const create<%= h.inflection.camelize(name) %>Model = ref<I<%= h.inflection.camelize(name) %>Create>({
  name: '',
  ownerId: '',
});
const selected<%= h.inflection.camelize(name) %>Id = ref('');
const showDialog = ref(false);

// Event Handler
const onCloseModal = () => (showDialog.value = false);
const onCreate<%= h.inflection.camelize(name) %> = async () => {
  await store.create<%= h.inflection.camelize(name) %>(create<%= h.inflection.camelize(name) %>Model.value);
  create<%= h.inflection.camelize(name) %>Model.value.name = '';
};
const onDelete<%= h.inflection.camelize(name) %>Click = (<%= h.inflection.camelize(name, true) %>Id: string) => {
  selected<%= h.inflection.camelize(name) %>Id.value = <%= h.inflection.camelize(name, true) %>Id;
  showDialog.value = true;
};
const onDelete<%= h.inflection.camelize(name) %> = async () => {
  await store.delete<%= h.inflection.camelize(name) %>(selected<%= h.inflection.camelize(name) %>Id.value);
  onCloseModal();
};

// Data fetching
await usePrefillStoreAction(store.fetch<%= h.inflection.pluralize(h.inflection.camelize(name)) %>, store.get<%= h.inflection.pluralize(h.inflection.camelize(name)) %>);
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
