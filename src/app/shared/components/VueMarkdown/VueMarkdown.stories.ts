import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueMarkdown from './VueMarkdown.vue';

const story = storiesOf('Organisms|Markdown', module) as any;

story.add(
  'Default',
  withInfo({})(() => ({
    components: { VueMarkdown },
    template: `
<vue-markdown>
# headline 1
## headline 2

- test
- test
  - test
</vue-markdown>`,
  })),
);
