<template>
  <vue-box :padding="[16, 24]">
    <vue-stack space="32">
      <vue-stack v-if="componentName && usage" space="8">
        <vue-text look="large-title" weight="semi-bold">{{ componentName }} Usage</vue-text>
        <vue-text look="description">{{ usage }}</vue-text>
      </vue-stack>

      <vue-stack v-if="story" space="8">
        <vue-text look="large-title" weight="semi-bold">Story</vue-text>
        <vue-text look="description">{{ story }}</vue-text>
      </vue-stack>

      <vue-box padding="0" :style="{ position: 'relative' }">
        <slot />
      </vue-box>
    </vue-stack>
  </vue-box>
</template>

<script lang="ts">
import '@/components/global';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';

export default {
  name: 'ComponentDocs',
  components: { VueBox, VueStack, VueText },
  props: {
    componentName: { type: String, default: null },
    usage: { type: String, default: null },
    story: { type: String, default: null },
  },
};
</script>
