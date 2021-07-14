import { storiesOf } from '@storybook/vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import VueButton from '@/components/input-and-actions/VueButton/VueButton.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueCollapse from './VueCollapse.vue';

const story = storiesOf('Behavior|Collapse', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueCollapse, VueButton, ComponentDocs, VueInline, VueText },
    data() {
      return {
        show: false,
      };
    },
    template: `<component-docs
      component-name="Collapse"
      usage="Used to put long sections of information under a block that users can expand or collapse"
      story="Display button that triggers the collapse to show or hide text"
    >
    <vue-inline space="16" stack-phone stack-tablet-portrait stack-tablet-landscape stack-small-desktop stack-large-desktop>
      <vue-button @click="show = !show" look="outline" leading-icon="eye">Show content</vue-button>
      <vue-collapse :show="show">
        <vue-text color="text-high">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </vue-text>
      </vue-collapse>
    </vue-inline>
    </component-docs>`,
  }),
  {
    info: {
      components: { VueCollapse },
    },
  },
);
