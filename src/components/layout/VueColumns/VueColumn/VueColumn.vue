<template>
  <vue-box :as="as" :padding="padding" :align-x="alignX" :align-y="alignY" :class="cssClasses">
    <slot></slot>
  </vue-box>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { HorizontalAlignment, SpacingWithDirections, VerticalAlignment, Width } from '~/components/prop-types';
import { getResponsiveCssClasses, parseResponsivePropValue } from '~/components/utils';
import VueBox from '~/components/layout/VueBox/VueBox.vue';

// Interface
interface ColumnProps {
  as?: string;
  padding?: SpacingWithDirections | Array<SpacingWithDirections>;
  alignX?: string | HorizontalAlignment | Array<HorizontalAlignment> | null;
  alignY?: string | VerticalAlignment | Array<VerticalAlignment> | null;
  width?: string | Width | Array<Width>;
  noGrow?: boolean;
  noShrink?: boolean;
}
const props = withDefaults(defineProps<ColumnProps>(), {
  as: 'div',
  padding: () => [0],
  alignX: null,
  alignY: null,
  width: () => ['auto'],
  noGrow: false,
  noShrink: false,
});

// Data
const responsiveWidth = computed(() => parseResponsivePropValue(props.width));
const cssClasses = computed(() => [
  'flex',
  'no-wrap',
  ...getResponsiveCssClasses(null, responsiveWidth.value, 'w'),
  props.noGrow ? 'grow-0' : 'grow',
  props.noShrink ? 'shrink-0' : 'shrink',
]);
</script>
