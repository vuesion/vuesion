<template>
  <div :class="[$style.enterpriseReady, 'featureSection']">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill class="vueGridItem">
          <vue-headline level="2">Enterprise ready</vue-headline>
        </vue-grid-item>
        <vue-grid-item class="vueGridItem">
          <vue-card class="vueCard">
            <vue-card-body>
              <vue-icon-chart-line />
              <vue-headline level="3">SEO</vue-headline>
              <p>
                We support SEO (document head tags management) and server-side-rendering for search engines that support
                indexing of JavaScript content. (eg. Google)
              </p>
            </vue-card-body>
          </vue-card>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <vue-card class="vueCard">
            <vue-card-body>
              <vue-icon-certificate />
              <vue-headline level="3">Best practices</vue-headline>
              <p>
                A Common style guide, TypeScript, and the best test setup: Automatically guarantee code quality and
                non-breaking changes.
              </p>
            </vue-card-body>
          </vue-card>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <vue-card class="vueCard">
            <vue-card-body>
              <vue-icon-flag />
              <vue-headline level="3">i18n</vue-headline>
              <p>
                Scalable apps need to support multiple languages, easily add and support multiple languages with
                vue-i18n.
              </p>
            </vue-card-body>
          </vue-card>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import VueGrid from '../../shared/components/VueGrid/VueGrid.vue';
import VueGridItem from '../../shared/components/VueGridItem/VueGridItem.vue';
import VueCard from '../../shared/components/VueCard/VueCard.vue';
import VueCardBody from '../../shared/components/VueCard/VueCardBody/VueCardBody.vue';
import VueGridRow from '../../shared/components/VueGridRow/VueGridRow.vue';
import VueIconChartLine from '../../shared/components/icons/VueIconChartLine/VueIconChartLine.vue';
import VueIconCertificate from '../../shared/components/icons/VueIconCertificate/VueIconCertificate.vue';
import VueIconFlag from '../../shared/components/icons/VueIconFlag/VueIconFlag.vue';
import VueHeadline from '../../shared/components/VueHeadline/VueHeadline.vue';

export default {
  components: {
    VueHeadline,
    VueIconFlag,
    VueIconCertificate,
    VueIconChartLine,
    VueGrid,
    VueGridItem,
    VueCard,
    VueCardBody,
    VueGridRow,
  },
};
</script>

<style lang="scss" module>
@import '../../shared/styles';

.enterpriseReady {
  display: block;
  text-align: center;
  background: $secondary-2-1;

  i {
    display: inline-block;
    height: $font-size-h1;
    width: $font-size-h1;
    margin-top: $space-unit;
  }

  :global {
    .vueCard {
      background: $bg-color;
    }
  }
}
</style>
