<template>
  <div :class="$style.vueCardFooter">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'VueCardFooter',
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueCardFooter {
  display: block;
  padding: $card-footer-padding;
}
</style>
