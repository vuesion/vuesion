<template>
  <vue-box :as="as" :padding="padding" :align-x="alignX" :align-y="alignY" :class="cssClasses">
    <slot></slot>
  </vue-box>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import VueBox from '@/components/design-system/layout/VueBox/VueBox.vue';
import { mapPropToBreakpoints } from '@/components/utils/map-prop-to-breakpoints';
import { buildResponsiveClasses } from '@/components/utils/build-responsive-classes';
import type { FlexJustify, FlexAlign, SpacingWithDirections, Width } from '@/components/utils/prop-types';

interface ColumnProps {
  as?: string;
  padding?: SpacingWithDirections | Array<SpacingWithDirections>;
  alignX?: FlexJustify | Array<FlexJustify> | null;
  alignY?: FlexAlign | Array<FlexAlign> | null;
  width?: string | Width | Array<Width>;
  noGrow?: boolean;
  noShrink?: boolean;
}

const props = withDefaults(defineProps<ColumnProps>(), {
  as: 'div',
  padding: () => ['0'] as Array<SpacingWithDirections>,
  alignX: null,
  alignY: null,
  width: () => ['auto'],
  noGrow: false,
  noShrink: false,
});

const responsiveWidth = computed(() => mapPropToBreakpoints(props.width));
const widthClasses = computed(() =>
  buildResponsiveClasses({
    prefix: 'w',
    values: responsiveWidth.value,
  }),
);

const cssClasses = computed(() => [
  'flex',
  'no-wrap',
  ...widthClasses.value,
  props.noGrow ? 'grow-0' : 'grow',
  props.noShrink ? 'shrink-0' : 'shrink',
]);
</script>
