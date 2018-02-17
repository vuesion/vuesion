<template>
  <div :class="cssClasses">
    <select :multiple="multiple" role="listbox" @change="onChange">
      <option v-for="option in options" :value="option.value" role="option">
        {{option.label}}
      </option>
    </select>
    <i :class="$style.icon" v-if="multiple === false"></i>
  </div>
</template>

<script lang="ts">
  export interface IVueSelectOption {
    label: string;
    value: string;
  }

  export default {
    name:       'VueSelect',
    components: {},
    props:      {
      options:  {
        required: true,
        type:     Array,
      },
      multiple: {
        required: false,
        default:  false,
        type:     Boolean,
      },
    },
    data(): any {
      return {};
    },
    computed:   {
      cssClasses() {
        const classes = [this.$style.vueSelect];

        if (this.multiple) {
          classes.push(this.$style.multiple);
        }

        return classes;
      },
    },
    methods:    {
      onChange(e: Event) {
        const selected: IVueSelectOption[] = [];
        const target: HTMLSelectElement = e.target as HTMLSelectElement;
        const length: number = target.options.length;

        for (let i = 0; i < length; i++) {
          const option: HTMLOptionElement = target.options[i];
          if (option.selected) {
            selected.push({ label: option.text, value: option.value });
          }
        }

        this.$emit('change', selected);
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
    border-top: $select-border-top;

    &.multiple {
      select {
        max-height: $select-multi-max-height;

        option {
          padding: $select-multi-option-padding;
        }
      }
    }

    select {
      padding:            $select-padding;
      color:              $select-color;
      font-size:          $select-font-size;
      display:            block;
      width:              100%;
      border:             none;
      box-shadow:         none;
      background:         transparent;
      background-image:   none;
      -webkit-appearance: none;

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

  .icon {
    position: absolute;
    right:    24px;
    top:      20px;

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
</style>
