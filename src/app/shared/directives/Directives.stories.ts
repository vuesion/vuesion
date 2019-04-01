/* tslint:disable */
import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';

let story = storiesOf('Utilities|Directives', module) as any;

story.add(
  'sr-only',
  withInfo({})(() => ({
    components: {},
    template: `<div v-sr-only>this text is only visible for screen-readers</div>`,
  })),
);
