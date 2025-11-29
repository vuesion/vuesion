<template>
  <vue-box
    :as="as"
    :padding="padding"
    :align-x="alignY"
    :align-y="alignX"
    :class="[$style.vueStack, ...gapClasses, 'w-full']"
  >
    <slot />
  </vue-box>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { buildResponsiveClasses } from '@/components/utils/build-responsive-classes';
import { mapPropToBreakpoints } from '@/components/utils/map-prop-to-breakpoints';
import type { FlexJustify, Spacing, SpacingWithDirections, FlexAlign } from '@/components/utils/prop-types';
import type { BreakPoint } from '#shared/enums/BreakPoint';
import VueBox from '@/components/design-system/layout/VueBox/VueBox.vue';

interface StackProps {
  as?: string;
  padding?: SpacingWithDirections | Array<SpacingWithDirections>;
  space?: Spacing | Array<Spacing>;
  alignX?: FlexAlign | Array<FlexAlign> | null;
  alignY?: FlexJustify | Array<FlexJustify> | null;
}

const props = withDefaults(defineProps<StackProps>(), {
  as: 'div',
  padding: () => ['0'],
  space: () => ['0'],
  alignX: null,
  alignY: null,
});

const responsiveSpace = computed<Record<BreakPoint, string | null>>(
  () => mapPropToBreakpoints<string | null>(props.space, false) as Record<BreakPoint, string | null>,
);

const gapClasses = computed(() => {
  return buildResponsiveClasses({
    prefix: 'gap',
    values: responsiveSpace.value,
  });
});
</script>

<style lang="scss" module>
.vueStack {
  display: flex;
  flex-direction: column;
}
</style>
