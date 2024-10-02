<template>
  <vue-content-block as="section" :padding="['32 16', '32 16', '64 32']" :class="$style.SupportSection">
    <vue-stack space="64">
      <vue-text look="h3" weight="black">
        {{ $t('SupportSection.title' /* Join Our Community */) }}
      </vue-text>

      <vue-columns stack-phone stack-tablet-portrait space="64">
        <vue-column :width="['full', 'full', '5/10']" no-grow>
          <vue-stack space="16">
            <vue-columns space="0" align-y="center" stack-phone stack-tablet-portrait :class="$style.item">
              <vue-column no-grow no-shrink :padding="[16, 16, 0]">
                <nuxt-img alt="Discord" src="/demo/discord.png" preload format="webp" quality="80" loading="lazy" />
              </vue-column>
              <vue-column padding="0 0 0 24">
                <vue-text :align-x="['center', 'center', 'start']">
                  {{ $t('SupportSection.chanel1.description' /* Engage with other users on our Discord server. */) }}
                </vue-text>
              </vue-column>
              <vue-column padding="0" align-x="end">
                <vue-button
                  as="a"
                  href="https://discord.gg/59x5cg2"
                  target="_blank"
                  look="ghost"
                  size="sm"
                  trailing-icon="external-link"
                >
                  {{ $t('SupportSection.chanel1.cta' /* Open Discord  */) }}
                </vue-button>
              </vue-column>
            </vue-columns>
            <vue-columns space="0" align-y="center" stack-phone stack-tablet-portrait :class="$style.item">
              <vue-column no-grow no-shrink :padding="[16, 16, 0]">
                <nuxt-img alt="Github" src="/demo/github.png" preload format="webp" quality="80" loading="lazy" />
              </vue-column>
              <vue-column padding="0 0 0 24">
                <vue-text :align-x="['center', 'center', 'start']">
                  {{ $t('SupportSection.chanel2.description' /* Contribute to the project on GitHub. */) }}
                </vue-text>
              </vue-column>
              <vue-column padding="0" align-x="end">
                <vue-button
                  as="a"
                  href="https://github.com/vuesion/vuesion"
                  target="_blank"
                  look="ghost"
                  size="sm"
                  trailing-icon="external-link"
                >
                  {{ $t('SupportSection.chanel2.cta' /* Open Github  */) }}
                </vue-button>
              </vue-column>
            </vue-columns>
            <vue-columns space="0" align-y="center" stack-phone stack-tablet-portrait :class="$style.item">
              <vue-column no-grow no-shrink :padding="[16, 16, 0]">
                <nuxt-img alt="WRLD" src="/demo/wrld.png" preload format="webp" quality="80" loading="lazy" />
              </vue-column>
              <vue-column padding="0 0 0 24">
                <vue-text :align-x="['center', 'center', 'start']">
                  {{ $t('SupportSection.chanel3.description' /* Engage with other users in our WRLD. */) }}
                </vue-text>
              </vue-column>
              <vue-column padding="0" align-x="end">
                <vue-button
                  as="a"
                  href="https://wrld-app.com/w/vuesion"
                  target="_blank"
                  look="ghost"
                  size="sm"
                  trailing-icon="external-link"
                >
                  {{ $t('SupportSection.chanel3.cta' /* Open WRLD  */) }}
                </vue-button>
              </vue-column>
            </vue-columns>
            <vue-columns space="0" align-y="center" stack-phone stack-tablet-portrait :class="$style.item">
              <vue-column no-grow no-shrink :padding="[16, 16, 0]">
                <nuxt-img
                  alt="vuesion docus"
                  src="/demo/vuesion.png"
                  preload
                  format="webp"
                  quality="80"
                  loading="lazy"
                />
              </vue-column>
              <vue-column padding="0 0 0 24">
                <vue-text :align-x="['center', 'center', 'start']">
                  {{ $t('SupportSection.chanel4.description' /* Access detailed Documentation and Tutorials. */) }}
                </vue-text>
              </vue-column>
              <vue-column padding="0" align-x="end">
                <vue-button
                  as="a"
                  href="https://vuesion.github.io/docs/en/v5/"
                  target="_blank"
                  look="ghost"
                  size="sm"
                  trailing-icon="external-link"
                >
                  {{ $t('SupportSection.chanel4.cta' /* Open Docs  */) }}
                </vue-button>
              </vue-column>
            </vue-columns>
          </vue-stack>
        </vue-column>
        <vue-column :width="['full', 'full', '5/10']" no-grow class="hidden-p hidden-tp">
          <nuxt-img alt="vuesion support" src="/demo/support.png" preload format="webp" quality="80" loading="lazy" />
        </vue-column>
      </vue-columns>
    </vue-stack>
  </vue-content-block>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';
import VueContentBlock from '~/components/layout/VueContentBlock/VueContentBlock.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import VueColumns from '~/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '~/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueButton from '~/components/input-and-actions/VueButton/VueButton.vue';

// Deps
const $style = useCssModule();
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.SupportSection {
  .item {
    background-color: var(--surface-default-high);
    border-radius: $card-border-radius;
    padding-right: $space-8;

    img {
      width: $space-80;
      height: $space-80;
    }
  }

  img {
    object-fit: contain;
  }
}
</style>
