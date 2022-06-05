<template>
  <component
    :is="as"
    :class="[
      $style.vueText,
      $style[color],
      $style[look],
      $style[weight],
      serifs && $style.serifs,
      underline && $style.underline,
      uppercase && $style.uppercase,
      alignX && $style.block,
      ...alignCssClasses,
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, useCssModule } from 'vue';
import { getResponsiveCssClasses, parseResponsivePropValue } from '@/components/utils';
import { FontWeight, HorizontalAlignment, TextColor, TextStyle } from '@/components/prop-types';

interface TextProps {
  as?: string;
  look?: TextStyle;
  color?: TextColor;
  weight?: FontWeight;
  serifs?: boolean;
  underline?: boolean;
  uppercase?: boolean;
  alignX?: HorizontalAlignment | Array<HorizontalAlignment>;
}

const props = withDefaults(defineProps<TextProps>(), {
  as: 'span',
  look: 'default',
  color: null,
  weight: 'regular',
  serifs: false,
  underline: false,
  uppercase: false,
  alignX: null,
});
const $style = useCssModule();
const responsiveAlignments = computed(() => parseResponsivePropValue(props.alignX));
const alignCssClasses = computed(() => getResponsiveCssClasses($style, responsiveAlignments.value, 'align'));
</script>

<style lang="scss" module>
@import 'assets/_design-system';

.vueText {
  font-family: $font-family;

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

  &.block {
    display: block;
  }

  // Weights
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

  &.medium-title {
    font-size: $text-4;
    line-height: $line-height-4;
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

  // Colors
  &.info {
    color: var(--brand-text-info);
  }

  &.danger {
    color: var(--brand-text-danger);
  }

  &.warning {
    color: var(--brand-text-warning);
  }

  &.success {
    color: var(--brand-text-success);
  }

  &.text-high {
    color: var(--brand-text-default-high);
  }

  &.text-medium {
    color: var(--brand-text-default-medium);
  }

  &.text-low {
    color: var(--brand-text-default-low);
  }

  &.text-inverse-high {
    color: var(--brand-text-inverse-high);
  }

  &.text-inverse-medium {
    color: var(--brand-text-inverse-medium);
  }

  &.text-inverse-low {
    color: var(--brand-text-inverse-low);
  }

  // Responsive Styles
  &.align-start {
    text-align: left;
  }

  &.align-center {
    text-align: center;
  }

  &.align-end {
    text-align: right;
  }

  @include mediaMin(tabletPortrait) {
    &.align-tp-start {
      text-align: left;
    }

    &.align-tp-center {
      text-align: center;
    }

    &.align-tp-end {
      text-align: right;
    }
  }

  @include mediaMin(tabletLandscape) {
    &.align-tl-start {
      text-align: left;
    }

    &.align-tl-center {
      text-align: center;
    }

    &.align-tl-end {
      text-align: right;
    }
  }

  @include mediaMin(smallDesktop) {
    &.align-sd-start {
      text-align: left;
    }

    &.align-sd-center {
      text-align: center;
    }

    &.align-sd-end {
      text-align: right;
    }
  }

  @include mediaMin(largeDesktop) {
    &.align-ld-start {
      text-align: left;
    }

    &.align-ld-center {
      text-align: center;
    }

    &.align-ld-end {
      text-align: right;
    }
  }
}
</style>
