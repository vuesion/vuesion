<template>
  <div :class="$style.vueCardBody"><slot /></div>
</template>

<script lang="ts">
export default {
  name: 'VueCardBody',
};
</script>

<style lang="scss" module>
@import '../../../styles';

.vueCardBody {
  display: block;
  padding: $card-body-padding;
}
</style>
