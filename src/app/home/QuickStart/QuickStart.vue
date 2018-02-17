<template>
  <div :class="['feature-section', $style.quickStart]">
    <vue-grid>

      <vue-grid-item fill>
        <h2>Quick start</h2>
      </vue-grid-item>

      <vue-grid-item>
        <vue-panel>
          <vue-panel-body>
            <ol>
              <li>Install Node.js 8.7.x or higher. Use <a href="https://github.com/creationix/nvm" target="_blank"
                                                          rel="noopener">nvm</a> to maintain multiple Node.js versions
              </li>
              <li>Install npm version 5.4.x or higher</li>
              <li>clone repository <code>git clone https://github.com/devCrossNet/vue-starter</code></li>
              <li>Install dependencies: <code>npm install</code></li>
              <li>Run <code>npm run dev</code>. The server runs on port <code>3000</code> by default, set
                <code>PORT</code> environment variable to configure a different port
              </li>
            </ol>
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

  .quickStart {
    display:    block;
    text-align: center;
    @include background-gradient($brand-dark-primary, $brand-primary, -31deg);

    :global {
      .vue-panel-body {
        text-align: left;
        overflow:   hidden;

        ol {
          margin-top: $grid-unit * 5;
          padding:    0 0 0 $grid-unit * 2;

          li {
            margin-bottom: $grid-unit * 2;
          }
        }
      }
    }

    @include media(tabletPortrait) {
      :global {
        .vue-panel {
          width:       50%;
          margin-left: 25%;
        }
      }
    }

    @include media(tabletLandscape) {
      :global {
        .vue-panel {
          width:       33.3333333%;
          margin-left: 33.3333333%;
        }
      }
    }
  }
</style>
