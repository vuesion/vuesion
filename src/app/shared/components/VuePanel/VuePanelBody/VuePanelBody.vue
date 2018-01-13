<template>
  <div :class="['vue-panel-body', $style.vuePanelBody]">
    <slot />
  </div>
</template>

<script lang="ts">
  export default {
    components: {},
    props: {},
    data: function () {
      return {};
    },
    computed: {},
    methods: {},
  };
</script>

<style lang="scss" module>
  @import "../../../styles";

  .vuePanelBody {
    display: block;
    padding: $panel-body-padding;
  }
</style>
