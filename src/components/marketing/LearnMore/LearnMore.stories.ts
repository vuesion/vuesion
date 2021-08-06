import { storiesOf } from '@storybook/vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import LearnMore from './LearnMore.vue';

const story = storiesOf('Marketing|LearnMore', module) as any;

story.add(
  'Default',
  () => ({
    components: { ComponentDocs, LearnMore },
    template: `<component-docs
      component-name="LearnMore"
      usage="Used to display additional information and resources."
      story="Display a section to learn more about vuesion and a section for examples."
    >
      <learn-more />
    </component-docs>`,
  }),
  {
    info: {
      components: { LearnMore },
    },
  },
);
