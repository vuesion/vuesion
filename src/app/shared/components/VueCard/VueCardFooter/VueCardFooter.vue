<template>
  <div :class="$style.vueCardFooter"><slot /></div>
</template>

<script lang="ts">
export default {
  name: 'VueCardFooter',
};
</script>

<style lang="scss" module>
@import '../../../design-system';

.vueCardFooter {
  display: block;
  padding: $card-footer-padding;
}
</style>
