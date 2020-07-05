<template>
  <div>
    <stage :disable-particles="disableParticles" />
    <home-section
      image="https://images.unsplash.com/photo-1549082984-1323b94df9a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512&q=60"
      alternative
    >
      <vue-grid with-vertical-space>
        <vue-grid-row>
          <vue-grid-column>
            <vue-headline level="2">Developer Experience</vue-headline>
          </vue-grid-column>
        </vue-grid-row>

        <vue-grid-row>
          <vue-grid-column>
            <vue-headline level="3">Quick scaffolding</vue-headline>
            <p>Create components, VueX connected components, modules - and their tests - right from the CLI!</p>
          </vue-grid-column>
        </vue-grid-row>

        <vue-grid-row>
          <vue-grid-column>
            <vue-headline level="3">Instant feedback</vue-headline>
            <p>
              Enjoy the best DX (Developer eXperience) and code your app at the speed of thought! Your saved changes to
              the CSS and TypeScript are reflected instantaneously without refreshing the page or restarting your
              server. Preserve application state even when you update something in the underlying code!
            </p>
          </vue-grid-column>
        </vue-grid-row>

        <vue-grid-row>
          <vue-grid-column>
            <vue-headline level="3">Tons of use-cases</vue-headline>
            <p>
              e.g. HttpService with interceptors, vuex persist middleware, redirect scenarios, configs for different
              environments, etc.
            </p>
          </vue-grid-column>
        </vue-grid-row>
      </vue-grid>
    </home-section>

    <home-section
      image="https://images.unsplash.com/photo-1521790361543-f645cf042ec4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512&q=60"
      flip
    >
      <vue-grid with-vertical-space>
        <vue-grid-row>
          <vue-grid-column>
            <vue-headline level="2">Enterprise ready</vue-headline>
          </vue-grid-column>
        </vue-grid-row>
        <vue-grid-row>
          <vue-grid-column>
            <vue-headline level="3">SEO</vue-headline>
            <p>
              We support SEO (document head tags management) and server-side-rendering for search engines that support
              indexing of JavaScript content. (eg. Google)
            </p>
          </vue-grid-column>
        </vue-grid-row>
        <vue-grid-row>
          <vue-grid-column>
            <vue-headline level="3">Best practices</vue-headline>
            <p>
              A Common style guide, TypeScript, and the best test setup: Automatically guarantee code quality and
              non-breaking changes.
            </p>
          </vue-grid-column>
        </vue-grid-row>
        <vue-grid-row>
          <vue-grid-column>
            <vue-headline level="3">i18n</vue-headline>
            <p>
              Scalable apps need to support multiple languages, easily add and support multiple languages with vue-i18n.
            </p>
          </vue-grid-column>
        </vue-grid-row>
      </vue-grid>
    </home-section>

    <home-section
      image="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512&q=60"
      alternative
    >
      <vue-grid with-vertical-space>
        <vue-grid-row>
          <vue-grid-column>
            <vue-headline level="2">User experience</vue-headline>
          </vue-grid-column>
        </vue-grid-row>
        <vue-grid-row>
          <vue-grid-column>
            <vue-headline level="3">Animations</vue-headline>
            <p>
              A stable animations set up already included (<a href="http://animejs.com/" target="_blank" rel="noopener"
                >anime.js</a
              >).
            </p>
          </vue-grid-column>
        </vue-grid-row>
        <vue-grid-row>
          <vue-grid-column>
            <vue-headline level="3">Progressive-Web-App</vue-headline>
            <p>
              Offline-first support with service-workers and a lighthouse score as high as possible (90+).
            </p>
          </vue-grid-column>
        </vue-grid-row>
        <vue-grid-row>
          <vue-grid-column>
            <vue-headline level="3">Design System</vue-headline>
            <p>
              Includes a blueprint for a 100% customizable Design System with a huge amount of
              <a href="/storybook" target="_blank" rel="noopener">components</a>.
            </p>
          </vue-grid-column>
        </vue-grid-row>
      </vue-grid>
    </home-section>

    <home-section
      image="https://images.unsplash.com/photo-1516381548400-349d680edb56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512&q=60"
      flip
    >
      <vue-grid with-vertical-space>
        <vue-grid-row>
          <vue-grid-column>
            <vue-headline level="2">Quick start</vue-headline>
          </vue-grid-column>
        </vue-grid-row>
        <vue-grid-row>
          <vue-grid-column>
            <vue-headline level="3"> Via <code>npx</code> </vue-headline>
            <br />
            <ol>
              <li>
                Run <code>npx @vuesion/create [project-name]</code><br />
                for example <code>npx @vuesion/create my-app</code>
              </li>
              <li>Change directory <code>cd my-app</code></li>
              <li>Run <code>npm run dev</code></li>
            </ol>
          </vue-grid-column>
        </vue-grid-row>
        <vue-grid-row>
          <vue-grid-column>
            <vue-headline level="3">Via Git</vue-headline>
            <br />
            <ol>
              <li>
                Download or clone (<code>git clone https://github.com/<br />vuesion/vuesion</code>) the repository
              </li>
              <li>Change directory <code>cd vuesion</code></li>
              <li>Install dependencies: <code>npm install</code></li>
              <li>Run <code>npm run dev</code></li>
            </ol>
          </vue-grid-column>
        </vue-grid-row>
      </vue-grid>
    </home-section>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import Stage from '../components/home/Stage/Stage.vue';
import HomeSection from '@/components/home/HomeSection/HomeSection.vue';
import VueHeadline from '@/components/shared/VueHeadline/VueHeadline.vue';
import VueGrid from '@/components/shared/VueGrid/VueGrid.vue';
import VueGridRow from '@/components/shared/VueGrid/VueGridRow/VueGridRow.vue';
import VueGridColumn from '@/components/shared/VueGrid/VueGridColumn/VueGridColumn.vue';
import { IState } from '@/store/IState';

export default {
  components: {
    VueGridColumn,
    VueGridRow,
    VueGrid,
    VueHeadline,
    HomeSection,
    Stage,
  },
  computed: {
    ...mapState({
      disableParticles: (state: IState) =>
        (state.app.config && state.app.config.features && state.app.config.features.disableParticles) || false,
    }),
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
        { name: 'og:image:url', content: 'https://vuesion.herokuapp.com/logo.png' },

        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@vuesion1' },
        { name: 'twitter:creator', content: '@vuesion1' },
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
    };
  },
};
</script>
