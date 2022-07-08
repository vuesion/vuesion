<template>
  <component
    :is="href ? 'a' : to ? 'nuxt-link' : 'div'"
    :href="href && href"
    :target="href && '_blank'"
    :rel="href && 'noopener'"
    :to="to && to"
    :exact="exact"
    :class="$style.vueSidebarGroupItem"
    :active-class="$style.active"
    tabindex="0"
    @click="!href && !to && $emit('click')"
    @keypress.space.enter="!href && !to && $emit('click')"
  >
    <vue-columns space="16">
      <vue-column v-if="leadingIcon" width="content" align-y="center">
        <component :is="`vue-icon-${leadingIcon}`" />
      </vue-column>

      <vue-column align-y="center">
        <vue-text weight="semi-bold">{{ name }}</vue-text>
      </vue-column>

      <vue-column v-if="trailingIcon" width="content" align-y="center">
        <component :is="`vue-icon-${trailingIcon}`" />
      </vue-column>
    </vue-columns>
  </component>
</template>

<script setup lang="ts">
import { withDefaults } from '@vue/runtime-core';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueColumns from '@/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/layout/VueColumns/VueColumn/VueColumn.vue';

interface SidebarGroupItemProps {
  name: string;
  leadingIcon?: string;
  trailingIcon?: string;
  to?: string | object;
  exact?: boolean;
  href?: string;
}

withDefaults(defineProps<SidebarGroupItemProps>(), {
  leadingIcon: null,
  trailingIcon: null,
  to: null,
  exact: true,
  href: null,
});
</script>

<style lang="scss" module>
@import 'assets/_design-system';

.vueSidebarGroupItem {
  display: flex;
  height: $sidebar-group-item-height;
  align-items: center;
  cursor: pointer;
  color: $sidebar-group-item-color;
  background: $sidebar-group-item-bg;
  border-radius: $sidebar-group-item-border-radius;
  outline: none;
  text-decoration: none;
  padding: $sidebar-group-item-padding;

  &.active {
    color: $sidebar-group-item-color-active;
    background: $sidebar-group-item-bg-active;
  }

  &:hover {
    color: $sidebar-group-item-color-hover;
    background: $sidebar-group-item-bg-hover;
  }

  &:focus {
    box-shadow: $sidebar-outline;
  }

  i {
    width: $sidebar-group-item-icon-size;
    height: $sidebar-group-item-icon-size;
  }
}
</style>
