<template>
  <vue-content-block :class="$style.download">
    <vue-box :padding="['24 16', '24 16', 24, 32]">
      <vue-stack :space="'32'">
        <vue-breadcrumb :items="breadCrumbItems" />

        <vue-text look="h1" as="h1">Downloads</vue-text>

        <vue-text look="h2" as="h2" weight="semi-bold">IDEs</vue-text>

        <vue-stack :space="'80'">
          <vue-stack :space="'16'">
            <vue-text look="h3" as="h3">Jetbrains</vue-text>
            <iframe
              :class="$style.widget"
              title="Vuesion theme for Jetbrains IDEs"
              height="319px"
              src="https://plugins.jetbrains.com/embeddable/card/12226"
            ></iframe>
            <iframe
              :class="$style.install"
              title="Vuesion theme for Jetbrains IDEs"
              height="48px"
              src="https://plugins.jetbrains.com/embeddable/install/12226"
            ></iframe>
          </vue-stack>

          <vue-stack :space="'16'">
            <vue-text look="h3" as="h3">Visual Studio Code</vue-text>

            <nuxt-img
              :class="$style.vscode"
              src="https://user-images.githubusercontent.com/1667598/129297863-c10e6313-656d-4451-9082-b92849d519da.png"
              alt="Visual Studio Code theme based on vuesion color scheme"
              width="384px"
              format="webp"
              quality="80"
              loading="lazy"
            />
            <vue-text
              as="a"
              look="description"
              href="https://marketplace.visualstudio.com/items?itemName=vuesion.vuesion-theme"
              target="_blank"
              rel="noopener"
            >
              Go to Vuesion Theme marketplace page
            </vue-text>
          </vue-stack>
        </vue-stack>
      </vue-stack>
    </vue-box>
  </vue-content-block>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';
import { useHead, useI18n } from '#imports';
import VueContentBlock from '~/components/layout/VueContentBlock/VueContentBlock.vue';
import VueBox from '~/components/layout/VueBox/VueBox.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueBreadcrumb from '~/components/navigation/VueBreadcrumb/VueBreadcrumb.vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import { IItem } from '~/interfaces/IItem';

// Deps
const { t } = useI18n();
const $style = useCssModule();

// Config
useHead({
  title: 'Download',
});

// Data
const breadCrumbItems: Array<IItem> = [{ label: t('common.Downloads' /* Downloads */), value: '/download' }];
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.download {
  padding-top: $navbar-height;

  .widget,
  .install,
  .vscode {
    width: 100%;
  }

  .widget,
  .vscode {
    max-width: 384px;
  }

  .install {
    max-width: 245px;
  }
}
</style>
