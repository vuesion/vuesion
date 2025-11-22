<template>
  <vue-inline
    space="8"
    no-wrap
    :tabindex="disabled ? -1 : 0"
    :class="[$style.vueCheckbox, disabled && $style.disabled, errors.length > 0 && $style.error, $attrs.class]"
    @click.stop.prevent="onClick"
    @keydown.space.stop.prevent="onClick"
  >
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
    <vue-stack space="0">
      <vue-text
        :for="id"
        as="label"
        look="label"
        weight="semi-bold"
        color="medium"
        tabindex="-1"
        :class="[hideLabel && 'sr-only']"
      >
        <slot name="label">
          {{ label }}
        </slot>
      </vue-text>
      <vue-text
        v-if="description"
        look="support-md"
        color="low"
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
import { computed, useCssModule, watch } from 'vue';
import { useField } from 'vee-validate';
import VueText from '@/components/design-system/typography/VueText/VueText.vue';
import VueIconCheckmark from '@/components/icons/VueIconCheckmark.vue';
import VueInline from '@/components/design-system/layout/VueInline/VueInline.vue';
import VueStack from '@/components/design-system/layout/VueStack/VueStack.vue';

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
  (event: 'click', value: boolean, e: Event): void;
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
const onClick = (e: Event) => {
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
@use 'assets/design-system/index' as ds;

/* stylelint-disable no-descending-specificity */
.vueCheckbox {
  position: relative;
  cursor: pointer;
  user-select: none;
  outline: none;

  label {
    cursor: pointer;
  }

  .checkmark {
    position: relative;
    top: ds.$space-2;
    height: ds.$checkbox-checkmark-size;
    width: ds.$checkbox-checkmark-size;
    background-color: ds.$checkbox-checkmark-bg;
    color: ds.$checkbox-checkmark-bg;
    border-radius: ds.$checkbox-checkmark-border-radius;
    border: ds.$checkbox-checkmark-border;
    display: flex;
    justify-content: center;
    align-items: center;

    > i {
      width: ds.$checkbox-checkmark-size;
      height: ds.$checkbox-checkmark-size;

      path {
        stroke-width: 2;
      }
    }
  }

  &:focus,
  &:focus-within {
    .checkmark {
      box-shadow: ds.$checkbox-checkmark-outline;
    }
  }

  &.disabled {
    opacity: ds.$checkbox-disabled-disabled-opacity;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  &.error {
    .description,
    label {
      color: ds.$checkbox-error-color;
    }

    .checkmark {
      border-color: ds.$checkbox-error-color;
    }

    &:hover {
      input ~ .checkmark {
        border-color: ds.$checkbox-error-color;
      }
    }
  }

  &:hover {
    input ~ .checkmark {
      color: ds.$checkbox-checkmark-color-hover;
      background-color: ds.$checkbox-checkmark-bg-hover;
      border: ds.$checkbox-checkmark-border-hover;
    }
  }

  input:checked ~ .checkmark {
    background-color: ds.$checkbox-checkmark-bg-checked !important;
    border: ds.$checkbox-checkmark-border-checked !important;
    color: ds.$checkbox-checkmark-color !important;
  }

  input:checked ~ .checkmark > svg {
    display: block;
  }

  &:hover input:checked ~ .checkmark {
    background-color: ds.$checkbox-checkmark-bg-checked-hover !important;
    border: ds.$checkbox-checkmark-border-checked-hover !important;
    color: ds.$checkbox-checkmark-color !important;
  }
}
</style>
