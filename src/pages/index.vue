<template>
  <main>Test</main>
</template>

<script setup lang="ts">
import { useHead, useI18n } from '#imports';

// Deps
const { t } = useI18n();

// Data

// Event Handler

// Data Fetching

// Head
const url = 'https://vuesion.herokuapp.com/';
const logo = '/images/vuesion-logo.png';
const title = t('pages.index.title');
const description =
  'Vuesion is a boilerplate that helps product teams build faster than ever with fewer headaches and modern best practices across engineering & design.';

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
