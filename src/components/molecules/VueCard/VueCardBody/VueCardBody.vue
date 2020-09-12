<template>
  <div :class="$style.vueCardBody">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'VueCardBody',
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueCardBody {
  display: block;
  padding: $card-body-padding;
}
</style>
