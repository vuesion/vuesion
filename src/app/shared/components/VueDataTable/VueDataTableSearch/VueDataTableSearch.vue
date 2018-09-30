<template>
  <div :class="$style.vueDataTableSearch">
    <vue-input
      id="dataTableSearch"
      name="dataTableSearch"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event)" />
  </div>
</template>

<script lang="ts">
  import VueInput from '../../VueInput/VueInput.vue';

  export default {
    name:       'VueDataTableSearch',
    components: { VueInput },
    props:      {
      value:       {
        type: String,
      },
      placeholder: {
        type: String,
      },
    },
    data(): any {
      return {};
    },
    computed:   {},
    methods:    {},
  };
</script>

<style lang="scss" module>
  @import "../../../styles";

  .vueDataTableSearch {
    padding-top: $space-unit * 2;
  }
</style>
