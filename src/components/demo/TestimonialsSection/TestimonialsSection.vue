<template>
  <vue-content-block as="section" padding="64 32" :class="$style.TestimonialsSection">
    <vue-stack space="32">
      <vue-text look="h3" weight="black">
        {{ $t('TestimonialsSection.title' /* What Our Users Say */) }}
      </vue-text>

      <vue-columns space="16">
        <vue-column width="4/12" no-grow>
          <vue-stack space="96" padding="16 16 48 16" :class="$style.testimonial">
            <nuxt-img alt="Björn Schmidt - CTO" src="/images/testimonial1.png" />
            <vue-stack :space="0">
              <vue-text look="label" weight="semi-bold">Björn Schmidt</vue-text>
              <vue-text look="support" color="text-low">CTO</vue-text>
            </vue-stack>

            <vue-text align-x="center" look="medium-title">
              “{{
                $t(
                  'TestimonialsSection.testimonial1' /* Vuesion has drastically reduced our setup time and improved team collaboration. */,
                )
              }}”
            </vue-text>
          </vue-stack>
        </vue-column>
        <vue-column width="4/12" no-grow>
          <vue-stack space="96" padding="16 16 48 16" :class="$style.testimonial">
            <nuxt-img alt="Abby Graham - Software Engineer" src="/images/testimonial2.png" />
            <vue-stack :space="0">
              <vue-text look="label" weight="semi-bold">Abby Graham</vue-text>
              <vue-text look="support" color="text-low">Software Engineer</vue-text>
            </vue-stack>

            <vue-text align-x="center" look="description">
              “{{
                $t(
                  'TestimonialsSection.testimonial2' /* The comprehensive feature set and robust testing framework make it our go-to boilerplate. */,
                )
              }}”
            </vue-text>
          </vue-stack>
        </vue-column>
        <vue-column width="4/12" no-grow>
          <vue-stack space="96" padding="16 16 48 16" :class="[$style.testimonial, $style.primary]">
            <nuxt-img alt="Emily Chen - UX Designer" src="/images/testimonial3.png" />
            <vue-stack :space="0">
              <vue-text look="label" weight="semi-bold">Emily Chen</vue-text>
              <vue-text look="support">UX Designer</vue-text>
            </vue-stack>

            <vue-text align-x="center">
              “{{
                $t(
                  'TestimonialsSection.testimonial3' /* As a designer, I love how Vuesion's design system is 100% customizable and consistent across Storybook and Figma. It makes collaboration seamless. */,
                )
              }}”
            </vue-text>
          </vue-stack>
        </vue-column>
        <vue-column width="4/12" no-grow>
          <vue-stack space="96" padding="16 16 48 16" :class="$style.testimonial">
            <nuxt-img alt="Carlos Garcia - UX Designer" src="/images/testimonial4.png" />
            <vue-stack :space="0">
              <vue-text look="label" weight="semi-bold">Carlos Garcia</vue-text>
              <vue-text look="support" color="text-low">UX Designer</vue-text>
            </vue-stack>

            <vue-text align-x="center">
              “{{
                $t(
                  'TestimonialsSection.testimonial4' /* Vuesion's integration with Figma and pre-built components have streamlined our design process, saving us days of work. */,
                )
              }}”
            </vue-text>
          </vue-stack>
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

// Deps
const $style = useCssModule();
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.TestimonialsSection {
  background-color: var(--surface-default-high);

  .testimonial {
    position: relative;
    border-radius: $card-border-radius;
    box-shadow: var(--elevation-4);

    &.primary {
      background-color: var(--primary);
      color: palette-color-level('neutral', 0);
    }

    img {
      position: absolute;
      top: 0;
      right: 0;
      width: $space-128;
    }
  }
}
</style>
