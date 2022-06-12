<template>
  <collapse-animation :duration="duration">
    <slot v-if="show" />
  </collapse-animation>
</template>

<script setup lang="ts">
import CollapseAnimation from '@/components/animations/CollapseAnimation/CollapseAnimation.vue';

defineProps({
  duration: { type: Number, default: 0 },
  show: { type: Boolean, default: true },
});
</script>
