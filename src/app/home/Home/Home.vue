<template>
  <div :class="$style.home">
    <stage :disable-particles="disableParticles" />
    <dev-ex />
    <enterprise-ready />
    <user-experience />
    <quick-start />
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import Stage from '../Stage/Stage.vue';
import DevEx from '../DevEx/DevEx.vue';
import EnterpriseReady from '../EnterpriseReady/EnterpriseReady.vue';
import UserExperience from '../UserExperience/UserExperience.vue';
import QuickStart from '../QuickStart/QuickStart.vue';
import { IState } from '../../state';

export default {
  metaInfo: {
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
      { name: 'og:image:url', content: 'https://vuesion.herokuapp.com/logo.png' },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@_jwerner_' },
      { name: 'twitter:creator', content: '@_jwerner_' },
      {
        name: 'twitter:title',
        content:
          'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
      },
      { name: 'twitter:url', content: 'https://vuesion.herokuapp.com/' },
      { name: 'twitter:image', content: 'https://vuesion.herokuapp.com/logo.png' },
      {
        name: 'twitter:description',
        content:
          'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
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
  computed: {
    ...mapState({
      disableParticles: (state: IState) => state.app.config && state.app.config.features.disableParticles,
    }),
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.home {
  h2 {
    line-height: 1.2;
  }

  :global {
    .vueCard {
      height: 100%;
      padding: $space-12;
    }

    .vueGridItem {
      margin-bottom: $space-12;
    }

    .featureSection {
      padding: 0;
    }
  }

  @include mediaMin(tabletLandscape) {
    :global {
      .featureSection {
        padding: $space-84 * 2 0;
      }
    }
  }
}
</style>
