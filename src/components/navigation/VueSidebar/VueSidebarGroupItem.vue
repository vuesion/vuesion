<template>
  <li>
    <nuxt-link
      v-if="to"
      :to="to"
      :exact="exact"
      :active-class="$style.active"
      :exact-active-class="$style.active"
      :class="[$style.vueSidebarGroupItem]"
      tabindex="0"
      @keydown.space.enter="$emit('click', $event)"
      @click="$emit('click', $event)"
    >
      <vue-columns :space="16">
        <vue-column v-if="leadingIcon" width="content" align-y="center">
          <component :is="`vue-icon-${leadingIcon}`" />
        </vue-column>

        <vue-column align-y="center">
          <vue-text weight="semi-bold">{{ label }}</vue-text>
        </vue-column>

        <vue-column v-if="trailingIcon" width="content" align-y="center">
          <component :is="`vue-icon-${trailingIcon}`" />
        </vue-column>
      </vue-columns>
    </nuxt-link>
    <component
      :is="href ? 'a' : 'div'"
      v-else
      :href="href && href"
      :target="href && '_blank'"
      :rel="href && 'noopener'"
      :class="$style.vueSidebarGroupItem"
      tabindex="0"
      @click="!href && $emit('click', $event)"
      @keydown.space.enter="!href && $emit('click', $event)"
    >
      <vue-columns :space="16">
        <vue-column v-if="leadingIcon" width="content" align-y="center">
          <component :is="`vue-icon-${leadingIcon}`" />
        </vue-column>

        <vue-column align-y="center">
          <vue-text weight="semi-bold">{{ label }}</vue-text>
        </vue-column>

        <vue-column v-if="trailingIcon" width="content" align-y="center">
          <component :is="`vue-icon-${trailingIcon}`" />
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

// Interface
interface SidebarGroupItemProps {
  label: string;
  leadingIcon?: string | null;
  trailingIcon?: string | null;
  to?: string | object | null;
  exact?: boolean;
  href?: string | null;
}
interface SidebarGroupItemEmits {
  (event: 'click', e: MouseEvent): void;
}
withDefaults(defineProps<SidebarGroupItemProps>(), {
  leadingIcon: null,
  trailingIcon: null,
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
