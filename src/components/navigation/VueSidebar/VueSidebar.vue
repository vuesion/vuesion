<template>
  <vue-box padding="20 12" as="aside" :class="$style.vueSidebar">
    <vue-stack space="4">
      <slot />
    </vue-stack>
  </vue-box>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';

export default defineComponent({
  name: 'VueSidebar',
  components: { VueStack, VueBox },
});
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

.vueSidebar {
  z-index: $sidebar-index;
  height: $sidebar-height;
  background: $sidebar-bg;
  overflow-y: scroll;
  width: $sidebar-width;
  -webkit-overflow-scrolling: touch;
}
</style>
