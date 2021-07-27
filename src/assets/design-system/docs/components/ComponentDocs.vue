<template>
  <vue-box padding="16">
    <vue-stack space="32">
      <vue-stack v-if="componentName && usage" space="8">
        <vue-text color="text-high" look="large-title" weight="semi-bold">{{ componentName }} {{ suffix }}</vue-text>
        <vue-text color="text-high" look="description">{{ usage }}</vue-text>
      </vue-stack>

      <vue-stack v-if="story" space="8">
        <vue-text color="text-high" look="large-title" weight="semi-bold">Story</vue-text>
        <vue-text color="text-high" look="description">{{ story }}</vue-text>
      </vue-stack>

      <vue-card :style="{ position: 'relative' }">
        <slot />
      </vue-card>
    </vue-stack>
  </vue-box>
</template>

<script lang="ts">
import '@/components/global';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueCard from '@/components/data-display/VueCard/VueCard.vue';

export default {
  name: 'ComponentDocs',
  components: { VueCard, VueBox, VueStack, VueText },
  props: {
    componentName: { type: String, default: null },
    usage: { type: String, default: null },
    story: { type: String, default: null },
    suffix: { type: String, default: 'Usage' },
  },
};
</script>
