<template>
  <vue-stack space="16">
    <vue-stack space="2">
      <vue-text look="h1" weight="bold">
        {{ title }}
      </vue-text>
      <vue-text look="description-md" color="low">
        {{ description }}
      </vue-text>
    </vue-stack>

    <slot />
  </vue-stack>
</template>

<script setup lang="ts">
import VueText from '@/components/design-system/typography/VueText/VueText.vue';
import VueStack from '@/components/design-system/layout/VueStack/VueStack.vue';

interface utilityTokenSectionProps {
  title?: string | null;
  description?: string | null;
}

withDefaults(defineProps<utilityTokenSectionProps>(), {
  title: null,
  description: null,
});
</script>
