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
import { useCssModule } from 'vue';
import VueText from '@/components/design-system/typography/VueText/VueText.vue';
import VueColumns from '@/components/design-system/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/design-system/layout/VueColumns/VueColumn/VueColumn.vue';
import type { Icon } from '@/components/utils/icon-options';
import VueBadge from '@/components/design-system/surfaces-and-feedback/VueBadge/VueBadge.vue';
import type { BadgeStatus } from '@/components/utils/prop-types';

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
  (event: 'click', e: MouseEvent | KeyboardEvent): void;
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
@use 'assets/design-system/index' as ds;

.vueSidebarGroupItem {
  display: block;
  cursor: pointer;
  color: ds.$sidebar-group-item-color;
  background: ds.$sidebar-group-item-bg;
  border-radius: ds.$sidebar-group-item-border-radius;
  outline: none;
  text-decoration: none;

  &.active {
    color: ds.$sidebar-group-item-color-active;
    background: ds.$sidebar-group-item-bg-active;

    &:hover {
      color: ds.$sidebar-group-item-color-active-hover;
      background: ds.$sidebar-group-item-bg-active-hover;
    }
  }

  &:hover {
    color: ds.$sidebar-group-item-color-hover;
    background: ds.$sidebar-group-item-bg-hover;
  }

  &:focus {
    box-shadow: ds.$sidebar-outline;
  }

  i {
    width: ds.$sidebar-group-item-icon-size;
    height: ds.$sidebar-group-item-icon-size;
  }
}
</style>
