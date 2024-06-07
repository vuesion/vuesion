import type { StoryFn } from '@storybook/vue3';
import { ref } from 'vue';
import VuePagination from './VuePagination.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueText from '~/components/typography/VueText/VueText.vue';

export default {
  components: { VueText },
  title: 'Navigation/Pagination',
  component: VuePagination,
  argTypes: {},
};

const Template: StoryFn = (args) => ({
  components: {
    ComponentDocs,
    VuePagination,
    VueStack,
    VueText,
  },
  inheritAttrs: false,
  setup() {
    const itemsPerPage = ref(5);
    const selectedPage = ref(1);

    return {
      args,
      itemsPerPage,
      selectedPage,
    };
  },
  template: `<component-docs
      component-name="Pagination"
      usage="Used to split a collection of content or data table into multiple pages - allowing the user to navigate to previous or next page."
  >
    <vue-stack space="64">
      <vue-stack space="4">
        <vue-text weight="semi-bold">Models:</vue-text>
        <vue-text>itemsPerPage: {{itemsPerPage}}</vue-text>
        <vue-text>selectedPage: {{selectedPage}}</vue-text>
      </vue-stack>
      <vue-pagination
        v-bind="args"
        v-model:items-per-page="itemsPerPage"
        v-model:selected-page="selectedPage"
      />
    </vue-stack>
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {
    resultCount: 133,
    itemsPerPage: 5,
    selectedPage: 1,
    slim: false,
    buttonsOnly: false,
    buttonLook: 'primary',
    infinite: false,
  },
};
