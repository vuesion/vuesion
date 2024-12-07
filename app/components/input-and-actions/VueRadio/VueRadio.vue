<template>
  <vue-inline
    space="8"
    no-wrap
    :tabindex="disabled ? -1 : 0"
    :class="[$style.VueRadio, disabled && $style.disabled, $attrs.class]"
    @click.stop.prevent="onClick"
    @keydown.space.stop.prevent="onClick"
  >
    <input
      :id="id"
      :name="name"
      :value="id"
      :checked="modelValue === id"
      type="radio"
      :required="required"
      :disabled="disabled"
      v-bind="$attrs"
      tabindex="-1"
      data-testid="radio-input"
    />
    <div :class="$style.checkmark">
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 6">
        <circle cx="3" cy="3" r="3" fill="currentColor" />
      </svg>
    </div>
    <vue-stack space="0">
      <vue-text
        :for="id"
        as="label"
        look="label"
        weight="semi-bold"
        color="text-medium"
        tabindex="-1"
        :class="[hideLabel && 'sr-only']"
      >
        <slot name="label">
          {{ label }}
        </slot>
      </vue-text>
      <vue-text
        v-if="description"
        look="support"
        color="text-low"
        :class="[$style.description, hideLabel && 'sr-only']"
        as="div"
      >
        <slot name="description">
          {{ description }}
        </slot>
      </vue-text>
    </vue-stack>
  </vue-inline>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';
import VueText from '~/app/components/typography/VueText/VueText.vue';
import VueInline from '~/app/components/layout/VueInline/VueInline.vue';
import VueStack from '~/app/components/layout/VueStack/VueStack.vue';

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
  position: relative;
  cursor: pointer;
  user-select: none;
  outline: none;

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
    position: relative;
    top: $space-2;
    height: $radio-checkmark-size;
    min-height: $radio-checkmark-size;
    width: $radio-checkmark-size;
    min-width: $radio-checkmark-size;
    background-color: $radio-checkmark-bg;
    color: $radio-checkmark-bg;
    border-radius: $radio-checkmark-border-radius;
    border: $radio-checkmark-border;
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      width: $radio-checkmark-size - $space-10;
      height: $radio-checkmark-size - $space-10;
    }
  }

  label {
    cursor: pointer;
  }

  &:hover {
    input ~ .checkmark {
      background-color: $radio-checkmark-bg-hover;
      border: $radio-checkmark-border-hover;
    }

    input {
      &:checked ~ .checkmark {
        background-color: $radio-checkmark-bg-checked-hover !important;
        border: $radio-checkmark-border-checked-hover !important;
        color: $radio-checkmark-color !important;
      }
    }
  }
  &:focus,
  &:focus-within {
    .checkmark {
      box-shadow: $radio-checkmark-outline;
    }
  }

  &.disabled {
    opacity: $radio-disabled-disabled-opacity;
  }
}
</style>
