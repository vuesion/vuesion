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
} from '~/app/components/prop-types';
import {
  getFlexDirectionForBreakpoint,
  getResponsiveCssClasses,
  parseResponsivePropValue,
} from '~/app/components/utils';
import VueBox from '~/app/components/layout/VueBox/VueBox.vue';

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
const responsiveSpace = computed(() => parseResponsivePropValue(props.space));
const responsiveReverse = computed(() => parseResponsivePropValue(props.reverse, true));
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
