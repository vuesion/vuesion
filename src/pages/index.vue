<template>
  <div>
    <landing-page-header />
    <testimonials :stargazers-count="stargazersCount" :stargazers="stargazers" />
  </div>
</template>

<script lang="ts">
/* istanbul ignore file */
import LandingPageHeader from '@/components/marketing/LandingPageHeader/LandingPageHeader.vue';
import Testimonials from '@/components/marketing/Testimonials/Testimonials.vue';
import { Context } from '@nuxt/types';

export default {
  name: 'HomePage',
  auth: false,
  components: { Testimonials, LandingPageHeader },
  async asyncData(ctx: Context): Promise<any> {
    const res = await ctx.$axios.get('/github-info');

    return {
      stargazersCount: res.data.stargazersCount,
      stargazers: res.data.stargazers,
    };
  },
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
