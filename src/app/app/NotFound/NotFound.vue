<template>
  <div :class="$style.notFound">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item>
          <vue-headline level="1">404</vue-headline>
          <vue-headline level="3">Page not found!</vue-headline>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
  import VueGrid     from '../../shared/components/VueGrid/VueGrid.vue';
  import VueGridRow  from '../../shared/components/VueGridRow/VueGridRow.vue';
  import VueGridItem from '../../shared/components/VueGridItem/VueGridItem.vue';
  import VueHeadline from '../../shared/components/VueHeadline/VueHeadline.vue';

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
    components: { VueHeadline, VueGridItem, VueGridRow, VueGrid },
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
