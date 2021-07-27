import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueCheckbox from './VueCheckbox.vue';

const story = storiesOf('Input & Actions|Checkbox', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueCheckbox, ComponentDocs, VueInline, VueText },
    data() {
      return {
        model: false,
      };
    },
    template: `<component-docs
      component-name="Checkbox"
      usage="Allows users to select one or more options from a list of options. Unlike toggle, this selection will need to be submitted first. A single checkbox could be replaced by a toggle."
      story="Show default checkbox. Please interact with the checkbox to see different states."
    >
    <vue-inline stack-phone stack-tablet-portrait stack-tablet-landscape stack-small-desktop stack-large-desktop>
      <vue-text look="small-title" weight="semi-bold">Model: {{ model }}</vue-text>
      <vue-checkbox label="Checkbox enabled" name="checkbox" id="checkbox" @click="action" v-model="model" />
      <vue-checkbox disabled label="Checkbox disabled" name="checkbox" id="checkbox" @click="action" v-model="model" />
    </vue-inline>
    </component-docs>`,
    methods: {
      action: action('@onClick'),
    },
  }),
  {
    info: {
      components: { VueCheckbox },
    },
  },
);

story.add(
  'With description',
  () => ({
    components: { VueCheckbox, ComponentDocs, VueInline, VueText },
    data() {
      return {
        model: false,
      };
    },
    template: `<component-docs
      story="Show checkbox with additional description. Please interact with the checkbox to see different states."
    >
    <vue-inline stack-phone stack-tablet-portrait stack-tablet-landscape stack-small-desktop stack-large-desktop>
      <vue-text look="small-title" weight="semi-bold">Model: {{ model }}</vue-text>
      <vue-checkbox label="Checkbox enabled" description="Get notified when someone comments on your posting." name="checkbox" id="checkbox" @click="action" v-model="model" />
      <vue-checkbox disabled label="Checkbox disabled" description="Get notified when someone comments on your posting." name="checkbox" id="checkbox" @click="action" v-model="model" />
    </vue-inline>
</component-docs>`,
    methods: {
      action: action('@onClick'),
    },
  }),
  {
    info: {
      components: { VueCheckbox },
    },
  },
);
