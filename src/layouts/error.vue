<template>
  <vue-grid :class="$style.error" text-align="center">
    <vue-grid-row v-if="error.statusCode === 404">
      <vue-grid-column>
        <vue-text appearance="h1" as="h1"> 404 </vue-text>
        <vue-text appearance="h3" as="h3"> Page not found! </vue-text>
      </vue-grid-column>
    </vue-grid-row>
    <vue-grid-row v-else>
      <vue-grid-column>
        <vue-text appearance="h1" as="h1"> Error </vue-text>
        <vue-text appearance="h3" as="h3"> Try again later! </vue-text>
      </vue-grid-column>
    </vue-grid-row>
  </vue-grid>
</template>

<script lang="ts">
import { computed, defineComponent, useContext, useMeta } from '@nuxtjs/composition-api';
import VueText from '@/components/atoms/VueText/VueText.vue';
import VueGrid from '@/components/organisms/VueGrid/VueGrid.vue';
import VueGridRow from '@/components/organisms/VueGrid/VueGridRow/VueGridRow.vue';
import VueGridColumn from '@/components/organisms/VueGrid/VueGridColumn/VueGridColumn.vue';

export default defineComponent({
  name: 'Error',
  components: { VueText, VueGrid, VueGridRow, VueGridColumn },
  props: {
    error: { type: Object, required: true },
  },
  setup(props) {
    const { app } = useContext();
    const { title, htmlAttrs, meta } = useMeta();
    const locale = computed(() => app.i18n.locale);

    title.value = props.error.statusCode === 404 ? 'vuesion - page not found' : 'vuesion - an error occurred';

    htmlAttrs.value = {
      lang: locale.value.substr(0, 2),
    };

    meta.value = [
      {
        name: 'robots',
        content: 'NOINDEX,NOFOLLOW',
      },
    ];
  },
  head: {},
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
