<template>
  <div ref="selectRef" :class="$style.vueSelect">
    <ValidationProvider v-slot="{ errors }" ref="validator" :vid="id" :name="name" :rules="validation" tag="div">
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
            v-on="{
              ...$listeners,
              input: onInput,
            }"
          >
            <option v-if="placeholder && !inputValue" value="" disabled selected>{{ placeholder }}</option>
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

          <vue-badge v-if="multiSelect && inputValue.length > 1" :status="badgeStatus" :class="$style.count">
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
    </ValidationProvider>

    <vue-collapse :show="show" :duration="duration">
      <vue-menu
        ref="menuRef"
        :items="options"
        :class="[$style.menu, hideLabel && $style.hideLabel, $style[alignMenu], $style[alignYMenu], $style[size]]"
        @click="onItemClick"
        @close="toggleMenu"
      />
    </vue-collapse>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, nextTick } from '@vue/composition-api';
import { ValidationProvider } from 'vee-validate';
import { IItem } from '@/interfaces/IItem';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueCollapse from '@/components/behavior/VueCollapse/VueCollapse.vue';
import VueMenu from '@/components/data-display/VueMenu/VueMenu.vue';
import { useOutsideClick } from '@/composables/use-outside-click';
import { getDomRef } from '@/composables/get-dom-ref';
import VueIconChevronDown from '@/components/icons/VueIconChevronDown.vue';
import { badgeStatusesValidator, horizontalAlignmentValidator, shirtSizeValidator } from '@/components/prop-validators';
import VueBadge from '@/components/data-display/VueBadge/VueBadge.vue';

export default defineComponent({
  name: 'VueSelect',
  components: {
    VueBadge,
    VueIconChevronDown,
    VueMenu,
    VueCollapse,
    VueText,
    ValidationProvider,
  },
  inheritAttrs: false,
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    label: { type: String, required: true },
    hideLabel: { type: Boolean, default: false },
    hideDescription: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    validation: { type: [String, Object], default: null },
    value: { type: [String, Boolean, Number, Object, Object as () => IItem, Array], default: undefined },
    disabled: { type: Boolean, default: false },
    items: { type: [Array as () => Array<IItem>], required: true },
    placeholder: { type: String, default: '' },
    description: { type: String, default: '' },
    errorMessage: { type: String, default: '' },
    duration: { type: Number, default: 250 },
    alignMenu: { type: String, validator: horizontalAlignmentValidator, default: 'left' },
    alignYMenu: { type: String, validator: (value: string) => ['top', 'bottom'].includes(value), default: 'bottom' },
    size: { type: String, validator: shirtSizeValidator, default: 'md' },
    multiSelect: { type: Boolean, default: false },
    badgeStatus: { type: String, validator: badgeStatusesValidator, default: 'info' },
  },
  setup(props, { emit }) {
    const validator = getDomRef(null);
    const selectRef = getDomRef(null);
    const menuRef = getDomRef(null);
    const show = ref(false);
    const getValue = (valueOrItem: any | IItem) => {
      if (valueOrItem !== undefined && valueOrItem?.value !== undefined) {
        return valueOrItem.value;
      } else if (valueOrItem !== undefined) {
        return valueOrItem;
      } else {
        return undefined;
      }
    };
    const inputValue = computed<Array<any>>(() => {
      if (Array.isArray(props.value)) {
        return props.value.map((v: any | IItem) => getValue(v));
      } else {
        const value = getValue(props.value);
        return value !== undefined ? [value] : [];
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

      menuRef.value.focus(displayItem.value);
    };
    const close = (focusInput = true) => {
      if (focusInput) {
        selectRef.value.querySelector(`#custom-${props.id}`).focus();
      }

      show.value = false;
    };
    const onInput = (e: Event) => {
      validator.value.reset();

      const selected: IItem[] = [];
      const target: HTMLSelectElement = e.target as HTMLSelectElement;
      const length: number = target.options.length;

      for (let i = 0; i < length; i++) {
        const option: any = target.options[i];

        if (option.selected && option.disabled === false) {
          selected.push({ label: option.text, value: option.value });
        }
      }

      validator.value.validate(props.multiSelect ? selected : selected[0]);

      emit('input', props.multiSelect ? selected : selected[0]);
    };
    const onItemClick = (item: IItem) => {
      validator.value.reset();

      if (props.multiSelect) {
        const selectedValues = inputValue.value.includes(item.value)
          ? inputValue.value.filter((value) => value !== item.value)
          : [...inputValue.value, item.value];

        validator.value.validate(selectedValues.length === 0 ? null : true);
        emit(
          'input',
          props.items.filter((i) => selectedValues.includes(i.value)),
        );
      } else {
        validator.value.validate(item.value);
        emit('input', item);
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
      const nativeSelect: HTMLSelectElement = document.querySelector(`#${props.id}`);

      nativeSelect.focus();

      if (show.value === true) {
        close();
      } else {
        open();
      }
    };

    useOutsideClick(selectRef, () => close(false));

    return {
      validator,
      selectRef,
      menuRef,
      show,
      options,
      inputValue,
      displayItem,
      onInput,
      onItemClick,
      onKeyDown,
      toggleMenu,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';
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
      position: absolute;
      top: 50%;
      right: $space-40;
      transform: translateY(-50%);
    }

    .icon {
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
