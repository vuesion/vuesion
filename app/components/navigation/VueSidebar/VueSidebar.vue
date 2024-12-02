<template>
  <vue-stack padding="20 12" as="aside" space="24" :class="$style.vueSidebar">
    <slot />
  </vue-stack>
</template>

<script setup lang="ts">
import VueStack from '~/app/components/layout/VueStack/VueStack.vue';
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueSidebar {
  z-index: $sidebar-index;
  height: $sidebar-height;
  background: $sidebar-bg;
  overflow-y: scroll;
  width: $sidebar-width;
  -webkit-overflow-scrolling: touch;
}
</style>
