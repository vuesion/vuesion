<template>
  <div :class="$style.vueFooter">
    <vue-grid with-vertical-space text-align="center">
      <vue-grid-row>
        <vue-grid-column>
          <small>&copy; Copyright {{ year }} Johannes Werner</small>
        </vue-grid-column>

        <vue-grid-column>
          <a href="https://github.com/devCrossNet" target="_blank" rel="noopener" aria-label="github profile">
            <vue-icon-github-alt />
          </a>
          <a href="https://twitter.com/vuesion1" target="_blank" rel="noopener" aria-label="twitter profile">
            <vue-icon-twitter-square />
          </a>
        </vue-grid-column>

        <vue-grid-column>
          <small>
            <a href="https://github.com/vuesion/vuesion/blob/master/LICENSE" target="_blank" rel="noopener">
              MIT License
            </a>
          </small>
        </vue-grid-column>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import VueGrid from '../VueGrid/VueGrid.vue';
import VueGridRow from '../VueGrid/VueGridRow/VueGridRow.vue';
import VueGridColumn from '../VueGrid/VueGridColumn/VueGridColumn.vue';
import VueIconGithubAlt from '../icons/VueIconGithubAlt/VueIconGithubAlt.vue';
import VueIconTwitterSquare from '../icons/VueIconTwitterSquare/VueIconTwitterSquare.vue';

export default {
  name: 'VueFooter',
  components: {
    VueIconTwitterSquare,
    VueIconGithubAlt,
    VueGrid,
    VueGridColumn,
    VueGridRow,
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.vueFooter {
  padding: $footer-padding;
  background: $footer-bg;
  color: $footer-color;
  text-align: center;

  i {
    height: $font-size-lg;
    width: $font-size-lg;
    fill: $footer-link-color;

    &:hover {
      fill: $footer-link-hover-color;
    }
  }

  a {
    color: $footer-link-color;
    font-weight: $footer-link-font-weight;

    &:hover {
      color: $footer-link-hover-color;
    }
  }
}
</style>
