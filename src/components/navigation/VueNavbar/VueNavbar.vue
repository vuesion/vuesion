<template>
  <vue-box padding="12" :class="$style.vueNavBar" as="nav">
    <vue-columns space="0" :class="$style.layout" align-y="center">
      <vue-column width="content" align-y="center">
        <vue-icon-menu
          v-if="showMenuIcon"
          tabindex="0"
          :class="$style.menu"
          @click.native.stop.prevent="$emit('menu-click')"
        />
      </vue-column>

      <vue-column align="center">
        <slot name="center" />
      </vue-column>

      <vue-column v-if="userName || userImage" width="content">
        <vue-dropdown
          :items="[
            { label: 'Profile', value: 'profile', leadingIcon: 'user' },
            { label: 'Settings', value: 'settings', leadingIcon: 'cog' },
            { label: '', value: 'separator' },
            { label: 'Logout', value: 'logout', leadingIcon: 'logout' },
          ]"
          align-menu="right"
          @item-click="$emit('menu-item-click', $event)"
        >
          <vue-avatar :name="userName" :src="userImage" size="sm" />
        </vue-dropdown>
      </vue-column>

      <vue-column v-else width="content">
        <slot name="right" />
      </vue-column>
    </vue-columns>
  </vue-box>
</template>

<script lang="ts">
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueColumn from '@/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueColumns from '@/components/layout/VueColumns/VueColumns.vue';
import VueIconMenu from '@/components/icons/VueIconMenu.vue';
import VueAvatar from '@/components/data-display/VueAvatar/VueAvatar.vue';
import VueDropdown from '@/components/input-and-actions/VueDropdown/VueDropdown.vue';

export default {
  name: 'VueNavbar',
  components: { VueDropdown, VueAvatar, VueIconMenu, VueColumns, VueColumn, VueBox },
  props: {
    userName: { type: String, default: null },
    userImage: { type: String, default: null },
    showMenuIcon: { type: Boolean, default: true },
  },
};
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

.vueNavBar {
  height: $navbar-height;
  background: $navbar-bg;
  z-index: $navbar-index;
  box-shadow: $navbar-elevation;
  border-bottom: $navbar-border;

  .layout {
    height: 100%;

    .menu {
      width: $navbar-menu-icon-size;
      height: $navbar-menu-icon-size;
      outline: none;
      cursor: pointer;

      &:focus {
        box-shadow: $navbar-menu-outline;
      }
    }
  }
}
</style>
