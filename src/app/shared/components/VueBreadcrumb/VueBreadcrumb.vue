<template>
  <ul :class="$style.vueBreadcrumb">
    <li :class="$style.item" v-for="(item, idx) in items" :key="idx">
      <router-link :to="item.href" v-if="idx < items.length - 1">{{ item.label }}</router-link>
      <span v-else>{{ item.label }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  name: 'VueBreadcrumb',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" module>
@import '../../designSystem/variables';

.vueBreadcrumb {
  padding: $breadcrumb-padding;
  margin: $breadcrumb-margin;
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
