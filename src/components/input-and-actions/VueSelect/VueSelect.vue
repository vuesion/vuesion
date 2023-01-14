<template>
  <div ref="selectRef" :class="[$style.vueSelect, $attrs.class]">
    <div :class="[disabled && $style.disabled, errors.length > 0 && $style.error]" @keydown="onKeyDown">
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

      <div :class="$style.selectWrapper">
        <select
          :id="id"
          :data-testid="'native-' + id"
          :name="name"
          :title="label"
          :required="required"
          :disabled="disabled"
          :multiple="multiSelect"
          :class="[
            $style.nativeSelect,
            placeholder && inputValue.length === 0 && $style.hasPlaceholder,
            multiSelect && inputValue.length > 1 && $style.hasCount,
            $style[size],
          ]"
          v-bind="$attrs"
          @input="onInput"
        >
          <option v-if="placeholder && inputValue.length === 0" value="" disabled selected>{{ placeholder }}</option>
          <option
            v-for="(option, idx) in options"
            :key="`${option.value}-${idx}`"
            :value="option.value"
            :selected="inputValue.includes(option.value)"
          >
            {{ option.label }}
          </option>
        </select>

        <div
          :id="'custom-' + id"
          :data-testid="'custom-' + id"
          :aria-expanded="show.toString()"
          :class="[
            $style.customSelect,
            placeholder && inputValue.length === 0 && $style.hasPlaceholder,
            multiSelect && inputValue.length > 1 && $style.hasCount,
            $style[size],
          ]"
          :tabindex="disabled ? -1 : 0"
          role="listbox"
          @click.stop.prevent="toggleMenu"
        >
          {{ displayItem ? displayItem.label : placeholder }}
        </div>

        <vue-badge
          v-if="multiSelect && inputValue.length > 1"
          :status="badgeStatus"
          :class="$style.count"
          @click="toggleMenu"
        >
          +{{ inputValue.length - 1 }}
        </vue-badge>

        <div :class="$style.icon" :data-testid="'toggle-' + id" @click.stop.prevent="toggleMenu">
          <vue-icon-chevron-down />
        </div>
      </div>

      <vue-text
        :color="errors.length > 0 ? 'danger' : 'text-medium'"
        :class="[$style.description, hideDescription && 'sr-only']"
      >
        {{ errors.length > 0 ? errorMessage : description }}
      </vue-text>
    </div>
    <vue-collapse :show="show" :duration="duration">
      <vue-menu
        ref="menuRef"
        :items="options"
        :class="[$style.menu, $style[alignXMenu], $style[alignYMenu], $style[size], hideLabel && $style.hideLabel]"
        @click="onItemClick"
        @close="toggleMenu"
      />
    </vue-collapse>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, nextTick } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { useField } from 'vee-validate';
import { IItem } from '~/interfaces/IItem';
import { getDomRef } from '~/composables/get-dom-ref';
import { BadgeStatus, HorizontalDirection, ShirtSize, VerticalDirection } from '~/components/prop-types';
import VueIconChevronDown from '~/components/icons/VueIconChevronDown.vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import VueCollapse from '~/components/behavior/VueCollapse/VueCollapse.vue';
import VueMenu from '~/components/data-display/VueMenu/VueMenu.vue';
import VueBadge from '~/components/data-display/VueBadge/VueBadge.vue';

interface SelectProps {
  id: string;
  name: string;
  label: string;
  items: Array<IItem>;
  hideLabel?: boolean;
  hideDescription?: boolean;
  required?: boolean;
  validation?: string | any;
  modelValue?: string | boolean | number | IItem | Array<string | boolean | number | IItem> | object | unknown;
  disabled?: boolean;
  placeholder?: string;
  description?: string;
  errorMessage?: string;
  duration?: number;
  alignXMenu?: HorizontalDirection;
  alignYMenu?: VerticalDirection;
  size?: ShirtSize;
  multiSelect?: boolean;
  badgeStatus?: BadgeStatus;
}

const props = withDefaults(defineProps<SelectProps>(), {
  hideLabel: false,
  hideDescription: false,
  required: false,
  validation: null,
  modelValue: () => undefined as unknown,
  disabled: false,
  placeholder: '',
  description: '',
  errorMessage: '',
  duration: 250,
  alignXMenu: 'left',
  alignYMenu: 'bottom',
  size: 'md',
  multiSelect: false,
  badgeStatus: 'info',
});
const emit = defineEmits(['update:modelValue']);
const { errors, resetField, handleChange } = useField(props.id, props.validation, {
  initialValue: props.modelValue,
  validateOnValueUpdate: false,
  type: 'select',
  syncVModel: false,
});
const selectRef = getDomRef<HTMLElement>(null);
const menuRef = getDomRef<{ focus: (selectedItem: IItem) => void }>(null);
const show = ref(false);
const getValue = (valueOrItem: any | IItem) => {
  if (valueOrItem !== undefined && valueOrItem?.value !== undefined) {
    return valueOrItem.value;
    /* c8 ignore start */
  } else if (typeof valueOrItem === 'string' && valueOrItem.length === 0) {
    return undefined;
  } else if (valueOrItem !== undefined) {
    return valueOrItem;
  } else {
    return undefined;
  }
  /* c8 ignore end */
};
const inputValue = computed<Array<any>>(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.map((v: any | IItem) => getValue(v));
  } else {
    const value = getValue(props.modelValue);

    return /* c8 ignore start */ value !== undefined ? [value] : /* c8 ignore end */ [];
  }
});
const options = computed<Array<IItem>>(() =>
  props.items.map((item: IItem) => ({
    ...item,
    trailingIcon: inputValue.value.includes(item.value) ? 'checkmark' : null,
  })),
);
const displayItem = computed(() => {
  if (inputValue.value.length > 0) {
    return options.value.find((option) => option.value === inputValue.value[0]);
  } else {
    return undefined;
  }
});
const open = async () => {
  if (props.disabled) {
    return;
  }

  show.value = true;

  await nextTick();

  if (displayItem.value !== undefined && typeof menuRef.value.focus !== 'undefined') {
    menuRef.value?.focus(displayItem.value);
  }
};
const close = async (focusInput = true) => {
  if (focusInput) {
    const customSelect: HTMLElement | null = selectRef.value?.querySelector(`#custom-${props.id}`);
    customSelect?.focus();
  }

  show.value = false;

  await nextTick();

  handleChange(props.multiSelect ? inputValue.value.join('') : inputValue.value);
};
const onInput = (e: Event) => {
  resetField();

  const selected: IItem[] = [];
  const target = e.target as HTMLSelectElement;
  const length: number = target.options.length;

  for (let i = 0; i < length; i++) {
    const option: any = target.options[i];

    if (option.selected && option.disabled === false) {
      selected.push({ label: option.text, value: option.value });
    }
  }

  handleChange(props.multiSelect ? selected : selected[0]);

  emit('update:modelValue', props.multiSelect ? selected : selected[0]);
};
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
const toggleMenu = () => {
  const nativeSelect: HTMLSelectElement | null = document.querySelector(`#${props.id}`);

  nativeSelect?.focus();

  if (show.value === true) {
    close();
  } else {
    open();
  }
};

onClickOutside(selectRef, async () => {
  show.value = false;

  await nextTick();
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
  display: flex;
  flex-direction: column;
  min-width: $select-min-width;

  select::-ms-expand {
    display: none;
  }

  .selectWrapper {
    position: relative;

    .count {
      cursor: pointer;
      position: absolute;
      top: 50%;
      right: $space-40;
      transform: translateY(-50%);
    }

    .icon {
      cursor: pointer;
      position: absolute;
      top: 0;
      right: $space-12;
      bottom: 0;
      display: inline-flex;
      align-items: center;
      color: $select-color;

      i {
        width: $select-icon-size;
        height: $select-icon-size;
      }
    }
  }

  .nativeSelect,
  .customSelect {
    align-items: center;
    outline: none;
    color: $select-color;
    font-size: $select-font-size;
    font-family: $select-font-family;
    font-weight: $select-font-weight;
    background: $select-background-color;
    border: $select-border;
    border-radius: $select-border-radius;
    padding: $select-padding;
    line-height: $select-line-height;
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
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

    &.sm {
      height: $input-control-sm-height;
    }

    &.md {
      height: $input-control-md-height;
    }

    &.lg {
      height: $input-control-lg-height;
    }

    &.hasCount {
      padding-right: $space-16 + $select-icon-size + $space-52;
    }
  }

  .hasPlaceholder {
    color: $select-placeholder-color;
  }

  .error {
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

  .disabled {
    opacity: $select-disabled-disabled-opacity;
  }

  .label {
    display: flex;
    height: $select-label-height;
    margin-bottom: $select-label-gap;
  }

  .description {
    display: flex;
    height: $select-description-height;
    margin-top: $select-description-gap;
  }

  .customSelect,
  .menu {
    display: none;
    width: 100%;

    &.sm {
      top: $select-label-height + $select-label-gap + $input-control-sm-height + $select-description-gap;

      &.hideLabel {
        top: $input-control-sm-height + $select-description-gap;
      }
    }

    &.md {
      top: $select-label-height + $select-label-gap + $input-control-md-height + $select-description-gap;

      &.hideLabel {
        top: $input-control-md-height + $select-description-gap;
      }
    }

    &.lg {
      top: $select-label-height + $select-label-gap + $input-control-lg-height + $select-description-gap;

      &.hideLabel {
        top: $input-control-lg-height + $select-description-gap;
      }
    }

    &.left {
      left: 0;
    }

    &.center {
      left: 50%;
      transform: translateX(-50%);
    }

    &.right {
      right: 0;
    }

    &.top {
      top: $select-label-height;
      transform: translateY(-100%);

      &.hideLabel {
        top: -$select-description-gap;
      }

      &.center {
        transform: translate(-50%, -100%);
      }
    }
  }

  @media (hover: hover) {
    .nativeSelect {
      display: none;
    }

    .customSelect,
    .menu {
      display: flex;
    }
  }
}
</style>
