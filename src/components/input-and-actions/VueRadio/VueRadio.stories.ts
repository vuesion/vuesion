import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueRadio from './VueRadio.vue';

const story = storiesOf('Input & Actions|Radio button', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueRadio, ComponentDocs, VueInline, VueText },
    data(): any {
      return {
        model: null,
      };
    },
    template: `<component-docs
      component-name="Radio"
      usage="Allows users to select exactly one option from a list of 2+, mutually exclusive options."
      story="Show default radio button. Please interact with the radio buttons to see different states."
    >
    <vue-inline stack-phone stack-tablet-portrait stack-tablet-landscape stack-small-desktop stack-large-desktop>
      <vue-text look="small-title" weight="semi-bold">Model: {{ model }}</vue-text>
      <vue-radio
        v-for="n in 3"
        :key="n"
        :label="'Radio button enabled ' + n"
        name="groupOne"
        :id="'radio' + n"
        @click="action"
        v-model="model" />
      <vue-radio disabled label="Radio button disabled" name="radio" id="radio" @click="action" v-model="model" />
    </vue-inline>
    </component-docs>`,
    methods: {
      action: action('@onClick'),
    },
  }),
  {
    info: {
      components: { VueRadio },
    },
  },
);

story.add(
  'With description',
  () => ({
    components: { VueRadio, ComponentDocs, VueInline, VueText },
    data(): any {
      return {
        model: null,
      };
    },
    template: `<component-docs
      story="Show radio button with additional description. Please interact with the radio button to see different states."
    >
    <vue-inline stack-phone stack-tablet-portrait stack-tablet-landscape stack-small-desktop stack-large-desktop>
      <vue-text look="small-title" weight="semi-bold">Model: {{ model }}</vue-text>
      <vue-radio
        v-for="n in 3"
        :key="n"
        :label="'Radio button enabled ' + n"
        name="groupOne"
        :id="'radio' + n"
        description="Get notified when someone comments on your posting."
        @click="action"
        v-model="model" />
      <vue-radio disabled label="Radio button disabled" description="Get notified when someone comments on your posting." name="radio" id="radio" @click="action" v-model="model" />
    </vue-inline>
</component-docs>`,
    methods: {
      action: action('@onClick'),
    },
  }),
  {
    info: {
      components: { VueRadio },
    },
  },
);
