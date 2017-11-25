<template>
  <div :class="$style.vueNavBar">
    <div :class="bgCssClasses" />
    <vue-grid>
      <vue-grid-item>
        <router-link :to="to" exact>
          <img :class="$style.brand" :src="imageUrl" />
        </router-link>
      </vue-grid-item>
    </vue-grid>
  </div>
</template>

<script lang="ts">
  import VueGrid from '../VueGrid/VueGrid';
  import VueGridItem from '../VueGridItem/VueGridItem';

  export default {
    components: {
      VueGrid,
      VueGridItem,
    },
    data() {
      return {
        isSticky: false
      }
    },
    props: {
      to: {
        type: String,
        required: false,
        default: '/',
      },
      imageUrl: {
        type: String,
        required: false,
        default: '/client/assets/logo.png',
      },
    },
    computed: {
      bgCssClasses() {
        const classes = [this.$style.bg];

        if (this.isSticky) {
          classes.push(this.$style.in);
        }

        return classes;
      },
    },
    methods: {
      handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        this.isSticky = scrollTop > 0;
      }
    },
    beforeMount() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  };
</script>

<style lang="scss" module>
  @import "../variables";

  .vueNavBar {
    width:    $nav-bar-width;
    height:   $nav-bar-height;
    color:    $nav-bar-color;
    padding:  $nav-bar-padding;
    z-index:  $nav-bar-index;
    position: fixed;
    top:      0;
    left:     0;
  }

  .bg {
    background-color: $nav-bar-bg;
    width:            100%;
    height:           $nav-bar-height;
    position:         absolute;
    top:              0;
    left:             0;
    z-index:          -1;
    transition:       $nav-bar-bg-transition;
    opacity:          0;

    &.in {
      opacity: 1;
    }
  }

  .brand {
    padding-top: $grid-unit * 2;
    height:      $nav-bar-height - ($grid-unit * 4);
  }
</style>
