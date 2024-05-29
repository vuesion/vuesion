<template>
  <vue-box :padding="padding" :class="$style.vueCard">
    <slot />
  </vue-box>
</template>

<script setup lang="ts">
import VueBox from '~/components/layout/VueBox/VueBox.vue';
import type { Spacing } from '~/components/prop-types';

// Interface
interface CardProps {
  padding?: Spacing | Array<Spacing>;
}
withDefaults(defineProps<CardProps>(), {
  padding: () => [16],
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
