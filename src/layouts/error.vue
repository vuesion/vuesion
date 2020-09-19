<template>
  <vue-grid :class="$style.error" text-align="center">
    <vue-grid-row v-if="error.statusCode === 404">
      <vue-grid-column>
        <vue-headline level="1"> 404 </vue-headline>
        <vue-headline level="3"> Page not found! </vue-headline>
      </vue-grid-column>
    </vue-grid-row>
    <vue-grid-row v-else>
      <vue-grid-column>
        <vue-headline level="1"> Error </vue-headline>
        <vue-headline level="3"> Try again later! </vue-headline>
      </vue-grid-column>
    </vue-grid-row>
  </vue-grid>
</template>

<script lang="ts">
import { computed, defineComponent, useContext, useMeta } from '@nuxtjs/composition-api';
import VueHeadline from '@/components/atoms/VueHeadline/VueHeadline.vue';
import VueGrid from '@/components/organisms/VueGrid/VueGrid.vue';
import VueGridRow from '@/components/organisms/VueGrid/VueGridRow/VueGridRow.vue';
import VueGridColumn from '@/components/organisms/VueGrid/VueGridColumn/VueGridColumn.vue';

export default defineComponent({
  name: 'Error',
  head: {},
  components: { VueHeadline, VueGrid, VueGridRow, VueGridColumn },
  props: {
    error: { type: Object, required: true },
  },
  setup(props) {
    const { store } = useContext();
    const { title, htmlAttrs, meta } = useMeta();
    const locale = computed(() => store.getters['app/locale']);
    const theme = computed(() => store.getters['app/theme']);

    title.value = props.error.statusCode === 404 ? 'vuesion - page not found' : 'vuesion - an error occurred';

    htmlAttrs.value = {
      class: theme.value,
      lang: locale.value.substr(0, 2),
    };

    meta.value = [
      {
        name: 'robots',
        content: 'NOINDEX,NOFOLLOW',
      },
    ];
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.error {
  position: absolute;
  width: 300px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
