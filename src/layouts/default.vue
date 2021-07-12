<template>
  <div id="app" :class="$style.app">
    <vue-notification-stack />

    <vue-nav-bar>
      <template v-if="user" slot="middle"> Hello, {{ user.name }}! </template>

      <vue-button v-if="!loggedIn" slot="right" look="primary" @click="showLoginModal = true"> Login </vue-button>

      <vue-button v-if="loggedIn" slot="right" look="primary" @click="onLogoutClick"> Logout </vue-button>
    </vue-nav-bar>

    <nuxt :class="$style.content" />

    <vue-footer />

    <vue-sidebar>
      <vue-sidebar-group title="Themes">
        <vue-sidebar-group-item>
          <vue-select
            id="theme"
            label="Theme"
            name="theme"
            :items="themes"
            :value="$colorMode.value"
            @input="$colorMode.preference = $event"
          />
        </vue-sidebar-group-item>
      </vue-sidebar-group>

      <vue-sidebar-group title="Languages">
        <vue-sidebar-group-item>
          <vue-select
            id="lang"
            label="Languages"
            name="lang"
            :items="languages"
            :value="$i18n.locale"
            @input="onLocaleSwitch"
          />
        </vue-sidebar-group-item>
      </vue-sidebar-group>

      <vue-sidebar-group title="Navigation">
        <vue-sidebar-group-item to="/">
          <vue-icon-code />
          Home
        </vue-sidebar-group-item>

        <vue-sidebar-group-item :to="{ name: 'example-counter' }">
          <vue-icon-hashtag />
          VueX Example
        </vue-sidebar-group-item>

        <vue-sidebar-group-item :to="{ name: 'example-apollo' }">
          <vue-icon-hashtag />
          Apollo Example
        </vue-sidebar-group-item>

        <vue-sidebar-group-item :to="{ name: 'example-form' }">
          <vue-icon-hashtag />
          Form Example
        </vue-sidebar-group-item>
      </vue-sidebar-group>

      <vue-sidebar-group title="Documentation">
        <vue-sidebar-group-item>
          <a href="https://vuesion.github.io/docs/en/">
            <vue-icon-book />
            Documentation
          </a>
        </vue-sidebar-group-item>

        <vue-sidebar-group-item>
          <a href="/storybook/?path=/story/design-system-design-system--intro">
            <vue-icon-book />
            Design System
          </a>
        </vue-sidebar-group-item>

        <vue-sidebar-group-item>
          <a href="/storybook/?path=/story/atoms-badge--badge-variants">
            <vue-icon-puzzle-piece />
            Components
          </a>
        </vue-sidebar-group-item>
      </vue-sidebar-group>

      <vue-sidebar-group title="Community">
        <vue-sidebar-group-item>
          <a href="https://github.com/vuesion/vuesion" target="_blank" rel="noopener">
            <vue-icon-github />
            Github
          </a>
        </vue-sidebar-group-item>

        <vue-sidebar-group-item>
          <a href="https://discord.gg/59x5cg2" target="_blank" rel="noopener"> Discord </a>
        </vue-sidebar-group-item>

        <vue-sidebar-group-item>
          <a href="https://slack-vuesion.herokuapp.com/" target="_blank" rel="noopener"> Slack </a>
        </vue-sidebar-group-item>

        <vue-sidebar-group-item>
          <a href="https://chat.vuejs.org/" target="_blank" rel="noopener"> VueLand </a>
        </vue-sidebar-group-item>

        <vue-sidebar-group-item>
          <a href="https://twitter.com/vuesion1" target="_blank" rel="noopener">
            <vue-icon-twitter-square />
            Twitter
          </a>
        </vue-sidebar-group-item>
      </vue-sidebar-group>
    </vue-sidebar>

    <vue-modal :show="showLoginModal" @close="showLoginModal = false">
      <login-form :loading="loginRequestStatus === 'PENDING'" @submit="onLoginSubmit" />
    </vue-modal>

    <vue-back-to-top />
  </div>
</template>

<script lang="ts">
import '@/assets/global.scss';
import { defineComponent, computed, ref, useContext, useMeta, watch } from '@nuxtjs/composition-api';
import { RequestStatus } from '@/enums/RequestStatus';
import { addNotification } from '@/components/molecules/VueNotificationStack/utils';
import VueNavBar from '@/components/organisms/VueNavBar/VueNavBar.vue';
import VueFooter from '@/components/organisms/VueFooter/VueFooter.vue';
import VueNotificationStack from '@/components/molecules/VueNotificationStack/VueNotificationStack.vue';
import VueSidebar from '@/components/organisms/VueSidebar/VueSidebar.vue';
import VueSidebarGroup from '@/components/organisms/VueSidebar/VueSidebarGroup/VueSidebarGroup.vue';
import VueSidebarGroupItem from '@/components/organisms/VueSidebar/VueSidebarGroupItem/VueSidebarGroupItem.vue';
import VueIconCode from '@/components/icons/VueIconCode/VueIconCode.vue';
import VueIconBook from '@/components/icons/VueIconBook/VueIconBook.vue';
import VueIconHashtag from '@/components/icons/VueIconHashtag/VueIconHashtag.vue';
import VueIconGithub from '@/components/icons/VueIconGithub/VueIconGithub.vue';
import VueIconTwitterSquare from '@/components/icons/VueIconTwitterSquare/VueIconTwitterSquare.vue';
import VueSelect from '@/components/input-and-actions/VueSelect/VueSelect.vue';
import VueIconPuzzlePiece from '@/components/icons/VueIconPuzzlePiece/VueIconPuzzlePiece.vue';
import VueButton from '@/components/input-and-actions/VueButton/VueButton.vue';
import VueModal from '@/components/molecules/VueModal/VueModal.vue';
import LoginForm from '@/components/organisms/LoginForm/LoginForm.vue';
import { useLocaleSwitch } from '@/composables/use-locale-switch';
import VueBackToTop from '@/components/molecules/VueBackToTop/VueBackToTop.vue';

export default defineComponent({
  name: 'App',
  components: {
    VueBackToTop,
    LoginForm,
    VueModal,
    VueButton,
    VueIconPuzzlePiece,
    VueSelect,
    VueIconTwitterSquare,
    VueIconGithub,
    VueIconHashtag,
    VueIconBook,
    VueIconCode,
    VueSidebarGroupItem,
    VueSidebarGroup,
    VueSidebar,
    VueNavBar,
    VueFooter,
    VueNotificationStack,
  },
  setup() {
    const { redirect, app } = useContext();
    const { htmlAttrs } = useMeta();
    const { switchLocaleTo } = useLocaleSwitch(app.i18n);
    const languages = computed(() => [
      { label: 'English', value: 'en' },
      { label: 'Deutsch', value: 'de' },
    ]);
    const themes = computed(() => [
      { label: 'System', value: 'system' },
      { label: 'Light', value: 'light' },
      { label: 'Dark', value: 'dark' },
    ]);
    const showLoginModal = ref(false);
    const loginRequestStatus = ref(RequestStatus.INIT);
    const locale = computed(() => app.i18n.locale);
    const loggedIn = computed(() => app.$auth.loggedIn);
    const user = computed(() => app.$auth.user);
    const onLocaleSwitch = (selectedLocale: string) => {
      switchLocaleTo(selectedLocale);
    };
    const onLoginSubmit = async (formData: any) => {
      loginRequestStatus.value = RequestStatus.PENDING;

      try {
        await app.$auth.loginWith('local', { data: formData });
        redirect('/example/dashboard');
        loginRequestStatus.value = RequestStatus.IDLE;
      } catch (e) {
        loginRequestStatus.value = RequestStatus.FAILED;
        addNotification({ title: 'Error during login', text: 'Please try again!' });
      }

      showLoginModal.value = false;
    };
    const onLogoutClick = async () => {
      await app.$auth.logout();
      redirect('/');
    };

    watch(
      [locale],
      () => {
        htmlAttrs.value = {
          lang: locale.value.substr(0, 2),
        };
      },
      { immediate: true },
    );

    return {
      languages,
      themes,
      showLoginModal,
      loginRequestStatus,
      locale,
      loggedIn,
      user,
      onLocaleSwitch,
      onLoginSubmit,
      onLogoutClick,
    };
  },
  head: {},
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';
@import '~@/assets/reset';
@import '~@/assets/typography';

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
}

.logo {
  position: relative;
  top: $space-4;
  width: $space-24;
  height: $space-24;
  color: $nav-bar-color;
}
</style>
