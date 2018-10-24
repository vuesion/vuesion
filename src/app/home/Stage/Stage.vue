<template>
  <div :class="$style.stage" ref="stage">
    <canvas :class="$style.canvas" ref="canvas"></canvas>

    <vue-grid>
      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <vue-headline level="1" :class="$style.title">vue-starter</vue-headline>
          <div :class="$style.subTitle">
            {{
            $t('App.core.description' /* A flexible, scalable, opinionated boilerplate for production-ready PWAs with
            focus on performance, development speed, and best practices */)
            }}
          </div>

          <a :class="$style.github" href="https://github.com/devCrossNet/vue-starter" target="_blank" rel="noopener"
             aria-label="github repository">
            <vue-icon-github />
          </a>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
  import { CircleAnimation } from '../../shared/animations/CircleAnimation';
  import VueGrid             from '../../shared/components/VueGrid/VueGrid.vue';
  import VueGridRow          from '../../shared/components/VueGridRow/VueGridRow.vue';
  import VueGridItem         from '../../shared/components/VueGridItem/VueGridItem.vue';
  import VueIconGithub       from '../../shared/components/icons/VueIconGithub/VueIconGithub.vue';
  import VueHeadline         from '../../shared/components/VueHeadline/VueHeadline.vue';

  export default {
    components: { VueHeadline, VueIconGithub, VueGridItem, VueGridRow, VueGrid },
    props:      {
      disableParticles: {
        type:     Boolean,
        required: true,
      },
    },
    data() {
      return {};
    },
    computed:   {},
    methods:    {
      handleResize() {
        const canvas: HTMLCanvasElement = this.$refs.canvas;
        const stage: HTMLElement = this.$refs.stage;
        const stageRect: ClientRect = stage.getClientRects().length > 0 ? stage.getClientRects().item(0) : {
          width:  0,
          height: 0,
        } as ClientRect;

        canvas.width = stageRect.width;
        canvas.height = stageRect.height;
      },
    },
    beforeMount() {
      window.addEventListener('resize', this.handleResize);
    },
    mounted() {
      this.handleResize();

      if (!this.disableParticles) {
        CircleAnimation(this.$refs.canvas);
      }
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    },
  };
</script>

<style lang="scss" module>
  @import "../../shared/styles";

  .stage {
    min-height: 100vh;
    background: $brand-primary;
    overflow:   hidden;
    position:   relative;
    text-align: center;
    color:      $text-color-inverse;
    background: $secondary-1-1;
  }

  .canvas {
    min-height:       100vh;
    width:            100%;
    position:         absolute;
    background-color: transparent;
    left:             0;
    top:              0;
  }

  .title, .subTitle, .github {
    text-shadow: 0 5px 10px rgba(0, 0, 0, 0.33);
    position:    relative;
  }

  .title {
    top: $space-unit * 14;

    @include mediaMin(tabletPortrait) {
      top: $space-unit * 24;
    }

    @include mediaMin(tabletLandscape) {
      top: $space-unit * 26;
    }
  }

  .subTitle {
    top: $space-unit * 13;

    @include mediaMin(tabletPortrait) {
      top: $space-unit * 22;
    }

    @include mediaMin(tabletLandscape) {
      top: $space-unit * 24;
    }
  }

  .github {
    font-size:           $font-size-h1;
    top:                 $space-unit * 17;
    box-shadow:          0 1px 3px rgba(0, 0, 0, 0.3);
    display:             inline-block;
    background:          $bg-color;
    transition:          $button-transition;
    transition-property: box-shadow, background-color;
    color:               $link-color;
    padding:             $button-padding;

    &:hover {
      box-shadow: $button-active-shadow;
    }

    @include mediaMin(tabletPortrait) {
      top: $space-unit * 25;
    }

    @include mediaMin(tabletLandscape) {
      top: $space-unit * 39;
    }

    i {
      height: $font-size-h1;
      width:  $font-size-h1;
    }
  }
</style>
