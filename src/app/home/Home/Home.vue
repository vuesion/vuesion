<template>
  <div :class="$style.home">
    <stage />
    <dev-ex />
    <enterprise-ready />
    <user-experience />
    <quick-start />
  </div>
</template>

<script lang="ts">
  import Stage           from '../Stage/Stage';
  import DevEx           from '../DevEx/DevEx';
  import EnterpriseReady from '../EnterpriseReady/EnterpriseReady';
  import UserExperience  from '../UserExperience/UserExperience';
  import QuickStart      from '../QuickStart/QuickStart';

  export default {
    metaInfo:   {
      title: 'vue-starter - flexible, scalable, opinionated, fast',
      meta:  [
        {
          name:    'description',
          content: 'vue-starter - A flexible, scalable, opinionated boilerplate for production-ready PWAs with focus on performance, development speed, and best practices',
        },
        {
          name:    'robots',
          content: 'INDEX,FOLLOW',
        },
        {
          name:    'keywords',
          content: 'vue.js, vuex, vuex-persist, seo, server-side-rendering, isomorphic, progressive-web-app',
        },

        { name: 'og:url', content: 'https://vue-starter.herokuapp.com/' },
        { name: 'og:site_name', content: 'vue-starter' },
        { name: 'og:type', content: 'website' },
        { name: 'og:locale', content: 'en' },
        {
          name:    'og:title',
          content: 'vue-starter - A flexible, scalable, opinionated boilerplate for production-ready PWAs with focus on performance, development speed, and best practices',
        },
        {
          name:    'og:description',
          content: 'vue-starter - A flexible, scalable, opinionated boilerplate for production-ready PWAs with focus on performance, development speed, and best practices',
        },
        { name: 'og:image:url', content: 'https://vue-starter.herokuapp.com/logo.png' },

        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@_jwerner_' },
        { name: 'twitter:creator', content: '@_jwerner_' },
        {
          name:    'twitter:title',
          content: 'vue-starter - A flexible, scalable, opinionated boilerplate for production-ready PWAs with focus on performance, development speed, and best practices',
        },
        { name: 'twitter:url', content: 'https://vue-starter.herokuapp.com/' },
        { name: 'twitter:image', content: 'https://vue-starter.herokuapp.com/logo.png' },
        {
          name:    'twitter:description',
          content: 'vue-starter - A flexible, scalable, opinionated boilerplate for production-ready PWAs with focus on performance, development speed, and best practices',
        },
      ],
    },
    components: {
      Stage,
      DevEx,
      EnterpriseReady,
      UserExperience,
      QuickStart,
    },
    computed:   {},
  };
</script>

<style lang="scss" module>
  @import "../../shared/styles";

  .home {
    h2 {
      text-shadow: 0 5px 10px rgba(0, 0, 0, 0.33);
    }

    :global {
      .vuePanel {
        height: 100%;
      }

      .vueGridItem {
        margin-bottom: $space-unit * 2;
      }

      .featureSection {
        padding: 0;
      }
    }

    @include media(tabletLandscape) {
      :global {
        .featureSection {
          padding: $space-unit * 15 0;
        }
      }
    }
  }
</style>
