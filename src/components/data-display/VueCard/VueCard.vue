<template>
  <vue-stack :space="space" :padding="padding" :class="$style.vueCard">
    <slot />
  </vue-stack>
</template>

<script setup lang="ts">
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import type { Spacing } from '~/components/prop-types';

// Interface
interface CardProps {
  padding?: Spacing | Array<Spacing>;
  space?: Spacing | Array<Spacing>;
}
withDefaults(defineProps<CardProps>(), {
  padding: () => [16],
  space: () => [24],
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
