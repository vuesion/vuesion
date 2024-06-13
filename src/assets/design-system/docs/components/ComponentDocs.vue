<template>
  <vue-card :class="[noBg && $style.noBg]">
    <vue-stack space="80">
      <vue-stack space="16">
        <vue-stack v-if="componentName && usage" space="8">
          <vue-inline align-y="center" :space="[8, 24]">
            <vue-text color="text-high" look="large-title" weight="black"> {{ componentName }} {{ suffix }} </vue-text>
            <vue-button
              v-if="buyLink"
              look="primary"
              as="a"
              target="_blank"
              rel="noopener"
              trailing-icon="external-link"
              :href="buyLink"
            >
              Buy License
            </vue-button>
          </vue-inline>

          <vue-columns>
            <vue-column no-grow>
              <vue-text color="text-medium" look="description" style="white-space: pre-wrap">
                {{ usage }}
              </vue-text>
            </vue-column>
          </vue-columns>
        </vue-stack>
        <vue-stack v-if="story" space="0">
          <vue-text color="text-high" look="medium-title" weight="semi-bold"> Story </vue-text>
          <vue-text color="text-high" look="description">
            {{ story }}
          </vue-text>
        </vue-stack>
      </vue-stack>

      <div :class="$style.body">
        <slot />
      </div>
    </vue-stack>
  </vue-card>
</template>

<script setup lang="ts">
import VueText from '~/components/typography/VueText/VueText.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueInline from '~/components/layout/VueInline/VueInline.vue';
import VueButton from '~/components/input-and-actions/VueButton/VueButton.vue';
import VueColumns from '~/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '~/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueCard from '~/components/data-display/VueCard/VueCard.vue';

interface ComponentDocsProps {
  componentName?: string | null;
  usage?: string | null;
  story?: string | null;
  suffix?: string | null;
  buyLink?: string | null;
  noBg?: boolean;
}

withDefaults(defineProps<ComponentDocsProps>(), {
  componentName: null,
  usage: null,
  story: null,
  suffix: 'Usage',
  buyLink: null,
});
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.noBg {
  background-color: transparent;
}

.body {
  width: 100%;
}
</style>
