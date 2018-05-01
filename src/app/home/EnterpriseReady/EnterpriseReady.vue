<template>
  <div :class="[$style.enterpriseReady, 'featureSection']">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill>
          <h2>Enterprise ready</h2>
        </vue-grid-item>
        <vue-grid-item>
          <vue-panel>
            <vue-panel-body>
              <vue-icon name="fas fa-chart-line" />
              <h3>SEO</h3>
              <p>We support SEO (document head tags management) and server-side-rendering for search engines that support
                 indexing of JavaScript content. (eg. Google)</p>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item>
          <vue-panel>
            <vue-panel-body>
              <vue-icon name="fas fa-certificate" />
              <h3>Best practices</h3>
              <p>Common style guide, TypeScript and the best test setup: Automatically guarantee code quality and
                 non-breaking changes.</p>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item>
          <vue-panel>
            <vue-panel-body>
              <vue-icon name="fas fa-flag" />
              <h3>i18n</h3>
              <p>Scalable apps need to support multiple languages, easily add and support multiple languages with
                 vue-i18n.</p>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
  import VueGrid      from '../../shared/components/VueGrid/VueGrid';
  import VueGridItem  from '../../shared/components/VueGridItem/VueGridItem';
  import VuePanel     from '../../shared/components/VuePanel/VuePanel';
  import VuePanelBody from '../../shared/components/VuePanel/VuePanelBody/VuePanelBody';
  import VueGridRow   from '../../shared/components/VueGridRow/VueGridRow';
  import VueIcon      from '../../shared/components/VueIcon/VueIcon';

  export default {
    components: {
      VueGrid,
      VueGridItem,
      VuePanel,
      VuePanelBody,
      VueGridRow,
      VueIcon,
    },
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

  .enterpriseReady {
    display:    block;
    text-align: center;

    :global {
      .vuePanelBody {
        i {
          display:    inline-block;
          font-size:  $font-size-h1;
          margin-top: $space-unit;
        }
      }
    }

    @include background-gradient($brand-accent, $brand-light-primary, -135deg);
  }
</style>
