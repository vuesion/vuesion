<template>
  <div id="app" :class="$style.app">
    <vue-notification-stack />

    <vue-navigation-progress :is-navigating="isNavigating" />

    <vue-nav-bar />

    <router-view :class="$style.content" />

    <vue-footer />

    <vue-cookie-consent
      current-version="1.0.0"
      :cookie-consent-version="cookieConsentVersion"
      :set-cookie-consent-version="setCookieConsentVersion">
      This is a cookie consent component which shows the cookie consent every time you change the version of the
      consent.
    </vue-cookie-consent>

    <vue-sidebar>
      <vue-sidebar-group title="Languages">
        <vue-sidebar-group-item>
          <vue-select name="lang" id="lang" :options="languages" @input="localeSwitch" :value="getLocale" />
        </vue-sidebar-group-item>
      </vue-sidebar-group>

      <vue-sidebar-group title="Navigation">
        <vue-sidebar-group-item to="/">
          <vue-icon-code />
          Home
        </vue-sidebar-group-item>

        <vue-sidebar-group-item to="/counter">
          <vue-icon-hashtag />
          VueX Example
        </vue-sidebar-group-item>

        <vue-sidebar-group-item to="/form">
          <vue-icon-hashtag />
          Form Example
        </vue-sidebar-group-item>
      </vue-sidebar-group>

      <vue-sidebar-group title="Documentation">
        <vue-sidebar-group-item>
          <a href="/docs">
            <vue-icon-book />
            Documentation
          </a>
        </vue-sidebar-group-item>

        <vue-sidebar-group-item>
          <a href="/docs/guide/styles.html">
            <vue-icon-book />
            Design System
          </a>
        </vue-sidebar-group-item>

        <vue-sidebar-group-item>
          <a href="/storybook">
            <vue-icon-puzzle-piece />
            Components
          </a>
        </vue-sidebar-group-item>
      </vue-sidebar-group>

      <vue-sidebar-group title="Community">
        <vue-sidebar-group-item>
          <a href="https://github.com/devCrossNet/vue-starter" target="_blank" rel="noopener">
            <vue-icon-github />
            Github
          </a>
        </vue-sidebar-group-item>

        <vue-sidebar-group-item>
          <a href="https://slack-vue-starter.herokuapp.com/" target="_blank" rel="noopener">
            Slack
          </a>
        </vue-sidebar-group-item>

        <vue-sidebar-group-item>
          <a href="https://chat.vuejs.org/" target="_blank" rel="noopener">
            VueLand
          </a>
        </vue-sidebar-group-item>

        <vue-sidebar-group-item>
          <a href="https://twitter.com/_jwerner_" target="_blank" rel="noopener">
            <vue-icon-twitter-square />
            Twitter
          </a>
        </vue-sidebar-group-item>
      </vue-sidebar-group>
    </vue-sidebar>
  </div>
</template>

<script lang="ts">
  import { mapActions, mapGetters } from 'vuex';
  import VueNavBar                  from '../../shared/components/VueNavBar/VueNavBar.vue';
  import VueGrid                    from '../../shared/components/VueGrid/VueGrid.vue';
  import VueGridItem                from '../../shared/components/VueGridItem/VueGridItem.vue';
  import VueFooter                  from '../../shared/components/VueFooter/VueFooter.vue';
  import VueNotificationStack       from '../../shared/components/VueNotificationStack/VueNotificationStack.vue';
  import VueCookieConsent           from '../../shared/components/VueCookieConsent/VueCookieConsent.vue';
  import VueNavigationProgress      from '../../shared/components/VueNavigationProgress/VueNavigationProgress.vue';
  import { loadLocaleAsync }        from '../../shared/plugins/i18n/i18n';
  import VueSidebar                 from '../../shared/components/VueSidebar/VueSidebar.vue';
  import VueSidebarGroup            from '../../shared/components/VueSidebar/VueSidebarGroup/VueSidebarGroup.vue';
  import VueSidebarGroupItem
                                    from '../../shared/components/VueSidebar/VueSidebarGroupItem/VueSidebarGroupItem.vue';
  import VueIconCode                from '../../shared/components/icons/VueIconCode/VueIconCode.vue';
  import VueIconBook                from '../../shared/components/icons/VueIconBook/VueIconBook.vue';
  import VueIconHashtag             from '../../shared/components/icons/VueIconHashtag/VueIconHashtag.vue';
  import VueIconGithub              from '../../shared/components/icons/VueIconGithub/VueIconGithub.vue';
  import VueIconTwitterSquare       from '../../shared/components/icons/VueIconTwitterSquare/VueIconTwitterSquare.vue';
  import VueSelect                  from '../../shared/components/VueSelect/VueSelect.vue';
  import VueIconPuzzlePiece         from '../../shared/components/icons/VueIconPuzzlePiece/VueIconPuzzlePiece.vue';

  export default {
    components: {
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
      VueGrid,
      VueGridItem,
      VueFooter,
      VueNotificationStack,
    },
    data(): any {
      return {
        isNavigating: false,
        languages:    [
          { label: 'English', value: 'en' },
          { label: 'Deutsch', value: 'de' },
          { label: 'Português', value: 'pt' },
          { label: '中文', value: 'zh-cn' },
        ],
      };
    },
    computed:   {
      ...mapGetters('app', ['cookieConsentVersion', 'getLocale']),
    },
    methods:    {
      ...mapActions('app', ['changeLocale', 'setCookieConsentVersion']),
      localeSwitch(locale: string): void {
        loadLocaleAsync(locale)
        // tslint:disable-next-line
        .catch((error: Error) => console.log(error));

        this.changeLocale(locale);
      },
      initProgressBar() {
        this.$router.beforeEach((to: any, from: any, next: any) => {
          this.isNavigating = true;
          next();
        });
        this.$router.afterEach(() => {
          this.isNavigating = false;
        });
      },
    },
    created() {
      this.initProgressBar();
    },
  };
</script>

<style lang="scss" module>
  @import "../../shared/styles";
  @import "../../shared/styles/reset";
  @import "../../shared/styles/typo";
  @import "../../shared/styles/global";
  @import url($google-font);

  .app {
    min-height:     100vh;
    display:        flex;
    flex-direction: column;
  }

  .content {
    flex: 1;
  }
</style>
