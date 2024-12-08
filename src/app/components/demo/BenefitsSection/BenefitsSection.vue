<template>
  <vue-content-block
    as="section"
    :padding="['32 16 16 16', '32 16 16 16', '64 32 32 32']"
    :class="$style.BenefitsSection"
  >
    <vue-stack space="32">
      <vue-columns stack-phone stack-tablet-portrait :space="[32, 32, 80]">
        <vue-column :width="['full', 'full', '5/10']" no-grow>
          <vue-stack space="64">
            <vue-text look="hero" weight="black" gradient>
              {{ $t('BenefitsSection.title' /* Designed for Teams and Solopreneurs */) }}
            </vue-text>

            <nuxt-img
              :alt="$t('BenefitsSection.title')"
              src="/demo/team.png"
              preload
              format="webp"
              quality="80"
              loading="lazy"
              class="hidden-p hidden-tp"
            />
          </vue-stack>
        </vue-column>
        <vue-column :width="['full', 'full', '5/10']" no-grow>
          <vue-stack padding="0 16 0 0" align-y="between">
            <vue-stack space="10">
              <vue-text color="text-inverse-high" weight="semi-bold" look="large-title">
                {{ $t('BenefitsSection.Benefit1.title' /* Accelerate Development */) }}
              </vue-text>
              <vue-text color="text-inverse-medium">
                {{
                  $t(
                    'BenefitsSection.Benefit1.description' /* Boilerplate setup lets you focus on building features rather than configuring tools. */,
                  )
                }}
              </vue-text>
            </vue-stack>
            <vue-stack space="10">
              <vue-text color="text-inverse-high" weight="semi-bold" look="large-title">
                {{ $t('BenefitsSection.Benefit2.title' /* Improve Collaboration */) }}
              </vue-text>
              <vue-text color="text-inverse-medium">
                {{
                  $t(
                    'BenefitsSection.Benefit2.description' /* Integrated design system is 100% customizable, ensuring all components are consistent across Storybook and Figma, bridging the gap between designers and developers. */,
                  )
                }}
              </vue-text>
            </vue-stack>
            <vue-stack space="10">
              <vue-text color="text-inverse-high" weight="semi-bold" look="large-title">
                {{ $t('BenefitsSection.Benefit3.title' /* Reduce Maintenance Overhead */) }}
              </vue-text>
              <vue-text color="text-inverse-medium">
                {{
                  $t(
                    'BenefitsSection.Benefit3.description' /* Best practices and pre-configured tools ensure a stable and scalable codebase. */,
                  )
                }}
              </vue-text>
            </vue-stack>
            <vue-stack space="10">
              <vue-text color="text-inverse-high" weight="semi-bold" look="large-title">
                {{ $t('BenefitsSection.Benefit4.title' /* Boost Team Productivity */) }}
              </vue-text>
              <vue-text color="text-inverse-medium">
                {{
                  $t(
                    'BenefitsSection.Benefit4.description' /* Automated testing and code quality tools catch issues early and streamline development. */,
                  )
                }}
              </vue-text>
            </vue-stack>
          </vue-stack>
        </vue-column>
      </vue-columns>
      <vue-inline>
        <vue-button
          as="a"
          href="https://vuesion.github.io/docs/en/v5/guide/install.html"
          target="_blank"
          look="primary"
          trailing-icon="external-link"
        >
          {{ $t('BenefitsSection.cta' /* Start Your Project */) }}
        </vue-button>
      </vue-inline>
    </vue-stack>
  </vue-content-block>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';
import VueContentBlock from '~/app/components/layout/VueContentBlock/VueContentBlock.vue';
import VueStack from '~/app/components/layout/VueStack/VueStack.vue';
import VueColumns from '~/app/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '~/app/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueButton from '~/app/components/input-and-actions/VueButton/VueButton.vue';
import VueInline from '~/app/components/layout/VueInline/VueInline.vue';
import VueText from '~/app/components/typography/VueText/VueText.vue';

// Deps
const $style = useCssModule();
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.BenefitsSection {
  background-color: var(--surface-inverse-high);
  box-shadow:
    -490px 911px 290px 0px rgba(102, 60, 202, 0) inset,
    -314px 583px 265px 0px rgba(102, 60, 202, 0.01) inset,
    -177px 328px 224px 0px rgba(102, 60, 202, 0.05) inset,
    -78px 146px 166px 0px rgba(102, 60, 202, 0.09) inset,
    -20px 36px 91px 0px rgba(102, 60, 202, 0.1) inset;

  img {
    border-radius: $space-16;
    width: 100%;
    object-fit: cover;
    box-shadow:
      255px 225px 95px 0px rgba(102, 60, 202, 0),
      163px 144px 87px 0px rgba(102, 60, 202, 0.01),
      92px 81px 73px 0px rgba(102, 60, 202, 0.05),
      41px 36px 54px 0px rgba(102, 60, 202, 0.09),
      10px 9px 30px 0px rgba(102, 60, 202, 0.1);
  }
}
</style>
