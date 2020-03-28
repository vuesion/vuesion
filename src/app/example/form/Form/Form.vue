<template>
  <div :class="$style.form">
    <vue-grid with-vertical-space>
      <vue-grid-row>
        <vue-grid-column>
          <vue-breadcrumb :items="[{ label: 'Home', href: '/' }, { label: 'Form Example' }]" />
        </vue-grid-column>
      </vue-grid-row>

      <form-example />
    </vue-grid>
  </div>
</template>

<script lang="ts">
import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridRow from '@components/VueGrid/VueGridRow/VueGridRow.vue';
import VueGridColumn from '@components/VueGrid/VueGridColumn/VueGridColumn.vue';
import FormExample from '../FormExample/FormExample.vue';
import VueBreadcrumb from '@components/VueBreadcrumb/VueBreadcrumb.vue';

export default {
  metaInfo: {
    title: 'vuesion - Form Example',
  },
  components: { VueBreadcrumb, FormExample, VueGridColumn, VueGridRow, VueGrid },
  data(): any {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.form {
  padding-top: $nav-bar-height;
}
</style>
