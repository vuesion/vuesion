<template>
  <vue-box
    :as="as"
    :padding="padding"
    :align-x="alignY"
    :align-y="alignX"
    :class="[$style.vueStack, ...cssClasses, 'w-full']"
  >
    <slot></slot>
  </vue-box>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { FlexJustify, Spacing, SpacingWithDirections, FlexAlign } from '@/components/utils/prop-types';
import VueBox from '@/components/design-system/layout/VueBox/VueBox.vue';
import { mapPropToBreakpoints } from '@/components/utils/map-prop-to-breakpoints';
import { getResponsiveCssClasses } from '@/components/utils/get-responsive-css-classes';

// Interface
interface StackProps {
  as?: string;
  padding?: SpacingWithDirections | Array<SpacingWithDirections>;
  space?: Spacing | Array<Spacing>;
  alignX?: FlexAlign | Array<FlexAlign> | null;
  alignY?: FlexJustify | Array<FlexJustify> | null;
}
const props = withDefaults(defineProps<StackProps>(), {
  as: 'div',
  padding: () => ['0'] as Array<SpacingWithDirections>,
  space: () => ['0'] as Array<Spacing>,
  alignX: null,
  alignY: null,
});

// Data
const responsiveSpace = computed(() => mapPropToBreakpoints(props.space));
const cssClasses = computed(() => [...getResponsiveCssClasses(null, responsiveSpace.value, 'gap')]);
</script>

<style lang="scss" module>
@use 'assets/design-system/index' as ds;

.vueStack {
  display: flex;
  flex-direction: column;
}
</style>
