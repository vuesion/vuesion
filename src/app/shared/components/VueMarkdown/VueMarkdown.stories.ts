import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import VueMarkdown     from './VueMarkdown.vue';

const story = (storiesOf('VueMarkdown', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  components: { VueMarkdown },
  template:   `
<vue-markdown>
# headline
## headline

- test
- test
  - test
</vue-markdown>`,
}));
