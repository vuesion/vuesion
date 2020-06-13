<template>
  <div id="app" :class="$style.app">
    <vue-notification-stack />

    <vue-navigation-progress :is-navigating="isNavigating" />

    <vue-nav-bar>
      <vue-button v-if="isAuthenticated === false" slot="right" color="primary" @click="showLoginModal = true">
        Login
      </vue-button>

      <vue-button v-if="isAuthenticated" slot="right" color="primary" @click="onLogout">
        Logout
      </vue-button>
    </vue-nav-bar>

    <nuxt :class="$style.content" />

    <vue-footer />

    <vue-cookie-consent
      current-version="1.0.0"
      :cookie-consent-version="cookieConsentVersion"
      :set-cookie-consent-version="setCookieConsentVersion"
    >
      This is a cookie consent component which shows the cookie consent every time you change the version of the
      consent.
    </vue-cookie-consent>

    <vue-sidebar>
      <vue-sidebar-group title="Themes">
        <vue-sidebar-group-item>
          <vue-select id="theme" name="theme" :options="themes" :value="theme" @input="themeSwitch" />
        </vue-sidebar-group-item>
      </vue-sidebar-group>

      <vue-sidebar-group title="Languages">
        <vue-sidebar-group-item>
          <vue-select id="lang" name="lang" :options="languages" :value="$i18n.locale" @input="switchLocale" />
        </vue-sidebar-group-item>
      </vue-sidebar-group>

      <vue-sidebar-group title="Navigation">
        <vue-sidebar-group-item to="/">
          <vue-icon-code />
          Home
        </vue-sidebar-group-item>

        <vue-sidebar-group-item :to="{ name: 'counter' }">
          <vue-icon-hashtag />
          VueX Example
        </vue-sidebar-group-item>

        <vue-sidebar-group-item :to="{ name: 'form' }">
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
      <login-form :loading="isLoginPending" @submit="onLoginSubmit" />
    </vue-modal>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
// import { loadLocaleAsync } from '@shared/plugins/i18n/i18n';
import '@/assets/designSystem/global.scss';
import VueNavBar from '@/components/VueNavBar/VueNavBar.vue';
import VueFooter from '@/components/VueFooter/VueFooter.vue';
import VueNotificationStack from '@/components/VueNotificationStack/VueNotificationStack.vue';
import VueCookieConsent from '@/components/VueCookieConsent/VueCookieConsent.vue';
import VueNavigationProgress from '@/components/VueNavigationProgress/VueNavigationProgress.vue';
import VueSidebar from '@/components/VueSidebar/VueSidebar.vue';
import VueSidebarGroup from '@/components/VueSidebar/VueSidebarGroup/VueSidebarGroup.vue';
import VueSidebarGroupItem from '@/components/VueSidebar/VueSidebarGroupItem/VueSidebarGroupItem.vue';
import VueIconCode from '@/components/icons/VueIconCode/VueIconCode.vue';
import VueIconBook from '@/components/icons/VueIconBook/VueIconBook.vue';
import VueIconHashtag from '@/components/icons/VueIconHashtag/VueIconHashtag.vue';
import VueIconGithub from '@/components/icons/VueIconGithub/VueIconGithub.vue';
import VueIconTwitterSquare from '@/components/icons/VueIconTwitterSquare/VueIconTwitterSquare.vue';
import VueSelect from '@/components/VueSelect/VueSelect.vue';
import VueIconPuzzlePiece from '@/components/icons/VueIconPuzzlePiece/VueIconPuzzlePiece.vue';
import VueButton from '@/components/VueButton/VueButton.vue';
import VueModal from '@/components/VueModal/VueModal.vue';
import LoginForm from '@/components/auth/LoginForm/LoginForm.vue';
import { addNotification } from '@/components/VueNotificationStack/utils';

export default {
  name: 'App',
  components: {
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
    VueNavigationProgress,
    VueCookieConsent,
    VueNavBar,
    VueFooter,
    VueNotificationStack,
  },
  data(): any {
    return {
      isNavigating: false,
      languages: [
        { label: 'English', value: 'en' },
        { label: 'Deutsch', value: 'de' },
        { label: 'Português', value: 'pt' },
        { label: '中文', value: 'zh-cn' },
      ],
      showLoginModal: false,
      isLoginPending: false,
      themes: [
        { label: 'Light Theme', value: 'light' },
        { label: 'Dark Theme', value: 'dark' },
      ],
    };
  },
  computed: {
    ...mapGetters(['cookieConsentVersion', 'getLocale', 'theme']),
    ...mapGetters('auth', ['isAuthenticated']),
  },
  // created() {
  //   this.initProgressBar();
  // },
  methods: {
    ...mapActions(['changeLocale', 'setCookieConsentVersion', 'changeTheme']),
    ...mapActions('auth', ['createToken', 'revokeToken']),
    switchLocale(locale: string) {
      this.$router.push({
        path: this.switchLocalePath(locale),
      });
    },
    themeSwitch(theme: string) {
      this.changeTheme(theme);
      document.documentElement.className = theme;
    },
    // initProgressBar() {
    //   this.$router.beforeEach((to: any, from: any, next: any) => {
    //     this.isNavigating = true;
    //     next();
    //   });
    //   this.$router.afterEach(() => {
    //     this.isNavigating = false;
    //   });
    // },
    async onLoginSubmit(formData: any) {
      this.isLoginPending = true;

      try {
        await this.createToken(formData);

        this.$router.push({ path: this.localePath('/dashboard') });
      } catch (e) {
        addNotification({ title: 'Error during login', text: 'Please try again!' });
      }

      this.isLoginPending = false;
      this.showLoginModal = false;
    },
    async onLogout() {
      this.isLoginPending = true;

      await this.revokeToken();
      this.$router.push({ path: this.localePath('/') });

      this.isLoginPending = false;
      this.showLoginModal = false;
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/assets/design-system';
@import '~@/assets/designSystem/reset';
@import '~@/assets/designSystem/typo';

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
