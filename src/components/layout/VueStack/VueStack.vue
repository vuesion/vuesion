<template>
  <component :is="as" :class="[$style.vueStack, ...cssClasses]">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed, useCssModule } from 'vue';
import { Alignment, Spacing } from '@/components/prop-types';
import { getResponsiveCssClasses, parseResponsivePropValue } from '~/components/utils';

interface StackProps {
  as?: string;
  space?: Spacing | Array<Spacing>;
  alignX?: Alignment | Array<Alignment>;
}

const props = withDefaults(defineProps<StackProps>(), {
  as: 'div',
  space: () => ['24'],
  alignX: null,
});
const $style = useCssModule();
const responsiveSpace = computed(() => parseResponsivePropValue(props.space));
const responsiveAlignX = computed(() => parseResponsivePropValue(props.alignX));
const cssClasses = computed(() => [
  ...getResponsiveCssClasses($style, responsiveSpace.value, 's'),
  ...getResponsiveCssClasses($style, responsiveAlignX.value, 'alignx'),
]);
</script>

<style lang="scss" module>
@import 'assets/_design-system';

.vueStack {
  display: flex;
  flex-direction: column;

  // spacings
  @each $name, $space in $spacings {
    &.s-#{$name} {
      gap: $space;
    }
  }
  @include mediaMin(tabletPortrait) {
    @each $name, $space in $spacings {
      &.s-tp-#{$name} {
        gap: $space;
      }
    }
  }
  @include mediaMin(tabletLandscape) {
    @each $name, $space in $spacings {
      &.s-tl-#{$name} {
        gap: $space;
      }
    }
  }
  @include mediaMin(smallDesktop) {
    @each $name, $space in $spacings {
      &.s-sd-#{$name} {
        gap: $space;
      }
    }
  }
  @include mediaMin(largeDesktop) {
    @each $name, $space in $spacings {
      &.s-ld-#{$name} {
        gap: $space;
      }
    }
  }

  // alignments
  &.alignx-start {
    align-items: flex-start;
  }
  &.alignx-center {
    align-items: center;
  }
  &.alignx-end {
    align-items: flex-end;
  }
  @include mediaMin(tabletPortrait) {
    &.alignx-tp-start {
      align-items: flex-start;
    }
    &.alignx-tp-center {
      align-items: center;
    }
    &.alignx-tp-end {
      align-items: flex-end;
    }
  }
  @include mediaMin(tabletLandscape) {
    &.alignx-tl-start {
      align-items: flex-start;
    }
    &.alignx-tl-center {
      align-items: center;
    }
    &.alignx-tl-end {
      align-items: flex-end;
    }
  }
  @include mediaMin(smallDesktop) {
    &.alignx-sd-start {
      align-items: flex-start;
    }
    &.alignx-sd-center {
      align-items: center;
    }
    &.alignx-sd-end {
      align-items: flex-end;
    }
  }
  @include mediaMin(largeDesktop) {
    &.alignx-ld-start {
      align-items: flex-start;
    }
    &.alignx-ld-center {
      align-items: center;
    }
    &.alignx-ld-end {
      align-items: flex-end;
    }
  }
}
</style>
