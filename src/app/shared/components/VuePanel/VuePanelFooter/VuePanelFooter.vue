<template>
  <div :class="[$style.vuePanelFooter, cssClass]">
    <slot />
  </div>
</template>

<script lang="ts">
  export default {
    name:       'VuePanelFooter',
    components: {},
    props:      {
      cssClass: {
        type:    String,
        default: 'vuePanelFooter',
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
  @import "../../../styles";

  .vuePanelFooter {
    display: block;
    padding: $panel-footer-padding;
  }
</style>
