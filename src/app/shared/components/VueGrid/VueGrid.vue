<template>
  <div :class="[$style.grid, cssClass]">
    <slot />
  </div>
</template>

<script lang="ts">
  export default {
    name:  'VueGrid',
    props: {
      cssClass: {
        type:    String,
        default: 'vueGrid',
      },
    },
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .grid {
    max-width: 425px;
    margin:    0 auto;
    position:  relative;
    padding:   0 $screen-phone-gutter;

    @include media(tabletPortrait) {
      max-width: $screen-tablet-portrait;
      padding:   0 $screen-tablet-portrait-gutter;
    }

    @include media(tabletLandscape) {
      max-width: $screen-tablet-landscape;
      padding:   0 $screen-tablet-landscape-gutter;
    }

    @include media(smallDesktop) {
      max-width: $screen-small-desktop;
      padding:   0 $screen-small-desktop-gutter;
    }

    @include media(largeDesktop) {
      max-width: $screen-large-desktop;
      padding:   0 $screen-large-desktop-gutter;
    }
  }
</style>
