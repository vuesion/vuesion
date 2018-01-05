<template>
  <div :class="['vue-grid', $style.grid]">
    <slot />
  </div>
</template>

<script lang="ts">
  export default {};
</script>

<style lang="scss" module>
  @import "../../variables";

  .grid {
    display:        flex;
    flex-direction: row;
    flex-wrap:      wrap;
    max-width:      425px;
    margin:         0 auto;
    position:       relative;
  }

  @media (min-width: $screen-tablet-portrait) {
    .grid {
      max-width: $screen-tablet-portrait;
      padding:   0 $screen-tablet-portrait-gutter;
    }
  }

  @media (min-width: $screen-tablet-landscape) {
    .grid {
      max-width: $screen-tablet-landscape;
      padding:   0 $screen-tablet-landscape-gutter;
    }
  }

  @media (min-width: $screen-small-desktop) {
    .grid {
      max-width: $screen-small-desktop;
      padding:   0 $screen-small-desktop-gutter;
    }
  }

  @media (min-width: $screen-large-desktop) {
    .grid {
      max-width: $screen-large-desktop;
      padding:   0 $screen-large-desktop-gutter;
    }
  }
</style>
