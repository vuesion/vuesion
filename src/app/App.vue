<template>
  <div id="app">
    <vue-nav-bar />

    <div :class="$style.app">
      <vue-grid>
        <vue-grid-item fill>
          <vue-button @click="langSwitch('en')" :primary="lang === 'en'">EN</vue-button>
          <vue-button @click="langSwitch('de')" :primary="lang === 'de'">DE</vue-button>
        </vue-grid-item>

        <vue-grid-item fill>
          <ul :class="$style.nav">
            <li>
              <router-link to="/" exact>{{ $t('App.nav.home') }}</router-link>
            </li>
            <li>
              <router-link to="/counter">{{ $t('App.nav.counter') }}</router-link>
            </li>
            <li>
              <router-link to="/components">{{ $t('App.nav.components') }}</router-link>
            </li>
          </ul>
        </vue-grid-item>
      </vue-grid>

      <router-view class="view"></router-view>
    </div>
  </div>
</template>

<script lang="ts">
  import VueNavBar from './shared/VueNavBar/VueNavBar.vue';
  import VueButton from './shared/VueButton/VueButton.vue';
  import VueGrid from './shared/VueGrid/VueGrid.vue';
  import VueGridItem from './shared/VueGridItem/VueGridItem.vue';
  import { loadLanguageAsync } from '../i18n';

  export default {
    components: {
      VueNavBar,
      VueGrid,
      VueGridItem,
      VueButton,
    },
    data() {
      return {
        lang: 'en'
      }
    },
    methods: {
      langSwitch(lang: string): void {
        this.lang = lang;

        loadLanguageAsync(lang)
          .catch((error: Error) => console.log(error))
      }
    }
  };
</script>

<style lang="scss" module>
  @import "./shared/variables";
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
    margin:  $nav-bar-height 0 0 0;
    padding: $grid-unit * 4 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: $grid-unit * 4 0 $grid-unit * 4 0;
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

  .nav {
    margin:     $grid-unit * 3 0 0;
    padding:    0;
    list-style: none;
    li {
      display: inline-block;
      margin:  0;
      a {
        display: inline;
        padding: 10px;
        &:hover {
          background-color: #FFF;
        }
      }
    }
  }

  img[alt=""],
  img:not([alt]) {
    border: 5px dashed $brand-warn;
  }
</style>
