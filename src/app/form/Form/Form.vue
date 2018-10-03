<template>
  <div :class="$style.form">

    <vue-grid>
      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <h1>Form example</h1>
          <form-example />
        </vue-grid-item>

        <vue-grid-item class="vueGridItem"></vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
  import VueGrid     from '../../shared/components/VueGrid/VueGrid.vue';
  import VueGridRow  from '../../shared/components/VueGridRow/VueGridRow.vue';
  import VueGridItem from '../../shared/components/VueGridItem/VueGridItem.vue';
  import FormExample from '../FormExample/FormExample.vue';

  export default {
    metaInfo:   {
      title: 'vue-starter - Form Example',
    },
    components: { FormExample, VueGridItem, VueGridRow, VueGrid },
    computed:   {},
    data(): any {
      return {};
    },
    methods:    {},
  };
</script>

<style lang="scss" module>
  @import "../../shared/styles";

  .form {
    padding-top:    $nav-bar-height;
    padding-bottom: $space-unit * 2;
  }
</style>
