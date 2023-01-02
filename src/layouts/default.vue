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
      <template v-if="null" #center> Hello, {{ user.name }}! </template>
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
import { computed } from 'vue';
import 'assets/global.scss';
import VueToast from '../components/data-display/VueToast/VueToast';
import VueNavbar from '../components/navigation/VueNavbar/VueNavbar';
import VueFooter from '../components/navigation/VueFooter/VueFooter';
import VueBackToTop from '../components/behavior/VueBackToTop/VueBackToTop';
import { IItem } from '@/interfaces/IItem';

const languages = computed(() => [
  { label: 'English', value: 'en' },
  { label: 'Deutsch', value: 'de' },
]);
const themes = computed(() => [
  { label: 'System', value: 'system' },
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
]);
const { locale, setLocale } = useI18n();
const { push } = useRouter();
const i18nHead = useLocaleHead({ addSeoAttributes: { canonicalQueries: ['foo'] } });

const switchLocalePath = useSwitchLocalePath();
const onLocaleChange = async (newLocale: IItem) => {
  await setLocale(newLocale.value);
  await push(switchLocalePath(newLocale.value));
};

useHead({
  htmlAttrs: { lang: i18nHead.value.htmlAttrs!.lang },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
});
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
