<template>
  <div :class="$style.vueCard"><slot /></div>
</template>

<script lang="ts">
export default {
  name: 'VueCard',
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.vueCard {
  background-color: $card-bg;
  box-shadow: $card-shadow;
  border: $card-border;
  border-radius: $card-border-radius;
  margin: $card-margin;
  color: $card-color;
}
</style>
