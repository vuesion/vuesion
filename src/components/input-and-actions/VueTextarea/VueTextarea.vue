<template>
  <div :class="[$style.vueTextarea, disabled && $style.disabled, errors.length > 0 && $style.error, $attrs.class]">
    <vue-text
      :for="id"
      look="label"
      weight="semi-bold"
      :color="errors.length > 0 ? 'danger' : 'text-medium'"
      :class="[$style.label, hideLabel && 'sr-only']"
      as="label"
    >
      {{ label }}
      <sup v-if="required">*</sup>
    </vue-text>

    <textarea
      :id="id"
      ref="inputRef"
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
      look="support"
      :color="errors.length > 0 ? 'danger' : 'text-low'"
      :class="[$style.description, hideDescription && 'sr-only']"
    >
      {{ errors.length > 0 ? errorMessage : description }}
    </vue-text>
  </div>
</template>

<script setup lang="ts">
import { useCssModule, watch } from 'vue';
import { useField } from 'vee-validate';
import _debounce from 'lodash-es/debounce.js';
import { getDomRef } from '~/composables/get-dom-ref';
import VueText from '~/components/typography/VueText/VueText.vue';

// Interface
interface TextareaProps {
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
interface TextareaEmits {
  (event: 'debounced-input', value: string, e: InputEvent): void;
  (event: 'update:modelValue', value: string, e: InputEvent): void;
  (event: 'blur', e: FocusEvent): void;
}
const props = withDefaults(defineProps<TextareaProps>(), {
  hideLabel: false,
  hideDescription: false,
  required: false,
  validation: null,
  modelValue: undefined,
  disabled: false,
  placeholder: undefined,
  autofocus: false,
  readonly: false,
  description: '',
  errorMessage: '',
  debounce: undefined,
});
const emit = defineEmits<TextareaEmits>();

// Deps
const $style = useCssModule();
const { errors, value, handleChange } = useField<string | number | null | undefined>(props.id, props.validation, {
  initialValue: props.modelValue,
  validateOnValueUpdate: false,
  syncVModel: false,
});

// Data
const inputRef = getDomRef<HTMLElement>(null);
const debouncedInput = _debounce(
  (value: string, e: InputEvent) => emit('debounced-input', value, e),
  props.debounce || 0,
);

// Event Handlers
const onInput = (e: InputEvent) => {
  const value = (e.target as HTMLInputElement).value;

  if (errors.value.length > 0) {
    handleChange(value);
  }

  emit('update:modelValue', value, e);

  if (props.debounce !== undefined) {
    debouncedInput(value);
  }
};
const onBlur = (e: FocusEvent) => {
  const value = (e.target as HTMLInputElement).value;

  handleChange(value);

  emit('blur', e);
};

// Watchers
watch(
  () => props.modelValue,
  (newModelValue) => {
    value.value = newModelValue;
  },
);
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueTextarea {
  display: flex;
  flex-direction: column;
  width: 100%;

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
    height: $input-label-height;
    margin-bottom: $input-label-gap;
    white-space: nowrap;
  }

  .description {
    display: flex;
    height: $input-description-height;
    margin-top: $input-description-gap;
    white-space: nowrap;
  }
}
</style>
