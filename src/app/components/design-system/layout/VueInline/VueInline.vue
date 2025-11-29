<template>
  <vue-box :as="as" :padding="padding" :align-x="alignX" :align-y="alignY" :class="cssClasses">
    <slot></slot>
  </vue-box>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { FlexJustify, Spacing, SpacingWithDirections, FlexAlign } from '@/components/utils/prop-types';
import VueBox from '@/components/design-system/layout/VueBox/VueBox.vue';
import { mapPropToBreakpoints } from '@/components/utils/map-prop-to-breakpoints';
import { buildResponsiveClasses } from '@/components/utils/build-responsive-classes';
import { buildResponsiveFlexDirectionClasses } from '@/components/utils/build-responsive-flex-direction-classes';

interface InlineProps {
  as?: string;
  padding?: SpacingWithDirections | Array<SpacingWithDirections>;
  space?: Spacing | Array<Spacing>;
  alignX?: FlexJustify | Array<FlexJustify> | null;
  alignY?: FlexAlign | Array<FlexAlign> | null;
  reverse?: boolean | Array<boolean> | null;
  noWrap?: boolean;
  stackPhone?: boolean;
  stackTabletPortrait?: boolean;
  stackTabletLandscape?: boolean;
  stackSmallDesktop?: boolean;
  stackLargeDesktop?: boolean;
}
const props = withDefaults(defineProps<InlineProps>(), {
  as: 'div',
  padding: () => ['0'] as Array<SpacingWithDirections>,
  space: () => ['0'] as Array<Spacing>,
  alignX: null,
  alignY: null,
  reverse: null,
  noWrap: false,
  stackPhone: false,
  stackTabletPortrait: false,
  stackTabletLandscape: false,
  stackSmallDesktop: false,
  stackLargeDesktop: false,
});

const responsiveSpace = computed(() => mapPropToBreakpoints<string | null>(props.space));
const gapClasses = computed(() =>
  buildResponsiveClasses({
    prefix: 'gap',
    values: responsiveSpace.value,
  }),
);

const responsiveReverse = computed(() => mapPropToBreakpoints<boolean | null>(props.reverse, true));
const directionClasses = computed(() =>
  buildResponsiveFlexDirectionClasses(responsiveReverse.value, {
    phone: props.stackPhone,
    tabletPortrait: props.stackTabletPortrait,
    tabletLandscape: props.stackTabletLandscape,
    smallDesktop: props.stackSmallDesktop,
    largeDesktop: props.stackLargeDesktop,
  }),
);

const cssClasses = computed(() => [
  'inline-flex',
  props.noWrap ? 'no-wrap' : 'wrap',
  ...gapClasses.value,
  ...directionClasses.value,
]);
</script>
