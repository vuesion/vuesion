<template>
  <div :class="$style.vuePanelBody">
    <slot />
  </div>
</template>

<script lang="ts">
  export default {
    name:       'VuePanelBody',
  };
</script>

<style lang="scss" module>
  @import "../../../styles";

  .vuePanelBody {
    display: block;
    padding: $panel-body-padding;
  }
</style>
