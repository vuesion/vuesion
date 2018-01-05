<template>
  <vue-grid-item>
    <div :class="['vue-panel', $style.vuePanel]">
      <slot />
    </div>
  </vue-grid-item>
</template>

<script lang="ts">
  import VueGridItem from '../VueGridItem/VueGridItem';

  export default {
    components: {
      VueGridItem,
    },
    props: {},
    data: function () {
      return {};
    },
    computed: {},
    methods: {},
  };
</script>

<style lang="scss" module>
  @import "../../variables";

  .vuePanel {
    background-color: $panel-bg;
    box-shadow:       $panel-shadow;
    border-radius:    $panel-border-radius;
    margin:           $panel-margin;
  }
</style>
