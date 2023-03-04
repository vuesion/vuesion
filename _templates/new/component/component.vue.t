---
to: "src/components/<%= folder %>/<%= name %>/<%= name %>.vue"
---
<template>
  <div :class="$style.<%= name %>"><%= name %></div>
</template>

<script setup lang="ts"></script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.<%= name %> {
  // this class is only applied if you add css properties
}
</style>
