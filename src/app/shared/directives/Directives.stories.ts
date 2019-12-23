import { storiesOf } from '@storybook/vue';

const story = storiesOf('Utilities|Directives', module) as any;

story.add('sr-only', () => ({
  components: {},
  template: `<div v-sr-only>this text is only visible for screen-readers</div>`,
}));
