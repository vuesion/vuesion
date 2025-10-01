<template>
  <vue-inline
    space="8"
    no-wrap
    :tabindex="disabled ? -1 : 0"
    :class="[$style.vueToggle, disabled && $style.disabled, errors.length > 0 && $style.error, $attrs.class]"
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
      data-testid="toggle-input"
    />
    <div :class="$style.toggle">
      <div :class="$style.handle" :aria-checked="value ? 'true' : 'false'" role="checkbox" />
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
        look="support"
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
import VueText from '@/components/typography/VueText/VueText.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';

// Interface
interface ToggleProps {
  id: string;
  name: string;
  label: string;
  description?: string | null;
  required?: boolean;
  disabled?: boolean;
  hideLabel?: boolean;
  modelValue?: boolean;
}
interface ToggleEmits {
  (event: 'click', value: boolean, e: MouseEvent): void;
  (event: 'update:modelValue', value: boolean): void;
}
const props = withDefaults(defineProps<ToggleProps>(), {
  description: null,
});
const emit = defineEmits<ToggleEmits>();

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
@use 'assets/design-system/index' as ds;

/* stylelint-disable no-descending-specificity */
.vueToggle {
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

    &:checked ~ .toggle {
      background-color: ds.$toggle-bg-checked !important;

      .handle {
        background: ds.$toggle-handle-bg-checked !important;
        left: unset;
        right: ds.$space-2;
      }
    }
  }

  .toggle {
    position: relative;
    top: ds.$space-2;
    width: ds.$toggle-width;
    height: ds.$toggle-height;
    border-radius: ds.$toggle-border-radius;
    background: ds.$toggle-bg;
    display: inline-flex;
    align-items: center;

    .handle {
      position: absolute;
      width: ds.$toggle-handle-width;
      height: ds.$toggle-handle-height;
      border-radius: ds.$toggle-handle-border-radius;
      background: ds.$toggle-handle-bg;
      left: ds.$space-2;
    }
  }

  label {
    cursor: pointer;
  }

  &:hover {
    input ~ .toggle {
      background-color: ds.$toggle-bg-hover;

      .handle {
        background: ds.$toggle-handle-bg-hover;
      }
    }

    input {
      &:checked ~ .toggle {
        background-color: ds.$toggle-bg-checked-hover !important;

        .handle {
          background: ds.$toggle-handle-bg-checked-hover !important;
          left: unset;
          right: ds.$space-2;
        }
      }
    }
  }

  &:focus,
  &:focus-within {
    .toggle {
      box-shadow: ds.$toggle-outline;
    }
  }

  &.disabled {
    opacity: ds.$toggle-disabled-opacity;
  }

  &.error {
    .description,
    label {
      color: ds.$toggle-error-color;
    }

    .toggle {
      background: ds.$toggle-bg-error;

      .handle {
        background: ds.$toggle-handle-bg-error;
      }
    }

    &:hover {
      input ~ .toggle {
        background: ds.$toggle-bg-error;

        .handle {
          background: ds.$toggle-handle-bg-error;
        }
      }
    }
  }
}
</style>
