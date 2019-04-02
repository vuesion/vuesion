import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueImage from './VueImage.vue';

const story = storiesOf('Atoms|Image', module) as any;

story.add(
  'Default',
  withInfo({})(() => ({
    components: { VueImage },
    template: `<vue-image src="https://via.placeholder.com/512" alt="foo" />`,
  })),
);

story.add(
  'As DIV',
  withInfo({})(() => ({
    components: { VueImage },
    template: `<vue-image src="https://via.placeholder.com/512" alt="foo" :native="false" :style="{width:'320px',height:'320px',backgroundSize:'cover'}" />`,
  })),
);
