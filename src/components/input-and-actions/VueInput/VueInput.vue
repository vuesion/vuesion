<template>
  <div
    :class="[
      $style.vueInput,
      disabled && $style.disabled,
      (errors.length > 0 || hasError) && $style.error,
      $attrs.class,
    ]"
  >
    <vue-text
      :for="id"
      look="label"
      weight="semi-bold"
      :color="errors.length > 0 || hasError ? 'danger' : 'text-medium'"
      :class="[$style.label, hideLabel && 'sr-only']"
      as="label"
    >
      {{ label }}
      <sup v-if="required">*</sup>
    </vue-text>

    <div
      :class="[
        $style.inputWrapper,
        (leadingIcon || $slots.leadingIcon) && $style.hasLeadingContent,
        (trailingIcon || $slots.trailingIcon) && $style.hasTrailingContent,
        $style[size],
      ]"
    >
      <div
        v-if="leadingIcon || $slots.leadingIcon"
        :data-testid="`${id}-leading-icon`"
        :class="$style.leading"
        @click="$emit('leading-icon-click', $event)"
      >
        <slot name="leadingIcon">
          <component :is="`vue-icon-${leadingIcon}`" />
        </slot>
      </div>

      <div :class="$style.input">
        <slot name="selection" />

        <input
          :id="id"
          ref="inputRef"
          :name="name"
          :value="value"
          :placeholder="placeholder"
          :required="required"
          :type="type"
          :autocomplete="autocomplete"
          :disabled="disabled"
          :readonly="readonly"
          :autofocus="autofocus"
          :size="sizeAttribute || 150"
          v-bind="$attrs"
          @input="onInput"
          @blur="onBlur"
        />
      </div>

      <div
        v-if="trailingIcon || $slots.trailingIcon"
        :data-testid="`${id}-trailing-icon`"
        :class="$style.trailing"
        @click="$emit('trailing-icon-click', $event)"
      >
        <slot name="trailingIcon">
          <component :is="`vue-icon-${trailingIcon}`" />
        </slot>
      </div>
    </div>

    <vue-text
      look="support"
      :color="errors.length > 0 || hasError ? 'danger' : 'text-low'"
      :class="[$style.description, hideDescription && 'sr-only']"
    >
      {{ errors.length > 0 || hasError ? errorMessage : description }}
    </vue-text>
  </div>
</template>

<script setup lang="ts">
import { computed, useCssModule, watch } from 'vue';
import { useField } from 'vee-validate';
import _debounce from 'lodash-es/debounce.js';
import { getDomRef } from '~/composables/get-dom-ref';
import VueText from '~/components/typography/VueText/VueText.vue';
import { ShirtSize } from '~/components/prop-types';

// Interface
interface InputProps {
  id: string;
  name: string;
  label: string;
  hideLabel?: boolean;
  hideDescription?: boolean;
  required?: boolean;
  validation?: string | object;
  modelValue?: string | number;
  disabled?: boolean;
  placeholder?: string;
  autofocus?: boolean;
  type?: string;
  readonly?: boolean;
  description?: string;
  errorMessage?: string;
  autocomplete?: string;
  leadingIcon?: string;
  trailingIcon?: string;
  size?: ShirtSize;
  sizeAttribute?: number;
  debounce?: number | null;
  hasError?: boolean;
}
interface InputEmits {
  (event: 'debounced-input', value: string, e: InputEvent): void;
  (event: 'update:modelValue', value: string, e: InputEvent): void;
  (event: 'leading-icon-click', e: MouseEvent): void;
  (event: 'trailing-icon-click', e: MouseEvent): void;
  (event: 'blur', e: FocusEvent): void;
}
const props = withDefaults(defineProps<InputProps>(), {
  validation: null,
  modelValue: undefined,
  placeholder: undefined,
  type: 'text',
  description: '',
  errorMessage: '',
  autocomplete: 'off',
  leadingIcon: undefined,
  trailingIcon: undefined,
  size: 'md',
  sizeAttribute: undefined,
  debounce: undefined,
});
const emit = defineEmits<InputEmits>();

// Deps
const $style = useCssModule();

// Data
const inputRef = getDomRef<HTMLInputElement>(null);
const debouncedInput = _debounce(
  (value: string, e: InputEvent) => emit('debounced-input', value, e),
  props.debounce || 0,
);
const localValidation = computed(() => props.validation);
const { errors, value, handleChange } = useField<string | number | null | undefined>(props.id, localValidation, {
  initialValue: props.modelValue,
  validateOnValueUpdate: false,
  type: 'default',
  syncVModel: false,
});

// Event Handlers
const onInput = (e: InputEvent) => {
  const value = (e.target as HTMLInputElement).value;

  if (errors.value.length > 0) {
    handleChange(value);
  }

  emit('update:modelValue', value, e);

  if (props.debounce !== null) {
    debouncedInput(value, e);
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

// Exports
defineExpose({
  handleChange,
});
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueInput {
  position: relative;
  display: flex;
  flex-direction: column;

  .inputWrapper {
    position: relative;
    display: flex;
    align-items: flex-start;
    width: 100%;

    &.hasLeadingContent {
      .leading {
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        height: auto;
        width: $input-leading-width;
        color: $input-leading-color;

        i {
          padding-top: $space-2;
          width: $input-leading-icon-size;
          height: $input-leading-icon-size;
        }
      }

      input {
        padding-left: $input-leading-width;
      }
    }

    &.hasTrailingContent {
      .trailing {
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        height: auto;
        width: $input-trailing-width;
        color: $input-trailing-color;

        i {
          padding-top: $space-2;
          width: $input-trailing-icon-size;
          height: $input-trailing-icon-size;
        }
      }

      input {
        padding-right: $input-trailing-width;
      }
    }

    .input {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      width: 100%;
      background: $input-background-color;
      border: $input-border;
      border-radius: $input-border-radius;

      &:hover {
        outline: none;
        border: $input-border-hover;
      }

      &:focus-within {
        outline: none;
        box-shadow: $input-outline;
      }

      &:active {
        outline: none;
      }
    }

    input {
      background-clip: padding-box !important; // remove box shadow on iOS
      outline: none;
      color: $input-color;
      font-size: $input-font-size;
      font-family: $input-font-family;
      font-weight: $input-font-weight;
      border: none;
      background: transparent;
      padding: $input-padding;
      line-height: $input-line-height;
      width: 100%;
    }

    input::placeholder {
      color: $input-placeholder-color;
      font-size: $input-font-size;
      font-family: $input-font-family;
      font-weight: $input-font-weight;
      opacity: 1;
    }

    &.sm {
      height: $input-control-sm-height;

      .leading,
      .trailing,
      input {
        height: $input-control-sm-height;
      }
    }

    &.md {
      height: $input-control-md-height;

      .leading,
      .trailing,
      input {
        height: $input-control-md-height;
      }
    }

    &.lg {
      height: $input-control-lg-height;

      .leading,
      .trailing,
      input {
        height: $input-control-lg-height;
      }
    }
  }

  &.error {
    .inputWrapper {
      .input {
        background: $input-bg-error;
        border: $input-border-error;
      }
    }
  }

  &.disabled {
    opacity: $input-disabled-disabled-opacity;
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
