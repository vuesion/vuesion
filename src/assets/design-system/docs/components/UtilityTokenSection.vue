<template>
  <vue-stack space="16" :class="$style.utilityTokenSection">
    <vue-stack space="10">
      <vue-text color="text-high" look="h3" weight="semi-bold">{{ title }}</vue-text>
      <vue-text look="description">{{ description }}</vue-text>
    </vue-stack>
    <vue-box padding="48 0">
      <slot />
    </vue-box>
  </vue-stack>
</template>

<script lang="ts">
import VueText from '@/components/typography/VueText/VueText.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';

export default {
  name: 'UtilityTokenSection',
  components: { VueBox, VueStack, VueText },
  props: {
    title: { type: String, default: null },
    description: { type: String, default: null },
  },
};
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.utilityTokenSection {
}
</style>
