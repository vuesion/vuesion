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
      <vue-text :for="id" as="label" weight="semi-bold" color="text-medium" tabindex="-1">
        <slot name="label">
          {{ label }}
        </slot>
      </vue-text>
    </div>
    <vue-text v-if="description" :class="$style.description" as="div">
      <slot name="description">
        {{ description }}
      </slot>
    </vue-text>
  </div>
</template>

<script setup lang="ts">
import VueText from '~/components/typography/VueText/VueText.vue';

const props = defineProps({
  id: { type: String, required: true },
  name: { type: String, required: true },
  label: { type: String, required: true },
  description: { type: String, default: null },
  required: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  modelValue: { type: String, default: null },
});
const emit = defineEmits(['click', 'update:modelValue']);
const onClick = (e: Event) => {
  e.preventDefault();

  if (!props.disabled) {
    emit('update:modelValue', props.id);
    emit('click', props.id);
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
