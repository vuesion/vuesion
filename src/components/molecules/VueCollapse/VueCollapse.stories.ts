import { storiesOf } from '@storybook/vue';
import VueButton from '../../atoms/VueButton/VueButton.vue';
import VueCollapse from './VueCollapse.vue';

const story = storiesOf('Molecules|Collapse', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueCollapse, VueButton },
    data() {
      return {
        show: true,
      };
    },
    template: `
<div>
  <vue-button @click="show = !show" color="primary">Collapse toggle</vue-button>
  <br />
  <br />
  <vue-collapse :show="show">
    <div>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
      labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
      et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
      labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
      et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </div>
  </vue-collapse>
</div>
  `,
  }),
  {
    info: {
      components: { VueCollapse },
    },
  },
);
