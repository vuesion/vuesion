<template>
  <vue-content-block :class="$style.vueFooter">
    <vue-box as="footer" :padding="slim ? ['48 0', '48 0', '48 0'] : ['24 0', '24 0', '64 0']">
      <vue-stack space="32" :padding="['0 16', '0 16', '0 32']">
        <vue-stack v-if="slim === false" space="48">
          <vue-columns :space="[24, 24, 64]" stack-phone stack-tablet-portrait align-x="end">
            <!--            <vue-column>-->
            <!--              <vue-stack :space="[4, 8, 16]">-->
            <!--                <vue-text look="h6" color="medium" weight="semi-bold">Solutions</vue-text>-->
            <!--                <vue-text color="low">Marketing</vue-text>-->
            <!--                <vue-text color="low">Analytics</vue-text>-->
            <!--                <vue-text color="low">Commerce</vue-text>-->
            <!--                <vue-text color="low">Insights</vue-text>-->
            <!--              </vue-stack>-->
            <!--            </vue-column>-->

            <!--            <vue-column>-->
            <!--              <vue-stack :space="[4, 8, 16]">-->
            <!--                <vue-text look="h6" color="medium" weight="semi-bold">Support</vue-text>-->
            <!--                <vue-text color="low">Pricing</vue-text>-->
            <!--                <vue-text color="low">Documentation</vue-text>-->
            <!--                <vue-text color="low">Guides</vue-text>-->
            <!--                <vue-text color="low">API Status</vue-text>-->
            <!--              </vue-stack>-->
            <!--            </vue-column>-->

            <!--            <vue-column>-->
            <!--              <vue-stack :space="[4, 8, 16]">-->
            <!--                <vue-text look="h6" color="medium" weight="semi-bold">Company</vue-text>-->
            <!--                <vue-text color="low">About</vue-text>-->
            <!--                <vue-text color="low">Blog</vue-text>-->
            <!--                <vue-text color="low">Jobs</vue-text>-->
            <!--                <vue-text color="low">Press</vue-text>-->
            <!--              </vue-stack>-->
            <!--            </vue-column>-->

            <!--            <vue-column>-->
            <!--              <vue-stack :space="[4, 8, 16]">-->
            <!--                <vue-text look="h6" color="medium" weight="semi-bold">Legal</vue-text>-->
            <!--                <vue-text color="low">Claim</vue-text>-->
            <!--                <vue-text color="low">Privacy</vue-text>-->
            <!--                <vue-text color="low">Terms</vue-text>-->
            <!--                <vue-text color="low">Insights</vue-text>-->
            <!--              </vue-stack>-->
            <!--            </vue-column>-->

            <vue-column :width="['full', 'full', '2/10']" no-grow>
              <vue-stack space="16">
                <vue-text look="h6" color="medium" weight="semi-bold"> Language & Theme </vue-text>
                <vue-select
                  id="lang"
                  label="Language"
                  name="lang"
                  :items="languages"
                  hide-label
                  hide-description
                  :model-value="selectedLocale"
                  @update:modelValue="$emit('locale-change', $event as IItem)"
                />
                <vue-select
                  id="theme"
                  label="Theme"
                  name="theme"
                  :items="themes"
                  hide-label
                  hide-description
                  :model-value="$colorMode.preference"
                  @update:model-value="$colorMode.preference = ($event as IItem).value"
                />
                <!-- Date Time Test -->
                <vue-text>{{ $d(new Date(), 'dayMonthYearNumericWithTime') }}</vue-text>
              </vue-stack>
            </vue-column>
          </vue-columns>

          <hr />
        </vue-stack>

        <vue-columns align-y="center" stack-phone stack-tablet-portrait>
          <vue-column>
            <vue-inline space="8" align-y="center" no-wrap>
              <vue-icon-vuesion :class="$style.logo" />

              <vue-text color="medium" :align-x="['center', 'center', 'end']">
                © {{ year }} Werner-Most Ideen GmbH. All rights reserved.
              </vue-text>
            </vue-inline>
          </vue-column>

          <vue-columns :space="[24, 24, 64]" align-y="center" stack-phone stack-tablet-portrait>
            <vue-column>
              <vue-inline :align-x="['center']" space="48">
                <nuxt-link to="/services">
                  <vue-text color="medium" weight="semi-bold"> Services </vue-text>
                </nuxt-link>
                <vue-text
                  color="medium"
                  weight="semi-bold"
                  as="a"
                  href="https://vuesion.github.io/docs/en/v5/"
                  target="_blank"
                >
                  Documentation
                </vue-text>
              </vue-inline>
            </vue-column>
            <vue-column :align-x="['center', 'center', 'end']" no-grow>
              <vue-inline space="24">
                <vue-text
                  color="medium"
                  as="a"
                  aria-label="Twitter"
                  href="https://twitter.com/vuesion1"
                  target="_blank"
                  rel="noopener"
                >
                  <vue-icon-twitter />
                </vue-text>
                <vue-text
                  color="medium"
                  as="a"
                  aria-label="Github"
                  href="https://github.com/vuesion/vuesion"
                  target="_blank"
                  rel="noopener"
                >
                  <vue-icon-github />
                </vue-text>
              </vue-inline>
            </vue-column>
          </vue-columns>
        </vue-columns>
      </vue-stack>
    </vue-box>
  </vue-content-block>
</template>

<script setup lang="ts">
import { computed, useCssModule } from 'vue';
import VueBox from '@/components/design-system/layout/VueBox/VueBox.vue';
import VueStack from '@/components/design-system/layout/VueStack/VueStack.vue';
import VueText from '@/components/design-system/typography/VueText/VueText.vue';
import VueColumns from '@/components/design-system/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/design-system/layout/VueColumns/VueColumn/VueColumn.vue';
import VueSelect from '@/components/design-system/forms-and-actions/VueSelect/VueSelect.vue';
import VueInline from '@/components/design-system/layout/VueInline/VueInline.vue';
import VueIconTwitter from '@/components/icons/VueIconTwitter.vue';
import VueIconGithub from '@/components/icons/VueIconGithub.vue';
import type { IItem } from '#shared/interfaces/ui/IItem';
import VueContentBlock from '@/components/design-system/layout/VueContentBlock/VueContentBlock.vue';
import VueIconVuesion from '@/components/icons/VueIconVuesion.vue';

// Interface
interface FooterProps {
  slim?: boolean;
  languages?: Array<IItem>;
  themes?: Array<IItem>;
  selectedLocale?: string;
  selectDuration?: number;
}
interface FooterEmits {
  (e: 'locale-change', value: IItem): void;
}
withDefaults(defineProps<FooterProps>(), {
  slim: false,
  languages: () => [],
  themes: () => [],
  selectedLocale: 'en',
  selectDuration: 250,
});
defineEmits<FooterEmits>();

// Deps
const $style = useCssModule();

// Data
const year = computed(() => new Date().getFullYear());
</script>

<style lang="scss" module>
@use 'assets/design-system/index' as ds;

.vueFooter {
  background: ds.$footer-bg;

  i {
    width: ds.$footer-icon-size;
    height: ds.$footer-icon-size;
  }

  .logo {
    width: ds.$space-32;
    height: ds.$space-32;
  }
}
</style>
