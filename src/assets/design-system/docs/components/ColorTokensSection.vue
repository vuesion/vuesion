<template>
  <vue-stack space="16" :class="$style.colorTokensSection">
    <vue-stack space="10">
      <vue-text color="text-high" look="h3" weight="semi-bold">{{ title }}</vue-text>
      <vue-text look="description">{{ description }}</vue-text>
    </vue-stack>

    <vue-tiles space="0" :columns="[1, 2, 3]">
      <vue-box v-for="(column, idx) in columns" :key="idx" :padding="[16, '48 24']" :class="column.dark && $style.dark">
        <vue-stack>
          <token-item
            v-for="(token, tokenidx) in column.tokens"
            :key="`${token.cssVar}-${tokenidx}`"
            :figma="token.figmaVar"
            :css="token.cssVar"
            :circle-color="token.circleColor"
            :small-circle-color="token.smallCircleColor"
            :palette="token.paletteColor"
            :inverse="column.dark"
          />
        </vue-stack>
      </vue-box>
    </vue-tiles>
  </vue-stack>
</template>

<script lang="ts">
import VueText from '@/components/typography/VueText/VueText.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueTiles from '@/components/layout/VueTiles/VueTiles.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import TokenItem from '@/assets/design-system/docs/components/TokenItem.vue';

export default {
  name: 'ColorTokensSection',
  components: { TokenItem, VueBox, VueTiles, VueStack, VueText },
  props: {
    title: { type: String, default: null },
    description: { type: String, default: null },
    columns: { type: Array, default: null },
  },
};
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.colorTokensSection {
  .dark {
    border-radius: var(--brand-border-radius-lg);
    background: var(--brand-bg-inverse-high);
    height: max-content;
    box-shadow: var(--brand-elevation-3);
  }
}
</style>
