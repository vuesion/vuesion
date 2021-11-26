<template>
  <div>
    <landing-page-header />
    <testimonials :stargazers-count="stargazersCount" :stargazers="stargazers" />
    <value-proposition />
    <feature-list />
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
import LoginForm from '@/components/forms/LoginForm/LoginForm.vue';
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api';
import { RequestStatus } from '@/enums/RequestStatus';
import { addToast } from '@/components/utils';
import FeatureList from '@/components/marketing/FeatureList/FeatureList.vue';

export default defineComponent({
  name: 'HomePage',
  auth: false,
  components: { FeatureList, LoginForm, VueModal, LearnMore, ValueProposition, Testimonials, LandingPageHeader },
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
    const url = 'https://vuesion.herokuapp.com/';
    const logo = '/images/vuesion-logo.png';
    const title = 'Vuesion - The boilerplate for product teams';
    const description =
      'Vuesion is a boilerplate that helps product teams build faster than ever with fewer headaches and modern best practices across engineering & design.';

    return {
      title,
      meta: [
        {
          name: 'description',
          content: description,
        },
        {
          name: 'robots',
          content: 'INDEX,FOLLOW',
        },
        {
          name: 'keywords',
          content:
            'vue.js, vuex, vuex-persist, nuxt.js, seo, server-side-rendering, progressive-web-app, design-system, best practices',
        },

        { name: 'og:url', content: url },
        { name: 'og:site_name', content: 'vuesion' },
        { name: 'og:type', content: 'website' },
        { name: 'og:locale', content: 'en' },
        {
          name: 'og:title',
          content: title,
        },
        {
          name: 'og:description',
          content: description,
        },
        { name: 'og:image:url', content: logo },

        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@vuesion1' },
        { name: 'twitter:creator', content: '@vuesion1' },
        {
          name: 'twitter:title',
          content: title,
        },
        { name: 'twitter:url', content: url },
        { name: 'twitter:image', content: logo },
        {
          name: 'twitter:description',
          content: description,
        },
      ],
    };
  },
});
</script>
