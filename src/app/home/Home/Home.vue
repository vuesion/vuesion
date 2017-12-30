<template>
  <vue-grid>
    <vue-grid-item fill>
      <h1>{{ $t('App.nav.home') }}</h1>
    </vue-grid-item>

    <vue-grid-item fill>
      <div v-for="item in home">
        <p>{{item.title}}</p>
      </div>
    </vue-grid-item>
  </vue-grid>
</template>

<script lang="ts">
  import { mapGetters } from 'vuex';
  import VueGrid from '../../shared/VueGrid/VueGrid';
  import VueGridItem from '../../shared/VueGridItem/VueGridItem';

  export default {
    metaInfo: {
      title: 'Home'
    },
    components: {
      VueGrid,
      VueGridItem,
    },
    computed: {
      ...mapGetters({
        home: 'getHome',
      }),
    },
    prefetch: ({ store }: any) => {
      return store.dispatch(`getHome`);
    },
  };
</script>

<style lang="scss" module>
  @import "../../shared/variables";
</style>
