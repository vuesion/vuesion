import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueInput from './VueInput.vue';

const story = storiesOf('Input & Actions|Input', module) as any;

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
      usage="Allows users to add data/content - text, numeric, URLs, etc. Each type of input has its own validation and constraints e.g. numeric input will only allow numbers."
      story="Show all states of the input component. Please interact with the input to see all states."
    >
    <vue-stack space="48">
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
    components: { VueInput, ComponentDocs, VueStack },
    data() {
      return {
        model: '',
      };
    },
    methods: {
      onLeadingIconClick: action('@leading-icon-click'),
      onTrailingIconClick: action('@trailing-icon-click'),
    },
    template: `<component-docs
    story="Show icons on the left and right side of the input. Please interact with the input to see all states."
    >
    <vue-stack space="48">
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
        leading-icon="calendar"
        @leading-icon-click="onLeadingIconClick"
      />

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
        trailing-icon="times"
        @trailing-icon-click="onTrailingIconClick"
      />

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
        leading-icon="eye"
        trailing-icon="times"
        @leading-icon-click="onLeadingIconClick"
        @trailing-icon-click="onTrailingIconClick"
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
