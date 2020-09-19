<template>
  <div id="app" :class="$style.app">
    <vue-notification-stack />

    <vue-nav-bar>
      <vue-button v-if="isAuthenticated === false" slot="right" color="primary" @click="showLoginModal = true">
        Login
      </vue-button>

      <vue-button v-if="isAuthenticated" slot="right" color="primary" @click="onLogoutClick"> Logout </vue-button>
    </vue-nav-bar>

    <nuxt :class="$style.content" />

    <vue-footer />

    <vue-sidebar>
      <vue-sidebar-group title="Themes">
        <vue-sidebar-group-item>
          <vue-select id="theme" label="Theme" name="theme" :items="themes" :value="theme" @input="onThemeChange" />
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
  </div>
</template>

<script lang="ts">
import '@/assets/global.scss';
import { defineComponent, computed, ref, useContext, useMeta } from '@nuxtjs/composition-api';
import { RequestStatus } from '@/enums/RequestStatus';
import { addNotification } from '@/components/molecules/VueNotificationStack/utils';
import VueNavBar from '@/components/organisms/VueNavBar/VueNavBar.vue';
import VueFooter from '@/components/organisms/VueFooter/VueFooter.vue';
import VueNotificationStack from '@/components/molecules/VueNotificationStack/VueNotificationStack.vue';
import VueSidebar from '@/components/organisms/VueSidebar/VueSidebar.vue';
import VueSidebarGroup from '@/components/organisms/VueSidebar/VueSidebarGroup/VueSidebarGroup.vue';
import VueSidebarGroupItem from '@/components/organisms/VueSidebar/VueSidebarGroupItem/VueSidebarGroupItem.vue';
import VueIconCode from '@/components/atoms/icons/VueIconCode/VueIconCode.vue';
import VueIconBook from '@/components/atoms/icons/VueIconBook/VueIconBook.vue';
import VueIconHashtag from '@/components/atoms/icons/VueIconHashtag/VueIconHashtag.vue';
import VueIconGithub from '@/components/atoms/icons/VueIconGithub/VueIconGithub.vue';
import VueIconTwitterSquare from '@/components/atoms/icons/VueIconTwitterSquare/VueIconTwitterSquare.vue';
import VueSelect from '@/components/atoms/VueSelect/VueSelect.vue';
import VueIconPuzzlePiece from '@/components/atoms/icons/VueIconPuzzlePiece/VueIconPuzzlePiece.vue';
import VueButton from '@/components/atoms/VueButton/VueButton.vue';
import VueModal from '@/components/molecules/VueModal/VueModal.vue';
import LoginForm from '@/components/organisms/LoginForm/LoginForm.vue';

export default defineComponent({
  name: 'App',
  head: {},
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
    VueNavBar,
    VueFooter,
    VueNotificationStack,
  },
  setup() {
    const { store, redirect, app } = useContext();
    const { htmlAttrs } = useMeta();
    const languages = computed(() => [
      { label: 'English', value: 'en' },
      { label: 'Deutsch', value: 'de' },
      { label: 'Português', value: 'pt' },
      { label: '中文', value: 'zh-cn' },
    ]);
    const themes = computed(() => [
      { label: 'Light Theme', value: 'light' },
      { label: 'Dark Theme', value: 'dark' },
    ]);
    const showLoginModal = ref(false);
    const loginRequestStatus = ref(RequestStatus.INIT);
    const locale = computed(() => store.getters['app/locale']);
    const theme = computed(() => store.getters['app/theme']);
    const isAuthenticated = computed(() => store.getters['auth/isAuthenticated']);
    const onLocaleSwitch = (selectedLocale: string) => redirect({ path: app.switchLocalePath(selectedLocale) });
    const onThemeChange = async (selectedTheme: string) => {
      await store.dispatch('app/changeTheme', selectedTheme);
      document.documentElement.className = selectedTheme;
    };
    const onLoginSubmit = async (formData: any) => {
      loginRequestStatus.value = RequestStatus.PENDING;

      try {
        await store.dispatch('auth/createToken', formData);
        redirect({ path: app.localePath('/example/dashboard') });
        loginRequestStatus.value = RequestStatus.IDLE;
      } catch (e) {
        loginRequestStatus.value = RequestStatus.FAILED;
        addNotification({ title: 'Error during login', text: 'Please try again!' });
      }

      showLoginModal.value = false;
    };
    const onLogoutClick = async () => {
      await store.dispatch('auth/revokeToken');
      redirect({ path: app.localePath('/') });
    };

    htmlAttrs.value = {
      class: theme.value,
      lang: locale.value.substr(0, 2),
    };

    return {
      languages,
      themes,
      showLoginModal,
      loginRequestStatus,
      locale,
      theme,
      isAuthenticated,
      onLocaleSwitch,
      onThemeChange,
      onLoginSubmit,
      onLogoutClick,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';
@import '~@/assets/reset';
@import '~@/assets/typo';

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
