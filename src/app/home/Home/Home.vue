<template>
  <div>
    <stage />

    <vue-grid>
      <vue-grid-item fill>
        <h1>{{ $t('App.nav.home') }}</h1>
      </vue-grid-item>

      <vue-grid-item fill>
        <div v-for="item in home">
          <p>{{item.title}}</p>
        </div>
      </vue-grid-item>
    </vue-grid>
  </div>
</template>

<script lang="ts">
  import { mapGetters } from 'vuex';
  import VueGrid from '../../shared/components/VueGrid/VueGrid';
  import VueGridItem from '../../shared/components/VueGridItem/VueGridItem';
  import Stage from '../Stage/Stage'

  export default {
    metaInfo: {
      title: 'vue-starter - an enterprise ready boilerplate for isomorphic, progressive web apps',
      meta: [
        { name: 'description', content: 'an enterprise ready boilerplate for isomorphic, progressive web apps' },
        { name: 'keywords', content: 'vue.js, vuex, seo, server-side-rendering, isomorphic, progressive-web-app' },

        { name: 'og:url', content: 'https://vue-starter.herokuapp.com/' },
        { name: 'og:site_name', content: 'vue-starter' },
        { name: 'og:type', content: 'website' },
        { name: 'og:locale', content: 'en' },
        { name: 'og:title', content: 'vue-starter - an enterprise ready boilerplate for isomorphic, progressive web apps' },
        { name: 'og:description', content: 'an enterprise ready boilerplate for isomorphic, progressive web apps' },
        { name: 'og:image:url', content: 'https://vue-starter.herokuapp.com/assets/logo.png' },

        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@_jwerner_' },
        { name: 'twitter:creator', content: '@_jwerner_' },
        { name: 'twitter:title', content: 'vue-starter - an enterprise ready boilerplate for isomorphic, progressive web apps' },
        { name: 'twitter:url', content: 'https://vue-starter.herokuapp.com/' },
        { name: 'twitter:image', content: 'https://vue-starter.herokuapp.com/assets/logo.png' },
        { name: 'twitter:description', content: 'vue-starter - an enterprise ready boilerplate for isomorphic, progressive web apps' },
      ],
    },
    components: {
      VueGrid,
      VueGridItem,
      Stage,
    },
    computed: {
      ...mapGetters({
        home: 'getHome',
      }),
    },
    prefetch: ({ store }: any) => {
      return store.dispatch(`getHome`);
    },
  };
</script>

<style lang="scss" module>
  @import "../../shared/variables";
</style>
