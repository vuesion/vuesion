<template>
  <div :class="['feature-section', $style.userExperience]">
    <vue-grid>

      <vue-grid-item fill>
        <h2>User experience</h2>
      </vue-grid-item>

      <vue-grid-item>
        <vue-panel>
          <vue-panel-body>
            <i class="fas fa-spinner"></i>
            <h3>Animations</h3>
            <p>A stable animations set up already included (<a href="http://animejs.com/" target="_blank"
                                                               rel="noopener">anime.js</a>).</p>
          </vue-panel-body>
        </vue-panel>
      </vue-grid-item>

      <vue-grid-item>
        <vue-panel>
          <vue-panel-body>
            <i class="fas fa-mobile"></i>
            <h3>Progressive-Web-App</h3>
            <p>Offline-first support with service-workers and a lighthouse score as high as possible (90+).</p>
          </vue-panel-body>
        </vue-panel>
      </vue-grid-item>

      <vue-grid-item>
        <vue-panel>
          <vue-panel-body>
            <i class="fas fa-puzzle-piece"></i>
            <h3>Components</h3>
            <p>
              A flexible component library that'll be extended over time.
            </p>
            <p>
              Visit the
              <router-link to="/components">Component's page</router-link>
              to see a preview of the available components.
            </p>
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

  .userExperience {
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
