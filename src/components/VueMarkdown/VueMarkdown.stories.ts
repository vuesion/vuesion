import { storiesOf } from '@storybook/vue';
import VueMarkdown from './VueMarkdown.vue';

const story = storiesOf('Organisms|Markdown', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueMarkdown },
    template: `
<vue-markdown>
# headline 1
## headline 2

- test
- test
  - test
</vue-markdown>`,
  }),
  {
    info: {
      components: { VueMarkdown },
    },
  },
);
