<template>
  <vue-stack space="0" as="main" :class="$style.page">
    <services-hero-section />
  </vue-stack>
</template>

<script setup lang="ts">
import { useHead, useI18n } from '#imports';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import ServicesHeroSection from '~/components/demo/ServicesHeroSection/ServicesHeroSection.vue';

// Deps
const { t } = useI18n();

// Config

// Data

// Event Handler

// Data fetching

// Head
const url = 'https://vuesion.herokuapp.com/';
const logo = '/logo.png';
const title = t(
  'pages.services.index.title' /* Vuesion Services: Expert Consulting, Prototyping, and MVP Development */,
);
const description = t(
  'pages.services.index.description' /* Unlock your project's potential with Vuesion Services. We offer expert consulting, rapid prototyping, PoCs, and MVP development to accelerate your success. */,
);

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { name: 'robots', content: 'INDEX,FOLLOW' },
    { name: 'og:url', content: url },
    { name: 'og:site_name', content: 'vuesion' },
    { name: 'og:type', content: 'website' },
    { name: 'og:locale', content: 'en' },
    { name: 'og:title', content: title },
    { name: 'og:description', content: description },
    { name: 'og:image:url', content: logo },
  ],
});
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.page {
  // this class is only applied if you add css properties
}
</style>
