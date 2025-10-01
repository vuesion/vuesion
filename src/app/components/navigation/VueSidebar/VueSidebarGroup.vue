<template>
  <vue-stack space="8" :class="$style.vueSidebarGroup">
    <vue-columns
      padding="8 12"
      align-y="center"
      align-x="between"
      :class="$style.header"
      tabindex="0"
      data-testid="sidebar-group"
      @click.prevent.stop="$emit('click', $event)"
      @keydown.space.enter.prevent.stop="$emit('click', $event)"
    >
      <vue-column>
        <vue-text color="low" look="support" weight="semi-bold" uppercase>{{ label }}</vue-text>
      </vue-column>

      <vue-column v-if="icon" no-grow>
        <vue-text
          color="low"
          data-testid="sidebar-group-icon"
          @click.prevent.stop="$emit('icon-click', $event)"
          @keydown.space.enter.prevent.stop="$emit('icon-click', $event)"
        >
          <component :is="`vue-icon-${icon}`" tabindex="0" />
        </vue-text>
      </vue-column>
    </vue-columns>

    <vue-stack :space="itemSpace" :as="as" :class="$style.items">
      <slot />
    </vue-stack>
  </vue-stack>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueColumns from '@/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import type { Spacing } from '@/components/utils/prop-types';
import type { Icon } from '@/components/utils/icon-options';

// Interface
interface SidebarGroupProps {
  label: string;
  as?: string;
  icon?: Icon;
  itemSpace?: Spacing;
}
interface SidebarGroupEmits {
  (event: 'click', e: MouseEvent): void;
  (event: 'icon-click', e: MouseEvent): void;
}
withDefaults(defineProps<SidebarGroupProps>(), {
  as: 'ol',
  icon: undefined,
  itemSpace: 4,
});
defineEmits<SidebarGroupEmits>();

// Deps
const $style = useCssModule();
</script>

<style lang="scss" module>
@use 'assets/design-system/index' as ds;

.vueSidebarGroup {
  .header {
    cursor: pointer;
    border-radius: ds.$sidebar-group-header-border-radius;
    outline: none !important;

    &:focus {
      box-shadow: ds.$sidebar-outline;
    }

    i {
      width: ds.$sidebar-group-icon-size;
      height: ds.$sidebar-group-icon-size;
      cursor: pointer;
      outline: none;
      border-radius: ds.$space-2;

      &:focus {
        box-shadow: ds.$sidebar-outline;
      }
    }
  }

  .items {
    list-style: none;
  }
}
</style>
