<template>
  <ValidationProvider v-slot="{ errors }" ref="validator" :vid="id" :name="name" :rules="validation" tag="div">
    <div :class="[$style.vueInput, disabled && $style.disabled, !isValid(errors) && $style.error]">
      <label :for="id"> {{ label }}<sup v-if="required">*</sup></label>
      <input
        v-if="isTextarea === false"
        :id="id"
        ref="input"
        :name="name"
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
          ...$listeners,
          input: (e) => {
            $emit('input', e.target.value);
          },
        }"
      />
      <textarea
        v-else
        :id="id"
        ref="input"
        :name="name"
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
          ...$listeners,
          input: (e) => {
            $emit('input', e.target.value);
          },
        }"
      />
      <span>{{ messageOrError(errors) }}</span>
    </div>
  </ValidationProvider>
</template>

<script lang="ts">
import { ValidationProvider } from 'vee-validate';
import { computed, defineComponent } from '@vue/composition-api';
import { useIntersectionObserver } from '@/composables/use-intersection-observer';
import { getDomRef } from '@/composables/get-dom-ref';

export default defineComponent({
  name: 'VueInput',
  components: { ValidationProvider },
  inheritAttrs: false,
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    label: { type: String, required: true },
    required: { type: Boolean, default: false },
    validation: { type: [String, Object], default: null },
    value: { type: [String, Number], default: null },
    disabled: { type: Boolean, default: false },
    placeholder: { type: String, default: null },
    autofocus: { type: Boolean, default: false },
    type: { type: String, default: 'text' },
    readonly: { type: Boolean, default: false },
    description: { type: String, default: '' },
    errorMessage: { type: String, default: '' },
    autocomplete: { type: String, default: 'off' },
  },
  setup(props) {
    const input = getDomRef(null);
    const isValid = (errors: any) => errors.length === 0;
    const messageOrError = (errors: any) => (isValid(errors) ? props.description : props.errorMessage);
    const isTextarea = computed(() => props.type === 'textarea');

    useIntersectionObserver(input, (entries: IntersectionObserverEntry[]) => {
      if (props.autofocus) {
        entries.forEach((entry) => (entry.target as HTMLInputElement).focus());
      }
    });

    return {
      input,
      isValid,
      messageOrError,
      isTextarea,
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
  input:hover,
  textarea,
  textarea:active,
  textarea:focus,
  textarea:hover {
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

  input,
  textarea {
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

  textarea {
    min-height: $space-64;
  }

  input::placeholder,
  textarea::placeholder {
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

    input,
    textarea {
      background: $input-background-error-color;
      border: $input-border-error;
    }

    input::placeholder,
    textarea::placeholder {
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
