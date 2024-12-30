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
import type {
  HorizontalAlignment,
  Spacing,
  SpacingWithDirections,
  VerticalAlignment,
} from '~/app/components/prop-types';
import { getResponsiveCssClasses, parseResponsivePropValue } from '~/app/components/utils';
import VueBox from '~/app/components/layout/VueBox/VueBox.vue';

// Interface
interface StackProps {
  as?: string;
  padding?: SpacingWithDirections | Array<SpacingWithDirections>;
  space?: Spacing | Array<Spacing>;
  alignX?: VerticalAlignment | Array<VerticalAlignment> | null;
  alignY?: HorizontalAlignment | Array<HorizontalAlignment> | null;
}
const props = withDefaults(defineProps<StackProps>(), {
  as: 'div',
  padding: () => [0],
  space: () => [16],
  alignX: null,
  alignY: null,
});

// Data
const responsiveSpace = computed(() => parseResponsivePropValue(props.space));
const cssClasses = computed(() => [...getResponsiveCssClasses(null, responsiveSpace.value, 'gap')]);
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueStack {
  display: flex;
  flex-direction: column;
}
</style>
