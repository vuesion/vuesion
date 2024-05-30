<template>
  <div id="app" :class="$style.app">
    <slot />

    <vue-footer
      :languages="languages"
      :themes="themes"
      :selected-locale="locale"
      slim
      @locale-change="onLocaleChange"
    />
    <vue-back-to-top />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import VueBackToTop from '../components/behavior/VueBackToTop/VueBackToTop.vue';
import VueFooter from '../components/navigation/VueFooter/VueFooter.vue';
import { useHead } from '#imports';
import { useI18n, useLocaleHead, useSwitchLocalePath } from '#i18n';
import type { IItem } from '~/interfaces/IItem';

// Deps
const { locale, setLocale } = useI18n();
const { push } = useRouter();
const i18nHead = useLocaleHead();
const switchLocalePath = useSwitchLocalePath();

// Config
useHead({
  htmlAttrs: { lang: locale.value },
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

// Event Handler
const onLocaleChange = async (newLocale: IItem) => {
  await setLocale(newLocale.value);
  await push(switchLocalePath(newLocale.value));
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
