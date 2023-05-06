<template>
  <vue-box
    as="footer"
    :padding="slim ? ['48 16', '48 16', '48 32'] : ['24 16', '24 16', '64 32']"
    :class="$style.vueFooter"
  >
    <vue-content-block>
      <vue-stack space="32">
        <vue-stack v-if="slim === false" space="48">
          <vue-columns :space="['24', '24', '64']" stack-phone stack-tablet-portrait>
            <vue-column>
              <vue-stack :space="['4', '8', '16']">
                <vue-text look="h6" color="text-low" weight="semi-bold">Solutions</vue-text>
                <vue-text color="text-low">Marketing</vue-text>
                <vue-text color="text-low">Analytics</vue-text>
                <vue-text color="text-low">Commerce</vue-text>
                <vue-text color="text-low">Insights</vue-text>
              </vue-stack>
            </vue-column>

            <vue-column>
              <vue-stack :space="['4', '8', '16']">
                <vue-text look="h6" color="text-low" weight="semi-bold">Support</vue-text>
                <vue-text color="text-low">Pricing</vue-text>
                <vue-text color="text-low">Documentation</vue-text>
                <vue-text color="text-low">Guides</vue-text>
                <vue-text color="text-low">API Status</vue-text>
              </vue-stack>
            </vue-column>

            <vue-column>
              <vue-stack :space="['4', '8', '16']">
                <vue-text look="h6" color="text-low" weight="semi-bold">Company</vue-text>
                <vue-text color="text-low">About</vue-text>
                <vue-text color="text-low">Blog</vue-text>
                <vue-text color="text-low">Jobs</vue-text>
                <vue-text color="text-low">Press</vue-text>
              </vue-stack>
            </vue-column>

            <vue-column>
              <vue-stack :space="['4', '8', '16']">
                <vue-text look="h6" color="text-low" weight="semi-bold">Legal</vue-text>
                <vue-text color="text-low">Claim</vue-text>
                <vue-text color="text-low">Privacy</vue-text>
                <vue-text color="text-low">Terms</vue-text>
                <vue-text color="text-low">Insights</vue-text>
              </vue-stack>
            </vue-column>

            <vue-column :width="['content', 'content', '2/10']" :can-grow="false">
              <vue-stack space="16">
                <vue-text look="h6" color="text-low" weight="semi-bold"> Language & Theme </vue-text>
                <vue-select
                  id="lang"
                  label="Language"
                  name="lang"
                  :items="languages"
                  hide-label
                  hide-description
                  :modelValue="selectedLocale"
                  @update:modelValue="$emit('locale-change', $event)"
                />
                <vue-select
                  id="theme"
                  label="Theme"
                  name="theme"
                  :items="themes"
                  hide-label
                  hide-description
                  :modelValue="$colorMode.preference"
                  @update:modelValue="$colorMode.preference = $event.value"
                />
              </vue-stack>
            </vue-column>
          </vue-columns>

          <hr />
        </vue-stack>

        <vue-columns align-y="center" stack-phone stack-tablet-portrait>
          <vue-column>
            <vue-text look="h6" color="text-low" :align-x="['center', 'center', 'left']">
              © {{ year }} Johannes Werner. All rights reserved.
            </vue-text>
          </vue-column>

          <vue-columns :space="['24', '24', '64']" align-y="center" stack-phone stack-tablet-portrait>
            <vue-column>
              <vue-inline :align-x="['center']" space="48">
                <vue-text color="text-low" weight="semi-bold">About</vue-text>
                <vue-text color="text-low" weight="semi-bold">About</vue-text>
                <vue-text color="text-low" weight="semi-bold">About</vue-text>
              </vue-inline>
            </vue-column>
            <vue-column :align-x="['center', 'center', 'end']" :can-grow="false">
              <vue-inline space="24">
                <vue-text
                  color="text-low"
                  as="a"
                  aria-label="Twitter"
                  href="https://twitter.com/vuesion1"
                  target="_blank"
                  rel="noopener"
                >
                  <vue-icon-twitter />
                </vue-text>
                <vue-text
                  color="text-low"
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
    </vue-content-block>
  </vue-box>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import VueBox from '~/components/layout/VueBox/VueBox.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import VueColumns from '~/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '~/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueSelect from '~/components/input-and-actions/VueSelect/VueSelect.vue';
import VueInline from '~/components/layout/VueInline/VueInline.vue';
import VueIconTwitter from '~/components/icons/VueIconTwitter.vue';
import VueIconGithub from '~/components/icons/VueIconGithub.vue';
import { IItem } from '~/interfaces/IItem';
import VueContentBlock from '~/components/layout/VueContentBlock/VueContentBlock.vue';

interface FooterProps {
  slim?: boolean;
  languages?: Array<IItem>;
  themes?: Array<IItem>;
  selectedLocale?: string;
  selectDuration?: number;
}

withDefaults(defineProps<FooterProps>(), {
  slim: false,
  languages: () => [],
  themes: () => [],
  selectedLocale: 'en',
  selectDuration: 250,
});

defineEmits(['locale-change']);

const year = computed(() => new Date().getFullYear());
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueFooter {
  background: $footer-bg;

  i {
    width: $footer-icon-size;
    height: $footer-icon-size;
  }
}
</style>
