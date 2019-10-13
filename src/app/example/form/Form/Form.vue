<template>
  <div :class="$style.form">
    <vue-grid>
      <vue-breadcrumb :items="[{ label: 'Home', href: '/' }, { label: 'Form Example' }]" />

      <vue-grid-row>
        <vue-grid-item>
          <vue-headline level="1">Form example</vue-headline>
          <form-example />
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridRow from '@components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@components/VueGridItem/VueGridItem.vue';
import FormExample from '../FormExample/FormExample.vue';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';
import VueBreadcrumb from '@components/VueBreadcrumb/VueBreadcrumb.vue';

export default {
  metaInfo: {
    title: 'vuesion - Form Example',
  },
  components: { VueBreadcrumb, VueHeadline, FormExample, VueGridItem, VueGridRow, VueGrid },
  computed: {},
  data(): any {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.form {
  padding-top: $nav-bar-height;
}
</style>
