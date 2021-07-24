import { storiesOf } from '@storybook/vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import VueMarkdown from './VueMarkdown.vue';

const story = storiesOf('Data display|Markdown', module) as any;

story.add(
  'Default',
  () => ({
    components: { ComponentDocs, VueMarkdown },
    template: `<component-docs
      component-name="Markdown"
      usage="Display markdown content as HTML."
      story="Display markdown content."
    >
      <vue-markdown>
# headline 1
## headline 2

- test
- test
- test
      </vue-markdown>
    </component-docs>`,
  }),
  {
    info: {
      components: { VueMarkdown },
    },
  },
);
