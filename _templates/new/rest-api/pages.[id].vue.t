---
to: "src/app/pages/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>/[id]/index.vue"
unless_exists: true
---
<template>
  <vue-content-block padding="32 0" :class="$style.<%= h.inflection.camelize(name, true) %>DetailsPage">
    <vue-stack space="64">
      <vue-columns>
        <vue-column width="5/12" no-grow>
          <form @submit.prevent="onUpdate<%= h.inflection.camelize(name) %>">
            <vue-stack space="24">
              <vue-inline space="8" align-y="center">
                <vue-icon-button label="Back" look="ghost" icon="arrow-left" as="nuxt-link" to="/<%= h.inflection.dasherize(h.inflection.underscore(name)) %>" />
                <vue-text look="large-title" weight="semi-bold"> Update <%= h.inflection.camelize(name) %> </vue-text>
              </vue-inline>
              <vue-inline space="16" align-y="end" no-wrap>
                <vue-input
                  id="name"
                  v-model="update<%= h.inflection.camelize(name) %>Model.name as string"
                  label="Name"
                  name="name"
                  hide-description
                  autofocus
                  required
                  validation="required"
                />
                <vue-button
                  look="primary"
                  type="submit"
                  trailing-icon="save"
                  :loading="isUpdating"
                  :disabled="!meta.valid"
                >
                  Update
                </vue-button>
              </vue-inline>
            </vue-stack>
          </form>
        </vue-column>
      </vue-columns>

      <vue-stack>
        <vue-text look="medium-title" weight="semi-bold"> Current <%= h.inflection.camelize(name) %> </vue-text>

        <vue-card v-if="current<%= h.inflection.camelize(name) %>" space="32" padding="24" class="w-fit">
          <vue-stack space="8">
            <vue-text look="support" color="low">ID: {{ current<%= h.inflection.camelize(name) %>.id }}</vue-text>
            <vue-text look="small-title" weight="semi-bold">
              {{ current<%= h.inflection.camelize(name) %>.name }}
            </vue-text>
          </vue-stack>
          <vue-columns>
            <vue-column>
              <vue-text look="support" color="low">
                Created at:
                <vue-formatted-date :date="current<%= h.inflection.camelize(name) %>.createdAt" format="dayMonthYearNumericWithTime" />
              </vue-text>
            </vue-column>
            <vue-column>
              <vue-text look="support" color="low">
                Updated at:
                <vue-formatted-date :date="current<%= h.inflection.camelize(name) %>.updatedAt" format="dayMonthYearNumericWithTime" />
              </vue-text>
            </vue-column>
          </vue-columns>
        </vue-card>
      </vue-stack>
    </vue-stack>
  </vue-content-block>
</template>

<script setup lang="ts">
import { computed, ref, useAsyncData, useHead, useRoute, watch } from '#imports';
import { useForm } from 'vee-validate';
import { use<%= h.inflection.camelize(name) %>Actions } from '@/composables/actions/use-<%= h.inflection.dasherize(h.inflection.underscore(name)) %>-actions';
import type { I<%= h.inflection.camelize(name) %>Update } from '#shared/interfaces/domain/I<%= h.inflection.camelize(name) %>';
import VueContentBlock from '~/app/components/layout/VueContentBlock/VueContentBlock.vue';
import VueText from '~/app/components/typography/VueText/VueText.vue';
import VueStack from '~/app/components/layout/VueStack/VueStack.vue';
import VueInput from '~/app/components/input-and-actions/VueInput/VueInput.vue';
import VueButton from '~/app/components/input-and-actions/VueButton/VueButton.vue';
import VueColumns from '~/app/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '~/app/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueCard from '~/app/components/data-display/VueCard/VueCard.vue';
import VueInline from '~/app/components/layout/VueInline/VueInline.vue';
import VueIconButton from '@/components/input-and-actions/VueIconButton/VueIconButton.vue';
import VueFormattedDate from '@/components/data-display/VueFormattedDate/VueFormattedDate.vue';

// Deps
useHead({ title: '<%= h.inflection.camelize(name) %> Details Page' });
const route = useRoute();
const { meta } = useForm();
const { isUpdating, current<%= h.inflection.camelize(name) %>, update<%= h.inflection.camelize(name) %>, fetch<%= h.inflection.camelize(name) %>Details } = use<%= h.inflection.camelize(name) %>Actions();

const <%= h.inflection.camelize(name, true) %>Id = computed(() => route.params.id?.toString() || '');

// update <%= h.inflection.camelize(name) %>
const update<%= h.inflection.camelize(name) %>Model = ref<I<%= h.inflection.camelize(name) %>Update>({
  name: '',
  id: '',
});
const onUpdate<%= h.inflection.camelize(name) %> = async () => {
  if (update<%= h.inflection.camelize(name) %>Model.value) {
    await update<%= h.inflection.camelize(name) %>(<%= h.inflection.camelize(name, true) %>Id.value, update<%= h.inflection.camelize(name) %>Model.value);
  }
};

// display <%= h.inflection.camelize(name) %>
await useAsyncData(async () => {
  await fetch<%= h.inflection.camelize(name) %>Details(<%= h.inflection.camelize(name, true) %>Id.value);
  return current<%= h.inflection.camelize(name) %>.value;
});

watch(
  current<%= h.inflection.camelize(name) %>,
  () => {
    update<%= h.inflection.camelize(name) %>Model.value = {
      name: current<%= h.inflection.camelize(name) %>.value?.name || '',
      id: current<%= h.inflection.camelize(name) %>.value?.id || '',
    };
  },
  { immediate: true },
);
</script>

<style lang="scss" module>
@use 'assets/_design-system.scss';

.<%= h.inflection.camelize(name, true) %>DetailsPage {
  padding-top: $navbar-height;
}
</style>
