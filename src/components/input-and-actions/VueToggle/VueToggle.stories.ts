import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueToggle from './VueToggle.vue';

const story = storiesOf('Input & Actions|Toggle', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueToggle, ComponentDocs, VueInline, VueText },
    data() {
      return {
        model: false,
      };
    },
    template: `<component-docs
      component-name="Toggle"
      usage="Allows users to choose between two mutually exclusive options. There is always a default value and settings should be saved and take into effect immediately."
      story="Show default toggle. Please interact with the toggle to see different states."
    >
    <vue-inline stack-phone stack-tablet-portrait stack-tablet-landscape stack-small-desktop stack-large-desktop>
      <vue-text look="small-title" weight="semi-bold">Model: {{ model }}</vue-text>
      <vue-toggle label="Toggle enabled" name="toggle" id="toggle" @click="action" v-model="model" />
      <vue-toggle disabled label="Toggle disabled" name="toggle" id="toggle" @click="action" v-model="model" />
    </vue-inline>
    </component-docs>`,
    methods: {
      action: action('@onClick'),
    },
  }),
  {
    info: {
      components: { VueToggle },
    },
  },
);

story.add(
  'With description',
  () => ({
    components: { VueToggle, ComponentDocs, VueInline, VueText },
    data() {
      return {
        model: false,
      };
    },
    template: `<component-docs
      story="Show toggle with additional description. Please interact with the toggle to see different states."
    >
    <vue-inline stack-phone stack-tablet-portrait stack-tablet-landscape stack-small-desktop stack-large-desktop>
      <vue-text look="small-title" weight="semi-bold">Model: {{ model }}</vue-text>
      <vue-toggle label="Toggle enabled" description="Get notified when someone comments on your posting." name="toggle" id="toggle" @click="action" v-model="model" />
      <vue-toggle disabled label="Toggle disabled" description="Get notified when someone comments on your posting." name="toggle" id="toggle" @click="action" v-model="model" />
    </vue-inline>
</component-docs>`,
    methods: {
      action: action('@onClick'),
    },
  }),
  {
    info: {
      components: { VueToggle },
    },
  },
);
