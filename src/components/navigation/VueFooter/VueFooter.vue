<template>
  <vue-box
    as="footer"
    :padding="slim ? ['48 16', '48 16', '48 32'] : ['64 16', '64 16', '64 32']"
    :class="$style.vueFooter"
  >
    <vue-stack space="32">
      <vue-columns space="64" stack-phone stack-tablet-portrait>
        <vue-column v-if="slim === false" :width="['content', 'content', '2/10']">
          <vue-stack space="16" :align-x="['center', 'center', 'left']">
            <vue-text look="h6" color="text-low">Solutions</vue-text>
            <vue-text color="text-low" weight="semi-bold">Marketing</vue-text>
            <vue-text color="text-low" weight="semi-bold">Analytics</vue-text>
            <vue-text color="text-low" weight="semi-bold">Commerce</vue-text>
            <vue-text color="text-low" weight="semi-bold">Insights</vue-text>
            <vue-text color="text-low" weight="semi-bold">About</vue-text>
          </vue-stack>
        </vue-column>

        <vue-column v-if="slim === false" :width="['content', 'content', '2/10']">
          <vue-stack space="16" :align-x="['center', 'center', 'left']">
            <vue-text look="h6" color="text-low">Support</vue-text>
            <vue-text color="text-low" weight="semi-bold">Pricing</vue-text>
            <vue-text color="text-low" weight="semi-bold">Documentation</vue-text>
            <vue-text color="text-low" weight="semi-bold">Guides</vue-text>
            <vue-text color="text-low" weight="semi-bold">API Status</vue-text>
            <vue-text color="text-low" weight="semi-bold">About</vue-text>
          </vue-stack>
        </vue-column>

        <vue-column v-if="slim === false" :width="['content', 'content', '2/10']">
          <vue-stack space="16" :align-x="['center', 'center', 'left']">
            <vue-text look="h6" color="text-low">Company</vue-text>
            <vue-text color="text-low" weight="semi-bold">About</vue-text>
            <vue-text color="text-low" weight="semi-bold">Blog</vue-text>
            <vue-text color="text-low" weight="semi-bold">Jobs</vue-text>
            <vue-text color="text-low" weight="semi-bold">Press</vue-text>
            <vue-text color="text-low" weight="semi-bold">Partners</vue-text>
          </vue-stack>
        </vue-column>

        <vue-column v-if="slim === false" :width="['content', 'content', '2/10']">
          <vue-stack space="16" :align-x="['center', 'center', 'left']">
            <vue-text look="h6" color="text-low">Legal</vue-text>
            <vue-text color="text-low" weight="semi-bold">Claim</vue-text>
            <vue-text color="text-low" weight="semi-bold">Privacy</vue-text>
            <vue-text color="text-low" weight="semi-bold">Terms</vue-text>
            <vue-text color="text-low" weight="semi-bold">Insights</vue-text>
            <vue-text color="text-low" weight="semi-bold">About</vue-text>
          </vue-stack>
        </vue-column>

        <vue-column :width="['content', 'content', '2/10']" :can-grow="false">
          <vue-stack space="16">
            <vue-text look="h6" color="text-low" :align-x="['center', 'center', 'start']">Language & Theme</vue-text>
            <vue-select
              id="lang"
              label="Language"
              name="lang"
              :items="languages"
              hide-description
              :model-value="selectedLocale"
              @update:modelValue="$emit('locale-change', $event)"
            />
            <vue-select
              id="theme"
              v-model="$colorMode.preference"
              label="Theme"
              name="theme"
              :items="themes"
              hide-description
            />
          </vue-stack>
        </vue-column>
      </vue-columns>

      <hr />

      <vue-columns v-if="slim === false" :align-y="['top', 'top', 'center']" stack-phone stack-tablet-portrait>
        <vue-column :width="['fit']">
          <vue-stack space="8">
            <vue-text look="h6" color="text-low" :align-x="['center', 'center', 'start']">
              Subscribe to our newsletter
            </vue-text>
            <vue-text color="text-low" :align-x="['center', 'center', 'start']">
              The latest news, articles, and resources, sent to your inbox.
            </vue-text>
          </vue-stack>
        </vue-column>

        <vue-column :width="['fit']" :align-x="['start', 'start', 'end']">
          <vue-columns space="12" stack-phone stack-tablet-portrait>
            <vue-column :width="['full', 'full', '4/10']">
              <vue-input
                id="newsletter"
                name="newsletter"
                label="newsletter"
                placeholder="Enter your email"
                hide-label
                hide-description
              />
            </vue-column>
            <vue-column :width="['full', 'full', 'content']">
              <vue-button look="primary">Submit</vue-button>
            </vue-column>
          </vue-columns>
        </vue-column>
      </vue-columns>

      <hr v-if="slim === false" />

      <vue-columns align-y="center" stack-phone stack-tablet-portrait>
        <vue-column>
          <vue-text look="h6" color="text-low" :align-x="['center', 'center', 'left']">
            © {{ year }} Johannes Werner. All rights reserved.
          </vue-text>
        </vue-column>

        <vue-column v-if="slim === false">
          <vue-inline :align-x="['center']" space="48">
            <vue-text color="text-low" weight="semi-bold">About</vue-text>
            <vue-text color="text-low" weight="semi-bold">About</vue-text>
            <vue-text color="text-low" weight="semi-bold">About</vue-text>
          </vue-inline>
        </vue-column>

        <vue-column :align-x="['center', 'center', 'end']">
          <vue-inline space="24">
            <!--            <vue-text color="text-low"><vue-icon-facebook /></vue-text>-->
            <!--            <vue-text color="text-low"><vue-icon-instagram /></vue-text>-->
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
            <!--            <vue-text color="text-low"><vue-icon-dribbble /></vue-text>-->
          </vue-inline>
        </vue-column>
      </vue-columns>
    </vue-stack>
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
import VueInput from '~/components/input-and-actions/VueInput/VueInput.vue';
import VueButton from '~/components/input-and-actions/VueButton/VueButton.vue';
import VueInline from '~/components/layout/VueInline/VueInline.vue';
import VueIconTwitter from '~/components/icons/VueIconTwitter.vue';
import VueIconGithub from '~/components/icons/VueIconGithub.vue';
import { IItem } from '~/interfaces/IItem';

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
@import 'assets/_design-system';

.vueFooter {
  background: $footer-bg;

  i {
    width: $footer-icon-size;
    height: $footer-icon-size;
  }
}
</style>
