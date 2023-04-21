<template>
  <div id="app" :class="$style.app">
    <vue-toast />

    <vue-navbar
      v-if="!$route.path.match(/[a-z]{2}-[A-Z]{2}/gi)"
      :user-name="user?.email"
      :user-image="user?.image"
      :show-menu-icon="false"
      @menu-item-click="onLogoutClick"
    >
      <template v-if="user" #center> Hello, {{ user?.email }}! </template>
    </vue-navbar>

    <slot />

    <vue-footer
      slim
      :languages="languages"
      :themes="themes"
      :selected-locale="locale"
      @locale-change="onLocaleChange"
    />

    <vue-back-to-top />
  </div>
</template>

<script setup lang="ts">
import { useI18n, useLocaleHead, useLocalePath, useSwitchLocalePath } from '#i18n';
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import VueToast from '../components/data-display/VueToast/VueToast.vue';
import VueNavbar from '../components/navigation/VueNavbar/VueNavbar.vue';
import VueFooter from '../components/navigation/VueFooter/VueFooter.vue';
import VueBackToTop from '../components/behavior/VueBackToTop/VueBackToTop.vue';
import { useHead, useAuth } from '#imports';
import { IItem } from '~/interfaces/IItem';

// Deps
const { locale, setLocale } = useI18n();
const { push } = useRouter();
const i18nHead = useLocaleHead({ addSeoAttributes: { canonicalQueries: [] } });
const { data, signOut } = useAuth();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();

// Config
useHead({
  htmlAttrs: { lang: i18nHead.value.htmlAttrs!.lang },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
});

// Data
const languages = computed(() => [
  { label: 'English', value: 'en-US' },
  { label: 'Deutsch', value: 'de-DE' },
]);
const themes = computed(() => [
  { label: 'System', value: 'system' },
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
]);
const user = computed(() => data.value?.user || null);

// Event Handler
const onLocaleChange = async (newLocale: IItem) => {
  await setLocale(newLocale.value);
  await push(switchLocalePath(newLocale.value));
};
const onLogoutClick = async (menuItem: IItem) => {
  if (menuItem.value === 'logout') {
    await signOut({ redirect: false });
    await push(localePath('/'));
  }
};
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';
@import 'assets/reset.scss';
@import 'assets/typography.scss';

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
