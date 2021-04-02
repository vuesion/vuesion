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

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'VueHidden',
  components: {},
  props: {
    as: { type: String, default: 'div' },
    phone: { type: Boolean, default: false },
    tabletPortrait: { type: Boolean, default: false },
    tabletLandscape: { type: Boolean, default: false },
    smallDesktop: { type: Boolean, default: false },
    largeDesktop: { type: Boolean, default: false },
    onScreen: { type: Boolean, default: false },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

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
