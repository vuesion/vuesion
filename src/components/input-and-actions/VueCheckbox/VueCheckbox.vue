<template>
  <div
    :tabindex="disabled ? null : 0"
    :class="[$style.vueCheckbox, disabled && $style.disabled, errors.length > 0 && $style.error, $attrs.class]"
    @click.stop.prevent="onClick"
    @keypress.space.stop.prevent="onClick"
  >
    <div :class="$style.wrapper">
      <input
        :id="id"
        :name="name"
        :value="value"
        :checked="value"
        type="checkbox"
        :required="required"
        :disabled="disabled"
        v-bind="$attrs"
        tabindex="-1"
        data-testid="checkbox-input"
      />
      <div :class="$style.checkmark">
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 8">
          <path
            d="M9.207.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L3.5 5.086 7.793.793a1 1 0 011.414 0z"
            fill="currentColor"
          />
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
import { computed } from 'vue';
import { useField } from 'vee-validate';
import VueText from '@/components/typography/VueText/VueText.vue';

const props = defineProps({
  id: { type: String, required: true },
  name: { type: String, required: true },
  label: { type: String, required: true },
  description: { type: String, default: null },
  required: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  modelValue: { type: Boolean, default: false },
});
const emit = defineEmits(['click', 'update:modelValue']);
const rules = computed(() => (props.required ? 'required' : null));
const { errors, value, validate } = useField<boolean>(props.id, rules, {
  initialValue: props.modelValue,
  type: 'checkbox',
});
const onClick = async () => {
  if (!props.disabled) {
    value.value = !value.value;

    await validate({ mode: 'force' });

    emit('update:modelValue', value);
    emit('click', value);
  }
};
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<style lang="scss" module>
@import 'assets/_design-system';
.vueCheckbox {
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
    padding-left: $checkbox-checkmark-size + $checkbox-label-gap;
    line-height: $space-20;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ .checkmark {
      background-color: $checkbox-checkmark-bg-checked !important;
      border: $checkbox-checkmark-border-checked !important;
      color: $checkbox-checkmark-color !important;
    }

    &:checked ~ .checkmark > svg {
      display: block;
    }
  }

  .checkmark {
    height: $checkbox-checkmark-size;
    width: $checkbox-checkmark-size;
    background-color: $checkbox-checkmark-bg;
    color: $checkbox-checkmark-bg;
    border-radius: $checkbox-checkmark-border-radius;
    border: $checkbox-checkmark-border;
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      width: $checkbox-checkmark-size - ($space-4 + $space-2);
      height: $checkbox-checkmark-size - ($space-4 + $space-2);
    }
  }

  label {
    cursor: pointer;
    padding-left: $checkbox-label-gap;
  }

  &:hover {
    input ~ .checkmark {
      background-color: $checkbox-checkmark-bg-hover;
      border: $checkbox-checkmark-border-hover;
    }
  }

  &:focus {
    .checkmark {
      box-shadow: $checkbox-checkmark-outline;
    }
  }

  &.disabled {
    opacity: $checkbox-disabled-disabled-opacity;
  }

  &.error {
    .description,
    label {
      color: $checkbox-error-color;
    }
    .checkmark {
      border-color: $checkbox-error-color;
    }
    &:hover {
      input ~ .checkmark {
        border-color: $checkbox-error-color;
      }
    }
  }
}
</style>
