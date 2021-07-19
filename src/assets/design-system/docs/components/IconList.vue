<template>
  <vue-box>
    <vue-tiles :class="$style.icons" :columns="[2, 6, 8]">
      <div :class="$style.icon"><vue-icon-arrow-up />arrow-up</div>
      <div :class="$style.icon"><vue-icon-book />book</div>
      <div :class="$style.icon"><vue-icon-bullhorn />bullhorn</div>
      <div :class="$style.icon"><vue-icon-certificate />certificate</div>
      <div :class="$style.icon"><vue-icon-chart-line />chart-line</div>
      <div :class="$style.icon"><vue-icon-checkmark />checkmark</div>
      <div :class="$style.icon"><vue-icon-chevron-down />chevron-down</div>
      <div :class="$style.icon"><vue-icon-chevron-left />chevron-left</div>
      <div :class="$style.icon"><vue-icon-chevron-right />chevron-right</div>
      <div :class="$style.icon"><vue-icon-chevron-up />chevron-up</div>
      <div :class="$style.icon"><vue-icon-code />code</div>
      <div :class="$style.icon"><vue-icon-dribbble />dribbble</div>
      <div :class="$style.icon"><vue-icon-eye />eye</div>
      <div :class="$style.icon"><vue-icon-facebook />facebook</div>
      <div :class="$style.icon"><vue-icon-flag />flag</div>
      <div :class="$style.icon"><vue-icon-github />github</div>
      <div :class="$style.icon"><vue-icon-github-alt />github-alt</div>
      <div :class="$style.icon"><vue-icon-hashtag />hashtag</div>
      <div :class="$style.icon"><vue-icon-home />home</div>
      <div :class="$style.icon"><vue-icon-info-circle />info-circle</div>
      <div :class="$style.icon"><vue-icon-instagram />instagram</div>
      <div :class="$style.icon"><vue-icon-mobile />mobile</div>
      <div :class="$style.icon"><vue-icon-puzzle-piece />puzzle-piece</div>
      <div :class="$style.icon"><vue-icon-search />search</div>
      <div :class="$style.icon"><vue-icon-sort />sort</div>
      <div :class="$style.icon"><vue-icon-sort-down />sort-down</div>
      <div :class="$style.icon"><vue-icon-sort-up />sort-up</div>
      <div :class="$style.icon"><vue-icon-spinner />spinner</div>
      <div :class="$style.icon"><vue-icon-star />star</div>
      <div :class="$style.icon"><vue-icon-times />times</div>
      <div :class="$style.icon"><vue-icon-twitter />twitter</div>
      <div :class="$style.icon"><vue-icon-twitter-square />twitter-square</div>
      <div :class="$style.icon"><vue-icon-vuesion />vuesion</div>
    </vue-tiles>
  </vue-box>
</template>

<script lang="ts">
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueIconBook from '@/components/icons/VueIconBook/VueIconBook.vue';
import VueIconBullhorn from '@/components/icons/VueIconBullhorn/VueIconBullhorn.vue';
import VueIconCertificate from '@/components/icons/VueIconCertificate/VueIconCertificate.vue';
import VueIconChartLine from '@/components/icons/VueIconChartLine/VueIconChartLine.vue';
import VueIconCode from '@/components/icons/VueIconCode/VueIconCode.vue';
import VueIconFlag from '@/components/icons/VueIconFlag/VueIconFlag.vue';
import VueIconGithub from '@/components/icons/VueIconGithub/VueIconGithub.vue';
import VueIconGithubAlt from '@/components/icons/VueIconGithubAlt/VueIconGithubAlt.vue';
import VueIconHashtag from '@/components/icons/VueIconHashtag/VueIconHashtag.vue';
import VueIconMobile from '@/components/icons/VueIconMobile/VueIconMobile.vue';
import VueIconPuzzlePiece from '@/components/icons/VueIconPuzzlePiece/VueIconPuzzlePiece.vue';
import VueIconSearch from '@/components/icons/VueIconSearch/VueIconSearch.vue';
import VueIconSort from '@/components/icons/VueIconSort/VueIconSort.vue';
import VueIconSortDown from '@/components/icons/VueIconSortDown/VueIconSortDown.vue';
import VueIconSortUp from '@/components/icons/VueIconSortUp/VueIconSortUp.vue';
import VueIconSpinner from '@/components/icons/VueIconSpinner/VueIconSpinner.vue';
import VueIconStar from '@/components/icons/VueIconStar/VueIconStar.vue';
import VueIconTimes from '@/components/icons/VueIconTimes/VueIconTimes.vue';
import VueIconVuesion from '@/components/icons/VueIconVuesion/VueIconVuesion.vue';
import VueIconInfoCircle from '@/components/icons/VueIconInfoCircle/VueIconInfoCircle.vue';
import VueIconChevronDown from '@/components/icons/VueIconChevronDown/VueIconChevronDown.vue';
import VueIconCheckmark from '@/components/icons/VueIconCheckmark/VueIconCheckmark.vue';
import VueIconArrowUp from '@/components/icons/VueIconArrowUp/VueIconArrowUp.vue';
import VueIconHome from '@/components/icons/VueIconHome/VueIconHome.vue';
import VueIconEye from '@/components/icons/VueIconEye/VueIconEye.vue';
import VueIconChevronLeft from '@/components/icons/VueIconChevronLeft/VueIconChevronLeft.vue';
import VueIconChevronRight from '@/components/icons/VueIconChevronRight/VueIconChevronRight.vue';
import VueIconChevronUp from '@/components/icons/VueIconChevronUp/VueIconChevronUp.vue';
import VueIconFacebook from '@/components/icons/VueIconFacebook/VueIconFacebook.vue';
import VueIconInstagram from '@/components/icons/VueIconInstagram/VueIconInstagram.vue';
import VueIconTwitter from '@/components/icons/VueIconTwitter/VueIconTwitter.vue';
import VueIconTwitterSquare from '@/components/icons/VueIconTwitterSquare/VueIconTwitterSquare.vue';
import VueIconDribbble from '@/components/icons/VueIconDribbble/VueIconDribbble.vue';
import VueTiles from '@/components/layout/VueTiles/VueTiles.vue';

export default {
  name: 'IconList',
  components: {
    VueTiles,
    VueIconDribbble,
    VueIconTwitterSquare,
    VueIconTwitter,
    VueIconInstagram,
    VueIconFacebook,
    VueIconChevronUp,
    VueIconChevronRight,
    VueIconChevronLeft,
    VueIconEye,
    VueIconHome,
    VueIconArrowUp,
    VueIconCheckmark,
    VueIconChevronDown,
    VueIconInfoCircle,
    VueIconVuesion,
    VueIconTimes,
    VueIconStar,
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
    VueBox,
  },
};
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.icons {
  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    i {
      width: $space-32;
      height: $space-32;
    }
  }
}
</style>
