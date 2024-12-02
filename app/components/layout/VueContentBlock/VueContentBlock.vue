<template>
  <vue-box :as="as" :padding="padding" :class="$style.vueContentBlock">
    <slot />
  </vue-box>
</template>

<script setup lang="ts">
import VueBox from '~/app/components/layout/VueBox/VueBox.vue';
import type { SpacingWithDirections } from '~/app/components/prop-types';

withDefaults(defineProps<{ as?: string; padding?: SpacingWithDirections | Array<SpacingWithDirections> }>(), {
  as: 'div',
  padding: () => [0],
});
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueContentBlock {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  position: relative;

  @include mediaMin(tabletPortrait) {
    max-width: calc(100% - ($space-24 * 2));
  }

  @include mediaMin(tabletLandscape) {
    max-width: calc(100% - ($space-24 * 2));
  }

  @include mediaMin(smallDesktop) {
    max-width: calc($screen-small-desktop-min - ($space-32 * 2));
  }

  @include mediaMin(largeDesktop) {
    max-width: calc($screen-large-desktop-min - ($space-64 * 2));
  }
}
</style>
