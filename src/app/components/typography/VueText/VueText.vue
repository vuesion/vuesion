<template>
  <component
    :is="as"
    v-if="as !== 'nuxt-link'"
    :class="[
      $style.vueText,
      color && $style[color],
      $style[look],
      $style[weight],
      serifs && $style.serifs,
      underline && $style.underline,
      uppercase && $style.uppercase,
      gradient && $style.gradient,
      noWrap && $style.noWrap,
      alignX && $style.block,
      alignX && 'w-full',
      ...alignCssClasses,
    ]"
  >
    <slot />
  </component>
  <nuxt-link
    v-else
    :to="to"
    :class="[
      $style.vueText,
      color && $style[color],
      $style[look],
      $style[weight],
      serifs && $style.serifs,
      underline && $style.underline,
      uppercase && $style.uppercase,
      gradient && $style.gradient,
      noWrap && $style.noWrap,
      alignX && $style.block,
      alignX && 'w-full',
      ...alignCssClasses,
    ]"
  >
    <slot />
  </nuxt-link>
</template>

<script setup lang="ts">
import { computed, useCssModule } from 'vue';
import { getResponsiveCssClasses, parseResponsivePropValue } from '~/app/components/utils';
import type { FontWeight, Alignment, TextColor, TextStyle } from '~/app/components/prop-types';

// Interface
interface TextProps {
  as?: string;
  look?: TextStyle;
  color?: TextColor;
  weight?: FontWeight;
  serifs?: boolean;
  underline?: boolean;
  uppercase?: boolean;
  gradient?: boolean;
  noWrap?: boolean;
  alignX?: Alignment | Array<Alignment> | string;
  to?: string;
}
const props = withDefaults(defineProps<TextProps>(), {
  as: 'span',
  look: 'default',
  color: undefined,
  weight: 'regular',
  serifs: false,
  underline: false,
  uppercase: false,
  gradient: false,
  noWrap: false,
  alignX: undefined,
  to: undefined,
});

// Deps
const $style = useCssModule();

// Data
const responsiveAlignments = computed(() => parseResponsivePropValue(props.alignX));
const alignCssClasses = computed(() => getResponsiveCssClasses($style, responsiveAlignments.value, 'align'));
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueText {
  font-family: $font-family;
  text-decoration: none;

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

  &.gradient {
    background: linear-gradient(
      286deg,
      palette-color-level('primary', 4) 22.03%,
      palette-color-level('success', 4) 40.14%,
      palette-color-level('info', 4) 79.02%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &.block {
    display: block;
  }

  &.noWrap {
    white-space: nowrap;
  }

  // Weights
  &.semi-bold {
    font-weight: $font-weight-semi-bold;
  }
  &.black {
    font-weight: $font-weight-black;
  }

  // Styles
  &.hero {
    font-size: $text-9;
    line-height: $line-height-9;
    letter-spacing: $letter-spacing-1;
  }

  &.h1 {
    font-size: $text-9;
    line-height: $line-height-9;
    letter-spacing: $letter-spacing-1;
  }

  &.h2 {
    font-size: $text-8;
    line-height: $line-height-8;
    letter-spacing: $letter-spacing-1;
  }

  &.h3 {
    font-size: $text-7;
    line-height: $line-height-7;
    letter-spacing: $letter-spacing-1;
  }

  &.h4 {
    font-size: $text-6;
    line-height: $line-height-6;
    letter-spacing: $letter-spacing-1;
  }

  &.h5 {
    font-size: $text-5;
    line-height: $line-height-5;
    letter-spacing: $letter-spacing-1;
  }

  &.h6 {
    font-size: $text-4;
    line-height: $line-height-4;
    letter-spacing: $letter-spacing-1;
  }

  &.description {
    font-size: $text-4;
    line-height: $line-height-4;
    letter-spacing: $letter-spacing-1;
  }

  &.large-description {
    font-size: $text-6;
    line-height: $line-height-6;
    letter-spacing: $letter-spacing-1;
  }

  &.large-title {
    font-size: $text-6;
    line-height: $line-height-6;
    letter-spacing: $letter-spacing-1;
  }

  &.medium-title {
    font-size: $text-5;
    line-height: $line-height-5;
    letter-spacing: $letter-spacing-1;
  }

  &.small-title {
    font-size: $text-4;
    line-height: $line-height-4;
    letter-spacing: $letter-spacing-1;
  }

  &.label {
    font-size: $text-2;
    line-height: $line-height-2;
    letter-spacing: $letter-spacing-1;
  }

  &.button {
    font-size: $text-2;
    line-height: $line-height-2;
    letter-spacing: $letter-spacing-1;
  }

  &.support {
    font-size: $text-2;
    line-height: $line-height-2;
    letter-spacing: $letter-spacing-1;
  }

  // Colors
  &.info {
    color: var(--text-info);
  }

  &.danger {
    color: var(--text-danger);
  }

  &.warning {
    color: var(--text-warning);
  }

  &.success {
    color: var(--text-success);
  }

  &.link {
    color: var(--text-link);
  }

  &.light {
    color: var(--text-light);
  }

  &.dark {
    color: var(--text-dark);
  }

  &.text-high {
    color: var(--text-default-high);
  }

  &.text-medium {
    color: var(--text-default-medium);
  }

  &.text-low {
    color: var(--text-default-low);
  }

  &.text-inverse-high {
    color: var(--text-inverse-high);
  }

  &.text-inverse-medium {
    color: var(--text-inverse-medium);
  }

  &.text-inverse-low {
    color: var(--text-inverse-low);
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

  &.align-justify {
    text-align: justify;
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

    &.align-tp-justify {
      text-align: justify;
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

    &.align-tl-justify {
      text-align: justify;
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

    &.align-sd-justify {
      text-align: justify;
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

    &.align-ld-justify {
      text-align: justify;
    }
  }
}
</style>
