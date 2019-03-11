<template>
  <div :class="[$style.quickStart, 'featureSection']">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill class="vueGridItem"> <vue-headline level="2">Quick start</vue-headline> </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <vue-card class="vueCard">
            <vue-card-body class="vueCardBody">
              <vue-headline level="4">Via <code>npx</code></vue-headline>
              <ol>
                <li>
                  Run <code>npx @vuesion/service create [project-name]</code> for example
                  <code>npx @vuesion/service create my-app</code>
                </li>
                <li>Change directory <code>cd my-app</code></li>
                <li>Run <code>npm run dev</code></li>
              </ol>

              <vue-headline level="4">Via Git</vue-headline>
              <ol>
                <li>
                  Download or clone (<code>git clone https://github.com/<br />devCrossNet/vue-starter</code>) the
                  repository
                </li>
                <li>Change directory <code>cd vue-starter</code></li>
                <li>Install dependencies: <code>npm install</code></li>
                <li>Run <code>npm run dev</code></li>
              </ol>
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
import VueHeadline from '../../shared/components/VueHeadline/VueHeadline.vue';

export default {
  components: {
    VueHeadline,
    VueGrid,
    VueGridItem,
    VueCard,
    VueCardBody,
    VueGridRow,
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.quickStart {
  display: block;
  text-align: center;
  background: $primary-2-100;

  h2 {
    color: $brand-text-color-inverse;
  }

  :global {
    .vueCard {
      background: $brand-bg-color;
    }
  }

  :global {
    .vueCardBody {
      text-align: left;
      overflow: hidden;
      padding: 0;

      ol {
        padding: 0 0 0 $space-unit * 2;

        li {
          margin-bottom: $space-unit * 2;
        }
      }
    }
  }

  @include mediaMin(tabletPortrait) {
    :global {
      .vueCard {
        width: 50%;
        margin-left: 25%;
      }
    }
  }

  @include mediaMin(tabletLandscape) {
    :global {
      .vueCard {
        width: 33.3333333%;
        margin-left: 33.3333333%;
      }
    }
  }
}
</style>
