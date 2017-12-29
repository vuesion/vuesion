<template>
  <vue-grid>
    <vue-grid-item fill>
      <h1>{{ $t('App.nav.counter') }}</h1>
    </vue-grid-item>

    <vue-grid-item fill>
      <vue-button @click='increment' accent>Increment +1</vue-button>
      <vue-button @click='decrement' primary>Decrement -1</vue-button>
      <h3>Count is {{ counter }}</h3>
    </vue-grid-item>
  </vue-grid>
</template>

<script lang="ts">
  import { mapGetters, mapActions } from 'vuex';
  import VueGrid from '../../shared/VueGrid/VueGrid';
  import VueGridItem from '../../shared/VueGridItem/VueGridItem';
  import VueButton from '../../shared/VueButton/VueButton';

  export default {
    components: {
      VueGrid,
      VueGridItem,
      VueButton,
    },
    methods: {
      ...mapActions([
        'increment',
        'decrement',
      ]),
    },
    computed: {
      ...mapGetters({
        counter: 'getCounter',
      }),
    },
  };
</script>

<style lang="scss" module>
  @import "../../shared/variables";
</style>
