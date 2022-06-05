<template>
  <div id="app" :class="$style.app">
    <main :class="$style.content">
      <slot/>
    </main>
  </div>
</template>

<script setup>
import '~/assets/global.scss';
</script>

<style lang="scss" module>
@import '../assets/design-system';
@import '../assets/reset';
@import '../assets/typography';

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .content {
    flex: 1;
  }
}
</style>
