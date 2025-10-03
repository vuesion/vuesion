<template>
  <vue-stack
    space="4"
    :class="[
      $style.vueInput,
      disabled && $style.disabled,
      (errors.length > 0 || hasError) && $style.error,
      $attrs.class,
    ]"
  >
    <vue-inline space="4" align-y="center" no-wrap>
      <vue-text
        :for="id"
        look="label"
        weight="semi-bold"
        :color="errors.length > 0 || hasError ? 'danger' : 'medium'"
        :class="[$style.label, hideLabel && 'sr-only']"
        as="label"
      >
        {{ label }}
        <sup v-if="required">*</sup>
      </vue-text>

      <vue-popover v-if="$slots.info && hideLabel === false">
        <template #trigger>
          <vue-text :color="errors.length > 0 || hasError ? 'danger' : 'medium'">
            <vue-icon-info-circle data-testid="popover-trigger" />
          </vue-text>
        </template>
        <template #content>
          <slot name="info" />
        </template>
      </vue-popover>
    </vue-inline>

    <vue-columns
      ref="triggerRef"
      space="0"
      padding="0 8"
      align-y="center"
      :class="[
        'w-full',
        $style.baseInput,
        (leadingIcon || $slots.leadingIcon) && $style.hasLeadingContent,
        (trailingIcon || $slots.trailingIcon) && $style.hasTrailingContent,
        $style[size],
      ]"
    >
      <vue-column v-if="leadingIcon || $slots.leadingIcon" no-grow>
        <div :data-testid="`${id}-leading-icon`" :class="$style.leading" @click="$emit('leading-icon-click', $event)">
          <slot name="leadingIcon">
            <component :is="`vue-icon-${leadingIcon}`" />
          </slot>
        </div>
      </vue-column>

      <vue-column>
        <vue-inline space="4" class="w-full" no-wrap>
          <slot name="selection" />

          <input
            :id="id"
            ref="inputRef"
            :name="name"
            :value="value"
            :placeholder="placeholder"
            :required="required"
            :type="type"
            :autocomplete="autocomplete === 'custom' ? 'off' : autocomplete"
            :disabled="disabled"
            :readonly="readonly"
            :autofocus="autofocus"
            :size="sizeAttribute || 150"
            v-bind="$attrs"
            @input="onInput"
            @blur="onBlur"
          />
        </vue-inline>
      </vue-column>

      <vue-column v-if="trailingIcon || $slots.trailingIcon" no-grow>
        <div
          :data-testid="`${id}-trailing-icon`"
          :class="$style.trailing"
          @click="$emit('trailing-icon-click', $event)"
        >
          <slot name="trailingIcon">
            <component :is="`vue-icon-${trailingIcon}`" />
          </slot>
        </div>
      </vue-column>

      <div
        v-if="hasMenuSlot"
        ref="menuRef"
        :class="[$style.menu, !hideLabel && $style.withLabel, !hideDescription && $style.withDescription]"
        :style="floatingStyles"
        :data-placement="placement"
      >
        <slot name="menu" />
      </div>
    </vue-columns>

    <vue-text
      look="support"
      :color="errors.length > 0 || hasError ? 'danger' : 'low'"
      :class="[$style.description, hideDescription && 'sr-only']"
    >
      {{ errors.length > 0 || hasError ? errorMessage : description }}
    </vue-text>
  </vue-stack>
</template>

<script setup lang="ts">
import { computed, useCssModule, useSlots, watch } from 'vue';
import { type RuleExpression, useField } from 'vee-validate';
import _debounce from 'lodash-es/debounce.js';
import { getDomRef } from '@/composables/components/get-dom-ref';
import type { ShirtSize } from '@/components/utils/prop-types';
import { useIntersectionObserver } from '@/composables/components/use-intersection-observer';
import VueText from '@/components/design-system/typography/VueText/VueText.vue';
import VueStack from '@/components/design-system/layout/VueStack/VueStack.vue';
import VueInline from '@/components/design-system/layout/VueInline/VueInline.vue';
import VueColumns from '@/components/design-system/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/design-system/layout/VueColumns/VueColumn/VueColumn.vue';
import type { Icon } from '@/components/utils/icon-options';
import VuePopover from '@/components/design-system/overlays/VuePopover/VuePopover.vue';
import VueIconInfoCircle from '@/components/icons/VueIconInfoCircle.vue';
import { autoUpdate, flip, offset, useFloating } from '@floating-ui/vue';

// Interface
interface InputProps {
  id: string;
  name: string;
  label: string;
  hideLabel?: boolean;
  hideDescription?: boolean;
  required?: boolean;
  validation?: RuleExpression<string | number | null | undefined>;
  modelValue?: string | number;
  disabled?: boolean;
  placeholder?: string;
  autofocus?: boolean;
  type?: string;
  readonly?: boolean;
  description?: string;
  errorMessage?: string;
  autocomplete?: string;
  leadingIcon?: Icon;
  trailingIcon?: Icon;
  size?: ShirtSize;
  sizeAttribute?: number;
  debounce?: number | null;
  hasError?: boolean;
}
interface InputEmits {
  (event: 'debounced-input', value: string, e: Event): void;
  (event: 'update:modelValue', value: string, e: Event): void;
  (event: 'leading-icon-click', e: MouseEvent): void;
  (event: 'trailing-icon-click', e: MouseEvent): void;
  (event: 'blur', e: FocusEvent): void;
}
const props = withDefaults(defineProps<InputProps>(), {
  validation: undefined,
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
const $slots = useSlots();

// Data
const inputRef = getDomRef<HTMLInputElement>(null);
const triggerRef = getDomRef(null);
const menuRef = getDomRef(null);
const debouncedInput = _debounce((value: string, e: Event) => emit('debounced-input', value, e), props.debounce || 0);
const localValidation = computed<RuleExpression<string | number | null | undefined>>(() => props.validation);
const { errors, value, handleChange } = useField<string | number | null | undefined>(props.id, localValidation, {
  initialValue: props.modelValue,
  validateOnValueUpdate: false,
  type: 'default',
  syncVModel: false,
});
const hasMenuSlot = computed(() => {
  if ($slots.menu && $slots.menu().length > 0 && $slots.menu()[0].props) {
    return $slots.menu()[0].props?.show;
  }
  return false;
});

// Event Handlers
const onInput = (e: Event) => {
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

useIntersectionObserver(inputRef, (entries: IntersectionObserverEntry[]) => {
  if (props.autofocus) {
    entries.forEach((entry) => (entry.target as HTMLInputElement).focus());
  }
});

// Watchers
watch(
  () => props.modelValue,
  (newModelValue) => {
    value.value = newModelValue;
    if (props.autocomplete !== 'custom' && errors.value.length > 0) {
      handleChange(newModelValue);
    }
  },
);

// Exports
defineExpose({
  handleChange,
});

// Floating UI Setup
const { floatingStyles, placement } = useFloating(triggerRef, menuRef, {
  placement: 'bottom-start',
  middleware: [offset(4), flip({ fallbackPlacements: ['bottom-end', 'top-start', 'top-end'] })],
  whileElementsMounted: autoUpdate,
});
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<style lang="scss" module>
@use 'assets/design-system/index' as ds;

.vueInput {
  position: relative;
  width: 100%;

  .baseInput {
    position: relative;
    width: 100%;
    background: ds.$input-background-color;
    border: ds.$input-border;
    border-radius: ds.$input-border-radius;

    &:hover {
      outline: none;
      border: ds.$input-border-hover;
    }

    &:focus-within {
      outline: none;
      box-shadow: ds.$input-outline;
      z-index: 1;
    }

    &:active {
      outline: none;
    }

    &.hasLeadingContent {
      padding-left: 0;
    }

    .leading {
      cursor: pointer;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      color: ds.$input-leading-color;

      i {
        padding-top: ds.$space-2;
        width: ds.$input-leading-icon-size;
        height: ds.$input-leading-icon-size;
      }
    }

    &.hasTrailingContent {
      padding-right: 0;
    }

    .trailing {
      cursor: pointer;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      color: ds.$input-trailing-color;

      i {
        padding-top: ds.$space-2;
        width: ds.$input-trailing-icon-size;
        height: ds.$input-trailing-icon-size;
      }
    }

    input {
      background: transparent;
      background-clip: padding-box !important; // remove box shadow on iOS
      outline: none;
      color: ds.$input-color;
      font-size: ds.$input-font-size;
      font-family: ds.$input-font-family;
      font-weight: ds.$input-font-weight;
      border: none;
      line-height: ds.$input-line-height;
      width: 100%;
    }

    input::placeholder {
      color: ds.$input-placeholder-color;
      font-size: ds.$input-font-size;
      font-family: ds.$input-font-family;
      font-weight: ds.$input-font-weight;
      opacity: 1;
    }

    &.sm {
      height: ds.$input-control-sm-height;

      .leading,
      .trailing {
        width: ds.$input-control-sm-height;
        height: ds.$input-control-sm-height;
      }

      input {
        height: ds.$input-control-sm-height;
      }
    }

    &.md {
      height: ds.$input-control-md-height;

      .leading,
      .trailing {
        width: ds.$input-control-md-height;
        height: ds.$input-control-md-height;
      }

      input {
        height: ds.$input-control-md-height;
      }
    }

    &.lg {
      height: ds.$input-control-lg-height;

      .leading,
      .trailing {
        width: ds.$input-control-lg-height;
        height: ds.$input-control-lg-height;
      }

      input {
        height: ds.$input-control-lg-height;
      }
    }
  }

  .label {
    display: flex;
    white-space: nowrap;
  }

  .menu {
    position: absolute;
    left: 0;
    width: max-content;
  }

  .description {
    display: flex;
    white-space: nowrap;
  }

  &.error {
    .baseInput {
      background: ds.$input-bg-error;
      border: ds.$input-border-error;
    }
  }

  &.disabled {
    opacity: ds.$input-disabled-disabled-opacity;
  }
}
</style>
