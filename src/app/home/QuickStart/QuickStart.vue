<template>
  <div :class="[$style.quickStart, 'featureSection']">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill class="vueGridItem">
          <h2>Quick start</h2>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body class="vuePanelBody">
              <ol>
                <li>Install Node.js 8.7.x or higher. Use <a href="https://github.com/creationix/nvm" target="_blank"
                                                            rel="noopener">nvm</a> to maintain multiple Node.js versions
                </li>
                <li>Install Node.js 8.x or higher.</li>
                <li>Install npm version 5.x or higher</li>
                <li>clone repository <code>git clone https://github.com/devCrossNet/vue-starter</code></li>
                <li>change directory <code>cd vue-starter</code></li>
                <li>Install dependencies: <code>npm install</code></li>
                <li>Run <code>npm run dev</code></li>
              </ol>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
  import VueGrid      from '../../shared/components/VueGrid/VueGrid.vue';
  import VueGridItem  from '../../shared/components/VueGridItem/VueGridItem.vue';
  import VuePanel     from '../../shared/components/VuePanel/VuePanel.vue';
  import VuePanelBody from '../../shared/components/VuePanel/VuePanelBody/VuePanelBody.vue';
  import VueGridRow   from '../../shared/components/VueGridRow/VueGridRow.vue';

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

  .quickStart {
    display:    block;
    text-align: center;
    background: $primary-2-1;

    h2 {
      color: $text-color-inverse;
    }

    :global {
      .vuePanel {
        background: $bg-color;
      }
    }

    :global {
      .vuePanelBody {
        text-align: left;
        overflow:   hidden;

        ol {
          margin-top: $space-unit * 5;
          padding:    0 0 0 $space-unit * 2;

          li {
            margin-bottom: $space-unit * 2;
          }
        }
      }
    }

    @include media(tabletPortrait) {
      :global {
        .vuePanel {
          width:       50%;
          margin-left: 25%;
        }
      }
    }

    @include media(tabletLandscape) {
      :global {
        .vuePanel {
          width:       33.3333333%;
          margin-left: 33.3333333%;
        }
      }
    }
  }
</style>
