<template>
  <div :class="$style.grid">
    <slot />
  </div>
</template>

<script lang="ts">
  export default {};
</script>

<style lang="scss" module>
  @import "../../shared/variables";

  .grid {
    display:        flex;
    flex-direction: row;
    flex-wrap:      wrap;
    max-width:      $screen-phone;
    margin:         0 auto;
  }

  @media (min-width: $screen-tablet-portrait) {
    .grid {
      max-width: $screen-tablet-portrait;
    }
  }

  @media (min-width: $screen-tablet-landscape) {
    .grid {
      max-width: $screen-tablet-landscape;
    }
  }

  @media (min-width: $screen-small-desktop) {
    .grid {
      max-width: $screen-small-desktop;
    }
  }

  @media (min-width: $screen-large-desktop) {
    .grid {
      max-width: $screen-large-desktop;
    }
  }
</style>
