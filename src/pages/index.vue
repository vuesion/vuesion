<template>
  <main>
    <landing-page-header />
    <testimonials :stargazers-count="data?.stargazersCount || 0" :stargazers="data?.stargazers || []" />
    <value-proposition />
    <feature-list />
    <learn-more @login-click="showLoginModal = true" />

    <vue-modal disable-page-scroll :show="showLoginModal" @close="showLoginModal = false">
      <login-form :loading="loginRequestStatus === 'PENDING'" @submit="onLoginSubmit" />
    </vue-modal>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { definePageMeta, useFetch, useHead, useI18n, useLocalePath, useRouter, useSession } from '#imports';
import { RequestStatus } from '~/enums/RequestStatus';
import { addToast } from '~/components/utils';
import LandingPageHeader from '~/components/marketing/LandingPageHeader/LandingPageHeader.vue';
import Testimonials from '~/components/marketing/Testimonials/Testimonials.vue';
import ValueProposition from '~/components/marketing/ValueProposition/ValueProposition.vue';
import FeatureList from '~/components/marketing/FeatureList/FeatureList.vue';
import LearnMore from '~/components/marketing/LearnMore/LearnMore.vue';
import VueModal from '~/components/data-display/VueModal/VueModal.vue';
import LoginForm from '~/components/forms/LoginForm/LoginForm.vue';

// Config
definePageMeta({ auth: false });

// Deps
const { t } = useI18n();
const localePath = useLocalePath();
const { signIn } = useSession();
const { push } = useRouter();

// Data
const showLoginModal = ref(false);
const loginRequestStatus = ref(RequestStatus.INIT);

// Event Handler
const onLoginSubmit = async (formData: { email: string; password: string }) => {
  loginRequestStatus.value = RequestStatus.PENDING;

  try {
    await signIn('credentials', { ...formData, redirect: false });
    loginRequestStatus.value = RequestStatus.IDLE;
    showLoginModal.value = false;
    await push(localePath('/example/dashboard'));
  } catch (e: any) {
    loginRequestStatus.value = RequestStatus.FAILED;
    addToast({ title: 'Error during login', text: e.toString(), type: 'danger' });
    showLoginModal.value = false;
  }
};

// Data Fetching
const { data } = useFetch('/api/github-info');

// Head
const url = 'https://vuesion.herokuapp.com/';
const logo = '/images/vuesion-logo.png';
const title = t('pages.index.title' /* Vuesion - The boilerplate for product teams */);
const description =
  'Vuesion is a boilerplate that helps product teams build faster than ever with fewer headaches and modern best practices across engineering & design.';

useHead({
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
});
</script>
