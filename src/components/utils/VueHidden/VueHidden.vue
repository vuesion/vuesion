<template>
  <component
    :is="as"
    :class="[
      $style.vueHidden,
      phone && $style.hidePhone,
      tabletPortrait && $style.hideTabletPortrait,
      tabletLandscape && $style.hideTabletLandscape,
      smallDesktop && $style.hideSmallDesktop,
      largeDesktop && $style.hideLargeDesktop,
      onScreen && $style.onScreen,
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: string;
    phone?: boolean;
    tabletPortrait?: boolean;
    tabletLandscape?: boolean;
    smallDesktop?: boolean;
    largeDesktop?: boolean;
    onScreen?: boolean;
  }>(),
  {
    as: 'div',
    phone: false,
    tabletPortrait: false,
    tabletLandscape: false,
    smallDesktop: false,
    largeDesktop: false,
    onScreen: false,
  },
);
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueHidden {
  &.onScreen {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @include mediaMax(phone) {
    &.hidePhone {
      display: none;
    }
  }

  @include mediaMinMax(tabletPortrait) {
    &.hideTabletPortrait {
      display: none;
    }
  }

  @include mediaMinMax(tabletLandscape) {
    &.hideTabletLandscape {
      display: none;
    }
  }

  @include mediaMinMax(smallDesktop) {
    &.hideSmallDesktop {
      display: none;
    }
  }

  @include mediaMin(largeDesktop) {
    &.hideLargeDesktop {
      display: none;
    }
  }
}
</style>
