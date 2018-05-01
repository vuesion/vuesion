<template>
  <div :class="[$style.userExperience, 'featureSection']">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill>
          <h2>User experience</h2>
        </vue-grid-item>

        <vue-grid-item>
          <vue-panel>
            <vue-panel-body>
              <vue-icon name="fas fa-spinner" />
              <h3>Animations</h3>
              <p>A stable animations set up already included (<a href="http://animejs.com/" target="_blank"
                                                                 rel="noopener">anime.js</a>).</p>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item>
          <vue-panel>
            <vue-panel-body>
              <vue-icon name="fas fa-mobile" />
              <h3>Progressive-Web-App</h3>
              <p>Offline-first support with service-workers and a lighthouse score as high as possible (90+).</p>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item>
          <vue-panel>
            <vue-panel-body>
              <vue-icon name="fas fa-puzzle-piece" />
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

  .userExperience {
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
