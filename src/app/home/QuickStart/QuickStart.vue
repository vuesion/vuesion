<template>
  <div :class="['feature-section', $style.quickStart]">
    <vue-grid>
      <vue-grid-item fill>
        <h2>Quick start</h2>
      </vue-grid-item>

      <vue-panel>
        <vue-panel-body>
          <ol>
            <li>Install Node.js 8.7.x or higher. Use <a href="https://github.com/creationix/nvm" target="_blank" rel="noopener">nvm</a> to maintain multiple Node.js versions</li>
            <li>Install npm version 5.4.x or higher</li>
            <li>clone repository <code>git clone https://github.com/devCrossNet/vue-starter</code></li>
            <li>Install dependencies: <code>npm install</code></li>
            <li>Run <code>npm run dev</code>. The server runs on port <code>3000</code> by default, set <code>PORT</code> environment variable to configure a different port</li>
          </ol>
        </vue-panel-body>
      </vue-panel>

    </vue-grid>
  </div>
</template>

<script lang="ts">
  import VueGrid from '../../shared/components/VueGrid/VueGrid';
  import VueGridItem from '../../shared/components/VueGridItem/VueGridItem';
  import VuePanel from '../../shared/components/VuePanel/VuePanel';
  import VuePanelBody from '../../shared/components/VuePanel/VuePanelBody/VuePanelBody';

  export default {
    components: {
      VueGrid,
      VueGridItem,
      VuePanel,
      VuePanelBody,
    },
    props: {},
    data(): any {
      return {};
    },
    computed: {},
    methods: {},
  };
</script>

<style lang="scss" module>
  @import "../../shared/variables";

  .quickStart {
    display:    block;
    text-align: center;
    background: linear-gradient(-31deg, $brand-dark-primary 0%,  $brand-primary 100%);

    :global {
      .vue-panel-body {
        text-align: left;

        ol {
          margin-top: $grid-unit * 5;
          padding:    0 0 0 $grid-unit * 2.5;
          overflow:   hidden;

          li {
            margin-bottom: $grid-unit * 2;
          }
        }
      }
    }
  }

  @media (min-width: $screen-tablet-portrait) {
    .quickStart {
      :global {
        .vue-panel {
          width:       50%;
          margin-left: 25%;
        }
      }
    }
  }

  @media (min-width: $screen-tablet-landscape) {
    .quickStart {
      :global {
        .vue-panel {
          width:       33.3333333%;
          margin-left: 33.3333333%;
        }
      }
    }
  }
</style>
