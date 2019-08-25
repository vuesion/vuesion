<template>
  <div :class="cssClasses" :aria-label="label">
    <input
      :type="inputType"
      :name="name"
      :id="id"
      :checked="checked || value"
      :required="required"
      :disabled="disabled"
      v-validate="validation"
      @change.prevent="onClick"
      v-bind="$attrs"
    />
    <div :class="$style.box" @click="onClick"></div>
    <label :for="name" v-html="label"></label>
  </div>
</template>

<script lang="ts">
import { Validator } from 'vee-validate';

export default {
  name: 'VueCheckbox',
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
    checked: {
      type: Boolean,
    },
    value: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    required: {
      type: Boolean,
    },
    validation: {
      type: String,
    },
    radio: {
      type: Boolean,
    },
    label: {
      type: String,
      required: true,
    },
  },
  computed: {
    cssClasses() {
      const classes = [this.$style.input];

      if (this.radio) {
        classes.push(this.$style.radio);
      } else {
        classes.push(this.$style.checkbox);
      }

      if (this.disabled) {
        classes.push(this.$style.disabled);
      }

      return classes;
    },
    inputType() {
      if (this.radio) {
        return 'radio';
      } else {
        return 'checkbox';
      }
    },
  },
  methods: {
    onClick(e: Event) {
      e.preventDefault();

      if (!this.disabled) {
        this.$emit('click', e);
        this.$emit('input', !Boolean(this.value));
      }
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.input {
  user-select: none;
  color: $checkbox-color;
  display: inline-block;
  margin: $checkbox-margin;
  padding: $checkbox-padding;
  position: relative;
  top: $space-8;

  input {
    outline: none !important;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    user-select: none;
    left: $space-4;
    top: $space-4;
    width: 0;
    height: 0;
    margin: $checkbox-check-margin;
    position: absolute;

    &:focus {
      + .box:before {
        background: $checkbox-checked-bg;
      }
    }

    &:checked {
      + .box:before {
        background: $checkbox-checked-bg;
      }
    }
  }

  label {
    display: inline-block;
    padding-left: $checkbox-size + ($space-12);
    cursor: pointer;
  }

  .box {
    &:before,
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      cursor: pointer;
    }

    &:before {
      width: $checkbox-size;
      height: $checkbox-size;
      background: $checkbox-bg;
      border: $checkbox-border;
      cursor: pointer;
      transition: $checkbox-transition;
    }

    &:after {
      opacity: 0;
      transition-duration: $brand-transition-duration;
      transition-timing-function: cubic-bezier(0, 0.84, 0.83, 0.67);
      box-shadow: $checkbox-shadow;
    }
  }
}

.checkbox {
  .box {
    &:after {
      transform: rotate(-45deg) scale(3);
      top: $checkbox-size / 8;
      left: $checkbox-size / 12;
      width: $checkbox-size / 1.2;
      height: $checkbox-size / 2.5;
      border: $checkbox-check;
      border-top: none;
      border-right: none;
      transition-property: opacity, transform;
    }
  }

  input[type='checkbox'] {
    &:checked {
      + .box:after {
        transform: rotate(-45deg) scale(1);
        opacity: 1;
        transition-property: opacity;
      }
    }
  }
}

.radio {
  .box {
    &:before {
      border-radius: 50%;
    }

    &:after {
      top: $checkbox-size / 6;
      left: $checkbox-size / 6;
      width: $checkbox-size / 1.5;
      height: $checkbox-size / 1.5;
      border-radius: 50%;
      background-color: #fff;
      transition-property: opacity;
    }
  }

  input[type='radio'] {
    left: 6px;
    top: 6px;

    &:checked {
      + .box:after {
        opacity: 1;
      }
    }
  }
}

.disabled {
  opacity: 0.6;
}
</style>
