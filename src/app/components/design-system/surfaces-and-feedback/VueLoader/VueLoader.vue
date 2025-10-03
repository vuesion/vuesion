#
<template>
  <div :class="$style.vueLoader" data-testid="loader">
    <svg :class="$style.svg" viewBox="25 25 50 50">
      <circle :class="$style.circle" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';

const $style = useCssModule();
</script>

<style lang="scss" module>
@use 'assets/design-system/index' as ds;

.vueLoader {
  display: inline-block;
  position: relative;
  width: ds.$loader-size;
  height: ds.$loader-size;

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  .svg {
    animation: rotate 2s linear infinite;
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    inset: 0;
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

  .circle {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite;
    stroke-linecap: round;
    stroke: currentcolor;

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
}
</style>
