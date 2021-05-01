<template>
  <div :class="$style.counter">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-column>
          <vue-breadcrumb :items="[{ label: 'Home', href: '/' }, { label: 'VueX Example' }]" />
        </vue-grid-column>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-column>
          <vue-text appearance="h1" as="h1"> Counter: {{ count }} </vue-text>
        </vue-grid-column>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-column>
          <vue-button color="neutral" :loading="incrementPending" @click="increment"> Increment +1 </vue-button>

          <vue-button color="primary" :loading="decrementPending" @click="decrement"> Decrement -1 </vue-button>
        </vue-grid-column>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, useFetch, computed, useMeta } from '@nuxtjs/composition-api';
import VueGrid from '@/components/organisms/VueGrid/VueGrid.vue';
import VueGridRow from '@/components/organisms/VueGrid/VueGridRow/VueGridRow.vue';
import VueGridColumn from '@/components/organisms/VueGrid/VueGridColumn/VueGridColumn.vue';
import VueBreadcrumb from '@/components/molecules/VueBreadcrumb/VueBreadcrumb.vue';
import VueText from '@/components/atoms/VueText/VueText.vue';
import VueButton from '@/components/atoms/VueButton/VueButton.vue';

export default defineComponent({
  name: 'CounterPage',
  auth: false,
  components: {
    VueGrid,
    VueGridRow,
    VueGridColumn,
    VueBreadcrumb,
    VueText,
    VueButton,
  },
  setup() {
    useMeta({ title: 'vuesion - Counter Example' });
    const { store } = useContext();
    const count = computed(() => store.getters['counter/count']);
    const incrementPending = computed(() => store.getters['counter/incrementPending']);
    const decrementPending = computed(() => store.getters['counter/decrementPending']);
    const increment = async () => {
      await store.dispatch('counter/increment');
    };
    const decrement = async () => {
      await store.dispatch('counter/decrement');
    };

    useFetch(() => store.dispatch('counter/increment'));

    return { count, incrementPending, decrementPending, increment, decrement };
  },
  head: {},
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.counter {
  padding-top: $nav-bar-height;
}
</style>
