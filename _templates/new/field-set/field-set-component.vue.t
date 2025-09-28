---
to: "src/app/components/field-sets/<%= h.capitalize(name) %>FieldSet/<%= h.capitalize(name) %>FieldSet.vue"
unless_exists: true
---
<template>
  <fieldset :class="$style.<%= h.capitalize(name) %>FieldSet">
    <vue-stack space="16">
      <vue-input
        id="name"
        :model-value="model.name"
        name="name"
        :label="$t('input.name.label' /* Name */)"
        hide-description
        required
        validation="required"
        @update:model-value="onUpdateModel('name', $event)"
      />
    </vue-stack>
  </fieldset>
</template>

<script setup lang="ts">
import { computed, ref, type UnwrapRef, useCssModule, watch } from 'vue';
import { useForm } from 'vee-validate';
import type { <%= h.capitalize(name) %>FieldSetModel } from '#shared/interfaces/ui/field-sets/<%= h.capitalize(name) %>FieldSetModel';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueInput from '@/components/input-and-actions/VueInput/VueInput.vue';

// Interface
interface <%= h.capitalize(name) %>FieldSetProps {
  modelValue?: <%= h.capitalize(name) %>FieldSetModel | null;
  valid?: boolean;
}
const props = withDefaults(defineProps<<%= h.capitalize(name) %>FieldSetProps>(), {
  modelValue: undefined,
});
const emit = defineEmits<{
  (e: 'update:modelValue', model: UnwrapRef<<%= h.capitalize(name) %>FieldSetModel>): void;
  (e: 'update:valid', valid: boolean): void;
}>();

// Deps
const $style = useCssModule();
const { meta } = useForm();

// Methods
const getModelFromProps = (): <%= h.capitalize(name) %>FieldSetModel => ({
  id: props.modelValue?.id,
  name: props.modelValue?.name || '',
});

// Data
const model = ref(getModelFromProps());
const isValid = computed(() => meta.value.valid);

// Event Handlers
const onUpdateModel = (field: keyof <%= h.capitalize(name) %>FieldSetModel, value: any) => {
  model.value[field] = value;
  emit('update:modelValue', model.value);
};

// Watchers
watch(
  () => props.modelValue,
  async () => {
    model.value = getModelFromProps();
  },
  { deep: true },
);
watch(
  isValid,
  () => {
    emit('update:valid', isValid.value);
  },
  { immediate: true },
);
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.<%= h.capitalize(name) %>FieldSet {
}
</style>

