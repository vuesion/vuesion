<template>
  <div :class="cssClasses">
    <select
      :title="placeholder"
      :name="name"
      :id="id"
      v-validate="validation"
      :multiple="multiple"
      :required="required"
      :disabled="disabled"
      :autocomplete="autocomplete"
      v-bind="$attrs"
      v-on="{
        ...this.$listeners,
        input: onInput,
      }"
    >
      <option v-for="(option, idx) in selectOptions" :key="idx" :value="option.value" :selected="isSelected(option)">
        {{ option.label }}
      </option>
    </select>
    <i :class="$style.icon" v-if="!multiple"></i>
    <span :class="$style.bar"></span>
    <label :for="id">{{ placeholder }}<sup v-if="required">*</sup></label>
  </div>
</template>

<script lang="ts">
import { Validator } from 'vee-validate';
import { IAutocompleteOption } from '@components/VueAutocomplete/IAutocompleteOption';

export interface IVueSelectOption {
  label: string;
  value: string;
}

export default {
  name: 'VueSelect',
  inheritAttrs: false,
  inject: {
    $validator: {
      default: new Validator({}, {}),
    },
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    options: {
      required: true,
      type: Array,
    },
    value: {
      type: String,
      default: '',
    },
    multiple: {
      type: Boolean,
    },
    required: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    validation: {
      type: String,
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
    placeholder: {
      type: String,
    },
  },
  data(): { selectOptions: IAutocompleteOption[] } {
    return {
      selectOptions: [],
    };
  },
  computed: {
    isValid() {
      return this.errors ? this.errors.first(this.name) === null : true;
    },
    cssClasses() {
      const classes = [this.$style.vueSelect];

      if (this.multiple) {
        classes.push(this.$style.multiple);
      }

      if (this.disabled) {
        classes.push(this.$style.disabled);
      }

      if (!this.isValid) {
        classes.push(this.$style.error);
      }

      if (this.value.length > 0) {
        classes.push(this.$style.hasValue);
      }

      return classes;
    },
    currentValueAsArray(): string[] {
      return this.value.split('|');
    },
  },
  methods: {
    isSelected(option: IVueSelectOption): boolean {
      return this.currentValueAsArray.indexOf(option.value) > -1;
    },
    onInput(e: Event) {
      const selected: IVueSelectOption[] = [];
      const target: HTMLSelectElement = e.target as HTMLSelectElement;
      const length: number = target.options.length;

      for (let i = 0; i < length; i++) {
        const option: any = target.options[i];
        if (option.selected) {
          selected.push({ label: option.text, value: option.value });
        }
      }

      this.$emit('input', selected.map((option: IVueSelectOption) => option.value).join('|'));
    },
  },
  watch: {
    options: {
      immediate: true,
      handler(options: IAutocompleteOption[]) {
        const selectOptions = [...options];

        if (this.multiple === false) {
          selectOptions.unshift({ label: '', value: '' });
        }

        this.selectOptions = selectOptions;
      },
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.vueSelect {
  background: $select-bg;
  margin: $select-margin;
  position: relative;
  border: none;

  select,
  select:active,
  select:focus,
  select:hover {
    outline: none !important;
  }

  select::-ms-expand {
    display: none;
  }

  select {
    padding: $select-padding;
    color: $select-color;
    display: block;
    width: 100%;
    box-shadow: none;
    background: transparent;
    background-image: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    border-bottom: $input-border-bottom;
    border-radius: 0;

    &:focus ~ .icon {
      &:before {
        transform: translate(-4px, 0) rotate(45deg);
      }

      &:after {
        transform: translate(4px, 0) rotate(-45deg);
      }
    }
    &:focus ~ label {
      top: -$space-20;
      font-size: $input-placeholder-active-font-size;
      font-weight: $input-placeholder-active-font-weight;
      color: $input-placeholder-active-font-color;
      height: $input-placeholder-active-height;
    }
    &:focus ~ .bar:before,
    &:focus ~ .bar:after {
      width: 50%;
    }

    &:hover {
      cursor: pointer;
    }
  }

  select,
  option {
    font-size: $select-font-size;
    font-family: $select-font-family;
    font-weight: $select-font-weight;
  }
  label {
    position: absolute;
    left: 0;
    top: $space-8;
    pointer-events: none;
    transition: 0.2s ease all;
  }
}

.multiple {
  select {
    max-height: $select-multi-max-height;

    option {
      padding: $select-multi-option-padding;
    }
  }

  label {
    top: -$space-20;
    font-size: $input-placeholder-active-font-size;
    font-weight: $input-placeholder-active-font-weight;
    height: $input-placeholder-active-height;
  }
}

.hasValue {
  label {
    top: -$space-20;
    font-size: $input-placeholder-active-font-size;
    font-weight: $input-placeholder-active-font-weight;
    color: $input-placeholder-active-font-color;
    height: $input-placeholder-active-height;
  }
}

.icon {
  position: absolute;
  right: $space-12;
  top: $space-12;
  height: auto;
  width: auto;

  &:before,
  &:after {
    content: '';
    transition: all 0.25s ease-in-out;
    position: absolute;
    background-color: $select-arrow-color;
    width: 2px;
    height: 13px;
  }

  &:before {
    transform: translate(4px, 0) rotate(45deg);
  }

  &:after {
    transform: translate(-4px, 0) rotate(-45deg);
  }
}

.disabled {
  opacity: 0.6;
}

.error {
  select {
    border-bottom-color: $input-error-color;

    &:focus ~ label,
    &.hasValue ~ label {
      color: $input-error-color;
    }
  }

  label {
    color: $input-error-color;
  }

  .bar {
    &:before,
    &:after {
      background: $input-error-color;
    }
  }

  .icon {
    &:before,
    &:after {
      background-color: $input-error-color;
    }
  }
}

.bar {
  position: relative;
  display: block;
  width: 100%;

  &:before,
  &:after {
    content: '';
    height: $input-bar-height;
    width: 0;
    bottom: 0;
    position: absolute;
    background: $input-bar-color;
    transition: all 0.2s ease-in-out;
  }
  &:before {
    left: 50%;
  }
  &:after {
    right: 50%;
  }
}
</style>
