---
to: "src/app/pages/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/index.vue"
unless_exists: true
---
<template>
  <vue-content-block padding="32 0" :class="$style.<%= h.inflection.camelize(name, true) %>Page">
    <vue-stack space="64">
      <vue-columns>
        <vue-column width="5/12" no-grow>
          <form @submit.prevent="onCreate<%= h.inflection.camelize(name) %>">
            <vue-inline space="24">
              <vue-text look="large-title" weight="semi-bold">Create <%= h.inflection.camelize(name) %></vue-text>
              <vue-inline space="16" no-wrap align-y="end">
                <vue-input
                  id="name"
                  v-model="create<%= h.inflection.camelize(name) %>Model.name"
                  label="Name"
                  name="name"
                  placeholder="Choose a Name"
                  hide-description
                  autofocus
                  required
                  validation="required"
                />
                <vue-button
                  look="primary"
                  type="submit"
                  trailing-icon="save"
                  :loading="isCreating"
                  :disabled="!meta.valid"
                >
                  Create
                </vue-button>
              </vue-inline>
            </vue-inline>
          </form>
        </vue-column>
      </vue-columns>

      <vue-card padding="24" space="24">
        <vue-text look="medium-title" weight="semi-bold"> {{ <%= h.inflection.camelize(name, true) %>Count }} <%= h.inflection.camelize(name) %> </vue-text>

        <vue-columns>
          <vue-column>
            <vue-input
              id="search"
              v-model="searchQuery"
              name="search"
              label="Search"
              placeholder="Search by name..."
              hide-label
              hide-description
              leading-icon="search"
              :trailing-icon="searchQuery.trim().length > 0 ? 'times-circle' : undefined"
              :debounce="500"
              @debounced-input="onSearch"
              @trailing-icon-click="clearSearch"
            />
          </vue-column>
          <vue-column width="2/10" no-shrink>
            <vue-select
              id="order"
              v-model="selectedOrder"
              name="order"
              label="Order"
              :items="orderOptions"
              hide-label
              hide-description
              @update:model-value="onOrderChange"
            />
          </vue-column>
        </vue-columns>

        <vue-box v-if="isReading" align-y="center" align-x="center" padding="64">
          <vue-loader />
        </vue-box>
        <vue-stack v-else space="8">
          <vue-columns>
            <vue-column>
              <vue-text weight="semi-bold">Name</vue-text>
            </vue-column>
            <vue-column no-grow>
              <vue-text weight="semi-bold"></vue-text>
            </vue-column>
          </vue-columns>
          <vue-columns v-for="<%= h.inflection.camelize(name, true) %> in <%= h.inflection.pluralize(h.inflection.camelize(name, true)) %>" :key="<%= h.inflection.camelize(name, true) %>.id" align-y="center">
            <vue-column>
              <nuxt-link :to="`/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/${<%= h.inflection.camelize(name, true) %>.id}`">
                <vue-text>{{ <%= h.inflection.camelize(name, true) %>.name }}</vue-text>
              </nuxt-link>
            </vue-column>
            <vue-column no-grow>
              <vue-inline space="8">
                <vue-icon-button
                  label="Delete"
                  icon="trash"
                  look="ghost"
                  @click="onDelete<%= h.inflection.camelize(name) %>Click(<%= h.inflection.camelize(name, true) %>.id)"
                />
              </vue-inline>
            </vue-column>
          </vue-columns>
        </vue-stack>

        <vue-pagination
          :selected-page="selectedPage"
          :items-per-page="itemsPerPage"
          :number-of-records="<%= h.inflection.camelize(name, true) %>Count"
          @update:selected-page="onSelectedPageChange"
          @update:items-per-page="onItemsPerPageChange"
        />
      </vue-card>
    </vue-stack>

    <vue-confirm-modal
      :show="showDialog"
      :loading="isDeleting"
      @close="onCloseModal"
      @confirm="onDelete<%= h.inflection.camelize(name) %>"
      @abort="onCloseModal"
    />
  </vue-content-block>
</template>

<script setup lang="ts">
import { computed, ref, useAsyncData, useHead } from '#imports';
import { useForm } from 'vee-validate';
import { usePagination } from '@/composables/components/use-pagination';
import { use<%= h.inflection.camelize(name) %>Actions } from '@/composables/actions/use-<%= h.inflection.dasherize(h.inflection.underscore(name)) %>-actions';
import type { IItem } from '#shared/interfaces/IItem';
import type { IListQuery } from '#shared/interfaces/IListQuery';
import type { I<%= h.inflection.camelize(name) %>Create } from '#shared/interfaces/I<%= h.inflection.camelize(name) %>';
import VueContentBlock from '@/components/layout/VueContentBlock/VueContentBlock.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueInput from '@/components/input-and-actions/VueInput/VueInput.vue';
import VueButton from '@/components/input-and-actions/VueButton/VueButton.vue';
import VueColumns from '@/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';
import VueConfirmModal from '@/components/data-display/VueConfirmModal/VueConfirmModal.vue';
import VueCard from '@/components/data-display/VueCard/VueCard.vue';
import VuePagination from '@/components/navigation/VuePagination/VuePagination.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueLoader from '@/components/data-display/VueLoader/VueLoader.vue';
import VueIconButton from '@/components/input-and-actions/VueIconButton/VueIconButton.vue';
import VueSelect from '@/components/input-and-actions/VueSelect/VueSelect.vue';

// Deps
useHead({ title: 'All <%= h.inflection.camelize(name) %>' });
const { meta } = useForm();
const {
  isReading,
  isCreating,
  isDeleting,
  <%= h.inflection.pluralize(h.inflection.camelize(name, true)) %>,
  <%= h.inflection.camelize(name, true) %>Count,
  create<%= h.inflection.camelize(name) %>,
  delete<%= h.inflection.camelize(name) %>,
  fetch<%= h.inflection.camelize(h.inflection.pluralize(name)) %>,
} = use<%= h.inflection.camelize(name) %>Actions();

// create <%= h.inflection.camelize(name) %>
const create<%= h.inflection.camelize(name) %>Model = ref<I<%= h.inflection.camelize(name) %>Create>({
  name: '',
});
const onCreate<%= h.inflection.camelize(name) %> = async () => {
  await create<%= h.inflection.camelize(name) %>(create<%= h.inflection.camelize(name) %>Model.value);
  await fetch<%= h.inflection.camelize(name) %>List();
  create<%= h.inflection.camelize(name) %>Model.value.name = '';
};

// delete <%= h.inflection.camelize(name) %>
const selected<%= h.inflection.camelize(name) %>Id = ref('');
const showDialog = ref(false);
const onCloseModal = () => (showDialog.value = false);
const onDelete<%= h.inflection.camelize(name) %>Click = (<%= h.inflection.camelize(name, true) %>Id: string) => {
  selected<%= h.inflection.camelize(name) %>Id.value = <%= h.inflection.camelize(name, true) %>Id;
  showDialog.value = true;
};
const onDelete<%= h.inflection.camelize(name) %> = async () => {
  await delete<%= h.inflection.camelize(name) %>(selected<%= h.inflection.camelize(name) %>Id.value);

  onCloseModal();

  await fetch<%= h.inflection.camelize(name) %>List();
};

// search <%= h.inflection.camelize(name) %>
const searchQuery = ref('');
const onSearch = async () => {
  selectedPage.value = 1;

  await fetch<%= h.inflection.camelize(name) %>List();
};
const clearSearch = async () => {
  searchQuery.value = '';

  await onSearch();
};

// sort <%= h.inflection.camelize(name) %>
const selectedOrder = ref<IItem<IListQuery['sort']>>({
  label: 'Created By',
  value: 'createdAt:desc',
  leadingIcon: 'arrow-down',
});
const orderOptions = computed<Array<IItem<IListQuery['sort']>>>(() => [
  { label: 'Created Desc', value: 'createdAt:desc', leadingIcon: 'arrow-down' },
  { label: 'Created Asc', value: 'createdAt:asc', leadingIcon: 'arrow-up' },
  { label: 'Updated Desc', value: 'updatedAt:desc', leadingIcon: 'arrow-down' },
  { label: 'Updated Asc', value: 'updatedAt:asc', leadingIcon: 'arrow-up' },
  { label: 'Name Desc', value: 'name:desc', leadingIcon: 'arrow-down' },
  { label: 'Name Asc', value: 'name:asc', leadingIcon: 'arrow-up' },
]);
const onOrderChange = async () => {
  await fetch<%= h.inflection.camelize(name) %>List();
};

// display <%= h.inflection.camelize(name) %>
const fetch<%= h.inflection.camelize(name) %>List = () =>
  fetch<%= h.inflection.camelize(h.inflection.pluralize(name)) %>({
    q: searchQuery.value,
    sort: selectedOrder.value?.value,
    selectedPage: selectedPage.value,
    itemsPerPage: itemsPerPage.value,
  });
const { selectedPage, itemsPerPage, onSelectedPageChange, onItemsPerPageChange } = usePagination(fetch<%= h.inflection.camelize(name) %>List, 5);
await useAsyncData(async () => {
  await fetch<%= h.inflection.camelize(name) %>List();
  return <%= h.inflection.pluralize(h.inflection.camelize(name, true)) %>.value;
});
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.<%= h.inflection.camelize(name, true) %>Page {
}
</style>
