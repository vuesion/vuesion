<template>
  <div>
    <vue-text look="large-title" color="success" :align-x="['start', 'center', 'end']"> Test </vue-text>
  </div>
</template>

<script lang="ts">
import VueText from '@/components/typography/VueText/VueText.vue';

export default {
  components: { VueText },
};
</script>
