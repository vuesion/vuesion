import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueCard from './VueCard.vue';
import VueCardHeader from './VueCardHeader/VueCardHeader.vue';
import VueCardBody from './VueCardBody/VueCardBody.vue';
import VueCardFooter from './VueCardFooter/VueCardFooter.vue';
import VueButton from '../VueButton/VueButton.vue';

const story = storiesOf('Molecules|Card', module) as any;

story.add(
  'Default',
  withInfo({ propTablesExclude: [VueButton] })(() => ({
    components: {
      VueCard,
      VueCardHeader,
      VueCardBody,
      VueCardFooter,
      VueButton,
    },
    template: `<vue-card>
  <vue-card-header title="Title" subtitle="subtitle" image="https://avatars2.githubusercontent.com/u/1667598?s=460&v=4" />
  <vue-card-body>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  </vue-card-body>
  <vue-card-footer>
    <vue-button color="danger">Delete</vue-button>
    <vue-button ghost>Cancel</vue-button>
  </vue-card-footer>
</vue-card>`,
  })),
);
