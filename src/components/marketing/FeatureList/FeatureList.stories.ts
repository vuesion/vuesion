import { storiesOf } from '@storybook/vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import FeatureList from './FeatureList.vue';

const story = storiesOf('Marketing|FeatureList', module) as any;

story.add(
  'Default',
  () => ({
    components: { ComponentDocs, FeatureList },
    template: `<component-docs
      component-name="FeatureList"
      usage="Used to display the most important features of your product."
      story="Display Vuesion features"
    >
      <feature-list/>
    </component-docs>`,
  }),
  {
    info: {
      components: { FeatureList },
    },
  },
);
