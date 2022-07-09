<template>
  <div :class="[$style.vueInput, disabled && $style.disabled, errors.length > 0 && $style.error, $attrs.class]">
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
        @click="$emit('leading-icon-click')"
      >
        <slot name="leadingIcon">
          <component :is="`vue-icon-${leadingIcon}`" />
        </slot>
      </div>

      <input
        :id="id"
        ref="input"
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

      <div
        v-if="trailingIcon || $slots.trailingIcon"
        :data-testid="`${id}-trailing-icon`"
        :class="$style.trailing"
        @click="$emit('trailing-icon-click')"
      >
        <slot name="trailingIcon">
          <component :is="`vue-icon-${trailingIcon}`" />
        </slot>
      </div>
    </div>

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
import { ShirtSize } from '~/components/prop-types';

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
  type?: string;
  readonly?: boolean;
  description?: string;
  errorMessage?: string;
  autocomplete?: string;
  leadingIcon?: string;
  trailingIcon?: string;
  size?: ShirtSize;
  sizeAttribute?: number;
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
  type: 'text',
  readonly: false,
  description: '',
  errorMessage: '',
  autocomplete: 'off',
  leadingIcon: null,
  trailingIcon: null,
  size: 'md',
  sizeAttribute: null,
  debounce: null,
});
const emit = defineEmits(['debounced-input', 'update:modelValue', 'leading-icon-click', 'trailing-icon-click', 'blur']);
const input = getDomRef(null);
const debouncedInput = debounce((value: string) => emit('debounced-input', value), props.debounce || 0);
const { errors, value, handleChange } = useField<string | number | null>(props.id, props.validation, {
  initialValue: props.modelValue,
  validateOnValueUpdate: false,
  type: props.type,
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

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<style lang="scss" module>
@import 'assets/_design-system';

.vueInput {
  display: flex;
  flex-direction: column;

  .inputWrapper {
    position: relative;
    display: flex;
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
          width: $input-trailing-icon-size;
          height: $input-trailing-icon-size;
        }
      }

      input {
        padding-right: $input-trailing-width;
      }
    }

    input {
      background-clip: padding-box !important; // remove box shadow on iOS
      outline: none;
      color: $input-color;
      font-size: $input-font-size;
      font-family: $input-font-family;
      font-weight: $input-font-weight;
      background: $input-background-color;
      border: $input-border;
      border-radius: $input-border-radius;
      padding: $input-padding;
      line-height: $input-line-height;
      width: 100%;

      &:hover {
        outline: none;
        border: $input-border-hover;
      }

      &:focus {
        outline: none;
        box-shadow: $input-outline;
      }

      &:active {
        outline: none;
      }
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
    }

    &.md {
      height: $input-control-md-height;
    }

    &.lg {
      height: $input-control-lg-height;
    }
  }

  &.error {
    .inputWrapper {
      input {
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
    width: 0;
  }

  .description {
    display: flex;
    height: $input-description-height;
    margin-top: $input-description-gap;
    white-space: nowrap;
    width: 0;
  }
}
</style>
