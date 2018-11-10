import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueIconBook from './VueIconBook/VueIconBook.vue';
import VueIconBullhorn from './VueIconBullhorn/VueIconBullhorn.vue';
import VueIconCertificate from './VueIconCertificate/VueIconCertificate.vue';
import VueIconChartLine from './VueIconChartLine/VueIconChartLine.vue';
import VueIconCode from './VueIconCode/VueIconCode.vue';
import VueIconFlag from './VueIconFlag/VueIconFlag.vue';
import VueIconGithub from './VueIconGithub/VueIconGithub.vue';
import VueIconGithubAlt from './VueIconGithubAlt/VueIconGithubAlt.vue';
import VueIconHashtag from './VueIconHashtag/VueIconHashtag.vue';
import VueIconMobile from './VueIconMobile/VueIconMobile.vue';
import VueIconPuzzlePiece from './VueIconPuzzlePiece/VueIconPuzzlePiece.vue';
import VueIconSearch from './VueIconSearch/VueIconSearch.vue';
import VueIconSort from './VueIconSort/VueIconSort.vue';
import VueIconSortDown from './VueIconSortDown/VueIconSortDown.vue';
import VueIconSortUp from './VueIconSortUp/VueIconSortUp.vue';
import VueIconSpinner from './VueIconSpinner/VueIconSpinner.vue';
import VueIconTimes from './VueIconTimes/VueIconTimes.vue';
import VueIconTwitterSquare from './VueIconTwitterSquare/VueIconTwitterSquare.vue';

const story = storiesOf('1. Design System|6. Icons', module) as any;

story.addParameters({ options: { showAddonPanel: false } });

story.add(
  'Icons',
  withInfo({
    header: false,
    source: false,
    propTables: false,
    styles: { propTableHead: { display: 'none' } },
    propTablesExclude: [
      VueIconBook,
      VueIconBullhorn,
      VueIconCertificate,
      VueIconChartLine,
      VueIconCode,
      VueIconFlag,
      VueIconGithub,
      VueIconGithubAlt,
      VueIconHashtag,
      VueIconMobile,
      VueIconPuzzlePiece,
      VueIconSearch,
      VueIconSort,
      VueIconSortDown,
      VueIconSortUp,
      VueIconSpinner,
      VueIconTimes,
      VueIconTwitterSquare,
    ],
  })(() => ({
    components: {
      VueIconBook,
      VueIconBullhorn,
      VueIconCertificate,
      VueIconChartLine,
      VueIconCode,
      VueIconFlag,
      VueIconGithub,
      VueIconGithubAlt,
      VueIconHashtag,
      VueIconMobile,
      VueIconPuzzlePiece,
      VueIconSearch,
      VueIconSort,
      VueIconSortDown,
      VueIconSortUp,
      VueIconSpinner,
      VueIconTimes,
      VueIconTwitterSquare,
    },
    template: `
<div>
  <vue-icon-book />
  <vue-icon-bullhorn />
  <vue-icon-certificate />
  <vue-icon-chart-line />
  <vue-icon-code/>
  <vue-icon-flag />
  <vue-icon-github/>
  <vue-icon-github-alt/>
  <vue-icon-hashtag/>
  <vue-icon-mobile/>
  <vue-icon-puzzle-piece/>
  <vue-icon-search/>
  <vue-icon-sort/>
  <vue-icon-sort-down/>
  <vue-icon-sort-up/>
  <vue-icon-spinner/>
  <vue-icon-times/>
  <vue-icon-twitter-square/>
</div>`,
  })),
);
