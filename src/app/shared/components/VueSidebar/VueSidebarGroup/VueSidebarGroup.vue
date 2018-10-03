<template>
  <div :class="$style.vueSidebarGroup">
    <strong>{{ title }}</strong>
    <ul>
      <slot />
    </ul>
  </div>
</template>

<script lang="ts">
  export default {
    name:  'VueSidebarGroup',
    props: {
      title: {
        required: true,
        type:     String,
      },
    },
  };
</script>

<style lang="scss" module>
  @import "../../../styles";

  .vueSidebarGroup {
    display: block;
    margin:  $sidebar-group-margin;

    strong {
      display:        block;
      font-weight:    $font-weight-medium;
      font-size:      $sidebar-group-font-size;
      border-bottom:  $sidebar-group-border-bottom;
      padding-bottom: $space-unit * 0.5;
      margin-bottom:  $space-unit * 2;
    }
  }
</style>
