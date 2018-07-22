<template>
  <div :class="[$style.vueNavigationProgress, show ? $style.show : '']" :style="{width: `${percent}%`}"></div>
</template>

<script lang="ts">
  import { randomInt } from '../../utils/misc';

  export default {
    name:    'VueNavigationProgress',
    props:   {
      isNavigating: {
        type:     Boolean,
        required: true,
      },
    },
    data(): any {
      return {
        interval: null,
        percent:  0,
        show:     false,
      };
    },
    methods: {
      startAnimation() {
        this.interval = setInterval(() => {
          this.show = true;
          if (this.percent <= 50) {
            this.percent += randomInt(30, 40);
          }
          /* istanbul ignore next */
          else if (this.percent <= 70) {
            this.percent += randomInt(5, 10);
          }
          /* istanbul ignore next */
          else if (this.percent <= 95) {
            this.percent += randomInt(1, 2);
          }
          else {
            this.percent = 99;
            this.stopAnimation();
          }
        }, 100);
      },
      stopAnimation() {
        const transitionDuration = 250;
        const widthTransitionDuration = transitionDuration * 2;
        clearInterval(this.interval);
        this.interval = null;
        this.percent = 100;
        setTimeout(() => {
          this.show = false;
          setTimeout(() => {
            this.percent = 0;
          }, transitionDuration);
        }, widthTransitionDuration);
      },
    },
    watch:   {
      isNavigating: {
        immediate: true,
        handler(isNavigating: boolean) {
          if (isNavigating) {
            this.startAnimation();
          } else {
            this.stopAnimation();
          }
        },
      },
    },
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .vueNavigationProgress {
    position:   fixed;
    top:        0;
    left:       0;
    right:      0;
    z-index:    $nav-bar-index + 5;
    height:     2px;
    @include background-gradient($brand-accent, lighten($brand-accent, 30%), 'horizontal');
    transition: width $transition-duration * 2 linear, opacity $transition-duration;
    opacity:    0;
  }

  .show {
    opacity: 1;
  }
</style>
