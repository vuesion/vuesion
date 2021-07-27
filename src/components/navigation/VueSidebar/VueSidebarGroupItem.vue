<template>
  <vue-box padding="0 12" :class="$style.vueSidebarGroupItem" as="li" tabindex="0">
    <component
      :is="href ? 'a' : to ? 'nuxt-link' : 'div'"
      :href="href && href"
      :target="href && '_blank'"
      :rel="href && 'noopener'"
      :to="to && to"
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
  </vue-box>
</template>

<script lang="ts">
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueColumns from '@/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/layout/VueColumns/VueColumn/VueColumn.vue';
export default {
  name: 'VueSidebarGroupItem',
  components: { VueColumn, VueColumns, VueText, VueBox },
  props: {
    name: { type: String, required: true },
    leadingIcon: { type: String, default: null },
    trailingIcon: { type: String, default: null },
    to: { type: [String, Object], default: null },
    href: { type: String, default: null },
  },
};
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

.vueSidebarGroupItem {
  display: flex;
  height: $sidebar-group-item-height;
  align-items: center;
  cursor: pointer;
  color: $sidebar-group-item-color;
  background: $sidebar-group-item-bg;
  border-radius: $sidebar-group-item-border-radius;
  outline: none;

  &:hover {
    color: $sidebar-group-item-color-hover;
    background: $sidebar-group-item-bg-hover;

    a {
      color: $sidebar-group-item-color-hover;
    }
  }

  &:focus {
    box-shadow: $sidebar-outline;
  }

  i {
    width: $sidebar-group-item-icon-size;
    height: $sidebar-group-item-icon-size;
  }

  a {
    color: $sidebar-group-item-color;
    text-decoration: none;
  }
}
</style>
