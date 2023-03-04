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
  margin: 0 auto;
  position: relative;

  @include mediaMin(tabletPortrait) {
    max-width: $screen-tablet-portrait-min - 32px;
  }

  @include mediaMin(tabletLandscape) {
    max-width: $screen-tablet-landscape-min - 32px;
  }

  @include mediaMin(smallDesktop) {
    max-width: $screen-small-desktop-min - 64px;
  }

  @include mediaMin(largeDesktop) {
    max-width: $screen-large-desktop-min - 64px;
  }
}
</style>
