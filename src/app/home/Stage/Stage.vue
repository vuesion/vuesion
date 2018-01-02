<template>
  <div :class="$style.stage" ref="stage">
    <canvas :class="$style.canvas" ref="canvas"></canvas>
    <div :class="$style.accent"></div>
    <div :class="$style.accentTwo"></div>

    <h1 :class="$style.title">Vue.js Starter</h1>
    <div :class="$style.subTitle">an enterprise ready boilerplate for isomorphic, progressive web apps</div>
  </div>
</template>

<script lang="ts">
  import { CircleAnimation } from '../../shared/animations/CircleAnimation';

  export default {
    components: {},
    props: {},
    data() {
      return {};
    },
    computed: {},
    methods: {},
    mounted() {
      const canvas: HTMLCanvasElement = this.$refs.canvas;
      const stage: HTMLElement = this.$refs.stage;
      const stageRect: ClientRect = stage.getClientRects().length > 0 ? stage.getClientRects().item(0) : { width: 0, height: 0 } as ClientRect;

      canvas.width = stageRect.width;
      canvas.height = stageRect.height;

      CircleAnimation(canvas);
    }
  };
</script>

<style lang="scss" module>
  @import "../../shared/variables";

  .stage {
    min-height: 100vh;
    background: linear-gradient(171deg, $brand-dark-primary 0%, $brand-primary 100%);
    overflow:   hidden;
    position:   relative;
    text-align: center;

    .accent {
      background: linear-gradient(-171deg, $brand-light-primary 0%, $brand-dark-primary 100%);
      width:      56%;
      min-height: 100vh;
      transform:  skewX(-40deg) translateX(100%);
      box-shadow: $nav-bar-shadow;
      position:   absolute;
    }

    .accentTwo {
      background: linear-gradient(-171deg, $brand-accent 0%, $brand-light-primary 100%);
      width:      56%;
      min-height: 100vh;
      transform:  skewX(30deg) translateX(-57%);
      box-shadow: $nav-bar-shadow;
      position:   absolute;
    }

    .canvas {
      min-height:       100vh;
      width:            100%;
      position:         absolute;
      background-color: transparent;
      left:             0;
      top:              0;
    }

    .title, .subTitle {
      text-shadow: 0 5px 10px rgba(0, 0, 0, 0.33);
      position:    relative;
    }

    .title {
      top: $grid-unit * 22;
    }

    .subTitle {
      top: $grid-unit * 19;
    }
  }
</style>
