<template>
  <li>
    <nuxt-link
      v-if="to"
      :to="to"
      :exact="exact"
      :active-class="$style.active"
      :exact-active-class="$style.active"
      :class="[$style.vueSidebarGroupItem, active && $style.active]"
      tabindex="0"
      @keydown.space.enter="$emit('click', $event)"
      @click="$emit('click', $event)"
    >
      <vue-columns space="8" padding="4 12" align-y="center">
        <vue-column v-if="icon" no-grow>
          <component :is="`vue-icon-${icon}`" />
        </vue-column>

        <vue-column align-y="center">
          <vue-text weight="semi-bold" look="label">{{ label }}</vue-text>
        </vue-column>

        <vue-column v-if="badgeContent" no-grow align-y="center">
          <vue-badge :status="badgeStatus">{{ badgeContent }}</vue-badge>
        </vue-column>
      </vue-columns>
    </nuxt-link>
    <component
      :is="href ? 'a' : 'div'"
      v-else
      :href="href && href"
      :target="href && '_blank'"
      :rel="href && 'noopener'"
      :class="[$style.vueSidebarGroupItem, active && $style.active]"
      tabindex="0"
      @click="!href && $emit('click', $event)"
      @keydown.space.enter="!href && $emit('click', $event)"
    >
      <vue-columns space="8" padding="4 12" align-y="center">
        <vue-column v-if="icon" no-grow>
          <component :is="`vue-icon-${icon}`" />
        </vue-column>

        <vue-column align-y="center">
          <vue-text weight="semi-bold" look="label">{{ label }}</vue-text>
        </vue-column>

        <vue-column v-if="badgeContent" no-grow align-y="center">
          <vue-badge :status="badgeStatus">{{ badgeContent }}</vue-badge>
        </vue-column>
      </vue-columns>
    </component>
  </li>
</template>

<script setup lang="ts">
import { useCssModule, withDefaults } from 'vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import VueColumns from '~/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '~/components/layout/VueColumns/VueColumn/VueColumn.vue';
import type { Icon } from '~/components/icon-options';
import VueBadge from '~/components/data-display/VueBadge/VueBadge.vue';
import type { BadgeStatus } from '~/components/prop-types';

// Interface
interface SidebarGroupItemProps {
  label: string;
  icon?: Icon;
  badgeContent?: string;
  badgeStatus?: BadgeStatus;
  to?: string | object | null;
  exact?: boolean;
  active?: boolean;
  href?: string | null;
}
interface SidebarGroupItemEmits {
  (event: 'click', e: MouseEvent): void;
}
withDefaults(defineProps<SidebarGroupItemProps>(), {
  icon: undefined,
  badgeContent: undefined,
  badgeStatus: 'neutral',
  to: null,
  exact: true,
  href: null,
});
defineEmits<SidebarGroupItemEmits>();

// Deps
const $style = useCssModule();
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueSidebarGroupItem {
  display: block;
  cursor: pointer;
  color: $sidebar-group-item-color;
  background: $sidebar-group-item-bg;
  border-radius: $sidebar-group-item-border-radius;
  outline: none;
  text-decoration: none;

  &.active {
    color: $sidebar-group-item-color-active;
    background: $sidebar-group-item-bg-active;

    &:hover {
      color: $sidebar-group-item-color-active-hover;
      background: $sidebar-group-item-bg-active-hover;
    }
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
