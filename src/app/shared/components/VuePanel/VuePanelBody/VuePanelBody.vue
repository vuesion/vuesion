<template>
  <div :class="[$style.vuePanelBody, cssClass]">
    <slot />
  </div>
</template>

<script lang="ts">
  export default {
    name:       'VuePanelBody',
    components: {},
    props:      {
      cssClass: {
        type:    String,
        default: 'vuePanelBody',
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

  .vuePanelBody {
    display: block;
    padding: $panel-body-padding;
  }
</style>
