<template>
  <component :is="as" :class="[$style.vueBox, autoHeight && $style.autoHeight, ...cssClasses]">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, useCssModule } from 'vue';
import type { SpacingWithDirections, HorizontalAlignment, VerticalAlignment } from '~/components/prop-types';
import {
  getCssSpacingClasses,
  getResponsiveCssClasses,
  parseCssSpacingProp,
  parseResponsivePropValue,
} from '~/components/utils';

// Interface
interface BoxProps {
  as?: string;
  padding?: SpacingWithDirections | Array<SpacingWithDirections>;
  alignX?: HorizontalAlignment | Array<HorizontalAlignment> | null;
  alignY?: VerticalAlignment | Array<VerticalAlignment> | null;
  autoHeight?: boolean;
}
const props = withDefaults(defineProps<BoxProps>(), {
  as: 'div',
  padding: () => [16],
  alignX: null,
  alignY: null,
  autoHeight: false,
});

// Deps
const $style = useCssModule();

// Data
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
@import 'assets/_design-system.scss';

.vueBox {
  height: 100%;

  &.autoHeight {
    height: auto;
  }
}
</style>
