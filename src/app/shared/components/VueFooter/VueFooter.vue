<template>
  <div :class="$style.vueFooter">
    <vue-grid>
      <vue-grid-item>
        <small>&copy; Copyright {{year}} Johannes Werner. MIT License</small>
      </vue-grid-item>
    </vue-grid>
  </div>
</template>

<script lang="ts">
  import VueGrid from '../VueGrid/VueGrid';
  import VueGridItem from '../VueGridItem/VueGridItem';

  export default {
    components: {
      VueGrid,
      VueGridItem,
    },
    props: {},
    data() {
      return {};
    },
    computed: {
      year() {
        return new Date().getFullYear();
      }
    },
    methods: {},
  };
</script>

<style lang="scss" module>
  @import "../../variables";

  .vueFooter {
    padding:    $grid-unit * 4 0 $grid-unit * 2 0;
    background: linear-gradient(to bottom, darken($text-color, 3%) 0%, $text-color 50%, darken($text-color, 3%) 100%);
    color:      $bg-color;
  }
</style>
