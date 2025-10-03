<template>
  <vue-stack space="16">
    <vue-stack space="10">
      <vue-text color="high" look="h3" weight="black">
        {{ title }}
      </vue-text>
      <vue-text look="description">
        {{ description }}
      </vue-text>
    </vue-stack>
    <vue-box padding="48 0">
      <slot />
    </vue-box>
  </vue-stack>
</template>

<script lang="ts">
import VueText from '@/components/design-system/typography/VueText/VueText.vue';
import VueStack from '@/components/design-system/layout/VueStack/VueStack.vue';
import VueBox from '@/components/design-system/layout/VueBox/VueBox.vue';

export default {
  name: 'UtilityTokenSection',
  components: { VueBox, VueStack, VueText },
  props: {
    title: { type: String, default: null },
    description: { type: String, default: null },
  },
};
</script>
