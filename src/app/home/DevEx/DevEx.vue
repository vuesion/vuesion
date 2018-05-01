<template>
  <div :class="[$style.devEx, 'featureSection']">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill>
          <h2>Development Experience</h2>
        </vue-grid-item>
      </vue-grid-row>
      <vue-grid-row>
        <vue-grid-item>
          <vue-panel>
            <vue-panel-body>
              <vue-icon name="fas fa-code" />
              <h3>Quick scaffolding</h3>
              <p>Create components, connected components, modules - and their tests - right from the CLI!</p>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item>
          <vue-panel>
            <vue-panel-body>
              <vue-icon name="fas fa-bullhorn" />
              <h3>Instant feedback</h3>
              <p>Enjoy the best DX (Developer eXperience) and code your app at the speed of thought! Your saved changes to
                 the CSS and TypeScript are reflected instantaneously
                 without
                 refreshing the page. Preserve application state even when you update something in the underlying
                 code!</p>
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
  import VueGridRow  from '../../shared/components/VueGridRow/VueGridRow';
  import VuePanel     from '../../shared/components/VuePanel/VuePanel';
  import VuePanelBody from '../../shared/components/VuePanel/VuePanelBody/VuePanelBody';
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

  .devEx {
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
  }
</style>
