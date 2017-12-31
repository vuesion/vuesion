<template>
  <div :class="cssClasses">
    <svg :class="['vue-loader-circle', $style.circle]" viewBox="25 25 50 50">
      <circle
        :class="['vue-loader-path', $style.path]"
        cx="50"
        cy="50"
        r="20"
        fill="none"
        stroke-width="2"
        stroke-miterlimit="10" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    props: {
      medium: {
        type: Boolean,
        required: false,
        default: false,
      },
      large: {
        type: Boolean,
        required: false,
        default: false,
      },
      primary: {
        type: Boolean,
        required: false,
        default: false,
      },
      accent: {
        type: Boolean,
        required: false,
        default: false,
      },
      warn: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    computed: {
      cssClasses() {
        const classes = ['vue-loader', this.$style.loader];

        if (this.medium) {
          classes.push(this.$style.medium);
        }

        if (this.large) {
          classes.push(this.$style.large);
        }

        if (this.primary) {
          classes.push(this.$style.primary);
        }

        if (this.accent) {
          classes.push(this.$style.accent);
        }

        if (this.warn) {
          classes.push(this.$style.warn);
        }

        return classes;
      },
    },
  };
</script>

<style lang="scss" module>
  @import "../../variables";

  .loader {
    display:  inline-block;
    position: relative;
    width:    $loader-size;
    height:   $loader-size;
    &:before {
      content:     '';
      display:     block;
      padding-top: 100%;
    }

    &.medium {
      width:  $loader-medium-size;
      height: $loader-medium-size;
    }

    &.large {
      width:  $loader-large-size;
      height: $loader-large-size;
    }

    &.primary {
      .path {
        stroke: $brand-primary;
      }
    }

    &.accent {
      .path {
        stroke: $brand-accent;
      }
    }

    &.warn {
      .path {
        stroke: $brand-warn;
      }
    }

    .circle {
      animation:        rotate 2s linear infinite;
      height:           100%;
      transform-origin: center center;
      width:            100%;
      position:         absolute;
      top:              0;
      bottom:           0;
      left:             0;
      right:            0;
      margin:           auto;

      @keyframes rotate {
        100% {
          transform: rotate(360deg);
        }
      }
    }

    .path {
      stroke-dasharray:  1, 200;
      stroke-dashoffset: 0;
      animation:         dash 1.5s ease-in-out infinite;
      stroke-linecap:    round;
      stroke:            $font-color;

      @keyframes dash {
        0% {
          stroke-dasharray:  1, 200;
          stroke-dashoffset: 0;
        }
        50% {
          stroke-dasharray:  89, 200;
          stroke-dashoffset: -35px;
        }
        100% {
          stroke-dasharray:  89, 200;
          stroke-dashoffset: -124px;
        }
      }
    }
  }


</style>
