<template>
  <vue-stack space="0" as="main">
    <landing-page-hero-section />
    <key-features-section />
    <vuesion-plus-section />
    <benefits-section />
    <testimonials-section />
    <support-section />
  </vue-stack>
</template>

<script setup lang="ts">
import { computed, useHead, useI18n } from '#imports';
import LandingPageHeroSection from '~/components/demo/LandingPageHeroSection/LandingPageHeroSection.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import KeyFeaturesSection from '~/components/demo/KeyFeaturesSection/KeyFeaturesSection.vue';
import BenefitsSection from '~/components/demo/BenefitsSection/BenefitsSection.vue';
import TestimonialsSection from '~/components/demo/TestimonialsSection/TestimonialsSection.vue';
import SupportSection from '~/components/demo/SupportSection/SupportSection.vue';
import VuesionPlusSection from '~/components/demo/VuesionPlusSection/VuesionPlusSection.vue';

// Deps
const { t } = useI18n();

// Data

// Event Handler

// Data Fetching

// Head
const url = 'https://vuesion.herokuapp.com/';
const logo = '/logo.png';
const title = computed(() =>
  t('pages.index.title' /* Vuesion: Your Ultimate Boilerplate for Efficient Product Development */),
);
const description = computed(() =>
  t(
    'pages.index.description' /* Enhance your product team's efficiency with Vuesion. Our boilerplate incorporates the best practices in engineering and design for rapid development. */,
  ),
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
