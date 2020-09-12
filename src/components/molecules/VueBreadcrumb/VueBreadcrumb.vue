<template>
  <ul :class="$style.vueBreadcrumb">
    <li v-for="(item, idx) in items" :key="idx" :class="$style.item">
      <nuxt-link v-if="idx < items.length - 1" :to="localePath(item.href)">
        {{ item.label }}
      </nuxt-link>
      <span v-else>{{ item.label }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'VueBreadcrumb',
  props: {
    items: { type: Array, required: true },
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/designSystem/variables';

.vueBreadcrumb {
  padding: $breadcrumb-padding;
  list-style: none;
}

.item {
  display: inline-block;
  padding: $space-8 0;

  &:before {
    padding: $space-8;
    content: $breadcrumb-separator;
  }

  &:first-child {
    &:before {
      padding: 0;
      content: '';
    }
  }

  a {
    color: $breadcrumb-link-color;
    text-decoration: none;

    &:hover {
      color: $breadcrumb-link-hover-color;
    }
  }
}
</style>
