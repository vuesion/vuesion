<template>
  <div :class="$style.vuePanel">
    <slot />
  </div>
</template>

<script lang="ts">
  export default {
    name: 'VuePanel',
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .vuePanel {
    background-color: $panel-bg;
    box-shadow:       $panel-shadow;
    border:           $panel-border;
    border-radius:    $panel-border-radius;
    margin:           $panel-margin;
  }
</style>
