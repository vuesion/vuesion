<template>
  <div>
    <h1>Home</h1>
    <div v-for="item in home">
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { mapGetters } from 'vuex';

  @Component({
    computed: {
      ...mapGetters({
        home: 'getHome'
      })
    },
  })
  class Home extends Vue {
    static prefetch = ({ store }: any) => {
      return store.dispatch(`getHome`);
    }
  }

  export default Home;
</script>

<style lang="scss" module>
  @import "../../shared/variables";
</style>
