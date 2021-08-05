import { storiesOf } from '@storybook/vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import ValueProposition from './ValueProposition.vue';

const story = storiesOf('Marketing|ValueProposition', module) as any;

story.add(
  'Default',
  () => ({
    components: { ComponentDocs, ValueProposition },
    template: `<component-docs
      component-name="ValueProposition"
      usage="Used to convey the benefits of the product for different target audiences."
      story="Display value propositions for PMs, Engineering Managers, Engineers, Designers and teams."
    >
      <value-proposition />
    </component-docs>`,
  }),
  {
    info: {
      components: { ValueProposition },
    },
  },
);
