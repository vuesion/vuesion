<template>
  <div>
    <landing-page-header />
  </div>
</template>

<script lang="ts">
/* istanbul ignore file */
import LandingPageHeader from '@/components/data-display/LandingPageHeader/LandingPageHeader.vue';

export default {
  name: 'HomePage',
  auth: false,
  components: { LandingPageHeader },
  head() {
    return {
      title: 'vuesion - flexible, scalable, opinionated, fast',
      meta: [
        {
          name: 'description',
          content:
            'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
        },
        {
          name: 'robots',
          content: 'INDEX,FOLLOW',
        },
        {
          name: 'keywords',
          content: 'vue.js, vuex, vuex-persist, seo, server-side-rendering, isomorphic, progressive-web-app',
        },

        { name: 'og:url', content: 'https://vuesion.herokuapp.com/' },
        { name: 'og:site_name', content: 'vuesion' },
        { name: 'og:type', content: 'website' },
        { name: 'og:locale', content: 'en' },
        {
          name: 'og:title',
          content:
            'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
        },
        {
          name: 'og:description',
          content:
            'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
        },
        { name: 'og:image:url', content: '/images/vuesion-logo.png' },

        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@vuesion1' },
        { name: 'twitter:creator', content: '@vuesion1' },
        {
          name: 'twitter:title',
          content:
            'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
        },
        { name: 'twitter:url', content: 'https://vuesion.herokuapp.com/' },
        { name: 'twitter:image', content: '/images/vuesion-logo.png' },
        {
          name: 'twitter:description',
          content:
            'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
        },
      ],
    };
  },
};
</script>
