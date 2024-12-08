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
        <vue-text color="text-low" look="support" weight="semi-bold" uppercase>{{ label }}</vue-text>
      </vue-column>

      <vue-column v-if="icon" no-grow>
        <vue-text
          color="text-low"
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
import VueStack from '~/app/components/layout/VueStack/VueStack.vue';
import VueColumns from '~/app/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '~/app/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueText from '~/app/components/typography/VueText/VueText.vue';
import type { Spacing } from '~/app/components/prop-types';
import type { Icon } from '~/app/components/icon-options';

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
@import 'assets/_design-system.scss';

.vueSidebarGroup {
  .header {
    cursor: pointer;
    border-radius: $sidebar-group-header-border-radius;
    outline: none !important;

    &:focus {
      box-shadow: $sidebar-outline;
    }

    i {
      width: $sidebar-group-icon-size;
      height: $sidebar-group-icon-size;
      cursor: pointer;
      outline: none;
      border-radius: $space-2;

      &:focus {
        box-shadow: $sidebar-outline;
      }
    }
  }

  .items {
    list-style: none;
  }
}
</style>
