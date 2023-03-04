<template>
  <vue-stack space="4" :class="$style.vueSidebarGroup">
    <vue-box padding="48 0 10 12">
      <vue-columns :class="$style.header" @click.prevent.stop="$emit('click')">
        <vue-column>
          <vue-text color="text-inverse-low" look="support" weight="semi-bold" uppercase>{{ name }}</vue-text>
        </vue-column>

        <vue-column v-if="icon" width="content">
          <vue-text
            color="text-low"
            @click.prevent.stop="$emit('icon-click')"
            @keypress.space.enter.prevent.stop="$emit('icon-click')"
          >
            <component :is="`vue-icon-${icon}`" tabindex="0" />
          </vue-text>
        </vue-column>
      </vue-columns>
    </vue-box>

    <vue-stack :space="itemSpace" :as="as">
      <slot />
    </vue-stack>
  </vue-stack>
</template>

<script setup lang="ts">
import VueBox from '~/components/layout/VueBox/VueBox.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueColumns from '~/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '~/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import { Spacing } from '~/components/prop-types';

interface SidebarGroupProps {
  name: string;
  as?: string;
  icon?: string | null;
  itemSpace?: Spacing;
}

withDefaults(defineProps<SidebarGroupProps>(), {
  as: 'ol',
  icon: null,
  itemSpace: '0',
});

defineEmits(['click', 'icon-click', 'icon-click']);
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueSidebarGroup {
  .header {
    cursor: pointer;

    i {
      width: $sidebar-group-icon-size;
      height: $sidebar-group-icon-size;
      cursor: pointer;
      outline: none;
      border-radius: $sidebar-group-icon-border-radius;

      &:focus {
        box-shadow: $sidebar-outline;
      }
    }
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      display: flex;
      margin-bottom: $sidebar-group-item-gap;
    }
  }
}
</style>
