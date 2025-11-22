<template>
  <component :is="as" :class="cssClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import type { SpacingWithDirections, FlexJustify, FlexAlign } from '@/components/utils/prop-types';
import { mapPropToBreakpoints } from '@/components/utils/map-prop-to-breakpoints';
import { parseSpacingShorthand } from '@/components/utils/parse-spacing-shorthand';
import { getResponsiveCssClasses } from '@/components/utils/get-responsive-css-classes';
import { getCssSpacingClasses } from '@/components/utils/get-css-spacing-classes';

// Interface
interface BoxProps {
  as?: string;
  padding?: SpacingWithDirections | Array<SpacingWithDirections>;
  alignX?: FlexJustify | Array<FlexJustify> | null;
  alignY?: FlexAlign | Array<FlexAlign> | null;
}
const props = withDefaults(defineProps<BoxProps>(), {
  as: 'div',
  padding: () => [0],
  alignX: null,
  alignY: null,
});

// Deps
const attrs = useAttrs();

// Data
const responsivePaddings = computed(() => mapPropToBreakpoints(props.padding));
const responsiveAlignX = computed(() => mapPropToBreakpoints(props.alignX));
const responsiveAlignY = computed(() => mapPropToBreakpoints(props.alignY));
const hasAlignment = computed(() => props.alignX !== null || props.alignY !== null);
const cssClasses = computed(() => {
  let classes = [
    ...getCssSpacingClasses(null, parseSpacingShorthand(responsivePaddings.value.phone), 'p'),
    ...getCssSpacingClasses(null, parseSpacingShorthand(responsivePaddings.value.tabletPortrait), 'p', 'tp'),
    ...getCssSpacingClasses(null, parseSpacingShorthand(responsivePaddings.value.tabletLandscape), 'p', 'tl'),
    ...getCssSpacingClasses(null, parseSpacingShorthand(responsivePaddings.value.smallDesktop), 'p', 'sd'),
    ...getCssSpacingClasses(null, parseSpacingShorthand(responsivePaddings.value.largeDesktop), 'p', 'ld'),
  ];
  if (hasAlignment.value === true) {
    if (attrs.class) {
      if ((attrs.class as string).includes('flex') === false) {
        classes.push('flex');
      }
    } else {
      classes.push('flex');
    }

    classes = [
      ...classes,
      ...getResponsiveCssClasses(null, responsiveAlignX.value, 'justify'),
      ...getResponsiveCssClasses(null, responsiveAlignY.value, 'items'),
    ];
  } else {
    classes.push('block');
  }

  return classes;
});
</script>
