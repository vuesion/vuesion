---
to: "src/components/forms/<%= h.capitalize(name) %>Form/<%= h.capitalize(name) %>Form.vue"
unless_exists: true
---
<template>
  <form id="<%= h.inflection.dasherize(h.inflection.underscore(name)) %>-form" :class="$style.<%= h.capitalize(name) %>Form" @submit.prevent.stop="onSubmit">
    <vue-stack space="24">
      <vue-input
        id="name"
        v-model="model.name"
        name="name"
        :label="$t('input.name.label' /* Name */)"
        :placeholder="$t('input.name.placeholder' /* Name PlaceHolder */)"
        hide-description
        required
        validation="required"
      />

      <vue-inline space="8" align-x="end">
        <vue-button look="ghost" :disabled="loading" type="reset" @click="$emit('cancel')">
          {{ $t('common.Cancel' /* Cancel */) }}
        </vue-button>
        <vue-button :disabled="meta.valid === false" look="primary" type="submit">
          {{ $t('common.Submit' /* Submit */) }}
        </vue-button>
      </vue-inline>
    </vue-stack>
  </form>
</template>

<script setup lang="ts">
import { computed, ref, type UnwrapRef, useCssModule, watch } from 'vue';
import type { I<%= h.capitalize(name) %> } from '~/interfaces/I<%= h.capitalize(name) %>';
import type { I<%= h.capitalize(name) %>FormModel } from '~/interfaces/forms/<%= h.capitalize(name) %>FormModel';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueInput from '~/components/input-and-actions/VueInput/VueInput.vue';
import VueButton from '~/components/input-and-actions/VueButton/VueButton.vue';
import VueInline from '~/components/layout/VueInline/VueInline.vue';
import { useForm } from 'vee-validate';

// Interface
interface <%= h.capitalize(name) %>FormProps {
  <%= name %>?: I<%= h.capitalize(name) %> | null;
  loading?: boolean;
}
const props = withDefaults(defineProps<<%= h.capitalize(name) %>FormProps>(), {
  <%= name %>: undefined,
});
const emit = defineEmits<{
  (e: 'cancel'): void;
  (e: 'create', model: UnwrapRef<I<%= h.capitalize(name) %>FormModel>): void;
  (e: 'update', model: UnwrapRef<I<%= h.capitalize(name) %>FormModel>): void;
}>();

// Deps
const $style = useCssModule();
const { meta } = useForm();

// Methods
const getModelFromProps = (): I<%= h.capitalize(name) %>FormModel => ({
  id: props.<%= name %>?.id,
  name: props.<%= name %>?.name || '',
});

// Data
const isNew = computed(() => !props.<%= name %>?.id);
const model = ref(getModelFromProps());

// Event Handlers
const onSubmit = () => {
  if (isNew.value) {
    emit('create', model.value);
  } else {
    emit('update', model.value);
  }
};

// Watchers
watch(
  () => props.<%= name %>,
  () => {
    model.value = getModelFromProps();
  },
  { deep: true },
);
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.<%= h.capitalize(name) %>Form {
}
</style>

