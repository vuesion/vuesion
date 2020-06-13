<template>
  <li :class="$style.vueSidebarGroupItem">
    <div v-if="to">
      <nuxt-link :to="localePath(to)">
        <slot />
      </nuxt-link>
    </div>

    <div v-else>
      <slot />
    </div>
  </li>
</template>

<script lang="ts">
export default {
  name: 'VueSidebarGroupItem',
  props: {
    to: { type: [String, Object], default: null },
  },
};
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

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
    }
  }
}
</style>
