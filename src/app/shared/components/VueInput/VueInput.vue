<template>
  <div :class="cssClasses">
    <input
      v-validate="validation"
      :data-vv-as="placeholder"
      :name="name"
      :id="id"
      :required="required"
      :value="value"
      :type="type"
      :autocomplete="autocomplete"
      :disabled="disabled"
      :readonly="readonly"
      :class="[value ? $style.hasValue : '']"
      :autofocus="autofocus"
      v-bind="$attrs"
      v-on="{
        ...this.$listeners,
        input: (e) => {
          $emit('input', e.target.value);
        },
      }"
      ref="input"
    />
    <span :class="$style.bar"></span>
    <label :for="name"> {{ placeholder }}<sup v-if="required">*</sup> </label>
    <div :class="$style.message">{{ messageOrError }}</div>
  </div>
</template>

<script lang="ts">
import { Validator } from 'vee-validate';

export default {
  name: 'VueInput',
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
    placeholder: {
      type: String,
    },
    required: {
      type: Boolean,
    },
    autofocus: {
      type: Boolean,
    },
    value: {
      type: String,
    },
    type: {
      type: String,
      default: 'text',
    },
    disabled: {
      type: Boolean,
    },
    readonly: {
      type: Boolean,
    },
    message: {
      type: String,
    },
    errorMessage: {
      type: String,
    },
    validation: {
      type: String,
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
  },
  computed: {
    isValid() {
      return this.errors ? this.errors.first(this.name) === null : true;
    },
    messageOrError() {
      return this.isValid ? this.message : this.errorMessage;
    },
    cssClasses() {
      const classes = [this.$style.vueInput];

      if (this.disabled) {
        classes.push(this.$style.disabled);
      }

      if (!this.isValid) {
        classes.push(this.$style.error);
      }

      return classes;
    },
  },
  data(): any {
    return {
      observer: null,
    };
  },
  methods: {
    handleObserver() {
      this.observer = new IntersectionObserver(
        () => {
          if (this.autofocus && this.$refs.input) {
            this.$refs.input.focus();
          }
        },
        { root: this.$refs.input.parentElement, threshold: 1 },
      );
      this.observer.observe(this.$refs.input);
    },
  },
  mounted() {
    if ((window as any).IntersectionObserver) {
      this.handleObserver();
    }
  },
  beforeDestroy() {
    this.observer = null;
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.vueInput {
  position: relative;
  margin: $input-margin;

  input,
  input:active,
  input:focus,
  input:hover {
    outline: none !important;
  }
  input {
    background-color: $input-background-color;
    border: none;
    border-bottom: $input-border-bottom;
    padding: $input-padding;
    display: block;
    width: 100%;
    font-family: $input-font-family;
    font-size: $input-font-size;
    font-weight: $input-font-weight;
    color: $input-color;
    height: $input-height;
    border-radius: 0;
  }
  input:focus ~ label,
  input.hasValue ~ label {
    top: -$space-20;
    font-size: $input-placeholder-active-font-size;
    font-weight: $input-placeholder-active-font-weight;
    color: $input-placeholder-active-font-color;
    height: $input-placeholder-active-height;
  }
  input:focus ~ .bar:before,
  input:focus ~ .bar:after {
    width: 50%;
  }

  label {
    color: $input-placeholder-color;
    font-size: $input-placeholder-font-size;
    font-weight: $input-placeholder-font-weight;
    position: absolute;
    pointer-events: none;
    top: $input-placeholder-top;
    transition: 0.2s ease all;
  }
}

.error {
  label {
    color: $input-error-color;
  }
  input {
    border-bottom-color: $input-error-color;
  }
  input:focus ~ label,
  input.hasValue ~ label {
    color: $input-error-color;
  }

  .bar {
    &:before,
    &:after {
      background: $input-error-color;
    }
  }

  .message {
    color: $input-error-color;
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

.message {
  display: block;
  height: $input-message-height;
  padding: $input-message-padding;
  position: relative;
  color: $input-message-color;
  font-size: $input-message-font-size;
  font-weight: $input-message-font-weight;
}

.disabled {
  opacity: 0.6;
}
</style>
