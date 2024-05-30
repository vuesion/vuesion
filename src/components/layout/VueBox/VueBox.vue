<template>
  <component :is="as" :class="[$style.vueBox, ...cssClasses]">
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
}
const props = withDefaults(defineProps<BoxProps>(), {
  as: 'div',
  padding: () => [16],
  alignX: null,
  alignY: null,
});

// Deps
const $style = useCssModule();

// Data
const responsivePaddings = computed(() => parseResponsivePropValue(props.padding));
const responsiveAlignX = computed(() => parseResponsivePropValue(props.alignX));
const responsiveAlignY = computed(() => parseResponsivePropValue(props.alignY));
const hasAlignment = computed(() => props.alignX !== null || props.alignY !== null);
const cssClasses = computed(() => {
  let classes = [
    ...getCssSpacingClasses(null, parseCssSpacingProp(responsivePaddings.value.phone), 'p'),
    ...getCssSpacingClasses(null, parseCssSpacingProp(responsivePaddings.value.tabletPortrait), 'p', 'tp'),
    ...getCssSpacingClasses(null, parseCssSpacingProp(responsivePaddings.value.tabletLandscape), 'p', 'tl'),
    ...getCssSpacingClasses(null, parseCssSpacingProp(responsivePaddings.value.smallDesktop), 'p', 'sd'),
    ...getCssSpacingClasses(null, parseCssSpacingProp(responsivePaddings.value.largeDesktop), 'p', 'ld'),
  ];
  if (hasAlignment.value === true) {
    classes = [
      ...classes,
      'flex',
      ...getResponsiveCssClasses(null, responsiveAlignX.value, 'justify'),
      ...getResponsiveCssClasses(null, responsiveAlignY.value, 'items'),
    ];
  } else {
    classes.push('block');
  }

  return classes;
});
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueBox {
}
</style>
