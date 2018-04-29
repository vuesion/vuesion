<template>
  <div :class="$style.error">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item>
          <h1>Error</h1>
          <h3>Try again later!</h3>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
  import VueGrid     from '../../shared/components/VueGrid/VueGrid';
  import VueGridRow  from '../../shared/components/VueGridRow/VueGridRow';
  import VueGridItem from '../../shared/components/VueGridItem/VueGridItem';

  export default {
    metaInfo:   {
      title: 'vue-starter - an error occurred',
      meta:  [
        {
          name:    'robots',
          content: 'NOINDEX,NOFOLLOW',
        },
      ],
    },
    name:       'Error',
    components: { VueGridItem, VueGridRow, VueGrid },
    props:      {},
    data(): any {
      return {};
    },
    computed:   {},
    methods:    {},
  };
</script>

<style lang="scss" module>
  @import "../../shared/styles";

  .error {
    padding-top: $nav-bar-height;
    text-align:  center;
  }
</style>
