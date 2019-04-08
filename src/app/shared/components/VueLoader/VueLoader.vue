#<template>
  <div :class="cssClasses">
    <svg :class="[$style.circle, 'vueLoaderCircle']" viewBox="25 25 50 50">
      <circle
        :class="[$style.path, 'vueLoaderPath']"
        cx="50"
        cy="50"
        r="20"
        fill="none"
        stroke-width="2"
        stroke-miterlimit="10"
      ></circle>
    </svg>
  </div>
</template>

<script lang="ts">
import { variationValidator } from '@components/utils';

export default {
  name: 'VueLoader',
  props: {
    medium: {
      type: Boolean,
    },
    large: {
      type: Boolean,
    },
    color: {
      type: String,
      validator: variationValidator,
      default: 'default',
    },
  },
  computed: {
    cssClasses() {
      const classes = [this.$style.loader];

      if (this.medium) {
        classes.push(this.$style.medium);
      }
      if (this.large) {
        classes.push(this.$style.large);
      }

      classes.push(this.$style[this.color]);

      return classes;
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.loader {
  display: inline-block;
  position: relative;
  width: $loader-size;
  height: $loader-size;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
}

.circle {
  animation: rotate 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}

.path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite;
  stroke-linecap: round;
  stroke: currentColor;

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
    }
  }
}

.medium {
  width: $loader-medium-size;
  height: $loader-medium-size;
}

.large {
  width: $loader-large-size;
  height: $loader-large-size;
}

@each $variation, $color in $loader-variations {
  .#{$variation} {
    .path {
      stroke: $color;
    }
  }
}
</style>
