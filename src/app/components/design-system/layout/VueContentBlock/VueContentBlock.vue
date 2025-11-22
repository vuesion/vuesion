<template>
  <vue-box :as="as" :padding="padding" :class="$style.vueContentBlock">
    <slot />
  </vue-box>
</template>

<script setup lang="ts">
import VueBox from '@/components/design-system/layout/VueBox/VueBox.vue';
import type { SpacingWithDirections } from '@/components/utils/prop-types';

withDefaults(defineProps<{ as?: string; padding?: SpacingWithDirections | Array<SpacingWithDirections> }>(), {
  as: 'div',
  padding: () => ['0'] as Array<SpacingWithDirections>,
});
</script>

<style lang="scss" module>
@use 'assets/design-system/index' as ds;

.vueContentBlock {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  position: relative;

  @include ds.media-min(tablet-portrait) {
    max-width: calc(100% - (#{ds.$space-24} * 2));
  }

  @include ds.media-min(tablet-landscape) {
    max-width: calc(100% - (#{ds.$space-24} * 2));
  }

  @include ds.media-min(small-desktop) {
    max-width: calc(#{ds.$screen-small-desktop-min} - (#{ds.$space-32} * 2));
  }

  @include ds.media-min(large-desktop) {
    max-width: calc(#{ds.$screen-large-desktop-min} - (#{ds.$space-64} * 2));
  }
}
</style>
