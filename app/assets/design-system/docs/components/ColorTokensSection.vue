<template>
  <vue-stack space="16" :class="$style.colorTokensSection">
    <vue-stack space="10">
      <vue-text color="text-high" look="h1" weight="black">
        {{ title }}
      </vue-text>
      <vue-text look="large-description" color="text-medium">
        {{ description }}
      </vue-text>
    </vue-stack>

    <vue-tiles space="0" :columns="[1, 2, 3]">
      <vue-box
        v-for="(column, idx) in columns"
        :key="idx"
        :padding="['16', '48 24']"
        :class="column.dark && $style.dark"
      >
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
            :elevation="1"
          />
        </vue-stack>
      </vue-box>
    </vue-tiles>
  </vue-stack>
</template>

<script lang="ts">
import VueText from '~/app/components/typography/VueText/VueText.vue';
import VueStack from '~/app/components/layout/VueStack/VueStack.vue';
import VueTiles from '~/app/components/layout/VueTiles/VueTiles.vue';
import VueBox from '~/app/components/layout/VueBox/VueBox.vue';
import TokenItem from '~/assets/design-system/docs/components/TokenItem.vue';

export default {
  name: 'ColorTokensSection',
  components: { TokenItem, VueBox, VueTiles, VueStack, VueText },
  props: {
    title: { type: String, default: null },
    description: { type: String, default: null },
    columns: { type: Array, default: () => [] },
  },
};
</script>

<style lang="scss" module>
@import 'assets/design-system';

.colorTokensSection {
  .dark {
    border-radius: $card-border-radius;
    background: var(--bg-inverse-high);
    height: max-content;
    box-shadow: var(--elevation-4);
  }
}
</style>
