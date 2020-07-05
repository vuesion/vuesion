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
import VueGrid from '@/components/shared/VueGrid/VueGrid.vue';
import VueGridRow from '@/components/shared/VueGrid/VueGridRow/VueGridRow.vue';
import VueGridColumn from '@/components/shared/VueGrid/VueGridColumn/VueGridColumn.vue';
import FormExample from '@/components/form/FormExample.vue';
import VueBreadcrumb from '@/components/shared/VueBreadcrumb/VueBreadcrumb.vue';

export default {
  components: {
    VueBreadcrumb,
    FormExample,
    VueGridColumn,
    VueGridRow,
    VueGrid,
  },
  data(): any {
    return {};
  },
  computed: {},
  methods: {},
  head /* istanbul ignore next */() {
    return {
      title: 'vuesion - Form Example',
    };
  },
};
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.form {
  padding-top: $nav-bar-height;
}
</style>
