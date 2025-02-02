<template>
  <vue-stack
    :ref="(el: any) => (selectRef = el?.$el)"
    space="4"
    :class="[$style.vueSelect, disabled && $style.disabled, errors.length > 0 && $style.error, $attrs.class]"
    @keydown="onKeyDown"
  >
    <vue-inline space="4" align-y="center" no-wrap>
      <vue-text
        look="label"
        weight="semi-bold"
        :color="errors.length > 0 ? 'danger' : 'text-medium'"
        :class="[$style.label, hideLabel && 'sr-only']"
        as="label"
      >
        {{ label }}
        <sup v-if="required">*</sup>
      </vue-text>

      <vue-popover v-if="$slots.info && hideLabel === false">
        <template #trigger>
          <vue-text :color="errors.length > 0 ? 'danger' : 'text-medium'">
            <vue-icon-info-circle data-testid="popover-trigger" />
          </vue-text>
        </template>
        <template #content>
          <slot name="info" />
        </template>
      </vue-popover>
    </vue-inline>

    <vue-columns
      :id="'custom-' + id"
      ref="triggerRef"
      space="0"
      :padding="leadingIcon ? 0 : '0 0 0 8'"
      align-y="center"
      :data-testid="'custom-' + id"
      role="combobox"
      :aria-expanded="show"
      :aria-label="label"
      :class="[$style.customSelect, $style[size]]"
      :tabindex="disabled ? -1 : 0"
      aria-haspopup="listbox"
      @click.stop.prevent="toggleMenu"
    >
      <vue-column v-if="leadingIcon" no-grow :class="$style.icon">
        <component :is="`vue-icon-${leadingIcon}`" />
      </vue-column>
      <vue-column>
        <vue-text :color="placeholder && inputValue.length === 0 ? 'text-low' : 'text-high'">
          {{ displayItem ? displayItem.label : placeholder }}
        </vue-text>
      </vue-column>
      <vue-column no-grow>
        <vue-badge
          v-if="multiSelect && inputValue.length > 1"
          :status="badgeStatus"
          :class="$style.count"
          @click="toggleMenu"
        >
          +{{ inputValue.length - 1 }}
        </vue-badge>
      </vue-column>
      <vue-column no-grow>
        <div :class="$style.icon" :data-testid="'toggle-' + id" @click.stop.prevent="toggleMenu">
          <vue-icon-chevron-down />
        </div>
      </vue-column>
      <vue-collapse :show="show" :duration="duration">
        <vue-menu
          ref="menuRef"
          :items="options"
          :class="[$style.menu, !hideLabel && $style.withLabel, !hideDescription && $style.withDescription]"
          :style="floatingStyles"
          :data-placement="placement"
          @click="onItemClick"
          @close="toggleMenu"
        />
      </vue-collapse>
    </vue-columns>

    <vue-text
      look="support"
      :color="errors.length > 0 ? 'danger' : 'text-low'"
      :class="[$style.description, hideDescription && 'sr-only']"
    >
      {{ errors.length > 0 ? errorMessage : description }}
    </vue-text>
  </vue-stack>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, useCssModule } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { type RuleExpression, useField } from 'vee-validate';
import type { IItem } from '~/interfaces/IItem';
import { getDomRef } from '~/composables/get-dom-ref';
import type { BadgeStatus, ShirtSize } from '~/components/prop-types';
import VueIconChevronDown from '~/components/icons/VueIconChevronDown.vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import VueCollapse from '~/components/behavior/VueCollapse/VueCollapse.vue';
import VueMenu from '~/components/data-display/VueMenu/VueMenu.vue';
import VueBadge from '~/components/data-display/VueBadge/VueBadge.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueColumns from '~/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '~/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueInline from '~/components/layout/VueInline/VueInline.vue';
import VueIconInfoCircle from '~/components/icons/VueIconInfoCircle.vue';
import VuePopover from '~/components/data-display/VuePopover/VuePopover.vue';
import { autoUpdate, flip, offset, useFloating } from '@floating-ui/vue';
import type { Icon } from '~/components/icon-options';

// Interface
interface SelectProps {
  id: string;
  name: string;
  label: string;
  items: Array<IItem>;
  hideLabel?: boolean;
  hideDescription?: boolean;
  required?: boolean;
  validation?: RuleExpression<string | number | null | undefined>;
  modelValue?: string | boolean | number | IItem | Array<string | boolean | number | IItem>;
  disabled?: boolean;
  placeholder?: string;
  description?: string;
  errorMessage?: string;
  duration?: number;
  size?: ShirtSize;
  multiSelect?: boolean;
  badgeStatus?: BadgeStatus;
  leadingIcon?: Icon;
}
interface SelectEmits {
  (event: 'update:modelValue', selected: Array<IItem> | IItem): void;
}
const props = withDefaults(defineProps<SelectProps>(), {
  validation: undefined,
  modelValue: undefined,
  placeholder: '',
  description: '',
  errorMessage: '',
  duration: 250,
  size: 'md',
  badgeStatus: 'info',
  leadingIcon: undefined,
});
const emit = defineEmits<SelectEmits>();

// Deps
const $style = useCssModule();
const localValidation = computed<RuleExpression<string | number | null | undefined>>(() => props.validation);

// Methods
const getValue = (valueOrItem: any | IItem) => {
  if (valueOrItem !== undefined && valueOrItem?.value !== undefined) {
    return valueOrItem.value;
    /* c8 ignore start */
  } else if (typeof valueOrItem === 'string' && valueOrItem.length === 0) {
    return undefined;
  } else if (valueOrItem !== undefined && valueOrItem !== null) {
    return valueOrItem;
  } else {
    return undefined;
  }
  /* c8 ignore end */
};
const open = async () => {
  if (props.disabled) {
    return;
  }

  show.value = true;

  await nextTick();

  if (typeof menuRef.value?.focus !== 'undefined') {
    menuRef.value?.focus(displayItem.value);
  }
};
const close = async (focusInput = true) => {
  if (focusInput) {
    const customSelect = selectRef.value?.querySelector(`#custom-${props.id}`) as HTMLElement;
    customSelect?.focus();
  }

  show.value = false;

  await nextTick();

  handleChange(props.multiSelect ? inputValue.value.join('') : inputValue.value);
};
const toggleMenu = () => {
  const nativeSelect = document.querySelector(`#${props.id}`) as HTMLSelectElement;

  nativeSelect?.focus();

  if (show.value === true) {
    close();
  } else {
    open();
  }
};

// Data
const selectRef = getDomRef(null);
const triggerRef = getDomRef(null);
const menuRef = getDomRef<HTMLElement & { focus: (selectedItem?: IItem) => void }>(null);
const show = ref(false);
const inputValue = computed<Array<any>>(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.map((v: any | IItem) => getValue(v));
  } else {
    const value = getValue(props.modelValue);

    return /* c8 ignore start */ value !== undefined ? [value] : /* c8 ignore end */ [];
  }
});
const { errors, resetField, handleChange } = useField<string | number | null | undefined>(props.id, localValidation, {
  initialValue: inputValue.value.join(''),
  validateOnValueUpdate: false,
  type: 'default',
  syncVModel: false,
});
const options = computed<Array<IItem>>(() => {
  return props.items.map((item: IItem) => ({
    ...item,
    trailingIcon: inputValue.value.includes(item.value) ? 'checkmark' : null,
  }));
});
const displayItem = computed(() => {
  if (inputValue.value.length > 0) {
    return options.value.find((option) => option.value === inputValue.value[0]);
  } else {
    return undefined;
  }
});

// Event Handler
const onItemClick = (item: IItem) => {
  resetField();

  if (props.multiSelect) {
    const selectedValues = inputValue.value.includes(item.value)
      ? inputValue.value.filter((value) => value !== item.value)
      : [...inputValue.value, item.value];

    handleChange(selectedValues.length === 0 ? null : selectedValues.join(''));
    emit(
      'update:modelValue',
      props.items.filter((i) => selectedValues.includes(i.value)),
    );
  } else {
    handleChange(item.value);
    emit('update:modelValue', item);
    close();
  }
};
const onKeyDown = (e: KeyboardEvent) => {
  if (['Tab', 'ShiftLeft', 'ShiftRight'].includes(e.code)) {
    return;
  }

  e.preventDefault();
  e.stopPropagation();

  if (e.code === 'Escape') {
    close();
  } else {
    open();
  }
};

onClickOutside(selectRef, () => {
  close(false);
});

// Floating UI Setup
const { floatingStyles, placement } = useFloating(selectRef, menuRef, {
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
@import 'assets/_design-system.scss';
.vueSelect {
  position: relative;
  min-width: $select-min-width;

  .label {
    display: flex;
    white-space: nowrap;
  }

  .customSelect {
    position: relative;
    outline: none;
    font-size: $select-font-size;
    font-family: $select-font-family;
    font-weight: $select-font-weight;
    background: $select-background-color;
    border: $select-border;
    border-radius: $select-border-radius;
    line-height: $select-line-height;
    width: 100%;
    cursor: pointer;

    &:hover {
      outline: none;
      border: $select-border-hover;
    }

    &:focus {
      outline: none;
      box-shadow: $select-outline;
    }

    &:active {
      outline: none;
    }

    .menu {
      position: absolute;
      left: 0;
      width: 100%;

      &.withLabel {
        &[data-placement^='top'] {
          top: $space-24 !important;
        }
      }

      &.withDescription {
        &[data-placement^='bottom'] {
          top: $space-24 * -1 !important;
        }
      }
    }

    .count {
      cursor: pointer;
    }

    .icon {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $select-trailing-color;

      i {
        width: $select-trailing-icon-size;
        height: $select-trailing-icon-size;
      }
    }

    &.sm {
      .customSelect {
        height: $input-control-sm-height;
      }

      .icon {
        width: $input-control-sm-height;
        height: $input-control-sm-height;
      }
    }

    &.md {
      .customSelect {
        height: $input-control-md-height;
      }

      .icon {
        width: $input-control-md-height;
        height: $input-control-md-height;
      }
    }

    &.lg {
      .customSelect {
        height: $input-control-lg-height;
      }

      .icon {
        width: $input-control-lg-height;
        height: $input-control-lg-height;
      }
    }
  }

  .description {
    display: flex;
    white-space: nowrap;
  }

  &.error {
    select {
      background: $select-bg-error;
      border: $select-border-error;
    }

    .nativeSelect,
    .customSelect {
      background: $select-bg-error;
      border: $select-border-error;
    }
  }

  &.disabled {
    opacity: $select-disabled-disabled-opacity;
  }

  .customSelect {
    display: flex;
    width: 100%;
  }
}
</style>
