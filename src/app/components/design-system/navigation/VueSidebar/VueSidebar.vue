<template>
  <vue-stack padding="20 12" as="aside" space="24" :class="$style.vueSidebar">
    <slot />
  </vue-stack>
</template>

<script setup lang="ts">
import VueStack from '@/components/design-system/layout/VueStack/VueStack.vue';
</script>

<style lang="scss" module>
@use 'assets/design-system/index' as ds;

.vueSidebar {
  z-index: ds.$sidebar-index;
  height: ds.$sidebar-height;
  background: ds.$sidebar-bg;
  overflow-y: scroll;
  width: ds.$sidebar-width;
  -webkit-overflow-scrolling: touch;
}
</style>
