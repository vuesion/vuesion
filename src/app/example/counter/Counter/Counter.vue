<template>
  <div :class="$style.counter">
    <vue-grid with-vertical-space>
      <vue-grid-row>
        <vue-grid-column>
          <vue-breadcrumb :items="[{ label: 'Home', href: '/' }, { label: 'VueX Example' }]" />
        </vue-grid-column>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-column>
          <vue-headline level="1"> Counter: {{ count }} </vue-headline>
        </vue-grid-column>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-column>
          <vue-button color="secondary" :loading="incrementPending" @click="increment">
            Increment +1
          </vue-button>

          <vue-button color="primary" :loading="decrementPending" @click="decrement">
            Decrement -1
          </vue-button>
        </vue-grid-column>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import { registerModule } from '@/app/store';
import { IPrefetch } from '@/server/isomorphic';
import { CounterModule } from '../module';
import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridRow from '@components/VueGrid/VueGridRow/VueGridRow.vue';
import VueGridColumn from '@components/VueGrid/VueGridColumn/VueGridColumn.vue';
import VueBreadcrumb from '@components/VueBreadcrumb/VueBreadcrumb.vue';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';
import VueButton from '@components/VueButton/VueButton.vue';

export default {
  metaInfo: {
    title: 'Counter',
  },
  components: {
    VueGrid,
    VueGridRow,
    VueGridColumn,
    VueBreadcrumb,
    VueHeadline,
    VueButton,
  },
  computed: {
    ...mapGetters('counter', ['count', 'incrementPending', 'decrementPending']),
  },
  beforeCreate() {
    registerModule('counter', CounterModule);
  },
  methods: {
    ...mapActions('counter', ['increment', 'decrement']),
  },
  prefetch: (options: IPrefetch) => {
    registerModule('counter', CounterModule);
    return options.store.dispatch('counter/increment');
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.counter {
  padding-top: $nav-bar-height;
}
</style>
