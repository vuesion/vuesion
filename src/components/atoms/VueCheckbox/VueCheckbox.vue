<template>
  <div :class="[$style.input, radio ? $style.radio : $style.checkbox, disabled && $style.disabled]" :aria-label="label">
    <ValidationProvider ref="validator" :vid="id" :name="name" :rules="validation" tag="div">
      <input
        :id="id"
        :type="radio ? 'radio' : 'checkbox'"
        :checked="checked"
        :required="required"
        :disabled="disabled"
        v-bind="$attrs"
        :value="checked"
        @change.prevent="onClick"
      />
      <div :class="$style.box" @click="onClick" />
      <label :for="id" v-html="label" />
    </ValidationProvider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { ValidationProvider } from 'vee-validate';

export default defineComponent({
  name: 'VueCheckbox',
  components: { ValidationProvider },
  inheritAttrs: false,
  model: {
    prop: 'checked',
    event: 'click',
  },
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    label: { type: String, required: true },
    required: { type: Boolean, default: false },
    validation: { type: [String, Object], default: null },
    disabled: { type: Boolean, default: false },
    checked: { type: Boolean, default: false },
    radio: { type: Boolean, default: false },
  },
  setup(props, { emit }) {
    const onClick = (e: Event) => {
      e.preventDefault();

      if (!props.disabled) {
        emit('click', !props.checked);
      }
    };

    return {
      onClick,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.input {
  user-select: none;
  color: $checkbox-color;
  display: inline-block;
  padding: $checkbox-padding;
  position: relative;

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
      transition-duration: var(--brand-transition-duration);
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
