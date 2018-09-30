<template>
  <div :class="cssClasses">
    <select
      :name="name"
      :id="id"
      v-validate="validation"
      :multiple="multiple"
      :required="required"
      :disabled="disabled"
      :autocomplete="autocomplete"
      v-bind="$attrs"
      v-on="handlers">
      <option
        v-for="option in options"
        :value="option.value"
        :selected="isSelected(option)">
        {{option.label}}
      </option>
    </select>
    <i :class="$style.icon" v-if="multiple === false" />
  </div>
</template>

<script lang="ts">
  import { Validator } from 'vee-validate';

  export interface IVueSelectOption {
    label: string;
    value: string;
  }

  export default {
    name:     'VueSelect',
    inject:   {
      $validator: {
        default: new Validator({}, {}),
      },
    },
    props:    {
      name:         {
        type:     String,
        required: true,
      },
      id:           {
        type:     String,
        required: true,
      },
      options:      {
        required: true,
        type:     Array,
      },
      value:        {
        type:     String,
        default:  '',
        required: false,
      },
      multiple:     {
        default: false,
        type:    Boolean,
      },
      required:     {
        default: false,
        type:    Boolean,
      },
      disabled:     {
        default: false,
        type:    Boolean,
      },
      validation:   {
        default: '',
      },
      autocomplete: {
        default: 'off',
      },
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

        return classes;
      },
      currentValueAsArray(): string[] {
        return this.value.split('|');
      },
      handlers() {
        delete this.$listeners.input;

        return {
          ...this.$listeners,
          input: this.onInput,
        };
      },
    },
    methods:  {
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
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .vueSelect {
    overflow:   hidden;
    background: $select-bg;
    box-shadow: $select-shadow;
    margin:     $select-margin;
    position:   relative;
    border:     $select-border;

    select::-ms-expand {
      display: none;
    }

    select {
      padding:            $select-padding;
      color:              $select-color;
      font-size:          $select-font-size;
      display:            block;
      width:              100%;
      box-shadow:         none;
      background:         transparent;
      background-image:   none;
      -webkit-appearance: none;
      -moz-appearance:    none;
      appearance:         none;
      border:             none;

      &:focus ~ .icon {
        &:before {
          transform: translate(-4px, 0) rotate(45deg);
        }

        &:after {
          transform: translate(4px, 0) rotate(-45deg)
        }
      }
    }
  }

  .multiple {
    select {
      max-height: $select-multi-max-height;

      option {
        padding: $select-multi-option-padding;
      }
    }
  }

  .icon {
    position: absolute;
    right:    $space-unit * 3;
    top:      $space-unit * 1.5;
    height:   auto;
    width:    auto;

    &:before, &:after {
      content:          "";
      transition:       all 0.25s ease-in-out;
      position:         absolute;
      background-color: $select-arrow-color;
      width:            2px;
      height:           13px;
    }

    &:before {
      transform: translate(4px, 0) rotate(45deg);
    }

    &:after {
      transform: translate(-4px, 0) rotate(-45deg)
    }
  }

  .disabled {
    opacity: .6;
  }

  .error {
    border: 1px solid $brand-attention;
  }
</style>
