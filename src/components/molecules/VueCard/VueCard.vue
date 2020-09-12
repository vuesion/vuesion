<template>
  <div :class="$style.vueCard">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'VueCard',
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueCard {
  background-color: $card-bg;
  box-shadow: $card-shadow;
  border: $card-border;
  border-radius: $card-border-radius;
  color: $card-color;
}
</style>
