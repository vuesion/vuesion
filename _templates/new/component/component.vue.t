---
to: "src/app/components/<%= folder %>/<%= name %>/<%= name %>.vue"
---
<template>
  <div :class="$style.<%= name %>"><%= name %></div>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';

// Deps
const $style = useCssModule();
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.<%= name %> {
  // this class is only applied if you add css properties
}
</style>
