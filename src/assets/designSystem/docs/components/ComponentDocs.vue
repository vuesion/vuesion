<template>
  <vue-box>
    <vue-stack space="32">
      <vue-stack space="8">
        <vue-text appearance="large-title" weight="semi-bold">{{ componentName }} Usage</vue-text>
        <vue-text appearance="description">{{ usage }}</vue-text>
      </vue-stack>

      <vue-stack space="8">
        <vue-text appearance="large-title" weight="semi-bold">Story</vue-text>
        <vue-text appearance="description">{{ story }}</vue-text>
      </vue-stack>

      <vue-box padding="0">
        <slot />
      </vue-box>
    </vue-stack>
  </vue-box>
</template>

<script lang="ts">
import VueText from '@/components/atoms/VueText/VueText.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';

export default {
  name: 'ComponentDocs',
  components: { VueStack, VueText },
  props: {
    componentName: { type: String, required: true },
    usage: { type: String, required: true },
    story: { type: String, required: true },
  },
};
</script>
