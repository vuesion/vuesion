<template>
  <component
    :is="as"
    :class="[
      $style.vueText,
      $style[color],
      $style[appearance],
      $style[weight],
      serifs && $style.serifs,
      underline && $style.underline,
      uppercase && $style.uppercase,
    ]"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import {
  fontWeightValidator,
  horizontalAlignmentValidator,
  responsivePropValidator,
  textColorVariationValidator,
  textStyleValidator,
} from '@/components/prop-validators';

export default defineComponent({
  name: 'VueText',
  components: {},
  props: {
    as: { type: String, default: 'span' },
    appearance: { type: String, default: 'default', validator: textStyleValidator },
    color: { type: String, default: null, validator: textColorVariationValidator },
    weight: { type: String, default: 'regular', validator: fontWeightValidator },
    serifs: { type: Boolean, default: false },
    underline: { type: Boolean, default: false },
    uppercase: { type: Boolean, default: false },
    align: {
      type: [String, Array as () => Array<string>],
      validator: responsivePropValidator(horizontalAlignmentValidator),
      default: null,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueText {
  // Utils
  &.serifs {
    font-family: $font-family-serif;
  }

  &.underline {
    text-decoration: underline;
  }

  &.uppercase {
    text-transform: uppercase;
  }

  // Weight
  &.semi-bold {
    font-weight: $font-weight-semi-bold;
  }

  // Styles

  &.h1 {
    font-size: $text-8;
    line-height: $line-height-8;
    letter-spacing: $letter-spacing-1;
  }

  &.h2 {
    font-size: $text-7;
    line-height: $line-height-7;
    letter-spacing: $letter-spacing-1;
  }

  &.h3 {
    font-size: $text-6;
    line-height: $line-height-6;
    letter-spacing: $letter-spacing-1;
  }

  &.h4 {
    font-size: $text-5;
    line-height: $line-height-5;
    letter-spacing: $letter-spacing-1;
  }

  &.h5 {
    font-size: $text-4;
    line-height: $line-height-4;
    letter-spacing: $letter-spacing-1;
  }

  &.h6 {
    font-size: $text-3;
    line-height: $line-height-3;
    letter-spacing: $letter-spacing-1;
  }

  &.description {
    font-size: $text-3;
    line-height: $line-height-3;
    letter-spacing: $letter-spacing-1;
  }

  &.large-title {
    font-size: $text-5;
    line-height: $line-height-5;
    letter-spacing: $letter-spacing-1;
  }

  &.small-title {
    font-size: $text-2;
    line-height: $line-height-2;
    letter-spacing: $letter-spacing-1;
  }

  &.label {
    font-size: $text-1;
    line-height: $line-height-1;
    letter-spacing: $letter-spacing-1;
  }

  &.button {
    font-size: $text-2;
    line-height: $line-height-2;
    letter-spacing: $letter-spacing-1;
  }

  &.support {
    font-size: $text-1;
    line-height: $line-height-1;
    letter-spacing: $letter-spacing-1;
  }

  // colors
  &.primary {
    color: var(--brand-primary);
  }

  &.neutral {
    color: var(--brand-neutral);
  }

  &.danger {
    color: var(--brand-danger);
  }

  &.warning {
    color: var(--brand-warning);
  }

  &.success {
    color: var(--brand-success);
  }

  &.info {
    color: var(--brand-info);
  }

  &.high-emphasis {
    color: var(--brand-high-emphasis-text-color);
  }

  &.medium-emphasis {
    color: var(--brand-medium-emphasis-text-color);
  }

  &.low-emphasis {
    color: var(--brand-low-emphasis-text-color);
  }

  &.high-emphasis-inverse {
    color: var(--brand-high-emphasis-text-color-inverse);
  }

  &.medium-emphasis-inverse {
    color: var(--brand-medium-emphasis-text-color-inverse);
  }

  &.low-emphasis-inverse {
    color: var(--brand-low-emphasis-text-color-inverse);
  }
}
</style>
