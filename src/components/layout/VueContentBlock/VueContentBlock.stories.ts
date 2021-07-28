import { storiesOf } from '@storybook/vue';
import VueContentBlock from './VueContentBlock.vue';

const story = storiesOf('Foundation|Layout/ContentBlock', module) as any;

story.add(
  'Limit and center content based on view port',
  () => ({
    components: { VueContentBlock },
    template: `<vue-content-block class="border">VueContentBlock</vue-content-block>`,
  }),
  {
    info: {
      components: { VueContentBlock },
    },
  },
);
