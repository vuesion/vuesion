<template>
  <div :class="cssClasses">
    <slot />
  </div>
</template>

<script lang="ts">
  export default {
    props: {
      fill: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    computed: {
      cssClasses() {
        const classes = [this.$style.gridItem];

        if (this.fill) {
          classes.push(this.$style.fill);
        }

        return classes;
      },
    },
  };
</script>

<style lang="scss" module>
  @import "../../variables";

  .gridItem {
    flex-basis: 100%;
    padding:    0 $screen-phone-gutter;
    min-width:  $screen-phone - ($screen-phone-gutter * 2);
  }

  @media (min-width: $screen-tablet-portrait) {
    .gridItem {
      flex:    1;
      padding: 0 $screen-tablet-portrait-gutter;

      &.fill {
        flex: 1 1 100%
      }
    }
  }

  @media (min-width: $screen-tablet-landscape) {
    .gridItem {
      padding: 0 $screen-tablet-landscape-gutter;
    }
  }

  @media (min-width: $screen-small-desktop) {
    .gridItem {
      padding: 0 $screen-small-desktop-gutter;
    }
  }

  @media (min-width: $screen-large-desktop) {
    .gridItem {
      padding: 0 $screen-large-desktop-gutter;
    }
  }
</style>
