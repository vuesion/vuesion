<template>
  <div :class="$style.notFound">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item>
          <h1>404</h1>
          <h3>Site not found!</h3>
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
      title: 'vue-starter - page not found',
      meta:  [
        {
          name:    'robots',
          content: 'NOINDEX,NOFOLLOW',
        },
      ],
    },
    name:       'NotFound',
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

  .notFound {
    padding-top: $nav-bar-height;
    text-align:  center;
  }
</style>
