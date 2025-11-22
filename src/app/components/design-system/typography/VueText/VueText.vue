<template>
  <nuxt-link v-if="isLink" :to="to" :class="[...classes, ...alignCssClasses]">
    <slot />
  </nuxt-link>
  <component v-else :is="as" :class="[...classes, ...alignCssClasses]">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, useCssModule } from 'vue';
import type { FontWeight, Alignment, TextColor, TextStyle } from '@/components/utils/prop-types';
import { mapPropToBreakpoints } from '@/components/utils/map-prop-to-breakpoints';
import { getResponsiveCssClasses } from '@/components/utils/get-responsive-css-classes';

type TextTag = 'span' | 'p' | 'label' | 'strong' | 'em' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'a';

interface TextProps {
  as?: TextTag;
  look?: TextStyle;
  color?: TextColor;
  weight?: FontWeight;
  underline?: boolean;
  italic?: boolean;
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
  underline: false,
  uppercase: false,
  gradient: false,
  noWrap: false,
  alignX: undefined,
  to: undefined,
});
const $style = useCssModule();
const isLink = computed(() => !!props.to);
const classes = computed(() => [
  $style.vueText,
  props.color && $style[props.color],
  $style[props.look],
  $style[props.weight],
  props.underline && $style.underline,
  props.italic && $style.italic,
  props.uppercase && $style.uppercase,
  props.gradient && $style.gradient,
  props.noWrap && $style.noWrap,
  props.alignX && $style.block,
  props.alignX && 'w-full',
]);
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
  &.underline {
    text-decoration: underline;
  }

  &.italic {
    font-style: italic;
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

  &.bold {
    font-weight: ds.$font-weight-bold;
  }

  &.extra-bold {
    font-weight: ds.$font-weight-extra-bold;
  }

  // Styles
  &.hero {
    font-size: ds.$font-size-61;
    line-height: ds.$line-height-74;
    letter-spacing: ds.$letter-spacing-tightest;
  }

  &.h1 {
    font-size: ds.$font-size-49;
    line-height: ds.$line-height-59;
    letter-spacing: ds.$letter-spacing-tightest;
  }

  &.h2 {
    font-size: ds.$font-size-39;
    line-height: ds.$line-height-47;
    letter-spacing: ds.$letter-spacing-tightest;
  }

  &.h3 {
    font-size: ds.$font-size-31;
    line-height: ds.$line-height-38;
    letter-spacing: ds.$letter-spacing-tightest;
  }

  &.h4 {
    font-size: ds.$font-size-25;
    line-height: ds.$line-height-30;
    letter-spacing: ds.$letter-spacing-tightest;
  }

  &.h5 {
    font-size: ds.$font-size-20;
    line-height: ds.$line-height-24;
    letter-spacing: ds.$letter-spacing-tightest;
  }

  &.h6 {
    font-size: ds.$font-size-16;
    line-height: ds.$line-height-20;
    letter-spacing: ds.$letter-spacing-tightest;
  }

  &.description-lg {
    font-size: ds.$font-size-24;
    line-height: ds.$line-height-34;
    letter-spacing: ds.$letter-spacing-normal;
  }

  &.description-md {
    font-size: ds.$font-size-20;
    line-height: ds.$line-height-30;
    letter-spacing: ds.$letter-spacing-normal;
  }

  &.description-sm {
    font-size: ds.$font-size-18;
    line-height: ds.$line-height-28;
    letter-spacing: ds.$letter-spacing-normal;
  }

  &.title-lg {
    font-size: ds.$font-size-25;
    line-height: ds.$line-height-32;
    letter-spacing: ds.$letter-spacing-tight;
  }

  &.title-md {
    font-size: ds.$font-size-20;
    line-height: ds.$line-height-26;
    letter-spacing: ds.$letter-spacing-tight;
  }

  &.title-sm {
    font-size: ds.$font-size-18;
    line-height: ds.$line-height-24;
    letter-spacing: ds.$letter-spacing-tight;
  }

  &.label {
    font-size: ds.$font-size-14;
    line-height: ds.$line-height-20;
    letter-spacing: ds.$letter-spacing-wide;
  }

  &.button-lg {
    font-size: ds.$font-size-18;
    line-height: ds.$line-height-20;
    letter-spacing: ds.$letter-spacing-wider;
  }

  &.button-md {
    font-size: ds.$font-size-16;
    line-height: ds.$line-height-20;
    letter-spacing: ds.$letter-spacing-wider;
  }

  &.button-sm {
    font-size: ds.$font-size-14;
    line-height: ds.$line-height-20;
    letter-spacing: ds.$letter-spacing-wider;
  }

  &.support-lg {
    font-size: ds.$font-size-14;
    line-height: ds.$line-height-20;
    letter-spacing: ds.$letter-spacing-wide;
  }

  &.support-md {
    font-size: ds.$font-size-13;
    line-height: ds.$line-height-18;
    letter-spacing: ds.$letter-spacing-wide;
  }

  &.support-sm {
    font-size: ds.$font-size-12;
    line-height: ds.$line-height-16;
    letter-spacing: ds.$letter-spacing-wide;
  }

  // Colors
  &.high {
    color: var(--text-default-high);
  }

  &.medium {
    color: var(--text-default-medium);
  }

  &.low {
    color: var(--text-default-low);
  }

  &.dark {
    color: var(--text-dark);
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

  &.light {
    color: var(--text-light);
  }

  &.primary {
    color: var(--text-primary);
  }

  &.success {
    color: var(--text-success);
  }

  &.info {
    color: var(--text-info);
  }

  &.warning {
    color: var(--text-warning);
  }

  &.danger {
    color: var(--text-danger);
  }

  &.link {
    color: var(--text-link);
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
