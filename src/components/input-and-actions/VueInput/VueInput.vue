<template>
  <ValidationProvider v-slot="{ errors }" ref="validator" :vid="id" :name="name" :rules="validation" tag="div">
    <div :class="[$style.vueInput, disabled && $style.disabled, errors.length > 0 && $style.error]">
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

      <div
        :class="[
          $style.inputWrapper,
          leadingIcon && $style.hasLeadingContent,
          trailingIcon && $style.hasTrailingContent,
          $style[size],
        ]"
      >
        <div
          v-if="leadingIcon"
          :data-testid="`${id}-leading-icon`"
          :class="$style.leading"
          @click="$emit('leading-icon-click')"
        >
          <component :is="`vue-icon-${leadingIcon}`" />
        </div>

        <input
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
          :autofocus="autofocus"
          :size="sizeAttribute"
          v-bind="$attrs"
          v-on="{
            ...$listeners,
            input: (e) => {
              $emit('input', e.target.value);
            },
          }"
        />

        <div
          v-if="trailingIcon"
          :data-testid="`${id}-trailing-icon`"
          :class="$style.trailing"
          @click="$emit('trailing-icon-click')"
        >
          <component :is="`vue-icon-${trailingIcon}`" />
        </div>
      </div>

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
import { ValidationProvider } from 'vee-validate';
import { defineComponent } from '@vue/composition-api';
import { useIntersectionObserver } from '@/composables/use-intersection-observer';
import { getDomRef } from '@/composables/get-dom-ref';
import VueText from '@/components/typography/VueText/VueText.vue';
import { shirtSizeValidator } from '@/components/prop-validators';

export default defineComponent({
  name: 'VueInput',
  components: { VueText, ValidationProvider },
  inheritAttrs: false,
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    label: { type: String, required: true },
    hideLabel: { type: Boolean, default: false },
    hideDescription: { type: Boolean, default: false },
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
    leadingIcon: { type: String, default: null },
    trailingIcon: { type: String, default: null },
    size: { type: String, validator: shirtSizeValidator, default: 'md' },
    sizeAttribute: { type: Number, default: null },
  },
  setup(props) {
    const input = getDomRef(null);

    useIntersectionObserver(input, (entries: IntersectionObserverEntry[]) => {
      if (props.autofocus) {
        entries.forEach((entry) => (entry.target as HTMLInputElement).focus());
      }
    });

    return {
      input,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

.vueInput {
  display: flex;
  flex-direction: column;

  .inputWrapper {
    position: relative;
    display: flex;
    width: 100%;

    &.hasLeadingContent {
      .leading {
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        height: auto;
        width: $input-leading-width;
        color: $input-leading-color;

        i {
          width: $input-leading-icon-size;
          height: $input-leading-icon-size;
        }
      }

      input {
        padding-left: $input-leading-width;
      }
    }

    &.hasTrailingContent {
      .trailing {
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        height: auto;
        width: $input-trailing-width;
        color: $input-trailing-color;

        i {
          width: $input-trailing-icon-size;
          height: $input-trailing-icon-size;
        }
      }

      input {
        padding-right: $input-trailing-width;
      }
    }

    input {
      background-clip: padding-box !important; // remove box shadow on iOS
      outline: none;
      color: $input-color;
      font-size: $input-font-size;
      font-family: $input-font-family;
      font-weight: $input-font-weight;
      background: $input-background-color;
      border: $input-border;
      border-radius: $input-border-radius;
      padding: $input-padding;
      line-height: $input-line-height;
      width: 100%;

      &:hover {
        outline: none;
        border: $input-border-hover;
      }

      &:focus {
        outline: none;
        box-shadow: $input-outline;
      }

      &:active {
        outline: none;
      }
    }

    input::placeholder {
      color: $input-placeholder-color;
      font-size: $input-font-size;
      font-family: $input-font-family;
      font-weight: $input-font-weight;
      opacity: 1;
    }

    &.sm {
      height: $input-control-sm-height;
    }

    &.md {
      height: $input-control-md-height;
    }

    &.lg {
      height: $input-control-lg-height;
    }
  }

  &.error {
    .inputWrapper {
      input {
        background: $input-bg-error;
        border: $input-border-error;
      }
    }
  }

  &.disabled {
    opacity: $input-disabled-disabled-opacity;
  }

  .label {
    display: flex;
    height: $input-label-height;
    margin-bottom: $input-label-gap;
    white-space: nowrap;
    width: 0;
  }

  .description {
    display: flex;
    height: $input-description-height;
    margin-top: $input-description-gap;
    white-space: nowrap;
    width: 0;
  }
}
</style>
