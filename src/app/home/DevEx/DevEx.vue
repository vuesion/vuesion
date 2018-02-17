<template>
  <div :class="['feature-section', $style.devEx]">
    <vue-grid>
      <vue-grid-item fill>
        <h2>Development Experience</h2>
      </vue-grid-item>

      <vue-grid-item>
        <vue-panel>
          <vue-panel-body>
            <i class="fas fa-code"></i>
            <h3>Quick scaffolding</h3>
            <p>Create components, connected components, modules - and their tests - right from the CLI!</p>
          </vue-panel-body>
        </vue-panel>
      </vue-grid-item>

      <vue-grid-item>
        <vue-panel>
          <vue-panel-body>
            <i class="fas fa-bullhorn"></i>
            <h3>Instant feedback</h3>
            <p>Enjoy the best DX (Developer eXperience) and code your app at the speed of thought! Your saved changes to
               the CSS and TypeScript are reflected instantaneously
               without
               refreshing the page. Preserve application state even when you update something in the underlying
               code!</p>
          </vue-panel-body>
        </vue-panel>
      </vue-grid-item>

    </vue-grid>
  </div>
</template>

<script lang="ts">
  import VueGrid      from '../../shared/components/VueGrid/VueGrid';
  import VueGridItem  from '../../shared/components/VueGridItem/VueGridItem';
  import VuePanel     from '../../shared/components/VuePanel/VuePanel';
  import VuePanelBody from '../../shared/components/VuePanel/VuePanelBody/VuePanelBody';

  export default {
    components: {
      VueGrid,
      VueGridItem,
      VuePanel,
      VuePanelBody,
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
      .vue-panel-body {
        i {
          display:    inline-block;
          font-size:  $font-size-h1;
          margin-top: $grid-unit;
        }
      }
    }
  }
</style>
