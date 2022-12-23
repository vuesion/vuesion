<template>
  <vue-box padding="20 12" as="aside" :class="$style.vueSidebar">
    <vue-stack space="4">
      <slot />
    </vue-stack>
  </vue-box>
</template>

<script setup lang="ts">
import VueBox from '~/components/layout/VueBox/VueBox.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
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
