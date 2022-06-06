<template>
  <vue-box :padding="['8', '8 16', '12 24 64 10', '80', '144']" :align-x="['start', 'center', 'end']">
    <vue-text look="h1" color="text-high"> Test </vue-text>
  </vue-box>
</template>

<script lang="ts">
import VueText from '@/components/typography/VueText/VueText.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';

export default {
  components: { VueBox, VueText },
};
</script>
