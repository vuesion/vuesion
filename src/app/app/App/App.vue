<template>
  <div id="app" :class="$style.app">
    <vue-notification-stack />

    <vue-navigation-progress :is-navigating="isNavigating" />

    <vue-nav-bar>
      <ul :class="$style.nav">
        <li>
          <a href="/docs" @click.native="navBarClose">
            <vue-icon-book />
            <small>{{ $t('App.nav.docs' /* Documentation */) }}</small>
          </a>
        </li>
        <li>
          <router-link to="/counter" @click.native="navBarClose">
            <vue-icon-hashtag />
            <small>{{ $t('App.nav.counter' /* Counter */) }}</small>
          </router-link>
        </li>
        <li>
          <router-link to="/components" @click.native="navBarClose">
            <vue-icon-puzzle-piece />
            <small>{{ $t('App.nav.components' /* Components */) }}</small>
          </router-link>
        </li>
        <li>
          <a @click="localeSwitch('en')">
            <vue-icon-flag />
            <small>English</small>
          </a>
        </li>
        <li>
          <a @click="localeSwitch('de')">
            <vue-icon-flag />
            <small>Deutsch</small>
          </a>
        </li>
        <li>
          <a @click="localeSwitch('pt')">
            <vue-icon-flag />
            <small>Português</small>
          </a>
        </li>
        <li>
          <a @click="localeSwitch('zh-cn')">
            <vue-icon-flag />
            <small>中文</small>
          </a>
        </li>
      </ul>
    </vue-nav-bar>

    <router-view :class="$style.content" />

    <vue-footer />

    <vue-cookie-consent
      current-version="1.0.0"
      :cookie-consent-version="cookieConsentVersion"
      :set-cookie-consent-version="setCookieConsentVersion">
      This is a cookie consent component which shows the cookie consent every time you change the version of the
      consent.
    </vue-cookie-consent>
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
  import VueIconBook                from '../../shared/components/icons/VueIconBook/VueIconBook.vue';
  import VueIconHashtag             from '../../shared/components/icons/VueIconHashtag/VueIconHashtag.vue';
  import VueIconPuzzlePiece         from '../../shared/components/icons/VueIconPuzzlePiece/VueIconPuzzlePiece.vue';
  import VueIconFlag                from '../../shared/components/icons/VueIconFlag/VueIconFlag.vue';
  import VueNavigationProgress      from '../../shared/components/VueNavigationProgress/VueNavigationProgress.vue';
  import { loadLocaleAsync }        from '../../shared/plugins/i18n/i18n';
  import { EventBus }               from '../../shared/services/EventBus';

  export default {
    components: {
      VueNavigationProgress,
      VueIconFlag,
      VueIconPuzzlePiece,
      VueIconHashtag,
      VueIconBook,
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
      };
    },
    computed:   {
      ...mapGetters('app', ['cookieConsentVersion']),
    },
    methods:    {
      ...mapActions('app', ['changeLocale', 'setCookieConsentVersion']),
      localeSwitch(locale: string): void {
        loadLocaleAsync(locale)
        // tslint:disable-next-line
        .catch((error: Error) => console.log(error));

        this.changeLocale(locale);
        this.navBarClose();
      },
      navBarClose() {
        EventBus.$emit('navbar.close');
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

  .nav {
    margin:         $space-unit 0 0 0;
    padding:        0;
    list-style:     none;
    display:        flex;
    flex-direction: row;
    flex-wrap:      wrap;
    width:          100%;

    li {
      flex:       1;
      margin:     $space-unit / 2;
      color:      $text-color;
      flex-basis: $space-unit * 10;
      height:     $space-unit * 10;
      background: $border-color;
      cursor:     pointer;

      a {
        padding:         $space-unit * 2;
        display:         block;
        color:           $text-color;
        text-align:      center;
        text-decoration: none;

        small {
          font-size: 12px;
          display:   block;
        }

        i {
          height: 32px;
          width:  32px;
        }
      }
    }

    @include media(tabletLandscape) {
      margin: 0;

      li {
        margin:     $space-unit;
        opacity:    .8;
        transition: opacity $transition-duration linear;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
</style>
