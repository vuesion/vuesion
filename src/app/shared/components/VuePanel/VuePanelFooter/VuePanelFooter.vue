<template>
  <div :class="$style.vuePanelFooter">
    <slot />
  </div>
</template>

<script lang="ts">
  export default {
    name:       'VuePanelFooter',
  };
</script>

<style lang="scss" module>
  @import "../../../styles";

  .vuePanelFooter {
    display: block;
    padding: $panel-footer-padding;
  }
</style>
