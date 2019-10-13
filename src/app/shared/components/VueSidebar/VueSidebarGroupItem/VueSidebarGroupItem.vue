<template>
  <li :class="$style.vueSidebarGroupItem">
    <div v-if="to">
      <router-link :to="to"> <slot /> </router-link>
    </div>

    <div v-else><slot /></div>
  </li>
</template>

<script lang="ts">
export default {
  name: 'VueSidebarGroupItem',
  props: {
    to: {},
  },
};
</script>

<style lang="scss" module>
@import '../../../design-system';

.vueSidebarGroupItem {
  display: block;

  a {
    display: flex;
    flex-direction: row;
    padding: $space-8;
    font-weight: $sidebar-group-item-font-weight;
    font-size: $sidebar-group-item-font-size;
    color: $sidebar-group-item-color;
    text-decoration: none;

    &:hover {
      color: $sidebar-group-item-hover-color;
      background: $sidebar-group-item-hover-bg;
    }

    i {
      width: $space-24;
      height: $space-24;
      flex: 0 0 auto;
      margin-right: $space-12;
    }
  }
}
</style>
