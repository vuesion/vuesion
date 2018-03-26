<template>
  <div :class="$style.vueGridRow">
    <slot />
  </div>
</template>

<script lang="ts">
  export default {
    name: 'VueGridRow',
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .vueGridRow {
    display:   flex;
    flex-wrap: wrap;
    margin:    0 (-$screen-phone-gutter);

    @include media(tabletPortrait) {
      margin: 0 (-$screen-tablet-portrait-gutter);
    }

    @include media(tabletLandscape) {
      margin: 0 (-$screen-tablet-landscape-gutter);
    }

    @include media(smallDesktop) {
      margin: 0 (-$screen-small-desktop-gutter);
    }

    @include media(largeDesktop) {
      margin: 0 (-$screen-large-desktop-gutter);
    }
  }
</style>
