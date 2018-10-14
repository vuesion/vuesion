<template>
  <div :class="[$style.devEx, 'featureSection']">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill class="vueGridItem">
          <h2>Development Experience</h2>
        </vue-grid-item>
      </vue-grid-row>
      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body>
              <vue-icon-code />
              <h3>Quick scaffolding</h3>
              <p>Create components, VueX connected components, modules - and their tests - right from the CLI!</p>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body>
              <vue-icon-bullhorn />
              <h3>Instant feedback</h3>
              <p>Enjoy the best DX (Developer eXperience) and code your app at the speed of thought!
                 Your saved changes to the CSS and TypeScript are reflected instantaneously
                 without refreshing the page or restarting your server.
                 Preserve application state even when you update something in the underlying code!</p>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
  import VueGrid         from '../../shared/components/VueGrid/VueGrid.vue';
  import VueGridItem     from '../../shared/components/VueGridItem/VueGridItem.vue';
  import VueGridRow      from '../../shared/components/VueGridRow/VueGridRow.vue';
  import VuePanel        from '../../shared/components/VuePanel/VuePanel.vue';
  import VuePanelBody    from '../../shared/components/VuePanel/VuePanelBody/VuePanelBody.vue';
  import VueIconCode     from '../../shared/components/icons/VueIconCode/VueIconCode.vue';
  import VueIconBullhorn from '../../shared/components/icons/VueIconBullhorn/VueIconBullhorn.vue';

  export default {
    components: {
      VueIconBullhorn,
      VueIconCode,
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

  .devEx {
    display:    block;
    text-align: center;

    i {
      height:  $font-size-h1;
      width:  $font-size-h1;
      margin-top: $space-unit;
    }

  }
</style>
