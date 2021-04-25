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
      align && $style.block,
      ...applyResponsiveClasses($style, {}, responsiveAlignments, 'align'),
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
import { applyResponsiveClasses, parseResponsivePropValue } from '@/components/utils';

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
  setup(props) {
    const responsiveAlignments = parseResponsivePropValue(props.align);

    return {
      responsiveAlignments,
      applyResponsiveClasses,
    };
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

  &.text-high {
    color: var(--brand-high-emphasis-text-color);
  }

  &.text-medium {
    color: var(--brand-medium-emphasis-text-color);
  }

  &.text-low {
    color: var(--brand-low-emphasis-text-color);
  }

  &.text-high-inverse {
    color: var(--brand-high-emphasis-text-color-inverse);
  }

  &.text-medium-inverse {
    color: var(--brand-medium-emphasis-text-color-inverse);
  }

  &.text-low-inverse {
    color: var(--brand-low-emphasis-text-color-inverse);
  }

  // Responsive alignment
  &.block {
    display: block;
  }

  &.align-left {
    text-align: left;
  }

  &.align-center {
    text-align: center;
  }

  &.align-right {
    text-align: right;
  }

  @include mediaMin(tabletPortrait) {
    &.align-tp-left {
      text-align: left;
    }

    &.align-tp-center {
      text-align: center;
    }

    &.align-tp-right {
      text-align: right;
    }
  }

  @include mediaMin(tabletLandscape) {
    &.align-tl-left {
      text-align: left;
    }

    &.align-tl-center {
      text-align: center;
    }

    &.align-tl-right {
      text-align: right;
    }
  }

  @include mediaMin(smallDesktop) {
    &.align-sd-left {
      text-align: left;
    }

    &.align-sd-center {
      text-align: center;
    }

    &.align-sd-right {
      text-align: right;
    }
  }

  @include mediaMin(largeDesktop) {
    &.align-ld-left {
      text-align: left;
    }

    &.align-ld-center {
      text-align: center;
    }

    &.align-ld-right {
      text-align: right;
    }
  }
}
</style>
