import { storiesOf } from '@storybook/vue';
import { i18n } from '@/test/i18n';
import VueTruncate from './VueTruncate.vue';

const story = storiesOf('Molecules|Truncate', module) as any;

story.add(
  'Default',
  () => ({
    i18n,
    components: { VueTruncate },
    template: `<vue-truncate>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et<br/>
  dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet<br/>
  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,<br/>
  consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,<br/>
  sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,<br/>
  no sea takimata sanctus est Lorem ipsum dolor sit amet.
</vue-truncate>`,
  }),
  {
    info: {
      components: { VueTruncate },
    },
  },
);

story.add(
  'Without truncation',
  () => ({
    i18n,
    components: { VueTruncate },
    template: `<vue-truncate :lines="6">
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et<br/>
  dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet<br/>
  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,<br/>
  consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,<br/>
  sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,<br/>
  no sea takimata sanctus est Lorem ipsum dolor sit amet.
</vue-truncate>`,
  }),
  {
    info: {
      components: { VueTruncate },
    },
  },
);

story.add(
  'Lines and Duration',
  () => ({
    i18n,
    components: { VueTruncate },
    template: `<vue-truncate :lines="2" :duration="500">
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et<br/>
  dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet<br/>
  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,<br/>
  consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,<br/>
  sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,<br/>
  no sea takimata sanctus est Lorem ipsum dolor sit amet.
</vue-truncate>`,
  }),
  {
    info: {
      components: { VueTruncate },
    },
  },
);
