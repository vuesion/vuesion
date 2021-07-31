<template>
  <div id="app" :class="$style.app">
    <vue-toast />

    <vue-navbar :user-name="user && user.name" @menu-item-click="onLogoutClick" @menu-click="showSidebar = true">
      <template v-if="user" slot="center"> Hello, {{ user.name }}! </template>

      <vue-button v-if="!loggedIn" slot="right" look="outline" size="sm" @click="showLoginModal = true">
        Login
      </vue-button>
    </vue-navbar>

    <nuxt :class="$style.content" />

    <vue-footer slim />

    <vue-sidebar ref="sidebarRef" :class="[$style.sidebar, showSidebar && $style.show]">
      <vue-sidebar-group name="Language & Theme" as="div">
        <vue-select
          id="theme"
          label="Theme"
          name="theme"
          :items="themes"
          :value="$colorMode.value"
          @input="$colorMode.preference = $event.value"
        />
        <vue-select
          id="lang"
          label="Language"
          name="lang"
          hide-description
          :items="languages"
          :value="$i18n.locale"
          @input="onLocaleSwitch"
        />
      </vue-sidebar-group>

      <vue-sidebar-group name="Navigation">
        <vue-sidebar-group-item name="Home" leading-icon="home" to="/" />
        <vue-sidebar-group-item name="Vuex Example" leading-icon="eye" :to="{ name: 'example-counter' }" />
        <vue-sidebar-group-item name="Apollo Example" leading-icon="eye" :to="{ name: 'example-apollo' }" />
        <vue-sidebar-group-item name="Form Example" leading-icon="eye" :to="{ name: 'example-form' }" />
      </vue-sidebar-group>

      <vue-sidebar-group name="Documentation">
        <vue-sidebar-group-item name="Documentation" leading-icon="book" href="https://vuesion.github.io/docs/en/" />
        <vue-sidebar-group-item
          name="Design System"
          leading-icon="star"
          href="/storybook/?path=/story/design-system-design-system--intro"
        />
        <vue-sidebar-group-item
          name="Components"
          leading-icon="package"
          href="/storybook/?path=/story/atoms-badge--badge-variants"
        />
      </vue-sidebar-group>

      <vue-sidebar-group name="Community">
        <vue-sidebar-group-item name="Github" leading-icon="github" href="https://github.com/vuesion/vuesion" />
        <vue-sidebar-group-item name="Discord" leading-icon="chat" href="https://discord.gg/59x5cg2" />
        <vue-sidebar-group-item name="Twitter" leading-icon="twitter" href="https://twitter.com/vuesion1" />
      </vue-sidebar-group>
    </vue-sidebar>

    <vue-modal disable-page-scroll :show="showLoginModal" @close="showLoginModal = false">
      <login-form :loading="loginRequestStatus === 'PENDING'" @submit="onLoginSubmit" />
    </vue-modal>

    <vue-back-to-top />
  </div>
</template>

<script lang="ts">
import '@/assets/global.scss';
import { defineComponent, computed, ref, useContext, useMeta, watch } from '@nuxtjs/composition-api';
import { RequestStatus } from '@/enums/RequestStatus';
import VueNavbar from '@/components/navigation/VueNavbar/VueNavbar.vue';
import VueFooter from '@/components/navigation/VueFooter/VueFooter.vue';
import VueSidebar from '@/components/navigation/VueSidebar/VueSidebar.vue';
import VueToast from '@/components/data-display/VueToast/VueToast.vue';
import VueSidebarGroup from '@/components/navigation/VueSidebar/VueSidebarGroup.vue';
import VueSidebarGroupItem from '@/components/navigation/VueSidebar/VueSidebarGroupItem.vue';
import VueSelect from '@/components/input-and-actions/VueSelect/VueSelect.vue';
import VueButton from '@/components/input-and-actions/VueButton/VueButton.vue';
import VueModal from '@/components/data-display/VueModal/VueModal.vue';
import LoginForm from '@/components/input-and-actions/LoginForm/LoginForm.vue';
import { useLocaleSwitch } from '@/composables/use-locale-switch';
import VueBackToTop from '@/components/behavior/VueBackToTop/VueBackToTop.vue';
import { IItem } from '@/interfaces/IItem';
import { addToast } from '@/components/utils';
import { getDomRef } from '@/composables/get-dom-ref';
import { useOutsideClick } from '@/composables/use-outside-click';
import { useKeydown } from '@/composables/use-keydown';

export default defineComponent({
  name: 'App',
  components: {
    VueBackToTop,
    LoginForm,
    VueModal,
    VueButton,
    VueSelect,
    VueSidebarGroupItem,
    VueSidebarGroup,
    VueSidebar,
    VueNavbar,
    VueFooter,
    VueToast,
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
    const onLocaleSwitch = (selectedLocale: IItem) => {
      switchLocaleTo(selectedLocale.value);
    };
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
    const onLogoutClick = async (menuItem: IItem) => {
      if (menuItem.value === 'logout') {
        await app.$auth.logout();
        redirect('/');
      }
    };
    const sidebarRef = getDomRef(null);
    const showSidebar = ref(false);
    const { onKeydown } = useKeydown();

    watch(
      [locale],
      () => {
        htmlAttrs.value = {
          lang: locale.value.substr(0, 2),
        };
      },
      { immediate: true },
    );

    useOutsideClick(sidebarRef, () => (showSidebar.value = false));

    onKeydown((event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        showSidebar.value = false;
      }
    });

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
      sidebarRef,
      showSidebar,
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

  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    transition: transform var(--brand-transition-duration) var(--brand-easing-curve);
    transform: translateX(-100%);

    &.show {
      transform: translateX(0);
    }
  }

  .content {
    flex: 1;
  }
}
</style>
