<template>
  <div>
    <h1>Counter</h1>
    <button @click='increment'>Increment +1</button>
    <button @click='decrement'>Decrement -1</button>
    <h3>Count is {{ counter }}</h3>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { mapGetters, mapActions } from 'vuex';

  @Component({
    methods: {
      ...mapActions([
        'increment',
        'decrement'
      ])
    },
    computed: {
      ...mapGetters({
        counter: 'getCounter'
      })
    }
  })
  class Counter extends Vue {

  }

  export default Counter;
</script>

<style lang="scss" module>
  @import "../../shared/variables";
</style>
