<template>
  <ValidationProvider v-slot="{ errors }" ref="validator" :vid="id" :name="name" :rules="validation" tag="div">
    <div
      ref="selectRef"
      :class="[$style.vueSelect, disabled && $style.disabled, errors.length > 0 && $style.error]"
      @keydown="onKeyDown"
    >
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
          :value="inputValue"
          :title="label"
          :required="required"
          :disabled="disabled"
          :class="[$style.nativeSelect, placeholder && !inputValue && $style.hasPlaceholder]"
          v-bind="$attrs"
          v-on="{
            ...$listeners,
            input: onInput,
          }"
        >
          <option v-if="placeholder && !inputValue" value="" disabled selected>{{ placeholder }}</option>
          <option
            v-for="(option, idx) in options"
            :key="idx"
            :value="option.value"
            :selected="inputValue === option.value"
          >
            {{ option.label }}
          </option>
        </select>

        <div
          :data-testid="'custom-' + id"
          :aria-expanded="show.toString()"
          :class="$style.customSelect"
          :tabindex="disabled ? -1 : 0"
          @click.stop.prevent="show = !show"
        >
          {{ inputValue !== undefined ? options.find((option) => option.value === inputValue).label : placeholder }}
        </div>

        <div :class="$style.icon" @click.stop.prevent="show = !show">
          <vue-icon-chevron-down />
        </div>
      </div>

      <vue-collapse :show="show" :duration="duration">
        <vue-menu :items="options" :class="$style.menu" @click="onItemClick" />
      </vue-collapse>

      <vue-text
        :color="errors.length > 0 ? 'danger' : 'text-medium'"
        :class="[$style.description, hideDescription && 'sr-only']"
      >
        {{ errors.length > 0 ? errorMessage : description }}
      </vue-text>
    </div>
  </ValidationProvider>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api';
import { ValidationProvider } from 'vee-validate';
import { IItem } from '@/interfaces/IItem';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueCollapse from '@/components/behavior/VueCollapse/VueCollapse.vue';
import VueMenu from '@/components/data-display/VueMenu/VueMenu.vue';
import { useOutsideClick } from '@/composables/use-outside-click';
import { getDomRef } from '@/composables/get-dom-ref';
import VueIconChevronDown from '@/components/icons/VueIconChevronDown/VueIconChevronDown.vue';

export default defineComponent({
  name: 'VueSelect',
  components: {
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
    value: { type: [String, Boolean, Object, Object as () => IItem], default: undefined },
    disabled: { type: Boolean, default: false },
    items: { type: [Array, Array as () => Array<IItem>], required: true },
    placeholder: { type: String, default: '' },
    description: { type: String, default: '' },
    errorMessage: { type: String, default: '' },
    duration: { type: Number, default: 250 },
  },
  setup(props, { emit }) {
    const inputValue = computed(() => {
      if (props.value !== undefined && props.value.value !== undefined) {
        return props.value.value;
      } else if (props.value !== undefined) {
        return props.value;
      } else {
        return undefined;
      }
    });
    const options = computed<Array<IItem>>(() =>
      props.items.map((item: IItem) => ({
        ...item,
        trailingIcon: inputValue.value === item.value ? 'checkmark' : null,
      })),
    );
    const selectRef = getDomRef(null);
    const show = ref(false);
    const close = () => (show.value = false);
    const onInput = (e: Event) => {
      const selected: IItem[] = [];
      const target: HTMLSelectElement = e.target as HTMLSelectElement;
      const length: number = target.options.length;

      for (let i = 0; i < length; i++) {
        const option: any = target.options[i];
        if (option.selected) {
          selected.push({ label: option.text, value: option.value });
        }
      }

      emit('input', selected[0]);
    };
    const onItemClick = (item: IItem) => {
      emit('input', item);
      close();
    };
    const checkForPropagation = (e: KeyboardEvent) => {
      if (['Enter', 'Space', 'ArrowDown', 'ArrowUp', 'Escape'].includes(e.code)) {
        e.stopPropagation();
        e.preventDefault();
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      checkForPropagation(e);

      if (['Enter', 'Space', 'ArrowDown', 'ArrowUp'].includes(e.code)) {
        show.value = true;

        setTimeout(() => {
          selectRef.value.querySelector('ul').firstChild.focus();
        }, 10);
      } else if (e.code === 'Escape') {
        close();
      }
    };

    useOutsideClick(selectRef, () => close());

    return {
      inputValue,
      selectRef,
      options,
      show,
      onInput,
      onItemClick,
      onKeyDown,
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

    .icon {
      position: absolute;
      top: 0;
      right: $space-12;
      bottom: 0;
      display: inline-flex;
      align-items: center;

      i {
        width: $select-icon-size;
        height: $select-icon-size;
      }
    }
  }

  .nativeSelect,
  .customSelect {
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
    height: $select-height;
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

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
  }

  .hasPlaceholder {
    color: $select-placeholder-color;
  }

  &.error {
    select {
      background: $select-background-error-color;
      border: $select-border-error;
    }
  }

  &.disabled {
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
    width: 100%;
    display: none;
    top: $select-label-height + $select-label-gap + $select-height + $select-description-gap;
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
