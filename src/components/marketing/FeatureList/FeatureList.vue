<template>
  <vue-box :padding="['64 0 24 0', '64 0 24 0', '64 0 24 0', '0 0 96 0']">
    <vue-content-block :class="$style.featureList">
      <vue-box :padding="[16, 16, 24, 32, 48]">
        <vue-stack :space="[48, 64]">
          <vue-stack space="4">
            <vue-text look="h3" weight="semi-bold" align="center"> Features </vue-text>
            <vue-text look="description" color="text-low" weight="semi-bold" align="center">
              Save months of work by not writing these <span class="deco-underline">100,000+</span> lines of code
            </vue-text>
          </vue-stack>

          <vue-stack :space="[48, 32]">
            <vue-columns stack-phone :space="[48, 16, 32]">
              <vue-column :width="['content', '33.3333%']">
                <vue-stack :space="[8, 24]">
                  <vue-inline space="8" align-y="center">
                    <vue-icon-lightning-bolt />
                    <vue-text look="medium-title" weight="semi-bold"> Nuxt.js Boilerplate </vue-text>
                  </vue-inline>
                  <vue-text look="description" color="text-medium">
                    Nuxt.js is already set up with commonly used modules. Benefit from the Nuxt.js ecosystem,
                    server-side-rendering, or statically rendered pages.
                  </vue-text>
                </vue-stack>
              </vue-column>
              <vue-column :width="['content', '33.3333%']">
                <vue-stack :space="[8, 24]">
                  <vue-inline space="8" align-y="center">
                    <vue-icon-tool />
                    <vue-text look="medium-title" weight="semi-bold"> Testing </vue-text>
                  </vue-inline>
                  <vue-text look="description" color="text-medium">
                    Cypress, Jest, the Testing Library and more than 250 tests with an initial 100% test coverage will
                    give you confidence in the code you ship.
                  </vue-text>
                </vue-stack>
              </vue-column>
              <vue-column :width="['content', '33.3333%']">
                <vue-stack :space="[8, 24]">
                  <vue-inline space="8" align-y="center">
                    <vue-icon-vuesion />
                    <vue-text look="medium-title" weight="semi-bold"> Design System </vue-text>
                  </vue-inline>
                  <vue-text look="description" color="text-medium">
                    The included design system is 100% customizable and themeable because it's part of your code-base.
                    Never make compromises again!
                  </vue-text>
                </vue-stack>
              </vue-column>
            </vue-columns>
            <vue-columns stack-phone :space="[48, 16, 32]">
              <vue-column :width="['content', '33.3333%']">
                <vue-stack :space="[8, 24]">
                  <vue-inline space="8" align-y="center">
                    <vue-icon-book />
                    <vue-text look="medium-title" weight="semi-bold"> Storybook & Figma </vue-text>
                  </vue-inline>
                  <vue-text look="description" color="text-medium">
                    Storybook makes it easy to develop reusable components. It also can increase the communication in
                    the team because everything has a name. The Vuesion Figma file will make the collaboration between
                    Design and Engineering a breeze.
                  </vue-text>
                </vue-stack>
              </vue-column>
              <vue-column :width="['content', '33.3333%']">
                <vue-stack :space="[8, 24]">
                  <vue-inline space="8" align-y="center">
                    <vue-icon-users />
                    <vue-text look="medium-title" weight="semi-bold"> Marketing & i18n </vue-text>
                  </vue-inline>
                  <vue-text look="description" color="text-medium">
                    Nuxt.js will increase your SEO by delivering rendered HTML either dynamically or statically. The
                    vue-i18n module and a vuesion CLI command will make it easy to translate your application into other
                    languages.
                  </vue-text>
                </vue-stack>
              </vue-column>
              <vue-column :width="['content', '33.3333%']">
                <vue-stack :space="[8, 24]">
                  <vue-inline space="8" align-y="center">
                    <vue-icon-finger-print />
                    <vue-text look="medium-title" weight="semi-bold"> Authentication </vue-text>
                  </vue-inline>
                  <vue-text look="description" color="text-medium">
                    Full set up of the Nuxt.js auth module makes it easy to integrate with different schemes (Cookie,
                    Oauth2, PKCE), 3rd party providers (Auth0, Facebook, Github, etc.), or your own solution.
                  </vue-text>
                </vue-stack>
              </vue-column>
            </vue-columns>
            <vue-columns stack-phone :space="[48, 16, 32]">
              <vue-column :width="['content', '33.3333%']">
                <vue-stack :space="[8, 24]">
                  <vue-inline space="8" align-y="center">
                    <vue-icon-terminal />
                    <vue-text look="medium-title" weight="semi-bold"> DX & Code quality </vue-text>
                  </vue-inline>
                  <vue-text look="description" color="text-medium">
                    TypeScript, Eslint, Commit message lint, Prettier, Semantic releases, generated Changelog, Husky,
                    and Code generators will help you to keep your code-base clean and consistent.
                  </vue-text>
                </vue-stack>
              </vue-column>
              <vue-column :width="['content', '33.3333%']">
                <vue-stack :space="[8, 24]">
                  <vue-inline space="8" align-y="center">
                    <vue-icon-lightning-bolt />
                    <vue-text look="medium-title" weight="semi-bold"> Axios & GraphQL </vue-text>
                  </vue-inline>
                  <vue-text look="description" color="text-medium">
                    The Nuxt.js Apollo module is set up to work together with the Nuxt.js Axios module. Axios is
                    integrated with the Nuxt.js Auth module and provides re-authentication out of the box.
                  </vue-text>
                </vue-stack>
              </vue-column>
              <vue-column :width="['content', '33.3333%']">
                <vue-stack :space="[8, 24]">
                  <vue-inline space="8" align-y="center">
                    <vue-icon-star />
                    <vue-text look="medium-title" weight="semi-bold"> Progressive Web App </vue-text>
                  </vue-inline>
                  <vue-text look="description" color="text-medium">
                    The Nuxt.js PWA module allows you to register a Service Worker and it automatically generates a
                    manifest.json and app icons. It also integrates with the Free, high volume, and reliable push
                    notification service OneSignal.
                  </vue-text>
                </vue-stack>
              </vue-column>
            </vue-columns>
          </vue-stack>
        </vue-stack>
      </vue-box>
    </vue-content-block>
  </vue-box>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import VueContentBlock from '@/components/layout/VueContentBlock/VueContentBlock.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueColumns from '@/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueIconLightningBolt from '@/components/icons/VueIconLightningBolt.vue';
import VueIconTool from '@/components/icons/VueIconTool.vue';
import VueIconVuesion from '@/components/icons/VueIconVuesion.vue';
import VueIconBook from '@/components/icons/VueIconBook.vue';
import VueIconUsers from '@/components/icons/VueIconUsers.vue';
import VueIconFingerPrint from '@/components/icons/VueIconFingerPrint.vue';
import VueIconTerminal from '@/components/icons/VueIconTerminal.vue';
import VueIconStar from '@/components/icons/VueIconStar.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';

export default defineComponent({
  name: 'FeatureList',
  components: {
    VueInline,
    VueIconStar,
    VueIconTerminal,
    VueIconFingerPrint,
    VueIconUsers,
    VueIconBook,
    VueIconVuesion,
    VueIconTool,
    VueIconLightningBolt,
    VueColumn,
    VueColumns,
    VueStack,
    VueText,
    VueBox,
    VueContentBlock,
  },
  props: {},
  setup() {
    return {};
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.featureList {
  i {
    width: $space-24;
    height: $space-24;
  }
}
</style>
