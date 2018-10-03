<template>
  <li :class="$style.vueSidebarGroupItem">
    <div v-if="to !== null">
      <router-link :to="to">
        <slot />
      </router-link>
    </div>

    <div v-else>
      <slot />
    </div>
  </li>
</template>

<script lang="ts">
  export default {
    name:       'VueSidebarGroupItem',
    components: {},
    props:      {
      to: {
        type:    String,
        default: null,
      },
    },
    data(): any {
      return {};
    },
    computed:   {},
    methods:    {},
  };
</script>

<style lang="scss" module>
  @import "../../../styles";

  .vueSidebarGroupItem {
    display: block;

    a {
      display:         flex;
      flex-direction:  row;
      padding:         $space-unit;
      font-weight:     $sidebar-group-item-font-weight;
      font-size:       $sidebar-group-item-font-size;
      color:           $sidebar-group-item-color;
      text-decoration: none;

      &:hover {
        color:      $sidebar-group-item-hover-color;
        background: $sidebar-group-item-hover-bg;
      }

      i {
        width:        $space-unit * 3;
        height:       $space-unit * 3;
        flex:         0 0 auto;
        margin-right: $space-unit * 2;
      }
    }
  }
</style>
