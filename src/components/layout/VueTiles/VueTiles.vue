<template>
  <component :is="as" :class="cssClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Spacing } from '~/components/prop-types';
import { getResponsiveCssClasses, parseResponsivePropValue } from '~/components/utils';

type ColumnRange = 'none' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface TilesProps {
  as?: string;
  space?: Spacing | Array<Spacing>;
  verticalSpace?: Spacing | Array<Spacing> | null;
  horizontalSpace?: Spacing | Array<Spacing> | null;
  columns?: ColumnRange | Array<ColumnRange>;
}

const props = withDefaults(defineProps<TilesProps>(), {
  as: 'div',
  space: () => [24],
  verticalSpace: null,
  horizontalSpace: null,
  columns: () => [1, 2, 3, 4],
});
const responsiveVerticalSpace = computed(() => parseResponsivePropValue(props.verticalSpace || props.space));
const responsiveHorizontalSpace = computed(() => parseResponsivePropValue(props.horizontalSpace || props.space));
const responsiveColumns = computed(() => parseResponsivePropValue(props.columns));
const cssClasses = computed(() => [
  'grid',
  ...getResponsiveCssClasses(null, responsiveVerticalSpace.value, 'gap-y'),
  ...getResponsiveCssClasses(null, responsiveHorizontalSpace.value, 'gap-x'),
  ...getResponsiveCssClasses(null, responsiveColumns.value, 'grid-cols'),
]);
</script>
