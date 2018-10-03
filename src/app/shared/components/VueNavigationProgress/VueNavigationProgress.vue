<template>
  <div :class="[$style.vueNavigationProgress, show ? $style.show : '']"
       :style="{width: `${percent}%`, transition: transitionStyle}"></div>
</template>

<script lang="ts">
  import { randomInt } from '../../utils/misc';

  export default {
    name:     'VueNavigationProgress',
    props:    {
      isNavigating: {
        type:     Boolean,
        required: true,
      },
    },
    data(): any {
      return {
        widthTransitionDuration:   500,
        opacityTransitionDuration: 350,
        interval:                  null,
        percent:                   0,
        show:                      false,
      };
    },
    methods:  {
      startAnimation() {
        this.interval = setInterval(() => {
          this.show = true;
          if (this.percent <= 50) {
            this.percent += randomInt(30, 40);
          } /* istanbul ignore next */ else if (this.percent <= 70) {
            this.percent += randomInt(5, 10);
          } /* istanbul ignore next */ else if (this.percent <= 95) {
            this.percent += randomInt(1, 2);
          } else {
            this.percent = 99;
          }
        }, 100);
      },
      stopAnimation() {
        clearInterval(this.interval);
        this.interval = null;
        this.percent = 100;
        setTimeout(() => {
          this.show = false;
          setTimeout(() => {
            this.percent = 0;
          }, this.opacityTransitionDuration);
        }, this.widthTransitionDuration);
      },
    },
    computed: {
      transitionStyle() {
        return `width ${this.widthTransitionDuration}ms linear, opacity ${this.opacityTransitionDuration}ms`;
      },
    },
    watch:    {
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
    position: fixed;
    top:      0;
    left:     0;
    right:    0;
    z-index:  9999;
    height:   2px;
    @include background-gradient($brand-secondary, lighten($brand-secondary, 30%), 'horizontal');
    opacity:  0;
  }

  .show {
    opacity: 1;
  }
</style>
