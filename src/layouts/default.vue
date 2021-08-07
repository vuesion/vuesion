<template>
  <div id="app" :class="$style.app">
    <vue-toast />

    <vue-navbar
      v-if="$route.path !== '/'"
      :user-name="user && user.name"
      :show-menu-icon="false"
      @menu-item-click="onLogoutClick"
      @menu-click="showSidebar = true"
    >
      <template v-if="user" slot="center"> Hello, {{ user.name }}! </template>
    </vue-navbar>

    <nuxt :class="$style.content" />

    <vue-footer
      slim
      :languages="languages"
      :themes="themes"
      :selected-locale="locale"
      @locale-change="onLocaleSwitch"
    />

    <vue-back-to-top />
  </div>
</template>

<script lang="ts">
import '@/assets/global.scss';
import { defineComponent, computed, useContext, useMeta, watch } from '@nuxtjs/composition-api';
import VueFooter from '@/components/navigation/VueFooter/VueFooter.vue';
import VueToast from '@/components/data-display/VueToast/VueToast.vue';
import { useLocaleSwitch } from '@/composables/use-locale-switch';
import VueBackToTop from '@/components/behavior/VueBackToTop/VueBackToTop.vue';
import { IItem } from '@/interfaces/IItem';
import VueNavbar from '@/components/navigation/VueNavbar/VueNavbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    VueNavbar,
    VueBackToTop,
    VueFooter,
    VueToast,
  },
  setup() {
    const { redirect, app } = useContext();
    const { htmlAttrs } = useMeta();
    const { switchLocaleTo } = useLocaleSwitch(app.i18n);
    const languages = computed(() => [
      { label: 'English', value: 'en' },
      { label: 'Deutsch', value: 'de' },
    ]);
    const themes = computed(() => [
      { label: 'System', value: 'system' },
      { label: 'Light', value: 'light' },
      { label: 'Dark', value: 'dark' },
    ]);
    const locale = computed(() => app.i18n.locale);
    const loggedIn = computed(() => app.$auth.loggedIn);
    const user = computed(() => app.$auth.user);
    const onLocaleSwitch = (selectedLocale: IItem) => switchLocaleTo(selectedLocale.value);
    const onLogoutClick = async (menuItem: IItem) => {
      if (menuItem.value === 'logout') {
        await app.$auth.logout();
        redirect('/');
      }
    };

    watch(
      [locale],
      () => {
        htmlAttrs.value = {
          lang: locale.value.substr(0, 2),
        };
      },
      { immediate: true },
    );

    return {
      languages,
      themes,
      locale,
      loggedIn,
      user,
      onLocaleSwitch,
      onLogoutClick,
    };
  },
  head: {},
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';
@import '~@/assets/reset';
@import '~@/assets/typography';

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .content {
    flex: 1;
  }
}
</style>
