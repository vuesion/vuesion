<template>
  <div id="app">
    <vue-nav-bar>
      <ul :class="$style.nav">
        <li>
          <router-link to="/" exact>
            <i class="fas fa-home" />
            <small>{{ $t('App.nav.home' /*Home*/) }}</small>
          </router-link>
        </li>
        <li>
          <router-link to="/counter">
            <i class="fas fa-hashtag" />
            <small>{{ $t('App.nav.counter' /*Counter*/) }}</small>
          </router-link>
        </li>
        <li>
          <router-link to="/components">
            <i class="fas fa-puzzle-piece" />
            <small>{{ $t('App.nav.components' /*Components*/) }}</small>
          </router-link>
        </li>
        <li>
          <a @click="langSwitch('en-EN')">
            <i class="fas fa-flag" />
            <small>{{ $t('App.nav.english' /*English*/) }}</small>
          </a>
        </li>
        <li>
          <a @click="langSwitch('de-DE')">
            <i class="fas fa-flag" />
            <small>{{ $t('App.nav.german' /*German*/) }}</small>
          </a>
        </li>
        <li>
          <a @click="langSwitch('pt-BR')">
            <i class="fas fa-flag" />
            <small>{{ $t('App.nav.pt-BR' /*Portuguese*/) }}</small>
          </a>
        </li>
      </ul>
    </vue-nav-bar>

    <div :class="$style.app">
      <router-view class="view"></router-view>
    </div>

    <vue-footer />
  </div>
</template>

<script lang="ts">
  import { mapActions } from 'vuex';
  import VueNavBar from './shared/components/VueNavBar/VueNavBar.vue';
  import VueGrid from './shared/components/VueGrid/VueGrid.vue';
  import VueGridItem from './shared/components/VueGridItem/VueGridItem.vue';
  import VueFooter from './shared/components/VueFooter/VueFooter.vue'
  import { loadLanguageAsync } from './shared/plugins/i18n';

  export default {
    components: {
      VueNavBar,
      VueGrid,
      VueGridItem,
      VueFooter,
    },
    methods: {
      ...mapActions(['changeLang']),
      langSwitch(lang: string): void {
        loadLanguageAsync(lang)
          .catch((error: Error) => console.log(error));

        this.changeLang(lang);
      },
    },
  };
</script>

<style lang="scss" module>
  @import "shared/styles";
  // @import url($google-font);

  body {
    font-family:      $font-family;
    font-size:        $font-size;
    font-weight:      $font-weight;
    color:            $font-color;
    background-color: $bg-color;
    padding:          0;
    margin:           0;
    letter-spacing:   .5px;
    line-height:      1.47;
  }

  .app {
  }

  h1, h2, h3, h4, h5, h6 {
    margin: $grid-unit * 4 0 $grid-unit * 2 0;
  }

  h1 {
    font-size: $font-size-h1;
  }

  h2 {
    font-size: $font-size-h2;
  }

  h3 {
    font-size: $font-size-h3;
  }

  h4 {
    font-size: $font-size-h4;
  }

  h5 {
    font-size: $font-size-h5;
  }

  h6 {
    font-size: $font-size-h6;
  }

  small {
    font-size: 75%;
  }

  .nav {
    margin:         0;
    padding:        0;
    list-style:     none;
    display:        flex;
    flex-direction: row;
    flex-wrap:      wrap;
    width:          100%;

    li {
      flex:       1;
      margin:     0 $grid-unit $grid-unit 0;
      color:      $text-color;
      flex-basis: $grid-unit * 10;
      height:     $grid-unit * 10;
      background: $divider-color;
      cursor:     pointer;

      a {
        padding:         $grid-unit;
        display:         block;
        color:           $text-color;
        text-align:      center;
        font-size:       32px;
        text-decoration: none;

        small {
          font-size: 12px;
          display:   block;
        }
      }
    }

    @include media(tabletLandscape) {
      li {
        opacity:    .8;
        transition: opacity 250ms linear;

        &:hover {
          opacity: 1;
        }
      }
    }
  }

  // always make sure images have an alt attribute
  img[alt=""],
  img:not([alt]) {
    border: 5px dashed $brand-warn;
  }

  a {
    color: $brand-accent;

    &:hover {
      color: darken($brand-accent, 5%);
    }
  }
</style>
