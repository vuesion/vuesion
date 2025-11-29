<template>
  <vue-box :as="as" :padding="padding" :class="cssClasses">
    <slot />
  </vue-box>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import VueBox from '@/components/design-system/layout/VueBox/VueBox.vue';

import { mapPropToBreakpoints } from '@/components/utils/map-prop-to-breakpoints';
import { buildResponsiveClasses } from '@/components/utils/build-responsive-classes';

import type { Spacing, SpacingWithDirections } from '@/components/utils/prop-types';

type ColumnRange = 'none' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface TilesProps {
  as?: string;
  padding?: SpacingWithDirections | Array<SpacingWithDirections>;
  space?: Spacing | Array<Spacing>;
  verticalSpace?: Spacing | Array<Spacing> | null;
  horizontalSpace?: Spacing | Array<Spacing> | null;
  columns?: ColumnRange | Array<ColumnRange>;
}

const props = withDefaults(defineProps<TilesProps>(), {
  as: 'div',
  padding: () => ['0'] as Array<SpacingWithDirections>,
  space: () => ['0'] as Array<Spacing>,
  verticalSpace: null,
  horizontalSpace: null,
  columns: () => [1, 2, 3, 4] as Array<ColumnRange>,
});

const effectiveVertical = computed(() => mapPropToBreakpoints(props.verticalSpace ?? props.space));
const effectiveHorizontal = computed(() => mapPropToBreakpoints(props.horizontalSpace ?? props.space));
const responsiveColumns = computed(() => mapPropToBreakpoints(props.columns));
const gapYClasses = computed(() =>
  buildResponsiveClasses({
    prefix: 'gap-y',
    values: effectiveVertical.value,
  }),
);
const gapXClasses = computed(() =>
  buildResponsiveClasses({
    prefix: 'gap-x',
    values: effectiveHorizontal.value,
  }),
);
const columnClasses = computed(() =>
  buildResponsiveClasses({
    prefix: 'grid-cols',
    values: responsiveColumns.value,
  }),
);

const cssClasses = computed(() => [
  'grid',
  'w-full',
  ...gapYClasses.value,
  ...gapXClasses.value,
  ...columnClasses.value,
]);
</script>
