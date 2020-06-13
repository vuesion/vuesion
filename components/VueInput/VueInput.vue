<template>
  <div :class="[$style.vueInput, disabled && $style.disabled, !isValid(errors) && $style.error]">
    <label :for="name"> {{ label }}<sup v-if="required">*</sup> </label>
    <input
      :id="id"
      ref="input"
      v-validate="validation"
      :name="name"
      :data-vv-as="label"
      :placeholder="placeholder"
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
    <span>
      {{ messageOrError(errors) }}
    </span>
  </div>
</template>

<script lang="ts">
// import { Validator } from 'vee-validate';
import { defineComponent } from '@vue/composition-api';
import { useIntersectionObserver } from '@/components/composables/use-intersection-observer';
import { getDomRef } from '@/components/composables/get-dom-ref';

export default defineComponent({
  name: 'VueInput',
  inheritAttrs: false,
  inject: {
    $validator: {
      // default: new Validator({}, {}),
    },
  },
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    label: { type: String, required: true },
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
  setup(props) {
    const input = getDomRef(null);
    const isValid = (errors: any) => (errors ? errors.first(props.name) === null : true);
    const messageOrError = (errors: any) => (isValid(errors) ? props.message : props.errorMessage);

    useIntersectionObserver(input, () => {
      if (props.autofocus && input?.value) {
        input.value.focus();
      }
    });

    return {
      input,
      isValid,
      messageOrError,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueInput {
  display: flex;
  flex-direction: column;

  input,
  input:active,
  input:focus,
  input:hover {
    outline: none !important;
  }

  label {
    display: inline-flex;
    flex: 1;
    padding: $input-label-padding;
    color: $input-label-color;
    font-size: $input-label-font-size;
    line-height: $input-label-line-height;
    font-weight: $input-label-font-weight;
  }

  input {
    color: $input-color;
    font-size: $input-font-size;
    font-family: $input-font-family;
    font-weight: $input-font-weight;
    background: $input-background-color;
    border: $input-border;
    border-radius: $input-border-radius;
    padding: $input-padding;
    line-height: $input-line-height;

    &:hover {
      border: $input-border-hover;
    }

    &:focus {
      border: $input-border-focus;
    }
  }

  input::placeholder {
    color: $input-placeholder-color;
    font-size: $input-font-size;
    font-family: $input-font-family;
    font-weight: $input-font-weight;
    opacity: 1;
  }

  span {
    display: inline-flex;
    flex: 1;
    padding: $input-message-padding;
    min-height: $space-20 + $space-2;
    color: $input-message-color;
    font-size: $input-message-font-size;
    line-height: $input-message-line-height;
    font-weight: $input-message-font-weight;
  }

  &.error {
    label {
      color: $input-label-error-color;
    }

    input {
      background: $input-background-error-color;
      border: $input-border-error;
    }

    input::placeholder {
      color: $input-placeholder-error-color;
    }

    span {
      color: $input-message-error-color;
    }
  }

  &.disabled {
    opacity: 0.5;
  }
}
</style>
