<template>
  <div ref="header" :class="$style.landingPageHeader">
    <vue-content-block :class="[$style.nav, $style.content]"></vue-content-block>

    <vue-box :padding="['24 16', '80 null']">
      <vue-stack space="48" align="center">
        <vue-text look="h1" weight="semi-bold" align="center" :class="$style.content">
          Nothing great is <br />
          <span class="deco-underline">made</span> alone
        </vue-text>

        <vue-text look="h4" align="center" :class="[$style.subtitle, $style.content]">
          Vuesion is a framework that helps product teams build faster than ever with <br />
          fewer headaches and modern best practices across engineering & design.
        </vue-text>

        <vue-inline align="center">
          <a
            :class="[$style.button, $style.content]"
            tabindex="0"
            href="https://github.com/vuesion/vuesion"
            target="_blank"
            rel="noopener"
          >
            <vue-text look="button" weight="semi-bold" :class="$style.content">Clone from Github</vue-text>
          </a>
          <a
            :class="[$style.button, $style.content]"
            tabindex="0"
            href="https://www.figma.com/file/DvP4EE7gAJH3fsc4RFqZYc/Vuesion-Core?node-id=1686%3A4660"
            target="_blank"
            rel="noopener"
          >
            <vue-text look="button" weight="semi-bold" :class="$style.content">Preview in Figma</vue-text>
          </a>
        </vue-inline>

        <vue-hidden tablet-portrait tablet-landscape small-desktop large-desktop :class="$style.content">
          <vue-text> Vuesion Storybook integration and Figma file are perfectly in sync </vue-text>
        </vue-hidden>
      </vue-stack>
    </vue-box>

    <a
      tabindex="0"
      href="https://vuesion.herokuapp.com/storybook/"
      target="_blank"
      rel="noopener"
      aria-label="vuesion storybook"
    >
      <div
        :class="[$style.leftImage, $style.content]"
        :style="{ backgroundImage: 'url(/images/storybook-small.png' }"
        title="vuesion storybook"
      />
    </a>

    <a
      tabindex="0"
      href="https://www.figma.com/file/DvP4EE7gAJH3fsc4RFqZYc/Vuesion-Core?node-id=1686%3A4660"
      target="_blank"
      rel="noopener"
      aria-label="vuesion figma"
    >
      <div
        :class="[$style.rightImage, $style.content]"
        :style="{ backgroundImage: 'url(/images/figma-small.png)' }"
        title="vuesion figma"
      />
    </a>

    <canvas ref="canvas" :class="$style.canvas" />
  </div>
</template>

<script lang="ts">
import { CircleAnimation } from '@/components/animations/CircleAnimation';
import { defineComponent, onBeforeMount, onMounted, onBeforeUnmount } from '@vue/composition-api';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';
import VueContentBlock from '@/components/layout/VueContentBlock/VueContentBlock.vue';
import VueHidden from '@/components/utils/VueHidden/VueHidden.vue';
import { getDomRef } from '@/composables/get-dom-ref';

export default defineComponent({
  name: 'LandingPageHeader',
  components: { VueHidden, VueContentBlock, VueInline, VueStack, VueText, VueBox },
  props: {},
  setup() {
    const header = getDomRef(null);
    const canvas = getDomRef(null);
    const handleResize = () => {
      const canvasElement: HTMLCanvasElement = canvas.value;
      const headerElement: HTMLElement = header.value;
      /* istanbul ignore next */
      const stageRect: DOMRect =
        headerElement.getClientRects().length > 0
          ? headerElement.getClientRects().item(0)
          : ({
              width: 0,
              height: 0,
            } as DOMRect);
      canvasElement.width = stageRect.width;
      canvasElement.height = stageRect.height;
    };

    onBeforeMount(() => window.addEventListener('resize', handleResize));

    onMounted(() => {
      handleResize();
      CircleAnimation(canvas.value);
    });

    onBeforeUnmount(() => window.removeEventListener('resize', handleResize));

    return {
      header,
      canvas,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

.landingPageHeader {
  position: relative;
  background: palette-color-level('primary', 9);
  padding-bottom: $space-24;
  color: var(--a11y-color);

  .content {
    z-index: 1;
  }

  .canvas {
    position: absolute;
    background-color: transparent;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }

  .nav {
    height: $space-80;
    border-bottom: 1px solid var(--brand-border-info-high);
  }

  .subtitle {
    color: palette-color-level('primary', 3);
  }

  .button {
    display: inline-flex;
    height: $space-48;
    padding: $space-12 $space-24;
    align-items: center;
    justify-content: center;
    color: var(--a11y-color);
    text-decoration: none;
    border: 1px solid var(--brand-interaction-primary-hovered);
    border-radius: $space-24;

    &:focus {
      outline: none;
      box-shadow: var(--brand-focused);
    }

    &:hover {
      background: var(--brand-interaction-primary-hovered);
    }
  }

  .leftImage,
  .rightImage {
    width: 100%;
    height: 200px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }

  .rightImage {
    margin: $space-16 0;
  }

  @include mediaMin(tabletPortrait) {
    height: 800px;

    .leftImage {
      position: absolute;
      top: 70%;
      left: 0;
      width: 50%;
      height: 650px;
      background-size: cover;
      background-position: right;
    }

    .rightImage {
      position: absolute;
      top: 70%;
      right: 0;
      width: 50%;
      height: 650px;
      background-size: cover;
      background-position: left;
      margin: 0;
    }
  }

  @include mediaMin(tabletLandscape) {
    .leftImage {
      top: 62%;
    }

    .rightImage {
      top: 62%;
    }
  }
}
</style>
