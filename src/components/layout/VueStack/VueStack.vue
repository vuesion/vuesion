<template>
  <component :is="as" :class="[$style.vueStack, ...cssClasses, 'w-full']">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { HorizontalAlignment, Spacing } from '~/components/prop-types';
import { getResponsiveCssClasses, parseResponsivePropValue } from '~/components/utils';

// Interface
interface StackProps {
  as?: string;
  space?: string | Spacing | Array<Spacing>;
  alignX?: string | HorizontalAlignment | Array<HorizontalAlignment> | null;
}
const props = withDefaults(defineProps<StackProps>(), {
  as: 'div',
  space: () => [24],
  alignX: null,
});

// Data
const responsiveSpace = computed(() => parseResponsivePropValue(props.space));
const responsiveAlignX = computed(() => parseResponsivePropValue(props.alignX));
const cssClasses = computed(() => [
  ...getResponsiveCssClasses(null, responsiveSpace.value, 'gap'),
  ...getResponsiveCssClasses(null, responsiveAlignX.value, 'items'),
]);
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueStack {
  display: flex;
  flex-direction: column;
}
</style>
