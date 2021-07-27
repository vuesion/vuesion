import { storiesOf } from '@storybook/vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import VueButton from '@/components/input-and-actions/VueButton/VueButton.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueCard from '@/components/data-display/VueCard/VueCard.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueCollapse from './VueCollapse.vue';

const story = storiesOf('Behavior|Collapse', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueCollapse, VueButton, ComponentDocs, VueBox, VueText, VueCard },
    data() {
      return {
        show: false,
      };
    },
    template: `<component-docs
      component-name="Collapse"
      usage="Used to put long sections of information under a block that users can expand or collapse."
      story="Display button that triggers the collapse to show or hide text."
    >
    <vue-card>
        <vue-button @click="show = !show" look="outline" leading-icon="eye">Show content</vue-button>
        <vue-collapse :show="show">
          <vue-box padding="16 0 0 0">
            <vue-text color="text-high">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </vue-text>
          </vue-box>
        </vue-collapse>
    </vue-card>
    </component-docs>`,
  }),
  {
    info: {
      components: { VueCollapse },
    },
  },
);
