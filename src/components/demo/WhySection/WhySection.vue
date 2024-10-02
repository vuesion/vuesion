<template>
  <vue-content-block as="section" :padding="['32 16', '32 16', '64 32']" :class="$style.WhySection">
    <vue-columns stack-phone stack-tablet-portrait :space="[32, 32, 64]">
      <vue-column :width="['full', 'full', '5/10']" no-grow>
        <vue-stack space="32">
          <vue-text look="h3" weight="black">
            {{ $t('WhySection.title' /* Why Choose Vuesion Services? */) }}
          </vue-text>
          <vue-text look="description" color="text-medium">
            {{
              $t(
                'WhySection.paragraph1' /* Vuesion Services is your partner in developing innovative business models and technological solutions. With deep expertise in frontend and backend web development, product management, and UI/UX design, we offer tailored solutions that drive your business forward. */,
              )
            }}
          </vue-text>
          <vue-text look="description" color="text-medium">
            {{
              $t(
                'WhySection.paragraph2' /* With over 15 years of experience in developing projects for leading global companies, we bring unmatched expertise in building full-stack teams and optimizing productivity across engineering, design, and product management. */,
              )
            }}
          </vue-text>
        </vue-stack>
      </vue-column>
      <vue-column :width="['full', 'full', '5/10']" no-grow align-y="center">
        <nuxt-img
          src="/demo/services.png"
          :alt="$t('WhySection.title')"
          preload
          format="webp"
          quality="80"
          loading="lazy"
        />
      </vue-column>
    </vue-columns>
  </vue-content-block>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';
import VueContentBlock from '~/components/layout/VueContentBlock/VueContentBlock.vue';
import VueColumns from '~/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '~/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueText from '~/components/typography/VueText/VueText.vue';

// Deps
const $style = useCssModule();
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.WhySection {
  background-color: var(--surface-default-high);

  img {
    border-radius: $card-border-radius;
  }
}
</style>
