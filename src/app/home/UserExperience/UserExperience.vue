<template>
  <div :class="[$style.userExperience, 'featureSection']">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill class="vueGridItem">
          <h2>User experience</h2>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body>
              <i class="fas fa-spinner" />
              <h3>Animations</h3>
              <p>A stable animations set up already included (<a href="http://animejs.com/" target="_blank"
                                                                 rel="noopener">anime.js</a>).</p>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body>
              <i class="fas fa-mobile" />
              <h3>Progressive-Web-App</h3>
              <p>Offline-first support with service-workers and a lighthouse score as high as possible (90+).</p>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body>
              <i class="fas fa-puzzle-piece" />
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

  export default {
    components: {
      VueGrid,
      VueGridItem,
      VuePanel,
      VuePanelBody,
      VueGridRow,
    },
  };
</script>

<style lang="scss" module>
  @import "../../shared/styles";

  .userExperience {
    display:    block;
    text-align: center;

    i {
      display:    inline-block;
      font-size:  $font-size-h1;
      margin-top: $space-unit;
    }

  }
</style>
