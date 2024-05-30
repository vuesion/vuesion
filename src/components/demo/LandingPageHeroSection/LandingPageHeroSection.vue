<template>
  <vue-content-block :class="$style.LandingPageHeroSection">
    <vue-columns class="h-full">
      <vue-column :width="['5/10']" no-grow no-shrink>
        <vue-stack :padding="['64 32']" align-y="between" :class="$style.leftCol">
          <vue-stack space="32" padding="0 32 0 0">
            <vue-text look="hero" weight="black" gradient>
              {{ $t('LandingPageHeroSection.headline' /* Build Faster, Collaborate Better with Vuesion. */) }}
            </vue-text>
            <vue-text look="large-description" color="text-inverse-high">
              {{
                $t(
                  'LandingPageHeroSection.subheadline' /* Empower your Product Team with a powerful Boilerplate designed for seamless Collaboration and unmatched Efficiency. */,
                )
              }}
            </vue-text>
          </vue-stack>
          <vue-stack space="32">
            <vue-inline space="16">
              <vue-button
                as="a"
                href="https://vuesion.github.io/docs/en/v5/"
                target="_blank"
                look="primary"
                trailing-icon="arrow-right"
              >
                {{ $t('LandingPageHeroSection.cta.GetStarted' /* Get Started */) }}
              </vue-button>
              <vue-button
                as="a"
                href="https://www.figma.com/design/DvP4EE7gAJH3fsc4RFqZYc/Vuesion-Design-System-Template"
                target="_blank"
                look="secondary"
                trailing-icon="eye"
              >
                {{ $t('LandingPageHeroSection.cta.Figma' /* Preview in Figma */) }}
              </vue-button>
            </vue-inline>
            <nuxt-link to="/services">
              <vue-inline space="4" align-y="center">
                <vue-text color="link">
                  {{ $t('LandingPageHeroSection.cta.VuesionServices' /* Explore Vuesion Services*/) }}
                </vue-text>
                <vue-icon-arrow-right :class="$style.linkIcon" />
              </vue-inline>
            </nuxt-link>
          </vue-stack>
          <div :class="$style.deco"></div>
        </vue-stack>
      </vue-column>
      <vue-column :width="['5/10']" no-grow no-shrink align-y="center" align-x="center">
        <svg
          width="463"
          height="419"
          viewBox="0 0 463 419"
          fill="none"
          :class="$style.logo"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_iiii_9560_32806)">
            <mask
              id="mask0_9560_32806"
              style="mask-type: alpha"
              maskUnits="userSpaceOnUse"
              x="7"
              y="6"
              width="456"
              height="413"
            >
              <rect
                x="66.729"
                y="-0.000488281"
                width="90"
                height="132.313"
                rx="45"
                transform="rotate(30 66.729 -0.000488281)"
                fill="#141518"
                stroke="black"
                stroke-width="20"
              />
              <rect
                x="208.621"
                y="35.561"
                width="90"
                height="252.11"
                rx="45"
                transform="rotate(30 208.621 35.561)"
                fill="#141518"
                stroke="black"
                stroke-width="20"
              />
              <rect
                x="250.648"
                y="244.668"
                width="90"
                height="156.095"
                rx="45"
                transform="rotate(30 250.648 244.668)"
                fill="#141518"
                stroke="black"
                stroke-width="20"
              />
              <rect
                x="390.815"
                y="1.88751"
                width="90"
                height="228.356"
                rx="45"
                transform="rotate(30 390.815 1.88751)"
                fill="#141518"
                stroke="black"
                stroke-width="20"
              />
            </mask>
            <g mask="url(#mask0_9560_32806)">
              <g filter="url(#filter1_f_9560_32806)">
                <ellipse
                  cx="315.055"
                  cy="169.611"
                  rx="276.196"
                  ry="156.422"
                  transform="rotate(117.459 315.055 169.611)"
                  fill="url(#paint0_linear_9560_32806)"
                />
              </g>
              <g filter="url(#filter2_f_9560_32806)">
                <ellipse
                  cx="98.1278"
                  cy="146.478"
                  rx="274.398"
                  ry="178.511"
                  transform="rotate(54.5113 98.1278 146.478)"
                  fill="url(#paint1_linear_9560_32806)"
                />
              </g>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_iiii_9560_32806"
              x="0.572754"
              y="0"
              width="490.723"
              height="447.389"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="3" dy="3" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_9560_32806" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="13" dy="12" />
              <feGaussianBlur stdDeviation="9" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
              <feBlend mode="normal" in2="effect1_innerShadow_9560_32806" result="effect2_innerShadow_9560_32806" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="30" dy="28" />
              <feGaussianBlur stdDeviation="12.5" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend mode="normal" in2="effect2_innerShadow_9560_32806" result="effect3_innerShadow_9560_32806" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="53" dy="50" />
              <feGaussianBlur stdDeviation="14.5" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
              <feBlend mode="normal" in2="effect3_innerShadow_9560_32806" result="effect4_innerShadow_9560_32806" />
            </filter>
            <filter
              id="filter1_f_9560_32806"
              x="26.6782"
              y="-185.929"
              width="576.754"
              height="711.079"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_9560_32806" />
            </filter>
            <filter
              id="filter2_f_9560_32806"
              x="-217.519"
              y="-199.869"
              width="631.292"
              height="692.693"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_9560_32806" />
            </filter>
            <linearGradient
              id="paint0_linear_9560_32806"
              x1="38.8591"
              y1="169.611"
              x2="591.251"
              y2="169.611"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#A38AE0" />
              <stop offset="1" stop-color="#7BB5EF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_9560_32806"
              x1="-176.27"
              y1="146.478"
              x2="372.525"
              y2="146.478"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#67C76B" />
              <stop offset="1" stop-color="#7BB5EF" />
            </linearGradient>
          </defs>
        </svg>
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
import VueInline from '~/components/layout/VueInline/VueInline.vue';
import VueButton from '~/components/input-and-actions/VueButton/VueButton.vue';
import VueIconArrowRight from '~/components/icons/VueIconArrowRight.vue';

// Deps
const $style = useCssModule();
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.LandingPageHeroSection {
  height: 600px;
  background-color: var(--surface-default-high);

  .leftCol {
    position: relative;
    background-color: var(--surface-inverse-high);
    border-radius: 0 0 $space-128 0;

    .deco {
      position: absolute;
      top: 0;
      right: -$space-128;
      width: $space-128;
      height: $space-128;
      background-color: var(--surface-inverse-high);

      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: $space-128;
        height: $space-128;
        border-radius: $space-128 0 0 0;
        background-color: var(--surface-default-high);
      }
    }
  }

  .linkIcon {
    color: var(--text-link);
    width: $space-20;
    height: $space-20;
  }

  .logo {
    z-index: 1;
  }
}
</style>
