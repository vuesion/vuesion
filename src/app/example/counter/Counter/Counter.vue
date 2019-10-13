<template>
  <div :class="$style.counter">
    <vue-grid>
      <vue-breadcrumb :items="[{ label: 'Home', href: '/' }, { label: 'VueX Example' }]" />

      <vue-grid-row>
        <vue-grid-item fill> <vue-headline level="1">Counter</vue-headline> </vue-grid-item>

        <vue-grid-item fill>
          <vue-button color="secondary" :loading="incrementPending" @click="increment">Increment +1 </vue-button>
          <br />
          <br />
        </vue-grid-item>
        <vue-grid-item fill>
          <vue-button color="primary" :loading="decrementPending" @click="decrement">Decrement -1 </vue-button>
          <vue-headline level="3">Count is {{ count }}</vue-headline>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import { IPreLoad } from '@/server/isomorphic';
import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridItem from '@components/VueGridItem/VueGridItem.vue';
import VueButton from '@components/VueButton/VueButton.vue';
import VueGridRow from '@components/VueGridRow/VueGridRow.vue';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';
import { registerModule } from '@/app/store';
import { CounterModule } from '../module';
import VueBreadcrumb from '@components/VueBreadcrumb/VueBreadcrumb.vue';

export default {
  metaInfo: {
    title: 'Counter',
  },
  components: {
    VueBreadcrumb,
    VueHeadline,
    VueGrid,
    VueGridItem,
    VueButton,
    VueGridRow,
  },
  methods: {
    ...mapActions('counter', ['increment', 'decrement']),
  },
  computed: {
    ...mapGetters('counter', ['count', 'incrementPending', 'decrementPending']),
  },
  beforeCreate() {
    registerModule('counter', CounterModule);
  },
  prefetch: (options: IPreLoad) => {
    registerModule('counter', CounterModule);
    return options.store.dispatch('counter/increment');
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.counter {
  margin-top: $nav-bar-height;
  min-height: 500px;
}
</style>
