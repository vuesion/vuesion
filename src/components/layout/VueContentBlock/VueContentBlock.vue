<template>
  <div :class="$style.vueContentBlock">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'VueContentBlock',
  components: {},
  props: {},
  setup() {
    return {};
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

.vueContentBlock {
  width: 100%;
  margin: 0 auto;
  position: relative;

  @include mediaMin(tabletPortrait) {
    max-width: $screen-tablet-portrait-min;
  }

  @include mediaMin(tabletLandscape) {
    max-width: $screen-tablet-landscape-min;
  }

  @include mediaMin(smallDesktop) {
    max-width: $screen-small-desktop-min;
  }

  @include mediaMin(largeDesktop) {
    max-width: $screen-large-desktop-min;
  }
}
</style>
