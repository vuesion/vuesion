<template>
  <div :class="[$style.vueFooter, cssClass]">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item>
          <small>&copy; Copyright {{year}} Johannes Werner</small>
        </vue-grid-item>

        <vue-grid-item>
          <a href="https://github.com/devCrossNet" target="_blank" rel="noopener" aria-label="github profile"><i
            class="fab fa-github-alt"></i></a>
          <a href="https://twitter.com/_jwerner_" target="_blank" rel="noopener" aria-label="twitter profile"><i
            class="fab fa-twitter-square"></i></a>
        </vue-grid-item>

        <vue-grid-item>
          <small><a href="https://github.com/devCrossNet/vue-starter/blob/master/LICENSE" target="_blank" rel="noopener">MIT
                                                                                                                         License</a>
          </small>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
  import VueGrid     from '../VueGrid/VueGrid';
  import VueGridItem from '../VueGridItem/VueGridItem';
  import VueGridRow  from '../VueGridRow/VueGridRow';

  export default {
    name:       'VueFooter',
    components: {
      VueGrid,
      VueGridItem,
      VueGridRow,
    },
    props:      {
      cssClass: {
        type:    String,
        default: 'vueFooter',
      },
    },
    data() {
      return {};
    },
    computed:   {
      year() {
        return new Date().getFullYear();
      },
    },
    methods:    {},
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .vueFooter {
    padding:    $footer-padding;
    background: $footer-bg;
    color:      $footer-color;
    text-align: center;

    i {
      font-size: $font-size-h1;
      margin:    0 $grid-unit * 2;
    }

    small {
      display: inline-block;
      margin:  $grid-unit * 2 0;
    }
  }
</style>
