import { storiesOf } from '@storybook/vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueIconTimes from '@/components/atoms/icons/VueIconTimes/VueIconTimes.vue';
import VueIconHashtag from '@/components/atoms/icons/VueIconHashtag/VueIconHashtag.vue';
import VueInput from './VueInput.vue';

const story = storiesOf('Input & Actions|Input', module) as any;

// TODO: add usage
story.add(
  'Default',
  () => ({
    components: { VueInput, ComponentDocs, VueStack },
    data() {
      return {
        model: '',
      };
    },
    template: `<component-docs
      component-name="Input"
      usage=")__"
      story="Show all states of the input component. Please interact with the input to see all states."
    >
    <vue-stack space="40">
      <vue-input
        name="text-1"
        id="text-1"
        label="Label"
        placeholder="Placeholder"
        description="Description"
        error-message="Error message"
        validation="required"
        required
        v-model="model"
      />

      <vue-input
        name="text-2"
        id="text-2"
        label="Readonly"
        placeholder="Readonly"
        description="Readonly"
        error-message="Error message"
        readonly
        v-model="model"
      />

      <vue-input
        name="text-3"
        id="text-3"
        label="Disabled"
        placeholder="Disabled"
        description="Disabled"
        error-message="Error message"
        disabled
        v-model="model"
      />
    </vue-stack>
    </component-docs>`,
  }),
  {
    info: {
      components: { VueInput },
    },
  },
);

story.add(
  'With icons',
  () => ({
    components: { VueInput, ComponentDocs, VueStack, VueIconTimes, VueIconHashtag },
    data() {
      return {
        model: '',
      };
    },
    template: `<component-docs
    story="Show icons on the left and right side of the input. Please interact with the input to see all states."
    >
    <vue-stack space="40">
      <vue-input
        name="text-1"
        id="text-1"
        label="Label"
        placeholder="Placeholder"
        description="Description"
        error-message="Error message"
        validation="required"
        required
        v-model="model"
      >
        <vue-icon-hashtag slot="leading" />
      </vue-input>

      <vue-input
        name="text-2"
        id="text-2"
        label="Label"
        placeholder="Placeholder"
        description="Description"
        error-message="Error message"
        validation="required"
        required
        v-model="model"
      >
        <vue-icon-times slot="trailing" />
      </vue-input>

      <vue-input
        name="text-3"
        id="text-3"
        label="Label"
        placeholder="Placeholder"
        description="Description"
        error-message="Error message"
        validation="required"
        required
        v-model="model"
      >
        <vue-icon-hashtag slot="leading" />
        <vue-icon-times slot="trailing" />
      </vue-input>
    </vue-stack>
    </component-docs>`,
  }),
  {
    info: {
      components: { VueInput },
    },
  },
);
