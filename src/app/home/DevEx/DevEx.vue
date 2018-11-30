<template>
  <div :class="[$style.devEx, 'featureSection']">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill class="vueGridItem">
          <vue-headline level="2">Development Experience</vue-headline>
        </vue-grid-item>
      </vue-grid-row>
      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <vue-card class="vueCard">
            <vue-card-body>
              <vue-icon-code />
              <vue-headline level="3">Quick scaffolding</vue-headline>
              <p>Create components, VueX connected components, modules - and their tests - right from the CLI!</p>
            </vue-card-body>
          </vue-card>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <vue-card class="vueCard">
            <vue-card-body>
              <vue-icon-bullhorn />
              <vue-headline level="3">Instant feedback</vue-headline>
              <p>
                Enjoy the best DX (Developer eXperience) and code your app at the speed of thought! Your saved changes
                to the CSS and TypeScript are reflected instantaneously without refreshing the page or restarting your
                server. Preserve application state even when you update something in the underlying code!
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
import VueGridRow from '../../shared/components/VueGridRow/VueGridRow.vue';
import VueCard from '../../shared/components/VueCard/VueCard.vue';
import VueCardBody from '../../shared/components/VueCard/VueCardBody/VueCardBody.vue';
import VueIconCode from '../../shared/components/icons/VueIconCode/VueIconCode.vue';
import VueIconBullhorn from '../../shared/components/icons/VueIconBullhorn/VueIconBullhorn.vue';
import VueHeadline from '../../shared/components/VueHeadline/VueHeadline.vue';

export default {
  components: {
    VueHeadline,
    VueIconBullhorn,
    VueIconCode,
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

.devEx {
  display: block;
  text-align: center;

  i {
    height: $font-size-h1;
    width: $font-size-h1;
    margin-top: $space-unit;
  }
}
</style>
