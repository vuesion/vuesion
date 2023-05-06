<template>
  <component :is="as" :class="$style.vueContentBlock">
    <slot />
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ as?: string }>(), {
  as: 'div',
});
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueContentBlock {
  width: 100%;
  max-width: calc(100% - $space-32);
  margin: 0 auto;
  position: relative;

  @include mediaMin(tabletPortrait) {
    max-width: calc($screen-tablet-portrait-min - ($space-24 * 2));
  }

  @include mediaMin(tabletLandscape) {
    max-width: calc($screen-tablet-landscape-min - ($space-24 * 2));
  }

  @include mediaMin(smallDesktop) {
    max-width: calc($screen-small-desktop-min - ($space-32 * 2));
  }

  @include mediaMin(largeDesktop) {
    max-width: calc($screen-large-desktop-min - ($space-64 * 2));
  }
}
</style>
