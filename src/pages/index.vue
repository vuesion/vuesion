<template>
  <vue-stack :space="['8', '16', '24', '48', '192']" :align-x="['start', 'center', 'end']">
    <vue-text look="h1" color="text-high"> Test </vue-text>
    <vue-text look="h1" color="text-high"> Test </vue-text>
    <vue-text look="h1" color="text-high"> Test </vue-text>
    <vue-text look="h1" color="text-high"> Test </vue-text>
    <vue-text look="h1" color="text-high"> Test </vue-text>
  </vue-stack>
</template>

<script lang="ts">
import VueText from '@/components/typography/VueText/VueText.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';

export default {
  components: { VueStack, VueBox, VueText },
};
</script>
