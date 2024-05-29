import type { StoryFn } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import VuePagination from './VuePagination.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Navigation/Pagination',
  component: VuePagination,
  argTypes: {
    pages: { control: { type: 'number', min: 5 } },
    selectedPage: { control: { type: 'number', min: 1 } },
    displayPages: { control: { type: 'number' }, min: 0 },
  },
};

const Template: StoryFn = (args) => ({
  components: {
    ComponentDocs,
    VuePagination,
  },
  inheritAttrs: false,
  setup() {
    return {
      args,
      onPrev: action('@prev'),
      onNext: action('@next'),
    };
  },
  template: `<component-docs
      component-name="Pagination"
      usage="Used to split a collection of content or data table into multiple pages - allowing the user to navigate to previous or next page."
  >
      <vue-pagination
          v-bind="args"
          :pages="args.pages"
          :selected-page="args.selectedPage"
          @prev="onPrev($event);"
          @next="onNext($event);"
      />
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {
    pages: 10,
    selectedPage: 1,
    displayPages: 5,
    slim: false,
    infinite: false,
    previousButtonLabel: 'Previous',
    nextButtonLabel: 'Next',
    selectedPageLabel: "You're on page",
  },
};
