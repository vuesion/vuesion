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
        <vue-icon-checkmark />
      </div>
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
    </div>
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
  </div>
</template>

<script setup lang="ts">
import { computed, useCssModule, watch } from 'vue';
import { useField } from 'vee-validate';
import VueText from '~/components/typography/VueText/VueText.vue';
import VueIconCheckmark from '~/components/icons/VueIconCheckmark.vue';

// Interface
interface CheckboxProps {
  id: string;
  name: string;
  label: string;
  description?: string | null;
  required?: boolean;
  disabled?: boolean;
  hideLabel?: boolean;
  modelValue?: boolean;
}
interface CheckboxEmits {
  (event: 'click', value: boolean, e: MouseEvent): void;
  (event: 'update:modelValue', value: boolean): void;
}
const props = withDefaults(defineProps<CheckboxProps>(), {
  description: null,
});
const emit = defineEmits<CheckboxEmits>();

// Deps
const $style = useCssModule();
const rules = computed(() => (props.required ? 'required' : undefined));
const { errors, value, validate } = useField<boolean>(props.id, rules, {
  initialValue: props.modelValue,
  type: 'checkbox',
  syncVModel: false,
  validateOnMount: props.required,
});

// Event Handler
const onClick = (e: MouseEvent) => {
  if (!props.disabled) {
    emit('update:modelValue', !value.value);
    emit('click', value.value, e);
  }
};

// Watcher
watch(
  () => props.modelValue,
  async () => {
    value.value = props.modelValue;

    await validate({ mode: 'force' });
  },
);
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';
.vueCheckbox {
  display: inline-block;
  position: relative;
  cursor: pointer;
  user-select: none;
  outline: none;

  .wrapper {
    display: inline-flex;
    align-items: center;

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

      > i {
        width: $checkbox-checkmark-size;
        height: $checkbox-checkmark-size;

        path {
          stroke-width: 2;
        }
      }
    }

    label {
      cursor: pointer;
      padding-left: $checkbox-label-gap;
    }
  }

  .description {
    padding-left: $checkbox-checkmark-size + $checkbox-label-gap;
    line-height: $space-20;
  }

  &:hover {
    input ~ .checkmark {
      color: $checkbox-checkmark-color-hover;
      background-color: $checkbox-checkmark-bg-hover;
      border: $checkbox-checkmark-border-hover;
    }

    input {
      &:checked ~ .checkmark {
        background-color: $checkbox-checkmark-bg-checked-hover !important;
        border: $checkbox-checkmark-border-checked-hover !important;
        color: $checkbox-checkmark-color !important;
      }
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
