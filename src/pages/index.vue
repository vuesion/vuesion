<template>
  <div>
    <landing-page-header />
    <testimonials :stargazers-count="stargazersCount" :stargazers="stargazers" />
    <value-proposition />
    <learn-more @login-click="showLoginModal = true" />

    <vue-modal disable-page-scroll :show="showLoginModal" @close="showLoginModal = false">
      <login-form :loading="loginRequestStatus === 'PENDING'" @submit="onLoginSubmit" />
    </vue-modal>
  </div>
</template>

<script lang="ts">
/* istanbul ignore file */
import LandingPageHeader from '@/components/marketing/LandingPageHeader/LandingPageHeader.vue';
import Testimonials from '@/components/marketing/Testimonials/Testimonials.vue';
import { Context } from '@nuxt/types';
import ValueProposition from '@/components/marketing/ValueProposition/ValueProposition.vue';
import LearnMore from '@/components/marketing/LearnMore/LearnMore.vue';
import VueModal from '@/components/data-display/VueModal/VueModal.vue';
import LoginForm from '@/components/input-and-actions/LoginForm/LoginForm.vue';
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api';
import { RequestStatus } from '@/enums/RequestStatus';
import { addToast } from '@/components/utils';

export default defineComponent({
  name: 'HomePage',
  auth: false,
  components: { LoginForm, VueModal, LearnMore, ValueProposition, Testimonials, LandingPageHeader },
  setup() {
    const { redirect, app } = useContext();
    const showLoginModal = ref(false);
    const loginRequestStatus = ref(RequestStatus.INIT);
    const onLoginSubmit = async (formData: any) => {
      loginRequestStatus.value = RequestStatus.PENDING;

      try {
        await app.$auth.loginWith('local', { data: formData });
        redirect('/example/dashboard');
        loginRequestStatus.value = RequestStatus.IDLE;
      } catch (e) {
        loginRequestStatus.value = RequestStatus.FAILED;
        addToast({ title: 'Error during login', text: 'Please try again!', type: 'danger' });
      }

      showLoginModal.value = false;
    };

    return {
      showLoginModal,
      loginRequestStatus,
      onLoginSubmit,
    };
  },
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
});
</script>
