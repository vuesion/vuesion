<template>
  <vue-stack :space="space" :padding="padding" :align-x="alignX" :align-y="alignY" :class="$style.vueCard">
    <slot />
  </vue-stack>
</template>

<script setup lang="ts">
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import type {
  HorizontalAlignment,
  Spacing,
  SpacingWithDirections,
  VerticalAlignment,
} from '@/components/utils/prop-types';

// Interface
interface CardProps {
  padding?: SpacingWithDirections | Array<SpacingWithDirections>;
  space?: Spacing | Array<Spacing>;
  alignX?: VerticalAlignment | Array<VerticalAlignment> | null;
  alignY?: HorizontalAlignment | Array<HorizontalAlignment> | null;
}
withDefaults(defineProps<CardProps>(), {
  padding: () => [16],
  space: () => [24],
  alignX: null,
  alignY: null,
});
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueCard {
  background-color: $card-bg;
  box-shadow: $card-shadow;
  border: $card-border;
  border-radius: $card-border-radius;
}
</style>
