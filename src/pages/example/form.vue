<template>
  <vue-grid>
    <vue-grid-row :class="$style.form" justify-content="center" align-items="top">
      <vue-grid-column vertical-space="32" width="100%" tablet-landscape="70%" large-desktop="50%" :can-grow="false">
        <form-example />
      </vue-grid-column>
    </vue-grid-row>
  </vue-grid>
</template>

<script lang="ts">
/* istanbul ignore file */

import VueGrid from '@/components/organisms/VueGrid/VueGrid.vue';
import VueGridRow from '@/components/organisms/VueGrid/VueGridRow/VueGridRow.vue';
import VueGridColumn from '@/components/organisms/VueGrid/VueGridColumn/VueGridColumn.vue';
import FormExample from '@/components/organisms/FormExample/FormExample.vue';

export default {
  name: 'FormExamplePage',
  auth: false,
  components: {
    FormExample,
    VueGridColumn,
    VueGridRow,
    VueGrid,
  },
  head: {
    title: 'vuesion - Form Example',
  },
};
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.form {
  padding-top: $nav-bar-height;
}
</style>
