<template>
  <vue-box :padding="slim ? ['48 16', '48 16', '48 32'] : ['64 16', '64 16', '64 32']" :class="$style.vueFooter">
    <vue-stack space="32">
      <vue-columns v-if="slim === false" space="64" stack-phone stack-tablet-portrait>
        <vue-column :width="['content', 'content', '20%']">
          <vue-stack space="16" :align="['center', 'center', 'left']">
            <vue-text look="h6" color="text-low">Solutions</vue-text>
            <vue-text color="text-low" weight="semi-bold">Marketing</vue-text>
            <vue-text color="text-low" weight="semi-bold">Analytics</vue-text>
            <vue-text color="text-low" weight="semi-bold">Commerce</vue-text>
            <vue-text color="text-low" weight="semi-bold">Insights</vue-text>
            <vue-text color="text-low" weight="semi-bold">About</vue-text>
          </vue-stack>
        </vue-column>

        <vue-column :width="['content', 'content', '20%']">
          <vue-stack space="16" :align="['center', 'center', 'left']">
            <vue-text look="h6" color="text-low">Support</vue-text>
            <vue-text color="text-low" weight="semi-bold">Pricing</vue-text>
            <vue-text color="text-low" weight="semi-bold">Documentation</vue-text>
            <vue-text color="text-low" weight="semi-bold">Guides</vue-text>
            <vue-text color="text-low" weight="semi-bold">API Status</vue-text>
            <vue-text color="text-low" weight="semi-bold">About</vue-text>
          </vue-stack>
        </vue-column>

        <vue-column :width="['content', 'content', '20%']">
          <vue-stack space="16" :align="['center', 'center', 'left']">
            <vue-text look="h6" color="text-low">Company</vue-text>
            <vue-text color="text-low" weight="semi-bold">About</vue-text>
            <vue-text color="text-low" weight="semi-bold">Blog</vue-text>
            <vue-text color="text-low" weight="semi-bold">Jobs</vue-text>
            <vue-text color="text-low" weight="semi-bold">Press</vue-text>
            <vue-text color="text-low" weight="semi-bold">Partners</vue-text>
          </vue-stack>
        </vue-column>

        <vue-column :width="['content', 'content', '20%']">
          <vue-stack space="16" :align="['center', 'center', 'left']">
            <vue-text look="h6" color="text-low">Legal</vue-text>
            <vue-text color="text-low" weight="semi-bold">Claim</vue-text>
            <vue-text color="text-low" weight="semi-bold">Privacy</vue-text>
            <vue-text color="text-low" weight="semi-bold">Terms</vue-text>
            <vue-text color="text-low" weight="semi-bold">Insights</vue-text>
            <vue-text color="text-low" weight="semi-bold">About</vue-text>
          </vue-stack>
        </vue-column>

        <vue-column :width="['content', 'content', '20%']">
          <vue-stack space="16">
            <vue-text look="h6" color="text-low" :align="['center', 'center', 'left']">Language & Theme</vue-text>
            <vue-select id="lang" label="Language" name="lang" :items="languages" hide-description value="en" />
            <vue-select id="theme" label="Theme" name="theme" :items="themes" hide-description value="dark" />
          </vue-stack>
        </vue-column>
      </vue-columns>

      <hr v-if="slim === false" />

      <vue-columns v-if="slim === false" :align-y="['top', 'top', 'center']" stack-phone stack-tablet-portrait>
        <vue-column>
          <vue-stack space="8">
            <vue-text look="h6" color="text-low" :align="['center', 'center', 'left']">
              Subscribe to our newsletter
            </vue-text>
            <vue-text color="text-low" :align="['center', 'center', 'left']">
              The latest news, articles, and resources, sent to your inbox weekly.
            </vue-text>
          </vue-stack>
        </vue-column>

        <vue-column :align="['left', 'left', 'right']">
          <vue-columns space="12" stack-phone stack-tablet-portrait>
            <vue-column :width="['100%', '100%', '264px']">
              <vue-input
                id="newsletter"
                name="newsletter"
                label="newsletter"
                placeholder="Enter your email"
                hide-label
                hide-description
              />
            </vue-column>
            <vue-column :width="['100%', '100%', 'content']">
              <vue-button look="primary">Submit</vue-button>
            </vue-column>
          </vue-columns>
        </vue-column>
      </vue-columns>

      <hr v-if="slim === false" />

      <vue-columns align-y="center" stack-phone stack-tablet-portrait>
        <vue-column>
          <vue-text look="h6" color="text-low" :align="['center', 'center', 'left']">
            © {{ year }} Vuesion, Inc. All rights reserved.
          </vue-text>
        </vue-column>

        <vue-column v-if="slim === true">
          <vue-inline :align="['center']" space="48">
            <vue-text color="text-low" weight="semi-bold">About</vue-text>
            <vue-text color="text-low" weight="semi-bold">About</vue-text>
            <vue-text color="text-low" weight="semi-bold">About</vue-text>
          </vue-inline>
        </vue-column>

        <vue-column>
          <vue-inline space="24" :align="['center', 'center', 'right']">
            <vue-text color="text-low"><vue-icon-facebook /></vue-text>
            <vue-text color="text-low"><vue-icon-instagram /></vue-text>
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
            <vue-text color="text-low"><vue-icon-dribbble /></vue-text>
          </vue-inline>
        </vue-column>
      </vue-columns>
    </vue-stack>
  </vue-box>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueColumns from '@/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueSelect from '@/components/input-and-actions/VueSelect/VueSelect.vue';
import VueInput from '@/components/input-and-actions/VueInput/VueInput.vue';
import VueButton from '@/components/input-and-actions/VueButton/VueButton.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';
import VueIconFacebook from '@/components/icons/VueIconFacebook.vue';
import VueIconInstagram from '@/components/icons/VueIconInstagram.vue';
import VueIconTwitter from '@/components/icons/VueIconTwitter.vue';
import VueIconGithub from '@/components/icons/VueIconGithub.vue';
import VueIconDribbble from '@/components/icons/VueIconDribbble.vue';

export default defineComponent({
  name: 'VueFooter',
  components: {
    VueIconDribbble,
    VueIconGithub,
    VueIconTwitter,
    VueIconInstagram,
    VueIconFacebook,
    VueInline,
    VueButton,
    VueInput,
    VueSelect,
    VueColumn,
    VueColumns,
    VueText,
    VueStack,
    VueBox,
  },
  props: {
    slim: { type: Boolean, default: false },
  },
  setup() {
    const year = computed(() => new Date().getFullYear());
    const languages = computed(() => [
      { label: 'English', value: 'en' },
      { label: 'Deutsch', value: 'de' },
    ]);
    const themes = computed(() => [
      { label: 'System', value: 'system' },
      { label: 'Light', value: 'light' },
      { label: 'Dark', value: 'dark' },
    ]);

    return {
      languages,
      themes,
      year,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

.vueFooter {
  background: $footer-bg;

  i {
    width: $footer-icon-size;
    height: $footer-icon-size;
  }
}
</style>
