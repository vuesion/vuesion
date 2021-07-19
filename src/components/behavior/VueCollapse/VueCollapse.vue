<template>
  <collapse-animation :duration="duration">
    <slot v-if="show" />
  </collapse-animation>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import CollapseAnimation from '@/components/animations/CollapseAnimation/CollapseAnimation.vue';

export default defineComponent({
  name: 'VueCollapse',
  components: {
    CollapseAnimation,
  },
  props: {
    duration: { type: Number, default: 0 },
    show: { type: Boolean, default: true },
  },
});
</script>
