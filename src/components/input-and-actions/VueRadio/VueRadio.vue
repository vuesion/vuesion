<template>
  <div
    :tabindex="disabled ? null : 0"
    :class="[$style.VueRadio, disabled && $style.disabled, $attrs.class]"
    @click.stop.prevent="onClick"
    @keypress.space.stop.prevent="onClick"
  >
    <div :class="$style.wrapper">
      <input
        :id="id"
        :name="name"
        type="radio"
        :checked="modelValue === id ? 'checked' : null"
        :required="required"
        :disabled="disabled"
        v-bind="$attrs"
        :value="id"
        tabindex="-1"
      />
      <div :class="$style.checkmark">
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 6">
          <circle cx="3" cy="3" r="3" fill="currentColor" />
        </svg>
      </div>
      <vue-text
        :for="id"
        as="label"
        weight="semi-bold"
        color="text-medium"
        tabindex="-1"
        :class="[hideLabel && 'sr-only']"
      >
        <slot name="label">
          {{ label }}
        </slot>
      </vue-text>
    </div>
    <vue-text :class="[$style.description, hideLabel && 'sr-only']" as="div">
      <slot name="description">
        {{ description }}
      </slot>
    </vue-text>
  </div>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';
import VueText from '~/components/typography/VueText/VueText.vue';

// Interface
interface RadioProps {
  id: string;
  name: string;
  label: string;
  description?: string | null;
  required?: boolean;
  disabled?: boolean;
  hideLabel?: boolean;
  modelValue?: string | null;
}
interface RadioEmits {
  (event: 'click', id: string): void;
  (event: 'update:modelValue', id: string): void;
}
const props = withDefaults(defineProps<RadioProps>(), {
  description: null,
  modelValue: null,
});
const emit = defineEmits<RadioEmits>();

// Deps
const $style = useCssModule();

// Event Handlers
const onClick = (e: Event) => {
  e.preventDefault();

  if (!props.disabled) {
    emit('click', props.id);
    emit('update:modelValue', props.id);
  }
};
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';
.VueRadio {
  display: inline-block;
  position: relative;
  cursor: pointer;
  user-select: none;
  outline: none;

  .wrapper {
    display: inline-flex;
    align-items: center;
  }

  .description {
    padding-left: $radio-checkmark-size + $radio-label-gap;
    line-height: $space-20;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ .checkmark {
      background-color: $radio-checkmark-bg-checked !important;
      border: $radio-checkmark-border-checked !important;
      color: $radio-checkmark-color !important;
    }

    &:checked ~ .checkmark > svg {
      display: block;
    }
  }

  .checkmark {
    height: $radio-checkmark-size;
    width: $radio-checkmark-size;
    background-color: $radio-checkmark-bg;
    color: $radio-checkmark-bg;
    border-radius: $radio-checkmark-border-radius;
    border: $radio-checkmark-border;
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      width: $radio-checkmark-size - ($space-8 + $space-2);
      height: $radio-checkmark-size - ($space-4 + $space-2);
    }
  }

  label {
    cursor: pointer;
    padding-left: $space-8;
  }

  &:hover {
    input ~ .checkmark {
      background-color: $radio-checkmark-bg-hover;
      border: $radio-checkmark-border-hover;
    }
  }

  &:focus {
    .checkmark {
      box-shadow: $radio-checkmark-outline;
    }
  }

  &.disabled {
    opacity: $radio-disabled-disabled-opacity;
  }
}
</style>
