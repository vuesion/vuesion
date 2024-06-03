<template>
  <vue-content-block as="section" :padding="['64 32 32 32']" :class="$style.KeyFeaturesSection">
    <vue-stack space="32">
      <vue-text look="h3" weight="black">
        {{ $t('KeyFeaturesSection.title' /* Key Features */) }}
      </vue-text>

      <vue-stack space="16">
        <vue-columns space="16">
          <vue-column width="5/10" no-grow>
            <vue-box padding="8" :class="$style.feature">
              <nuxt-img
                :alt="$t('KeyFeaturesSection.Feature1.title')"
                src="/demo/figma.png"
                preload
                format="webp"
                quality="80"
                loading="lazy"
              />
              <vue-stack padding="8 8 16 8" space="8">
                <vue-text weight="semi-bold">
                  {{ $t('KeyFeaturesSection.Feature1.title' /* Comprehensive Design System */) }}
                </vue-text>
                <vue-text color="text-medium">
                  {{
                    $t(
                      'KeyFeaturesSection.Feature1.description' /* Pre-built with 35+ customizable components, Figma UIKit integration, and theming support. */,
                    )
                  }}
                </vue-text>
              </vue-stack>
            </vue-box>
          </vue-column>
          <vue-column width="5/10" no-grow>
            <vue-stack space="16">
              <vue-columns space="16">
                <vue-column width="5/10" no-grow>
                  <vue-box padding="8" :class="$style.feature">
                    <vue-stack padding="8 8 16 8" space="8">
                      <vue-text weight="semi-bold">
                        {{ $t('KeyFeaturesSection.Feature2.title' /* Developer Experience */) }}
                      </vue-text>
                      <vue-text color="text-medium">
                        {{
                          $t(
                            'KeyFeaturesSection.Feature2.description' /* TypeScript, ESLint, Prettier, Husky hooks, and semantic releases ensure high code quality and maintainability. */,
                          )
                        }}
                      </vue-text>
                    </vue-stack>
                  </vue-box>
                </vue-column>
                <vue-column width="5/10" no-grow>
                  <vue-box padding="8" :class="[$style.feature, $style.primary]">
                    <vue-stack padding="8 8 16 8" space="8">
                      <vue-text weight="semi-bold">
                        {{ $t('KeyFeaturesSection.Feature3.title' /* Code Generation */) }}
                      </vue-text>
                      <vue-text>
                        {{
                          $t(
                            'KeyFeaturesSection.Feature3.description' /* Vuesion includes a generator framework to easily create code based on a customizable style guide. */,
                          )
                        }}
                      </vue-text>
                    </vue-stack>
                  </vue-box>
                </vue-column>
              </vue-columns>
              <vue-box padding="8" :class="[$style.feature, $style.dark]">
                <nuxt-img
                  :alt="$t('KeyFeaturesSection.Feature4.title')"
                  src="/demo/coverage.png"
                  preload
                  format="webp"
                  quality="80"
                  loading="lazy"
                />
                <vue-stack padding="8 8 16 8" space="8">
                  <vue-text weight="semi-bold" color="text-inverse-high">
                    {{ $t('KeyFeaturesSection.Feature4.title' /* Robust Testing Setup */) }}
                  </vue-text>
                  <vue-text color="text-inverse-medium">
                    {{
                      $t(
                        'KeyFeaturesSection.Feature4.description' /* E2E testing with Cypress, Vitest, and Testing-library with 250+ example tests. */,
                      )
                    }}
                  </vue-text>
                </vue-stack>
              </vue-box>
            </vue-stack>
          </vue-column>
        </vue-columns>

        <vue-columns space="16" padding="32 0" align-y="center" :class="$style.services">
          <vue-column width="5/10" no-grow>
            <nuxt-img
              :alt="$t('KeyFeaturesSection.services.title')"
              src="/demo/services.png"
              preload
              format="webp"
              quality="80"
              loading="lazy"
            />
          </vue-column>
          <vue-column width="5/10" no-grow>
            <vue-stack padding="16">
              <vue-stack space="8">
                <vue-text weight="semi-bold">
                  {{ $t('KeyFeaturesSection.services.title' /* Unlock the Power of Vuesion Services */) }}
                </vue-text>
                <vue-text color="text-medium">
                  {{
                    $t(
                      'KeyFeaturesSection.services.description' /* Leverage our expertise in consulting, prototyping, PoCs, and MVP development. With over 8 years of experience working with industry giants like Volkswagen, Airbus, and Pfizer, we bring unparalleled knowledge to your projects. Whether you're looking to build prototypes, validate concepts, or launch a minimum viable product, we provide tailored solutions to meet your needs. Fluent in a wide range of technologies, Vuesion Services is your partner for success.*/,
                    )
                  }}
                </vue-text>
              </vue-stack>
              <nuxt-link to="/services">
                <vue-inline space="4" align-y="center">
                  <vue-text weight="semi-bold" color="link">
                    {{ $t('common.LearnMore' /* Learn more */) }}
                  </vue-text>
                  <vue-icon-arrow-right :class="$style.linkIcon" />
                </vue-inline>
              </nuxt-link>
            </vue-stack>
          </vue-column>
        </vue-columns>

        <vue-columns space="16">
          <vue-column width="5/10" no-grow>
            <vue-stack space="16">
              <vue-box padding="8" :class="[$style.feature, $style.dark]">
                <nuxt-img
                  :alt="$t('KeyFeaturesSection.Feature5.title')"
                  src="/demo/i18n.png"
                  preload
                  format="webp"
                  quality="80"
                  loading="lazy"
                />
                <vue-stack padding="8 8 16 8" space="8">
                  <vue-text weight="semi-bold" color="text-inverse-high">
                    {{ $t('KeyFeaturesSection.Feature5.title' /* Internationalization (i18n) */) }}
                  </vue-text>
                  <vue-text color="text-inverse-medium">
                    {{
                      $t(
                        'KeyFeaturesSection.Feature5.description' /* Scripts included to simplify translation management, making it easier to build multilingual applications. */,
                      )
                    }}
                  </vue-text>
                </vue-stack>
              </vue-box>
              <vue-columns space="16">
                <vue-column width="5/10" no-grow>
                  <vue-box padding="8" :class="[$style.feature, $style.primary]">
                    <vue-stack padding="8 8 16 8" space="8">
                      <vue-text weight="semi-bold">
                        {{ $t('KeyFeaturesSection.Feature6.title' /* Full-Stack Capabilities */) }}
                      </vue-text>
                      <vue-text>
                        {{
                          $t(
                            'KeyFeaturesSection.Feature6.description' /* Integrated with Prisma.js for seamless database management, making Vuesion a full-stack boilerplate. */,
                          )
                        }}
                      </vue-text>
                    </vue-stack>
                  </vue-box>
                </vue-column>
                <vue-column width="5/10" no-grow>
                  <vue-box padding="8" :class="[$style.feature]">
                    <vue-stack padding="8 8 16 8" space="8">
                      <vue-text weight="semi-bold">
                        {{ $t('KeyFeaturesSection.Feature7.title' /* Versatile Core */) }}
                      </vue-text>
                      <vue-text color="text-medium">
                        {{
                          $t(
                            'KeyFeaturesSection.Feature7.description' /* Nuxt.js support for server-side rendering, static site generation, and single-page applications. */,
                          )
                        }}
                      </vue-text>
                    </vue-stack>
                  </vue-box>
                </vue-column>
              </vue-columns>
            </vue-stack>
          </vue-column>
          <vue-column width="5/10" no-grow>
            <vue-box padding="8" :class="$style.feature">
              <nuxt-img
                :alt="$t('KeyFeaturesSection.Feature8.title')"
                src="/demo/modules.png"
                preload
                format="webp"
                quality="80"
                loading="lazy"
              />
              <vue-stack padding="8 8 16 8" space="8">
                <vue-text weight="semi-bold">
                  {{ $t('KeyFeaturesSection.Feature8.title' /* Fully Set Up and Ready-to-Go */) }}
                </vue-text>
                <vue-text color="text-medium">
                  {{
                    $t(
                      'KeyFeaturesSection.Feature8.description' /* Storybook, Authentication, Security, PWA, Color Mode, and Libraries for Animations and Form Validation. */,
                    )
                  }}
                </vue-text>
              </vue-stack>
            </vue-box>
          </vue-column>
        </vue-columns>
      </vue-stack>

      <vue-inline>
        <vue-button
          as="a"
          href="https://github.com/vuesion/vuesion?tab=readme-ov-file#features"
          target="_blank"
          look="ghost"
          trailing-icon="external-link"
        >
          {{ $t('KeyFeaturesSection.cta.AllFeatures' /* See All Features */) }}
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
import VueBox from '~/components/layout/VueBox/VueBox.vue';
import VueColumns from '~/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '~/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueIconArrowRight from '~/components/icons/VueIconArrowRight.vue';

// Deps
const $style = useCssModule();
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.KeyFeaturesSection {
  background-color: var(--surface-default-high);

  .feature {
    background-color: var(--surface-default-medium);
    border-radius: $card-border-radius;
    height: 100%;

    &.primary {
      background-color: var(--primary);
      color: palette-color-level('neutral', 0);
    }

    &.dark {
      background-color: var(--surface-inverse-high);
    }

    img {
      object-fit: cover;
      border-radius: 8px 8px 0 0;
      width: 100%;
    }
  }

  .services {
    img {
      width: 100%;
      height: 350px;
      object-fit: cover;
      border-radius: $card-border-radius;
    }

    .linkIcon {
      color: var(--text-link);
      width: $space-20;
      height: $space-20;
    }
  }
}
</style>
