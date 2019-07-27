<template>
  <div>
    <vue-headline level="1">Icons</vue-headline>
    <br />
    <div :class="$style.icons">
      <vue-icon-book />
      <vue-icon-bullhorn />
      <vue-icon-certificate />
      <vue-icon-chart-line />
      <vue-icon-code />
      <vue-icon-flag />
      <vue-icon-github />
      <vue-icon-github-alt />
      <vue-icon-hashtag />
      <vue-icon-mobile />
      <vue-icon-puzzle-piece />
      <vue-icon-search />
      <vue-icon-sort />
      <vue-icon-sort-down />
      <vue-icon-sort-up />
      <vue-icon-spinner />
      <vue-icon-times />
      <vue-icon-twitter-square />
      <vue-icon-vuesion />
      <vue-icon-star />
    </div>
  </div>
</template>

<script lang="ts">
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';
import VueIconBook from '@components/icons/VueIconBook/VueIconBook.vue';
import VueIconBullhorn from '@components/icons/VueIconBullhorn/VueIconBullhorn.vue';
import VueIconCertificate from '@components/icons/VueIconCertificate/VueIconCertificate.vue';
import VueIconChartLine from '@components/icons/VueIconChartLine/VueIconChartLine.vue';
import VueIconCode from '@components/icons/VueIconCode/VueIconCode.vue';
import VueIconFlag from '@components/icons/VueIconFlag/VueIconFlag.vue';
import VueIconGithub from '@components/icons/VueIconGithub/VueIconGithub.vue';
import VueIconGithubAlt from '@components/icons/VueIconGithubAlt/VueIconGithubAlt.vue';
import VueIconHashtag from '@components/icons/VueIconHashtag/VueIconHashtag.vue';
import VueIconMobile from '@components/icons/VueIconMobile/VueIconMobile.vue';
import VueIconPuzzlePiece from '@components/icons/VueIconPuzzlePiece/VueIconPuzzlePiece.vue';
import VueIconSearch from '@components/icons/VueIconSearch/VueIconSearch.vue';
import VueIconSort from '@components/icons/VueIconSort/VueIconSort.vue';
import VueIconSortDown from '@components/icons/VueIconSortDown/VueIconSortDown.vue';
import VueIconSortUp from '@components/icons/VueIconSortUp/VueIconSortUp.vue';
import VueIconSpinner from '@components/icons/VueIconSpinner/VueIconSpinner.vue';
import VueIconTimes from '@components/icons/VueIconTimes/VueIconTimes.vue';
import VueIconTwitterSquare from '@components/icons/VueIconTwitterSquare/VueIconTwitterSquare.vue';
import VueIconVuesion from '@components/icons/VueIconVuesion/VueIconVuesion.vue';
import VueIconStar from '@components/icons/VueIconStar/VueIconStar.vue';

export default {
  name: 'IconList',
  components: {
    VueIconVuesion,
    VueIconTwitterSquare,
    VueIconTimes,
    VueIconSpinner,
    VueIconSortUp,
    VueIconSortDown,
    VueIconSort,
    VueIconSearch,
    VueIconPuzzlePiece,
    VueIconMobile,
    VueIconHashtag,
    VueIconGithubAlt,
    VueIconGithub,
    VueIconFlag,
    VueIconCode,
    VueIconChartLine,
    VueIconCertificate,
    VueIconBullhorn,
    VueIconBook,
    VueHeadline,
    VueIconStar,
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.icons {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: $space-20;

  i {
    width: $space-32;
    height: $space-32;
  }
}
</style>
