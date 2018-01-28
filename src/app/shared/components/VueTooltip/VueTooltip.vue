<template>
  <div
    :class="cssClasses"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
    @touchend="onTouchEnd"
    :data-tip="tip">
    <slot />
  </div>
</template>

<script lang="ts">
  export default {
    components: {},
    props: {
      tip: {
        type: String,
        required: true,
      }
    },
    data(): any {
      return {
        show: false,
      };
    },
    computed: {
      cssClasses() {
        const classes: string [] = [this.$style.vueTooltip];

        if (this.show) {
          classes.push(this.$style.show);
        }

        if (this.$slots.default && this.$slots.default[0].tag === undefined) {
          classes.push(this.$style.highlight);
        }

        return classes;
      }
    },
    methods: {
      onEnter() {
        this.show = true;
      },
      onLeave() {
        this.show = false;
      },
      onTouchEnd() {
        this.show = !this.show;
      },
    },
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .vueTooltip {
    display:  inline-block;
    position: relative;

    &:before,
    &:after {
      display:                    block;
      opacity:                    0;
      pointer-events:             none;
      position:                   absolute;
      transform:                  translate3d(0, 8px, 0);

      transition-property:        opacity, transform;
      transition-duration:        $transition-duration;
      transition-timing-function: ease-in-out;
    }

    &:before {
      background:  $brand-accent;
      color:       $bg-color;
      content:     attr(data-tip);
      padding:     4px 8px;
      top:         -36px;
      white-space: nowrap;
      box-shadow:  $panel-shadow;
    }

    &:after {
      border-right: 6px solid transparent;
      border-top:   6px solid $brand-accent;
      border-left:  6px solid transparent;
      content:      '';
      height:       0;
      top:          -5px;
      left:         8px;
      width:        0;
    }
  }

  .show {

    &:before,
    &:after {
      opacity:   1;
      transform: translate3d(0, 0, 0);
    }
  }

  .highlight {
    border-bottom: 1px dashed $brand-accent;
  }
</style>
