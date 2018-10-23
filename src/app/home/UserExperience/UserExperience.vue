<template>
  <div :class="[$style.userExperience, 'featureSection']">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill class="vueGridItem">
          <vue-headline level="2">User experience</vue-headline>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body>
              <vue-icon-spinner />
              <vue-headline level="3">Animations</vue-headline>
              <p>A stable animations set up already included (<a href="http://animejs.com/" target="_blank"
                                                                 rel="noopener">anime.js</a>).</p>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body>
              <vue-icon-mobile />
              <vue-headline level="3">Progressive-Web-App</vue-headline>
              <p>Offline-first support with service-workers and a lighthouse score as high as possible (90+).</p>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body>
              <vue-icon-puzzle-piece />
              <vue-headline level="3">Design System</vue-headline>
              <p>
                Includes a blueprint for a 100% customizable Design System with a huge amount of
                <router-link to="/storybook">components</router-link>
                .
              </p>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
  import VueGrid            from '../../shared/components/VueGrid/VueGrid.vue';
  import VueGridItem        from '../../shared/components/VueGridItem/VueGridItem.vue';
  import VuePanel           from '../../shared/components/VuePanel/VuePanel.vue';
  import VuePanelBody       from '../../shared/components/VuePanel/VuePanelBody/VuePanelBody.vue';
  import VueGridRow         from '../../shared/components/VueGridRow/VueGridRow.vue';
  import VueIconSpinner     from '../../shared/components/icons/VueIconSpinner/VueIconSpinner.vue';
  import VueIconMobile      from '../../shared/components/icons/VueIconMobile/VueIconMobile.vue';
  import VueIconPuzzlePiece from '../../shared/components/icons/VueIconPuzzlePiece/VueIconPuzzlePiece.vue';
  import VueHeadline        from '../../shared/components/VueHeadline/VueHeadline.vue';

  export default {
    components: {
      VueHeadline,
      VueIconPuzzlePiece,
      VueIconMobile,
      VueIconSpinner,
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
    background: $bg-color-variant;

    i {
      display:    inline-block;
      height:     $font-size-h1;
      width:      $font-size-h1;
      margin-top: $space-unit;
    }

    a {
      color: $text-color;

      &:hover {
        color: $text-color;
      }
    }

    :global {
      .vuePanel {
        background: $tertiary-4;
      }
    }

  }
</style>
