<template>
  <div :class="cssClasses">
    <input
      :id="id"
      ref="input"
      v-validate="validation"
      :data-vv-as="placeholder"
      :name="name"
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
    />
    <span :class="$style.bar" />
    <label :for="name"> {{ placeholder }}<sup v-if="required">*</sup> </label>
    <div :class="$style.message">
      {{ messageOrError }}
    </div>
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
    name: { type: String, required: true },
    id: { type: String, required: true },
    placeholder: { type: String, default: '' },
    required: { type: Boolean, default: false },
    autofocus: { type: Boolean, default: false },
    value: { type: [String, Number], default: '' },
    type: { type: String, default: 'text' },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    message: { type: String, default: '' },
    errorMessage: { type: String, default: '' },
    validation: { type: String, default: '' },
    autocomplete: { type: String, default: 'off' },
  },
  data(): any {
    return {
      observer: null,
    };
  },
  computed: {
    isValid() {
      return this.errors ? this.errors.first(this.name) === undefined : true;
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
  mounted() {
    if ((window as any).IntersectionObserver) {
      this.handleObserver();
    }
  },
  beforeDestroy() {
    this.observer = null;
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
