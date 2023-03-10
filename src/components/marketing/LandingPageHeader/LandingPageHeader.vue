<template>
  <section ref="header" :class="$style.landingPageHeader">
    <canvas ref="canvas" :class="$style.canvas" />
    <vue-content-block>
      <vue-box padding="null" align-y="center" as="nav" :class="$style.nav">
        <a href="https://vuesion.github.io/docs/en/v4/" target="_blank" rel="noopener">
          <vue-icon-book /> Documentation
        </a>
        <nuxt-link :to="localePath('/download')"> <vue-icon-download /> Downloads </nuxt-link>
      </vue-box>

      <vue-box :padding="['24 16', '96 0 32 0', '96 0 80 0']">
        <vue-stack space="48" align-x="center">
          <vue-text look="h1" weight="semi-bold" align-x="center" :class="$style.content">
            Nothing great is <br />
            <span class="deco-underline">made</span> alone
          </vue-text>

          <vue-text look="h4" align-x="center" :class="[$style.subtitle, $style.content]">
            Vuesion is a boilerplate that helps product teams build faster than ever with <br />
            fewer headaches and modern best practices across engineering & design.
          </vue-text>

          <vue-inline align-x="center">
            <a
              :class="[$style.button, $style.content]"
              tabindex="0"
              href="https://vuesion.github.io/docs/en/v4/guide/install.html"
              target="_blank"
              rel="noopener"
            >
              <vue-text look="button" weight="semi-bold" :class="$style.content">Create Vuesion project</vue-text>
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

          <vue-hidden tablet-landscape small-desktop large-desktop :class="$style.content">
            <vue-text align-x="center"> Vuesion Storybook integration and Figma file are perfectly in sync </vue-text>
          </vue-hidden>
        </vue-stack>
      </vue-box>

      <vue-columns :space="[0, 24]" stack-phone :class="$style.gallery">
        <vue-column>
          <a tabindex="0" href="/storybook" target="_blank" rel="noopener" aria-label="vuesion storybook">
            <nuxt-img
              src="/images/storybook-small.png"
              alt="vuesion storybook"
              format="webp"
              width="785px"
              height="530px"
              quality="50"
              fit="contain"
              loading="lazy"
            />
          </a>
        </vue-column>

        <vue-column>
          <a
            tabindex="0"
            href="https://www.figma.com/community/file/1080868611324978249"
            target="_blank"
            rel="noopener"
            aria-label="vuesion figma"
          >
            <nuxt-img
              src="/images/figma-small.png"
              alt="vuesion figma"
              format="webp"
              width="785px"
              height="530px"
              quality="50"
              fit="contain"
              loading="lazy"
            />
          </a>
        </vue-column>
      </vue-columns>
    </vue-content-block>
  </section>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, onBeforeUnmount } from 'vue';
import { CircleAnimation } from '~/components/animations/CircleAnimation';
import VueBox from '~/components/layout/VueBox/VueBox.vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueInline from '~/components/layout/VueInline/VueInline.vue';
import VueHidden from '~/components/utils/VueHidden/VueHidden.vue';
import { getDomRef } from '~/composables/get-dom-ref';
import VueContentBlock from '~/components/layout/VueContentBlock/VueContentBlock.vue';
import VueIconDownload from '~/components/icons/VueIconDownload.vue';
import VueIconBook from '~/components/icons/VueIconBook.vue';
import VueColumns from '~/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '~/components/layout/VueColumns/VueColumn/VueColumn.vue';
const header = getDomRef<HTMLElement>(null);
const canvas = getDomRef<HTMLCanvasElement>(null);
const handleResize = () => {
  const canvasElement: HTMLCanvasElement = canvas.value;
  const headerElement: HTMLElement = header.value;
  /* c8 ignore start */
  const stageRect: DOMRect =
    headerElement.getClientRects().length > 0
      ? (headerElement.getClientRects().item(0) as DOMRect)
      : ({
          width: 0,
          height: 0,
        } as DOMRect);
  /* c8 ignore end */
  canvasElement.width = stageRect.width;
  canvasElement.height = stageRect.height;
};

onBeforeMount(() => window.addEventListener('resize', handleResize));

onMounted(() => {
  handleResize();
  CircleAnimation(canvas.value);
});

onBeforeUnmount(() => window.removeEventListener('resize', handleResize));
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.landingPageHeader {
  position: relative;
  background: palette-color-level('primary', 9);
  padding-bottom: $space-24;
  color: var(--a11y-default-color);

  .nav {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid palette-color-level('primary', 8);
    height: $navbar-height;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;

    a {
      flex: 0 0 auto;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      height: $navbar-height;
      color: var(--a11y-default-color);
      padding: $space-16;
      font-size: $text-2;
      line-height: $line-height-2;
      font-weight: $font-weight-semi-bold;

      &:hover {
        background: var(--brand-interaction-primary-hovered);
      }

      i {
        width: $space-20;
        height: $space-20;
        margin-right: $space-8;
      }
    }
  }

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

  .subtitle {
    color: palette-color-level('primary', 3);
  }

  .button {
    display: inline-flex;
    height: $space-48;
    padding: $space-12 $space-24;
    align-items: center;
    justify-content: center;
    color: var(--a11y-default-color);
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

  @include mediaMin(smallDesktop) {
    .gallery {
      position: relative;
      margin-bottom: -20%;
    }
  }
}
</style>
