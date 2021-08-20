<template>
  <vue-box :padding="['64 0 24 0', '64 0 24 0', '64 0 24 0', '0 0 64 0']">
    <vue-content-block :class="$style.learnMore">
      <vue-stack :space="[32, 32, 32, null]">
        <vue-box :padding="['24 12', 48, 64, 80]">
          <vue-stack space="64">
            <vue-text look="h3" weight="semi-bold" align="center">
              <span class="deco-underline">Learn more</span> about Vuesion
            </vue-text>

            <vue-columns space="48" stack-phone stack-tablet-portrait stack-tablet-landscape>
              <vue-column :width="['content', 'content', 'content', '50%']">
                <img src="/images/discord-small.png" alt="Learn more about Vuesion before starting" />
              </vue-column>

              <vue-column space="48" :width="['content', 'content', 'content', '50%']">
                <vue-stack space="48">
                  <vue-columns stack-phone stack-tablet-portrait :space="[48, 48, 48, 24]">
                    <vue-column :width="['content', 'content', '50%']">
                      <vue-stack space="16">
                        <vue-text look="h4">Hello Engineer. Installing Vuesion.</vue-text>
                        <vue-text look="description">
                          To use Vuesion, you need to have Node.js installed on your system. Vuesion can be installed by
                          running <code>npx @vuesion/create my-app</code>. It will create the project folder, downloads
                          the Vuesion repository, and installs dependencies. After the process has finished,
                          <code>cd my-app</code> and run <code>npm run dev</code>. Have fun!
                        </vue-text>
                        <a href="https://github.com/vuesion/vuesion#getting-started" target="_blank" rel="noopener">
                          Read instructions on Github <vue-icon-arrow-right />
                        </a>
                      </vue-stack>
                    </vue-column>
                    <vue-column :width="['content', 'content', '50%']" :space="[48, 48, 48, 24]">
                      <vue-stack space="16">
                        <vue-text look="h4">Hello Designer. Using the Figma file.</vue-text>
                        <vue-text look="description">
                          Vuesion makes it simple to get started with design. duplicate the figma file from community
                          and begin pulling all the components you need for your product.
                        </vue-text>
                        <a
                          href="https://www.figma.com/file/DvP4EE7gAJH3fsc4RFqZYc/Vuesion-Core?node-id=1686%3A4660"
                          target="_blank"
                          rel="noopener"
                        >
                          Open Design System in Figma <vue-icon-arrow-right />
                        </a>
                      </vue-stack>
                    </vue-column>
                  </vue-columns>
                  <vue-columns stack-phone stack-tablet-portrait :space="[48, 48, 48, 24]">
                    <vue-column :width="['content', 'content', '50%']">
                      <vue-stack space="16">
                        <vue-text look="h4">Join in on the conversation.</vue-text>
                        <vue-text look="description">
                          We invite everyone who respects our
                          <a
                            href="https://github.com/vuesion/vuesion/blob/master/CODE_OF_CONDUCT.md"
                            target="_blank"
                            rel="noopener"
                          >
                            Code of Conduct
                          </a>
                          to join our Discord server. Be part of an ever-growing community that wants to improve how
                          teams build great products around the world in all industries.
                        </vue-text>
                        <a href="https://discord.gg/59x5cg2" target="_blank" rel="noopener">
                          Join our Discord server <vue-icon-arrow-right />
                        </a>
                      </vue-stack>
                    </vue-column>
                    <vue-column :width="['content', 'content', '50%']" :space="[48, 48, 48, 24]">
                      <vue-stack space="16">
                        <vue-text look="h4">Read the docs!</vue-text>
                        <vue-text look="description">
                          Currently, work in progress. We aim to provide carefully written docs to make it easy for you
                          to use Vuesion and to on board new team members as quickly as possible.
                        </vue-text>
                        <a href="https://vuesion.github.io/docs/en/v4/" target="_blank" rel="noopener">
                          Jump to the docs <vue-icon-arrow-right />
                        </a>
                      </vue-stack>
                    </vue-column>
                  </vue-columns>
                </vue-stack>
              </vue-column>
            </vue-columns>
          </vue-stack>
        </vue-box>

        <vue-box :padding="['24 12', 48, 64, 80]">
          <vue-stack space="64">
            <vue-text look="h3" weight="semi-bold" align="center">
              Try out some <span class="deco-underline">examples!</span>
            </vue-text>

            <vue-columns
              space="48"
              stack-phone
              stack-tablet-portrait
              stack-tablet-landscape
              :revert="[true, true, true, null]"
            >
              <vue-column :width="['content', 'content', 'content', '50%']">
                <vue-stack space="48">
                  <vue-columns stack-phone stack-tablet-portrait :space="[48, 48, 48, 24]">
                    <vue-column :width="['content', 'content', '50%']">
                      <vue-stack space="16">
                        <vue-text look="h4">Authentication.</vue-text>
                        <vue-text look="description">
                          This example shows how to use the nuxt-auth. You will be redirected to a protected page with
                          scenarios like re-authentication and error handling.
                        </vue-text>
                        <vue-button leading-icon="login" look="primary" @click="$emit('login-click')">Login</vue-button>
                      </vue-stack>
                    </vue-column>
                    <vue-column :width="['content', 'content', '50%']">
                      <vue-stack space="16">
                        <vue-text look="h4">State management.</vue-text>
                        <vue-text look="description">
                          This example shows the basic usage of Vuex including Getters, Actions, SSR pre-fetching, and
                          composition-api.
                        </vue-text>
                        <nuxt-link to="/example/counter"> Go to Vuex example <vue-icon-arrow-right /> </nuxt-link>
                      </vue-stack>
                    </vue-column>
                  </vue-columns>
                  <vue-columns stack-phone stack-tablet-portrait :space="[48, 48, 48, 24]">
                    <vue-column :width="['content', 'content', '50%']">
                      <vue-stack space="16">
                        <vue-text look="h4">GraphQL - Apollo</vue-text>
                        <vue-text look="description">
                          This example shows how to use apollo with the composition-api. The data is fetched on the
                          server-side and synced with the client.
                        </vue-text>
                        <nuxt-link to="/example/apollo"> Go to Apollo example <vue-icon-arrow-right /> </nuxt-link>
                      </vue-stack>
                    </vue-column>
                    <vue-column :width="['content', 'content', '50%']">
                      <vue-stack space="16">
                        <vue-text look="h4">Form validation.</vue-text>
                        <vue-text look="description">
                          This example shows how to validate forms with the vee-validate library and the Vuesion
                          components.
                        </vue-text>
                        <nuxt-link to="/example/form"> Go to Form example <vue-icon-arrow-right /> </nuxt-link>
                      </vue-stack>
                    </vue-column>
                  </vue-columns>
                </vue-stack>
              </vue-column>

              <vue-column :width="['content', 'content', 'content', '50%']">
                <img src="/images/example-small.png" alt="Try out some examples!" />
              </vue-column>
            </vue-columns>
          </vue-stack>
        </vue-box>
      </vue-stack>
    </vue-content-block>
  </vue-box>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import VueContentBlock from '@/components/layout/VueContentBlock/VueContentBlock.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueColumns from '@/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueIconArrowRight from '@/components/icons/VueIconArrowRight.vue';
import VueButton from '@/components/input-and-actions/VueButton/VueButton.vue';

export default defineComponent({
  name: 'LearnMore',
  components: { VueButton, VueIconArrowRight, VueColumn, VueColumns, VueStack, VueText, VueBox, VueContentBlock },
  props: {},
  setup() {
    return {};
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.learnMore {
  position: relative;
  background: palette-color-level('primary', 9);
  border-radius: $space-32;
  color: var(--a11y-default-color);
  box-shadow: var(--brand-elevation-3);

  img {
    width: 100%;
    border-radius: $space-32;
  }

  a {
    color: palette-color-level('success', 4);
    font-weight: $font-weight-semi-bold;
    font-size: $text-3;
    line-height: $line-height-3;
    display: inline-flex;
    align-items: center;
    text-decoration: none;

    i {
      margin-top: $space-2;
      margin-left: $space-4;
      width: $space-20;
      height: $space-20;

      svg path {
        stroke-width: 2.5;
      }
    }
  }

  code {
    color: var(--brand-text-default-high);
  }
}
</style>
