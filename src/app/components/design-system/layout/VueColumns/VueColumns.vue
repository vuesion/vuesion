<template>
  <vue-box :as="as" :padding="padding" :align-x="alignX" :align-y="alignY" :class="cssClasses">
    <slot></slot>
  </vue-box>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type {
  HorizontalAlignment,
  Spacing,
  SpacingWithDirections,
  VerticalAlignment,
} from '@/components/utils/prop-types';
import VueBox from '@/components/design-system/layout/VueBox/VueBox.vue';
import { mapPropToBreakpoints } from '@/components/utils/map-prop-to-breakpoints';
import { getResponsiveCssClasses } from '@/components/utils/get-responsive-css-classes';
import { getFlexDirectionForBreakpoint } from '@/components/utils/get-flex-direction-for-breakpoint';

// Interface
interface ColumnsProps {
  as?: string;
  padding?: SpacingWithDirections | Array<SpacingWithDirections>;
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
  padding: () => [0],
  space: () => [16],
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
const responsiveSpace = computed(() => mapPropToBreakpoints(props.space));
const responsiveReverse = computed(() => mapPropToBreakpoints(props.reverse, true));
const cssClasses = computed(() => [
  'flex',
  ...getResponsiveCssClasses(null, responsiveSpace.value, 'gap'),
  getFlexDirectionForBreakpoint(responsiveReverse.value.phone, props.stackPhone),
  getFlexDirectionForBreakpoint(responsiveReverse.value.tabletPortrait, props.stackTabletPortrait, 'tp'),
  getFlexDirectionForBreakpoint(responsiveReverse.value.tabletLandscape, props.stackTabletLandscape, 'tl'),
  getFlexDirectionForBreakpoint(responsiveReverse.value.smallDesktop, props.stackSmallDesktop, 'sd'),
  getFlexDirectionForBreakpoint(responsiveReverse.value.largeDesktop, props.stackLargeDesktop, 'ld'),
]);
</script>
