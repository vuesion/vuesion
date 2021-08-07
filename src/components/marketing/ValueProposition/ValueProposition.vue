<template>
  <div :class="$style.valueProposition">
    <vue-content-block>
      <vue-columns stack-phone stack-tablet-portrait stack-tablet-landscape>
        <vue-column :width="['content', 'content', 'content', '250px', '400px']">
          <vue-box :padding="[16, 16, 16, '144 null']">
            <vue-hidden small-desktop large-desktop>
              <vue-text look="h3" color="text-high" weight="semi-bold" :align="['left', 'center', 'center', 'left']">
                Built for modern product teams
              </vue-text>
            </vue-hidden>

            <vue-stack space="16">
              <vue-hidden phone tablet-portrait tablet-landscape>
                <vue-text look="description" color="text-high" weight="semi-bold">
                  Built for modern product teams
                </vue-text>
              </vue-hidden>

              <ul :class="$style.nav">
                <li
                  tabindex="0"
                  @keypress.space.enter.stop.prevent="onTabChange(0)"
                  @click.stop.prevent="onTabChange(0)"
                >
                  <vue-text look="description" :color="activeTab === 0 ? 'info' : 'text-low'">Product Manager</vue-text>
                </li>
                <li
                  tabindex="0"
                  @keypress.space.enter.stop.prevent="onTabChange(1)"
                  @click.stop.prevent="onTabChange(1)"
                >
                  <vue-text look="description" :color="activeTab === 1 ? 'info' : 'text-low'">
                    Engineering Manager
                  </vue-text>
                </li>
                <li
                  tabindex="0"
                  @keypress.space.enter.stop.prevent="onTabChange(2)"
                  @click.stop.prevent="onTabChange(2)"
                >
                  <vue-text look="description" :color="activeTab === 2 ? 'info' : 'text-low'">Designer</vue-text>
                </li>
                <li
                  tabindex="0"
                  @keypress.space.enter.stop.prevent="onTabChange(3)"
                  @click.stop.prevent="onTabChange(3)"
                >
                  <vue-text look="description" :color="activeTab === 3 ? 'info' : 'text-low'">Engineer</vue-text>
                </li>
                <li
                  tabindex="0"
                  @keypress.space.enter.stop.prevent="onTabChange(4)"
                  @click.stop.prevent="onTabChange(4)"
                >
                  <vue-text look="description" :color="activeTab === 4 ? 'info' : 'text-low'">Team</vue-text>
                </li>
              </ul>
            </vue-stack>
          </vue-box>
        </vue-column>
        <vue-column :width="['content']">
          <vue-box :padding="[16, 16, 16, null]">
            <vue-stack :space="[64, 64, 64, null]" :align="['left', 'center', 'center', 'left']">
              <vue-stack :space="[8, 8, 8, 24]" :class="[$style.valueProp, activeTab === 0 ? $style.in : $style.out]">
                <vue-badge status="info" :class="$style.mobileBadge">Product Manager</vue-badge>

                <vue-text color="text-high" look="h4" weight="semi-bold">
                  All you need for a productive product team
                </vue-text>

                <ul :class="$style.list">
                  <li>
                    <vue-text look="description" color="text-medium">
                      the design system increases the collaboration process between design, engineering, and product
                      management
                    </vue-text>
                  </li>
                  <li>
                    <vue-text look="description" color="text-medium">
                      productive from day one - more time to solve pain points for your users rather than implementing
                      common features
                    </vue-text>
                  </li>
                </ul>
              </vue-stack>

              <vue-stack :space="[8, 8, 8, 24]" :class="[$style.valueProp, activeTab === 1 ? $style.in : $style.out]">
                <vue-badge status="info" :class="$style.mobileBadge">Engineering Manager</vue-badge>

                <vue-text color="text-high" look="h4" weight="semi-bold">
                  Enable your team to work agile and stay on top of things
                </vue-text>

                <ul :class="$style.list">
                  <li>
                    <vue-text look="description" color="text-medium">
                      community best practices support your team to maintain a clean codebase
                    </vue-text>
                  </li>
                  <li>
                    <vue-text look="description" color="text-medium">
                      set up that forces testing best practices, a high test coverage and lots of example tests support
                      an agile project management style
                    </vue-text>
                  </li>
                  <li>
                    <vue-text look="description" color="text-medium">
                      the 100% customizable design system and corresponding Figma file will increase the collaboration
                      across disciplines and deliver perfect brand identity (designers will love it)
                    </vue-text>
                  </li>
                  <li>
                    <vue-text look="description" color="text-medium">
                      the accessible codebase enables everyone in the team to contribute (even PMs and Designers) and
                      makes on-boarding new team members fun
                    </vue-text>
                  </li>
                </ul>
              </vue-stack>

              <vue-stack :space="[8, 8, 8, 24]" :class="[$style.valueProp, activeTab === 2 ? $style.in : $style.out]">
                <vue-badge status="info" :class="$style.mobileBadge">Designer</vue-badge>

                <vue-text color="text-high" look="h4" weight="semi-bold">
                  All the best user experience & interface practices built-in
                </vue-text>

                <ul :class="$style.list">
                  <li>
                    <vue-text look="description" color="text-medium">
                      benefit from practices that worked well across many project types and don't fall into traps that
                      we already experienced
                    </vue-text>
                  </li>
                  <li>
                    <vue-text look="description" color="text-medium">
                      the Figma file that is 100% in sync with the implemented design system will make the work with
                      engineering fun and helps the communication and collaboration across disciplines by providing a
                      common vocabulary
                    </vue-text>
                  </li>
                  <li>
                    <vue-text look="description" color="text-medium">
                      designed for modularity and reusability
                    </vue-text>
                  </li>
                </ul>
              </vue-stack>

              <vue-stack :space="[8, 8, 8, 24]" :class="[$style.valueProp, activeTab === 3 ? $style.in : $style.out]">
                <vue-badge status="info" :class="$style.mobileBadge">Engineer</vue-badge>

                <vue-text color="text-high" look="h4" weight="semi-bold">
                  Keep your codebase clean and focus on your domain logic
                </vue-text>

                <ul :class="$style.list">
                  <li>
                    <vue-text look="description" color="text-medium">
                      most common use-cases, tools, libraries, and technologies already set up will give you more time
                      to focus on building a great product
                    </vue-text>
                  </li>
                  <li>
                    <vue-text look="description" color="text-medium">
                      set up that forces testing best practices, high test coverage and lots of examples will help the
                      team to keep the codebase agile and to welcome changing requirements
                    </vue-text>
                  </li>
                  <li>
                    <vue-text look="description" color="text-medium">
                      the 100% customizable design system and corresponding Figma file will increase the collaboration
                      across disciplines and deliver perfect brand identity (designers will love it)
                    </vue-text>
                  </li>
                  <li>
                    <vue-text look="description" color="text-medium">
                      server-side-rendering set up and ready to use to satisfy the projects SEO needs (not mandatory -
                      start with an SPA until you need it!)
                    </vue-text>
                  </li>
                  <li>
                    <vue-text look="description" color="text-medium">
                      speed up your work and keep your code consistent with code generators for components, stories,
                      tests, pages, vuex-modules, interfaces and fixtures
                    </vue-text>
                  </li>
                </ul>
              </vue-stack>

              <vue-stack :space="[8, 8, 8, 24]" :class="[$style.valueProp, activeTab === 4 ? $style.in : $style.out]">
                <vue-badge status="info" :class="$style.mobileBadge">Team</vue-badge>

                <vue-text color="text-high" look="h4" weight="semi-bold"> Happy, Happy, Happy 😊 </vue-text>

                <ul :class="$style.list">
                  <li>
                    <vue-text look="description" color="text-medium">
                      improve communication across disciplines by using the design system documentation - let everyone
                      in your project know how you call the things!
                    </vue-text>
                  </li>
                  <li>
                    <vue-text look="description" color="text-medium">
                      focus on solving pain points for your users to create an awesome product and don't waste time on
                      common features
                    </vue-text>
                  </li>
                  <li>
                    <vue-text look="description" color="text-medium">
                      ship a consistent looking product that your users will love
                    </vue-text>
                  </li>
                  <li>
                    <vue-text look="description" color="text-medium">
                      prepared to grow and scale as your project matures
                    </vue-text>
                  </li>
                </ul>
              </vue-stack>
            </vue-stack>
          </vue-box>
        </vue-column>
      </vue-columns>
    </vue-content-block>

    <div
      :class="[$style.image, activeTab === 0 ? $style.in : $style.out]"
      :style="{ backgroundImage: 'url(/images/team-small.png)' }"
    />
    <div
      :class="[$style.image, activeTab === 1 ? $style.in : $style.out]"
      :style="{ backgroundImage: 'url(/images/coverage-small.png)' }"
    />
    <div
      :class="[$style.image, activeTab === 2 ? $style.in : $style.out]"
      :style="{ backgroundImage: 'url(/images/figma-small.png)' }"
    />
    <div
      :class="[$style.image, activeTab === 3 ? $style.in : $style.out]"
      :style="{ backgroundImage: 'url(/images/cli-small.png)' }"
    />
    <div
      :class="[$style.image, activeTab === 4 ? $style.in : $style.out]"
      :style="{ backgroundImage: 'url(/images/team-small.png)' }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import VueColumns from '@/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueContentBlock from '@/components/layout/VueContentBlock/VueContentBlock.vue';
import VueHidden from '@/components/utils/VueHidden/VueHidden.vue';
import VueBadge from '@/components/data-display/VueBadge/VueBadge.vue';

export default defineComponent({
  name: 'ValueProposition',
  components: { VueBadge, VueHidden, VueContentBlock, VueStack, VueBox, VueText, VueColumn, VueColumns },
  props: {},
  setup() {
    const activeTab = ref(0);
    const onTabChange = (tab: number) => {
      activeTab.value = tab;
    };

    return {
      activeTab,
      onTabChange,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.valueProposition {
  position: relative;

  .nav,
  .image {
    display: none;
  }

  .list {
    list-style: disc;
    padding-left: $space-20;
  }

  @include mediaMax(tabletLandscape) {
    .valueProp {
      position: relative;
      max-width: 430px;

      .mobileBadge {
        position: absolute;
        left: 0;
        top: -$space-20;
      }
    }
  }

  @include mediaMin(smallDesktop) {
    height: 800px;
    overflow: hidden;

    .nav,
    .image {
      display: block;
    }

    .mobileBadge {
      display: none;
    }

    .nav {
      padding: 0;
      margin: 0;

      li {
        display: flex;
        padding: $space-16 0;
        border-bottom: 1px solid var(--brand-border-default-medium);
        cursor: pointer;

        &:focus {
          outline: none;
          box-shadow: var(--brand-focused);
        }

        &:last-child {
          border-bottom: none;
        }
      }
    }

    .out {
      transform: translateY(100%);
      opacity: 0;
    }

    .in {
      transform: translateY(0);
      opacity: 1;
    }

    .valueProp {
      position: absolute;
      top: 145px;
      max-width: 430px;
      transition: all var(--brand-transition-duration) var(--brand-easing-curve);
    }

    .image {
      position: absolute;
      top: 50px;
      right: 0;
      width: 35%;
      height: 650px;
      transition: all var(--brand-transition-duration) var(--brand-easing-curve);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: left;
    }
  }
}
</style>
