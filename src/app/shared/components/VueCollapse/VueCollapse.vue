<template>
  <collapse-animation :duration="duration"> <slot v-if="show" /> </collapse-animation>
</template>

<script lang="ts">
import CollapseAnimation from '../../animations/CollapseAnimation/CollapseAnimation.vue';

export default {
  name: 'VueCollapse',
  components: {
    CollapseAnimation,
  },
  props: {
    show: {
      default: true,
      type: Boolean,
    },
    duration: {
      type: Number,
      default: 250,
    },
  },
};
</script>
