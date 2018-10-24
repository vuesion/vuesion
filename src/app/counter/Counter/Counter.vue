<template>
  <div :class="$style.counter">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill>
          <h1>Counter</h1>
        </vue-grid-item>

        <vue-grid-item fill>
          <vue-button
            secondary
            :loading="incrementPending"
            @click='increment'>Increment +1
          </vue-button>
          <br />
          <br />
        </vue-grid-item>
        <vue-grid-item fill>
          <vue-button
            primary
            :loading="decrementPending"
            @click='decrement'>Decrement -1
          </vue-button>
          <h3>Count is {{ count }}</h3>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
  import { mapActions, mapGetters } from 'vuex';
  import { IPreLoad }               from '../../../server/isomorphic';
  import VueGrid                    from '../../shared/components/VueGrid/VueGrid.vue';
  import VueGridItem                from '../../shared/components/VueGridItem/VueGridItem.vue';
  import VueButton                  from '../../shared/components/VueButton/VueButton.vue';
  import VueGridRow                 from '../../shared/components/VueGridRow/VueGridRow.vue';
  import { registerModule }         from '../../store';
  import { CounterModule }          from '../module';

  export default {
    metaInfo:   {
      title: 'Counter',
    },
    components: {
      VueGrid,
      VueGridItem,
      VueButton,
      VueGridRow,
    },
    methods:    {
      ...mapActions('counter', [
        'increment',
        'decrement',
      ]),
    },
    computed:   {
      ...mapGetters('counter', ['count', 'incrementPending', 'decrementPending']),
    },
    beforeCreate() {
      registerModule('counter', CounterModule);
    },
    prefetch:   (options: IPreLoad) => {
      registerModule('counter', CounterModule);
      return options.store.dispatch('counter/increment');
    },
  };
</script>


<style lang="scss" module>
  @import "../../shared/styles";

  .counter {
    margin-top: $nav-bar-height;
    min-height: 500px;
  }
</style>
