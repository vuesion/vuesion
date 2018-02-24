<template>
  <div :class="[$style.vuePanel, cssClass]">
    <slot />
  </div>
</template>

<script lang="ts">
  export default {
    name:       'VuePanel',
    components: {},
    props:      {
      cssClass: {
        type:    String,
        default: 'vuePanel',
      },
    },
    data:       function () {
      return {};
    },
    computed:   {},
    methods:    {},
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .vuePanel {
    background-color: $panel-bg;
    box-shadow:       $panel-shadow;
    border-radius:    $panel-border-radius;
    margin:           $panel-margin;
  }
</style>
