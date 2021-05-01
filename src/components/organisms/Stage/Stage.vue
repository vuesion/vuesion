<template>
  <div ref="stage" :class="$style.stage">
    <canvas ref="canvas" :class="$style.canvas" />

    <vue-grid :class="$style.content" text-align="center">
      <vue-grid-row>
        <vue-grid-column>
          <img src="/images/vuesion-logo.png" alt="vuesion" />
        </vue-grid-column>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-column>
          <vue-text appearance="h1" as="h1"> vuesion </vue-text>
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
import { CircleAnimation } from '@/components/animations/CircleAnimation';
import VueGrid from '@/components/organisms/VueGrid/VueGrid.vue';
import VueGridRow from '@/components/organisms/VueGrid/VueGridRow/VueGridRow.vue';
import VueGridColumn from '@/components/organisms/VueGrid/VueGridColumn/VueGridColumn.vue';
import VueIconGithub from '@/components/atoms/icons/VueIconGithub/VueIconGithub.vue';
import VueText from '@/components/atoms/VueText/VueText.vue';

export default {
  components: { VueText, VueIconGithub, VueGridColumn, VueGridRow, VueGrid },
  data() {
    return {};
  },
  computed: {},
  beforeMount() {
    window.addEventListener('resize', this.handleResize);
  },
  mounted() {
    this.handleResize();

    CircleAnimation(this.$refs.canvas);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      const canvas: HTMLCanvasElement = this.$refs.canvas;
      const stage: HTMLElement = this.$refs.stage;
      const stageRect: DOMRect =
        stage.getClientRects().length > 0
          ? stage.getClientRects().item(0)
          : ({
              width: 0,
              height: 0,
            } as DOMRect);

      canvas.width = stageRect.width;
      canvas.height = stageRect.height;
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

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
      font-size: $text-8;
      display: inline-block;
      background: var(--brand-primary-bg-color);

      &:hover {
        box-shadow: var(--brand-elevation-3);
      }

      i {
        height: $text-8;
        width: $text-8;
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
