<template>
  <component :is="as" :class="cssClasses">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { HorizontalAlignment, VerticalAlignment, Width } from '~/components/prop-types';
import { getResponsiveCssClasses, parseResponsivePropValue } from '~/components/utils';

// Interface
interface ColumnProps {
  as?: string;
  alignX?: string | HorizontalAlignment | Array<HorizontalAlignment> | null;
  alignY?: string | VerticalAlignment | Array<VerticalAlignment> | null;
  width?: string | Width | Array<Width>;
  canGrow?: boolean;
  canShrink?: boolean;
}
const props = withDefaults(defineProps<ColumnProps>(), {
  as: 'div',
  alignX: null,
  alignY: null,
  width: () => ['auto'],
  canGrow: true,
  canShrink: true,
});

// Data
const responsiveAlignX = computed(() => parseResponsivePropValue(props.alignX));
const responsiveAlignY = computed(() => parseResponsivePropValue(props.alignY));
const responsiveWidth = computed(() => parseResponsivePropValue(props.width));
const cssClasses = computed(() => [
  'flex',
  'no-wrap',
  ...getResponsiveCssClasses(null, responsiveAlignX.value, 'justify'),
  ...getResponsiveCssClasses(null, responsiveAlignY.value, 'items'),
  ...getResponsiveCssClasses(null, responsiveWidth.value, 'w'),
  props.canGrow ? 'grow' : 'grow-0',
  props.canShrink ? 'shrink' : 'shrink-0',
]);
</script>
