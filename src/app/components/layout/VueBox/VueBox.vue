<template>
  <component :is="as" :class="[$style.vueBox, ...cssClasses]">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, useCssModule, useAttrs } from 'vue';
import type { SpacingWithDirections, HorizontalAlignment, VerticalAlignment } from '@/components/utils/prop-types';
import { mapPropToBreakpoints } from '@/components/utils/map-prop-to-breakpoints';
import { parseSpacingShorthand } from '@/components/utils/parse-spacing-shorthand';
import { getResponsiveCssClasses } from '@/components/utils/get-responsive-css-classes';
import { getCssSpacingClasses } from '@/components/utils/get-css-spacing-classes';

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

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueBox {
}
</style>
