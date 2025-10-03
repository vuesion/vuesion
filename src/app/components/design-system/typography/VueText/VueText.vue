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
import type { FontWeight, Alignment, TextColor, TextStyle } from '@/components/utils/prop-types';
import { mapPropToBreakpoints } from '@/components/utils/map-prop-to-breakpoints';
import { getResponsiveCssClasses } from '@/components/utils/get-responsive-css-classes';

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
const responsiveAlignments = computed(() => mapPropToBreakpoints(props.alignX));
const alignCssClasses = computed(() => getResponsiveCssClasses($style, responsiveAlignments.value, 'align'));
</script>

<style lang="scss" module>
@use 'assets/design-system/index' as ds;

/* stylelint-disable selector-class-pattern */
.vueText {
  font-family: ds.$font-family;
  text-decoration: none;

  // Utils
  &.serifs {
    font-family: ds.$font-family-serif;
  }

  &.underline {
    text-decoration: underline;
  }

  &.uppercase {
    text-transform: uppercase;
  }

  &.gradient {
    /* stylelint-disable declaration-property-value-no-unknown */
    background: linear-gradient(
      286deg,
      ds.palette-color-level('primary', 4) 22.03%,
      ds.palette-color-level('success', 4) 40.14%,
      ds.palette-color-level('info', 4) 79.02%
    );
    /* stylelint-enable declaration-property-value-no-unknown */
    background-clip: text;
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
    font-weight: ds.$font-weight-semi-bold;
  }

  &.black {
    font-weight: ds.$font-weight-black;
  }

  // Styles
  &.hero {
    font-size: ds.$text-9;
    line-height: ds.$line-height-9;
    letter-spacing: ds.$letter-spacing-1;
  }

  &.h1 {
    font-size: ds.$text-9;
    line-height: ds.$line-height-9;
    letter-spacing: ds.$letter-spacing-1;
  }

  &.h2 {
    font-size: ds.$text-8;
    line-height: ds.$line-height-8;
    letter-spacing: ds.$letter-spacing-1;
  }

  &.h3 {
    font-size: ds.$text-7;
    line-height: ds.$line-height-7;
    letter-spacing: ds.$letter-spacing-1;
  }

  &.h4 {
    font-size: ds.$text-6;
    line-height: ds.$line-height-6;
    letter-spacing: ds.$letter-spacing-1;
  }

  &.h5 {
    font-size: ds.$text-5;
    line-height: ds.$line-height-5;
    letter-spacing: ds.$letter-spacing-1;
  }

  &.h6 {
    font-size: ds.$text-4;
    line-height: ds.$line-height-4;
    letter-spacing: ds.$letter-spacing-1;
  }

  &.description {
    font-size: ds.$text-4;
    line-height: ds.$line-height-4;
    letter-spacing: ds.$letter-spacing-1;
  }

  &.large-description {
    font-size: ds.$text-6;
    line-height: ds.$line-height-6;
    letter-spacing: ds.$letter-spacing-1;
  }

  &.large-title {
    font-size: ds.$text-6;
    line-height: ds.$line-height-6;
    letter-spacing: ds.$letter-spacing-1;
  }

  &.medium-title {
    font-size: ds.$text-5;
    line-height: ds.$line-height-5;
    letter-spacing: ds.$letter-spacing-1;
  }

  &.small-title {
    font-size: ds.$text-4;
    line-height: ds.$line-height-4;
    letter-spacing: ds.$letter-spacing-1;
  }

  &.label {
    font-size: ds.$text-2;
    line-height: ds.$line-height-2;
    letter-spacing: ds.$letter-spacing-1;
  }

  &.button {
    font-size: ds.$text-2;
    line-height: ds.$line-height-2;
    letter-spacing: ds.$letter-spacing-1;
  }

  &.support {
    font-size: ds.$text-2;
    line-height: ds.$line-height-2;
    letter-spacing: ds.$letter-spacing-1;
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

  &.high {
    color: var(--text-default-high);
  }

  &.medium {
    color: var(--text-default-medium);
  }

  &.low {
    color: var(--text-default-low);
  }

  &.inverse-high {
    color: var(--text-inverse-high);
  }

  &.inverse-medium {
    color: var(--text-inverse-medium);
  }

  &.inverse-low {
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

  @include ds.media-min(tablet-portrait) {
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

  @include ds.media-min(tablet-landscape) {
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

  @include ds.media-min(small-desktop) {
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

  @include ds.media-min(large-desktop) {
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
