<template>
  <component :is="as" :class="cssClasses">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { HorizontalAlignment, Spacing, VerticalAlignment } from '~/components/prop-types';
import { getFlexDirectionForBreakpoint, getResponsiveCssClasses, parseResponsivePropValue } from '~/components/utils';

// Interface
interface ColumnsProps {
  as?: string;
  space?: Spacing | Array<Spacing>;
  alignX?: HorizontalAlignment | Array<HorizontalAlignment> | null;
  alignY?: VerticalAlignment | Array<VerticalAlignment> | null;
  reverse?: boolean | Array<boolean> | null;
  stackPhone?: boolean;
  stackTabletPortrait?: boolean;
  stackTabletLandscape?: boolean;
  stackSmallDesktop?: boolean;
  stackLargeDesktop?: boolean;
}
const props = withDefaults(defineProps<ColumnsProps>(), {
  as: 'div',
  space: () => [24],
  alignX: null,
  alignY: null,
  reverse: null,
  stackPhone: false,
  stackTabletPortrait: false,
  stackTabletLandscape: false,
  stackSmallDesktop: false,
  stackLargeDesktop: false,
});

// Data
const responsiveSpace = computed(() => parseResponsivePropValue(props.space));
const responsiveAlignX = computed(() => parseResponsivePropValue(props.alignX));
const responsiveAlignY = computed(() => parseResponsivePropValue(props.alignY));
const responsiveReverse = computed(() => parseResponsivePropValue(props.reverse, true));
const cssClasses = computed(() => [
  'flex',
  ...getResponsiveCssClasses(null, responsiveSpace.value, 'gap'),
  ...getResponsiveCssClasses(null, responsiveAlignX.value, 'justify'),
  ...getResponsiveCssClasses(null, responsiveAlignY.value, 'items'),
  getFlexDirectionForBreakpoint(responsiveReverse.value.phone, props.stackPhone),
  getFlexDirectionForBreakpoint(responsiveReverse.value.tabletPortrait, props.stackTabletPortrait, 'tp'),
  getFlexDirectionForBreakpoint(responsiveReverse.value.tabletLandscape, props.stackTabletLandscape, 'tl'),
  getFlexDirectionForBreakpoint(responsiveReverse.value.smallDesktop, props.stackSmallDesktop, 'sd'),
  getFlexDirectionForBreakpoint(responsiveReverse.value.largeDesktop, props.stackLargeDesktop, 'ld'),
]);
</script>
