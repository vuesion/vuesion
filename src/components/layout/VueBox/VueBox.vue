<template>
  <component :is="as" :class="[$style.vueBox, autoHeight && $style.autoHeight, ...cssClasses]">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { SpacingWithDirections, HorizontalAlignment, VerticalAlignment } from '~/components/prop-types';
import {
  getCssSpacingClasses,
  getResponsiveCssClasses,
  parseCssSpacingProp,
  parseResponsivePropValue,
} from '~/components/utils';

interface BoxProps {
  as?: string;
  padding?: string | SpacingWithDirections | Array<SpacingWithDirections>;
  alignX?: string | HorizontalAlignment | Array<HorizontalAlignment>;
  alignY?: string | VerticalAlignment | Array<VerticalAlignment>;
  autoHeight?: boolean;
}

const props = withDefaults(defineProps<BoxProps>(), {
  as: 'span',
  padding: () => ['24'],
  alignX: null,
  alignY: null,
  autoHeight: false,
});
const responsivePaddings = computed(() => parseResponsivePropValue(props.padding));
const responsiveAlignX = computed(() => parseResponsivePropValue(props.alignX));
const responsiveAlignY = computed(() => parseResponsivePropValue(props.alignY));
const hasAlignment = computed(() => props.alignX || props.alignY);

const cssClasses = computed(() => [
  hasAlignment.value ? 'flex' : 'block',
  ...getCssSpacingClasses(null, parseCssSpacingProp(responsivePaddings.value.phone), 'p'),
  ...getCssSpacingClasses(null, parseCssSpacingProp(responsivePaddings.value.tabletPortrait), 'p', 'tp'),
  ...getCssSpacingClasses(null, parseCssSpacingProp(responsivePaddings.value.tabletLandscape), 'p', 'tl'),
  ...getCssSpacingClasses(null, parseCssSpacingProp(responsivePaddings.value.smallDesktop), 'p', 'sd'),
  ...getCssSpacingClasses(null, parseCssSpacingProp(responsivePaddings.value.largeDesktop), 'p', 'ld'),
  ...getResponsiveCssClasses(null, responsiveAlignX.value, 'justify'),
  ...getResponsiveCssClasses(null, responsiveAlignY.value, 'items'),
]);
</script>

<style lang="scss" module>
@import 'assets/_design-system';

.vueBox {
  height: 100%;

  &.autoHeight {
    height: auto;
  }
}
</style>
