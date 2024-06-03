<template>
  <vue-content-block as="section" padding="64 32" :class="$style.WhySection">
    <vue-columns space="64">
      <vue-column width="5/10" no-grow>
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
                'WhySection.paragraph2' /* With over 8 years of experience building ventures with top companies like Volkswagen, Airbus, Firmenich, Maersk, and Pfizer, we bring unparalleled expertise in engineering full-stack teams and optimizing productivity across engineering, design, and product management. */,
              )
            }}
          </vue-text>
        </vue-stack>
      </vue-column>
      <vue-column width="5/10" no-grow align-y="center">
        <nuxt-img src="/demo/services.png" :alt="$t('WhySection.title')" />
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
}
</style>
