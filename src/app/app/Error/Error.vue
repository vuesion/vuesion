<template>
  <div :class="$style.error">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item>
          <vue-headline level="1">Error</vue-headline>
          <vue-headline level="3">Try again later!</vue-headline>
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
      title: 'vue-starter - an error occurred',
      meta:  [
        {
          name:    'robots',
          content: 'NOINDEX,NOFOLLOW',
        },
      ],
    },
    name:       'Error',
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

  .error {
    padding-top: $nav-bar-height;
    text-align:  center;
  }
</style>
