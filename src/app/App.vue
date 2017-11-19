<template>
  <div id="app">
    <img src="/client/assets/logo.png">

    <vue-button @click="langSwitch('en')" :isActive="lang === 'en'">EN</vue-button>
    <vue-button @click="langSwitch('de')" :isActive="lang === 'de'">DE</vue-button>

    <ul :class="$style.nav">
      <li>
        <router-link to="/" exact>{{ $t("App.nav.home") }}</router-link>
      </li>
      <li>
        <router-link to="/counter">{{ $t("App.nav.counter") }}</router-link>
      </li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import VueButton from './shared/VueButton/VueButton.vue'
  import { loadLanguageAsync } from '../i18n';

  @Component({
    components: {
      VueButton
    }
  })
  class App extends Vue {
    lang: string = 'en';

    langSwitch(lang: string): void {
      this.lang = lang;

      loadLanguageAsync(lang)
        .catch((error: Error) => console.log(error))
    }
  }

  export default App;
</script>

<style lang="scss" module>
  @import "./shared/variables";

  body {
    font-family:      Helvetica, sans-serif;
    background-color: $bg-color;
  }

  :global {
    .router-link-active {
      color: $link-active-color;
    }
  }

  .nav {
    margin:     0;
    padding:    0;
    list-style: none;

    li {
      display: inline-block;
      margin:  0;

      a {
        display: inline-block;
        padding: 12px 20px;

        &:hover {
          background-color: #FFF;
        }
      }
    }
  }
</style>
