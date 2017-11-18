<template>
  <div id="app">
    <img src="/client/assets/logo.png">
    <ul :class="$style.nav">
      <li>
        <router-link to="/" exact>Home</router-link>
      </li>
      <li>
        <router-link to="/counter">Counter</router-link>
      </li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

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
      margin: 0;

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
