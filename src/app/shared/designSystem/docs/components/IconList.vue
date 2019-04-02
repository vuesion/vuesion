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
    </div>
  </div>
</template>

<script lang="ts">
import VueHeadline from '@/app/shared/components/VueHeadline/VueHeadline.vue';
import VueIconBook from '@/app/shared/components/icons/VueIconBook/VueIconBook.vue';
import VueIconBullhorn from '@/app/shared/components/icons/VueIconBullhorn/VueIconBullhorn.vue';
import VueIconCertificate from '@/app/shared/components/icons/VueIconCertificate/VueIconCertificate.vue';
import VueIconChartLine from '@/app/shared/components/icons/VueIconChartLine/VueIconChartLine.vue';
import VueIconCode from '@/app/shared/components/icons/VueIconCode/VueIconCode.vue';
import VueIconFlag from '@/app/shared/components/icons/VueIconFlag/VueIconFlag.vue';
import VueIconGithub from '@/app/shared/components/icons/VueIconGithub/VueIconGithub.vue';
import VueIconGithubAlt from '@/app/shared/components/icons/VueIconGithubAlt/VueIconGithubAlt.vue';
import VueIconHashtag from '@/app/shared/components/icons/VueIconHashtag/VueIconHashtag.vue';
import VueIconMobile from '@/app/shared/components/icons/VueIconMobile/VueIconMobile.vue';
import VueIconPuzzlePiece from '@/app/shared/components/icons/VueIconPuzzlePiece/VueIconPuzzlePiece.vue';
import VueIconSearch from '@/app/shared/components/icons/VueIconSearch/VueIconSearch.vue';
import VueIconSort from '@/app/shared/components/icons/VueIconSort/VueIconSort.vue';
import VueIconSortDown from '@/app/shared/components/icons/VueIconSortDown/VueIconSortDown.vue';
import VueIconSortUp from '@/app/shared/components/icons/VueIconSortUp/VueIconSortUp.vue';
import VueIconSpinner from '@/app/shared/components/icons/VueIconSpinner/VueIconSpinner.vue';
import VueIconTimes from '@/app/shared/components/icons/VueIconTimes/VueIconTimes.vue';
import VueIconTwitterSquare from '@/app/shared/components/icons/VueIconTwitterSquare/VueIconTwitterSquare.vue';
import VueIconVuesion from '@/app/shared/components/icons/VueIconVuesion/VueIconVuesion.vue';

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
