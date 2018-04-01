<template>
  <div :class="cssClasses">
    <slot />
  </div>
</template>

<script lang="ts">
  export default {
    name:     'VueGridItem',
    props:    {
      cssClass: {
        type:    String,
        default: 'vueGridItem',
      },
      fill:     {
        type:     Boolean,
        required: false,
        default:  false,
      },
    },
    computed: {
      cssClasses() {
        const classes = [this.$style.gridItem];

        if (this.fill) {
          classes.push(this.$style.fill);
        }

        classes.push(this.cssClass);

        return classes;
      },
    },
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .gridItem {
    flex-basis: 100%;
    padding:    0 $screen-phone-gutter;
    min-width:  $screen-phone - ($screen-phone-gutter * 2);

    @include media(tabletPortrait) {
      flex:    1;
      padding: 0 $screen-tablet-portrait-gutter;

      &.fill {
        flex: 1 1 100%
      }
    }

    @include media(tabletLandscape) {
      padding: 0 $screen-tablet-landscape-gutter;
    }

    @include media(smallDesktop) {
      padding: 0 $screen-small-desktop-gutter;
    }

    @include media(largeDesktop) {
      padding: 0 $screen-large-desktop-gutter;
    }
  }
</style>
