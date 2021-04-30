<template>
  <vue-box>
    <vue-inline :class="$style.icons" space="56">
      <div :class="$style.icon"><vue-icon-book />book</div>
      <div :class="$style.icon"><vue-icon-bullhorn />bullhorn</div>
      <div :class="$style.icon"><vue-icon-certificate />certificate</div>
      <div :class="$style.icon"><vue-icon-chart-line />chart-line</div>
      <div :class="$style.icon"><vue-icon-code />code</div>
      <div :class="$style.icon"><vue-icon-flag />flag</div>
      <div :class="$style.icon"><vue-icon-github />github</div>
      <div :class="$style.icon"><vue-icon-github-alt />github-alt</div>
      <div :class="$style.icon"><vue-icon-hashtag />hashtag</div>
      <div :class="$style.icon"><vue-icon-info-circle />info-circle</div>
      <div :class="$style.icon"><vue-icon-mobile />mobile</div>
      <div :class="$style.icon"><vue-icon-puzzle-piece />puzzle-piece</div>
      <div :class="$style.icon"><vue-icon-search />search</div>
      <div :class="$style.icon"><vue-icon-sort />sort</div>
      <div :class="$style.icon"><vue-icon-sort-down />sort-down</div>
      <div :class="$style.icon"><vue-icon-sort-up />sort-up</div>
      <div :class="$style.icon"><vue-icon-spinner />spinner</div>
      <div :class="$style.icon"><vue-icon-star />star</div>
      <div :class="$style.icon"><vue-icon-times />times</div>
      <div :class="$style.icon"><vue-icon-vuesion />vuesion</div>
    </vue-inline>
  </vue-box>
</template>

<script lang="ts">
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';
import VueIconBook from '@/components/atoms/icons/VueIconBook/VueIconBook.vue';
import VueIconBullhorn from '@/components/atoms/icons/VueIconBullhorn/VueIconBullhorn.vue';
import VueIconCertificate from '@/components/atoms/icons/VueIconCertificate/VueIconCertificate.vue';
import VueIconChartLine from '@/components/atoms/icons/VueIconChartLine/VueIconChartLine.vue';
import VueIconCode from '@/components/atoms/icons/VueIconCode/VueIconCode.vue';
import VueIconFlag from '@/components/atoms/icons/VueIconFlag/VueIconFlag.vue';
import VueIconGithub from '@/components/atoms/icons/VueIconGithub/VueIconGithub.vue';
import VueIconGithubAlt from '@/components/atoms/icons/VueIconGithubAlt/VueIconGithubAlt.vue';
import VueIconHashtag from '@/components/atoms/icons/VueIconHashtag/VueIconHashtag.vue';
import VueIconMobile from '@/components/atoms/icons/VueIconMobile/VueIconMobile.vue';
import VueIconPuzzlePiece from '@/components/atoms/icons/VueIconPuzzlePiece/VueIconPuzzlePiece.vue';
import VueIconSearch from '@/components/atoms/icons/VueIconSearch/VueIconSearch.vue';
import VueIconSort from '@/components/atoms/icons/VueIconSort/VueIconSort.vue';
import VueIconSortDown from '@/components/atoms/icons/VueIconSortDown/VueIconSortDown.vue';
import VueIconSortUp from '@/components/atoms/icons/VueIconSortUp/VueIconSortUp.vue';
import VueIconSpinner from '@/components/atoms/icons/VueIconSpinner/VueIconSpinner.vue';
import VueIconStar from '@/components/atoms/icons/VueIconStar/VueIconStar.vue';
import VueIconTimes from '@/components/atoms/icons/VueIconTimes/VueIconTimes.vue';
import VueIconVuesion from '@/components/atoms/icons/VueIconVuesion/VueIconVuesion.vue';
import VueIconInfoCircle from '@/components/atoms/icons/VueIconInfoCircle/VueIconInfoCircle.vue';

export default {
  name: 'IconList',
  components: {
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
    VueInline,
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
    min-width: 150px;

    i {
      width: $space-32;
      height: $space-32;
    }
  }
}
</style>
