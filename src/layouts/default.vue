<template>
  <div id="app" :class="$style.app">
    <vue-toast />

    <vue-navbar
      v-if="$route.path !== '/'"
      :user-name="null"
      :show-menu-icon="false"
      @menu-item-click="null"
      @menu-click="null"
    >
      <template v-if="null" slot="center"> Hello, {{ user.name }}! </template>
    </vue-navbar>

    <slot />

    <vue-footer slim :languages="[]" :themes="[]" :selected-locale="'en'" @locale-change="null" />

    <vue-back-to-top />
  </div>
</template>

<script setup>
import 'assets/global.scss';
import VueToast from '../components/data-display/VueToast/VueToast';
import VueNavbar from '../components/navigation/VueNavbar/VueNavbar';
import VueFooter from '../components/navigation/VueFooter/VueFooter';
import VueBackToTop from '../components/behavior/VueBackToTop/VueBackToTop';
</script>

<style lang="scss" module>
@import 'assets/design-system';
@import 'assets/reset';
@import 'assets/typography';

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
