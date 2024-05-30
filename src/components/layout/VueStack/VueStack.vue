<template>
  <component :is="as" :class="[$style.vueStack, ...cssClasses, 'w-full']">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { HorizontalAlignment, Spacing, SpacingWithDirections, VerticalAlignment } from '~/components/prop-types';
import {
  getCssSpacingClasses,
  getResponsiveCssClasses,
  parseCssSpacingProp,
  parseResponsivePropValue,
} from '~/components/utils';

// Interface
interface StackProps {
  as?: string;
  padding?: SpacingWithDirections | Array<SpacingWithDirections>;
  space?: Spacing | Array<Spacing>;
  alignX?: VerticalAlignment | Array<VerticalAlignment>;
  alignY?: HorizontalAlignment | Array<HorizontalAlignment>;
}
const props = withDefaults(defineProps<StackProps>(), {
  as: 'div',
  padding: () => [0],
  space: () => [24],
  alignX: null,
  alignY: null,
});

// Data
const responsivePaddings = computed(() => parseResponsivePropValue(props.padding));
const responsiveSpace = computed(() => parseResponsivePropValue(props.space));
const responsiveAlignX = computed(() => parseResponsivePropValue(props.alignX));
const responsiveAlignY = computed(() => parseResponsivePropValue(props.alignY));
const cssClasses = computed(() => [
  ...getCssSpacingClasses(null, parseCssSpacingProp(responsivePaddings.value.phone), 'p'),
  ...getCssSpacingClasses(null, parseCssSpacingProp(responsivePaddings.value.tabletPortrait), 'p', 'tp'),
  ...getCssSpacingClasses(null, parseCssSpacingProp(responsivePaddings.value.tabletLandscape), 'p', 'tl'),
  ...getCssSpacingClasses(null, parseCssSpacingProp(responsivePaddings.value.smallDesktop), 'p', 'sd'),
  ...getCssSpacingClasses(null, parseCssSpacingProp(responsivePaddings.value.largeDesktop), 'p', 'ld'),
  ...getResponsiveCssClasses(null, responsiveSpace.value, 'gap'),
  ...getResponsiveCssClasses(null, responsiveAlignX.value, 'items'),
  ...getResponsiveCssClasses(null, responsiveAlignY.value, 'justify'),
]);
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueStack {
  display: flex;
  flex-direction: column;
}
</style>
