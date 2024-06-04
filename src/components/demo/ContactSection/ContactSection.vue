<template>
  <vue-content-block id="contact" as="section" :padding="['32 16', '32 16', '64 32']" :class="$style.ContactSection">
    <vue-stack space="32">
      <vue-stack space="8">
        <vue-text look="hero" weight="black" gradient>
          {{ $t('ContactSection.title' /* Ready to Elevate Your Project? */) }}
        </vue-text>
        <vue-text look="description" color="text-inverse-high">
          {{
            $t(
              'ContactSection.description' /* Get in touch with us today to discuss how we can help you achieve your project goals. */,
            )
          }}
        </vue-text>
      </vue-stack>

      <vue-inline>
        <vue-button as="a" href="mailto:johannes.werner@hey.com" look="primary" trailing-icon="mail">
          {{ $t('ContactSection.cta' /* Get Started Today */) }}
        </vue-button>
      </vue-inline>
    </vue-stack>
  </vue-content-block>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';
import VueContentBlock from '~/components/layout/VueContentBlock/VueContentBlock.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import VueButton from '~/components/input-and-actions/VueButton/VueButton.vue';
import VueInline from '~/components/layout/VueInline/VueInline.vue';

// Deps
const $style = useCssModule();
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.ContactSection {
  background-color: var(--surface-inverse-high);
  box-shadow:
    -490px 911px 290px 0px rgba(102, 60, 202, 0) inset,
    -314px 583px 265px 0px rgba(102, 60, 202, 0.01) inset,
    -177px 328px 224px 0px rgba(102, 60, 202, 0.05) inset,
    -78px 146px 166px 0px rgba(102, 60, 202, 0.09) inset,
    -20px 36px 91px 0px rgba(102, 60, 202, 0.1) inset;
}
</style>
