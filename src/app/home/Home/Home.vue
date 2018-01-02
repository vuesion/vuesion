<template>
  <div>
    <stage />

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
  </div>
</template>

<script lang="ts">
  import { mapGetters } from 'vuex';
  import VueGrid from '../../shared/components/VueGrid/VueGrid';
  import VueGridItem from '../../shared/components/VueGridItem/VueGridItem';
  import Stage from '../Stage/Stage'

  export default {
    metaInfo: {
      title: 'Home'
    },
    components: {
      VueGrid,
      VueGridItem,
      Stage,
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
