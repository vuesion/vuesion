import { StoryFn } from '@storybook/vue3';
import FeatureList from './FeatureList.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Marketing/FeatureList',
  component: FeatureList,
};

const Template: StoryFn = (args) => ({
  components: { FeatureList, ComponentDocs },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="FeatureList"
      usage="Used to display the most important features of your product."
      story="Display Vuesion features"
  >
  <feature-list/>
  </component-docs>`,
});

export const Default = {
  render: Template,
  args: {},
};
