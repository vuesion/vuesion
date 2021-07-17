import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { i18n } from '@/test/i18n';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import VueToggle from '@/components/input-and-actions/VueToggle/VueToggle.vue';
import VueInput from '@/components/input-and-actions/VueInput/VueInput.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';
import VueTiles from '@/components/layout/VueTiles/VueTiles.vue';
import VuePagination from './VuePagination.vue';

const story = storiesOf('Navigation|Pagination', module) as any;
// TODO: add usage
story.add(
  'Default',
  () => ({
    i18n,
    components: { ComponentDocs, VuePagination, VueToggle, VueInput, VueStack, VueInline, VueTiles },
    data() {
      return {
        pages: 10,
        selectedPage: 1,
        displayPages: 5,
        slim: false,
        infinite: false,
      };
    },
    template: `<component-docs
      component-name="Pagination"
      usage="TBD"
      story="Show pagination with all its properties"
    >
    <vue-stack space="64">
      <vue-tiles columns="3">
        <vue-input label="Pages" name="pages" id="pages" v-model="pages" />
        <vue-input label="Selected Page" name="selected-page" id="selected-page" v-model="selectedPage" />
        <vue-input label="Display Pages" name="display-pages" id="display-pages" v-model="displayPages" />
        <vue-toggle label="Slim mode" name="slim" id="slim" v-model="slim" />
        <vue-toggle label="Infinite" name="infinite" id="infinite" v-model="infinite" />
      </vue-tiles>

      <vue-inline>
        <vue-pagination
          :pages="pages"
          :selected-page="selectedPage"
          :display-pages="displayPages"
          :slim="slim"
          :infinite="infinite"
          @prev="onPrev($event); selectedPage = selectedPage - $event;"
          @next="onNext($event); selectedPage = selectedPage + $event;"
        />
      </vue-inline>
    </vue-stack>
    </component-docs>`,
    methods: {
      onPrev: action('@prev'),
      onNext: action('@next'),
    },
  }),
  {
    info: {
      components: { VuePagination },
    },
  },
);
