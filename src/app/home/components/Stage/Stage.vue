<template>
  <div ref="stage" :class="$style.stage">
    <canvas ref="canvas" :class="$style.canvas" />

    <vue-grid :class="$style.content" with-vertical-space text-align="center">
      <vue-grid-row>
        <vue-grid-column>
          <img src="logo.png" alt="vuesion" />
        </vue-grid-column>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-column>
          <vue-headline level="1">
            vuesion
          </vue-headline>
        </vue-grid-column>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-column>
          <div :class="$style.subTitle">
            {{
              $t(
                'App.core.description' /* The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices */,
              )
            }}
          </div>
        </vue-grid-column>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-column>
          <a
            :class="$style.github"
            href="https://github.com/vuesion/vuesion"
            target="_blank"
            rel="noopener"
            aria-label="vuesion github repository"
          >
            <vue-icon-github />
          </a>
        </vue-grid-column>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import { CircleAnimation } from '@shared/animations/CircleAnimation';
import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridRow from '@components/VueGrid/VueGridRow/VueGridRow.vue';
import VueGridColumn from '@components/VueGrid/VueGridColumn/VueGridColumn.vue';
import VueIconGithub from '@components/icons/VueIconGithub/VueIconGithub.vue';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';

export default {
  components: { VueHeadline, VueIconGithub, VueGridColumn, VueGridRow, VueGrid },
  props: {
    disableParticles: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {},
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
  methods: {
    handleResize() {
      const canvas: HTMLCanvasElement = this.$refs.canvas;
      const stage: HTMLElement = this.$refs.stage;
      const stageRect: ClientRect =
        stage.getClientRects().length > 0
          ? stage.getClientRects().item(0)
          : ({
              width: 0,
              height: 0,
            } as ClientRect);

      canvas.width = stageRect.width;
      canvas.height = stageRect.height;
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.stage {
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  text-shadow: 0 0 5px rgba(15, 15, 15, 0.4);
  padding-top: $nav-bar-height;

  img {
    max-width: $space-128;
  }

  .canvas {
    position: absolute;
    background-color: transparent;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }

  .content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .github {
      font-size: $font-size-h1;
      display: inline-block;
      background: var(--brand-bg-color);

      &:hover {
        box-shadow: var(--brand-shadow-lg);
      }

      i {
        height: $font-size-h1;
        width: $font-size-h1;
      }
    }
  }
}

@include mediaMin(tabletPortrait) {
  .stage {
    min-height: 50vh;
  }
}

@include mediaMin(tabletLandscape) {
  .stage {
    min-height: 60vh;
  }
}
</style>
