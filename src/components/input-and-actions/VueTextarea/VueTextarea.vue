<template>
  <div :class="[$style.vueTextarea, disabled && $style.disabled, errors.length > 0 && $style.error, $attrs.class]">
    <vue-text
      :for="id"
      look="label"
      :color="errors.length > 0 ? 'danger' : 'text-medium'"
      :class="[$style.label, hideLabel && 'sr-only']"
      as="label"
    >
      {{ label }}
      <sup v-if="required">*</sup>
    </vue-text>

    <textarea
      :id="id"
      ref="input"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :readonly="readonly"
      :autofocus="autofocus"
      v-bind="$attrs"
      @input="onInput"
      @blur="onBlur"
    />

    <vue-text
      :color="errors.length > 0 ? 'danger' : 'text-medium'"
      :class="[$style.description, hideDescription && 'sr-only']"
    >
      {{ errors.length > 0 ? errorMessage : description }}
    </vue-text>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import debounce from 'lodash/debounce';
import { useField } from 'vee-validate';
import { useIntersectionObserver } from '~/composables/use-intersection-observer';
import { getDomRef } from '~/composables/get-dom-ref';
import VueText from '~/components/typography/VueText/VueText.vue';

interface InputProps {
  id: string;
  name: string;
  label: string;
  hideLabel?: boolean;
  hideDescription?: boolean;
  required?: boolean;
  validation?: string | any;
  modelValue?: string | number;
  disabled?: boolean;
  placeholder?: string;
  autofocus?: boolean;
  readonly?: boolean;
  description?: string;
  errorMessage?: string;
  debounce?: number;
}

const props = withDefaults(defineProps<InputProps>(), {
  hideLabel: false,
  hideDescription: false,
  required: false,
  validation: null,
  modelValue: null,
  disabled: false,
  placeholder: null,
  autofocus: false,
  readonly: false,
  description: '',
  errorMessage: '',
  debounce: null,
});
const emit = defineEmits(['debounced-input', 'update:modelValue', 'blur']);
const input = getDomRef(null);
const debouncedInput = debounce((value: string) => emit('debounced-input', value), props.debounce || 0);
const { errors, value, handleChange } = useField<string | number | null>(props.id, props.validation, {
  initialValue: props.modelValue,
  validateOnValueUpdate: false,
});
const onInput = (e: InputEvent) => {
  const value = (e.target as HTMLInputElement).value;

  if (errors.value.length > 0) {
    handleChange(value);
  }

  emit('update:modelValue', value, e);

  if (props.debounce !== null) {
    debouncedInput(value);
  }
};
const onBlur = (e: InputEvent) => {
  const value = (e.target as HTMLInputElement).value;

  handleChange(value);

  emit('blur', e);
};

watch(
  () => props.modelValue,
  (newModelValue) => {
    value.value = newModelValue;
  },
);

useIntersectionObserver(input, (entries: IntersectionObserverEntry[]) => {
  if (props.autofocus) {
    entries.forEach((entry) => (entry.target as HTMLInputElement).focus());
  }
});
</script>

<style lang="scss" module>
@import 'assets/_design-system';

.vueTextarea {
  display: flex;
  flex-direction: column;

  textarea {
    outline: none !important;
    color: $textarea-color;
    font-size: $textarea-font-size;
    font-family: $textarea-font-family;
    font-weight: $textarea-font-weight;
    background: $textarea-background-color;
    border: $textarea-border;
    border-radius: $textarea-border-radius;
    padding: $textarea-padding;
    line-height: $textarea-line-height;
    height: $textarea-height;
    width: 100%;

    &:hover {
      outline: none !important;
      border: $textarea-border-hover;
    }

    &:focus {
      outline: none !important;
      box-shadow: $textarea-outline;
    }

    &:active {
      outline: none !important;
    }
  }

  textarea::placeholder {
    color: $textarea-placeholder-color;
    font-size: $textarea-font-size;
    font-family: $textarea-font-family;
    font-weight: $textarea-font-weight;
    opacity: 1;
  }

  &.error {
    textarea {
      background: $textarea-bg-error;
      border: $textarea-border-error;
    }
  }

  &.disabled {
    opacity: $textarea-disabled-disabled-opacity;
  }

  .label {
    display: flex;
    height: $textarea-label-height;
    margin-bottom: $textarea-label-gap;
  }

  .description {
    display: flex;
    height: $textarea-description-height;
    margin-top: $textarea-description-gap;
  }
}
</style>
