<template>
  <div>
    <h1>VuexExample</h1>
    <div v-for="item in topics">
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script lang="ts">
  import { mapGetters } from 'vuex';
  import { IPreLoad }   from '../../../server/isomorphic';

  export default {
    name:       'VuexExample',
    components: {},
    props:      {},
    data(): any {
      return {};
    },
    computed:   {
      ...mapGetters({
                      topics: 'getTopics',
                    }),
    },
    methods:    {},
    prefetch:   (options: IPreLoad) => {
      return options.store.dispatch(`getTopics`);
    },
  };
</script>

<style lang="scss" module>

</style>
