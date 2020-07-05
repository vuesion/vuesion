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
import { Context } from '@nuxt/types';
import { mapActions, mapGetters } from 'vuex';
import VueGrid from '@/components/shared/VueGrid/VueGrid.vue';
import VueGridRow from '@/components/shared/VueGrid/VueGridRow/VueGridRow.vue';
import VueGridColumn from '@/components/shared/VueGrid/VueGridColumn/VueGridColumn.vue';
import VueBreadcrumb from '@/components/shared/VueBreadcrumb/VueBreadcrumb.vue';
import VueHeadline from '@/components/shared/VueHeadline/VueHeadline.vue';
import VueButton from '@/components/shared/VueButton/VueButton.vue';

export default {
  components: {
    VueGrid,
    VueGridRow,
    VueGridColumn,
    VueBreadcrumb,
    VueHeadline,
    VueButton,
  },
  fetch({ store }: Context) {
    return store.dispatch('counter/increment');
  },
  computed: {
    ...mapGetters('counter', ['count', 'incrementPending', 'decrementPending']),
  },
  methods: {
    ...mapActions('counter', ['increment', 'decrement']),
  },
  head /* istanbul ignore next */() {
    return {
      title: 'vuesion - Counter',
    };
  },
};
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.counter {
  padding-top: $nav-bar-height;
}
</style>
