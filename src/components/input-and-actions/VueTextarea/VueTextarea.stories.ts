import { storiesOf } from '@storybook/vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueTextarea from './VueTextarea.vue';

const story = storiesOf('Input & Actions|Textarea', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueTextarea, ComponentDocs, VueStack },
    data() {
      return {
        model: '',
      };
    },
    template: `<component-docs
      component-name="Textarea"
      usage="Allows user to add long, multi-line text whereas text input is meant for brief, single line text."
      story="Show all states of the textarea component. Please interact with the textarea to see all states."
    >
    <vue-stack space="48">
      <vue-textarea
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

      <vue-textarea
        name="text-2"
        id="text-2"
        label="Readonly"
        placeholder="Readonly"
        description="Readonly"
        error-message="Error message"
        readonly
        v-model="model"
      />

      <vue-textarea
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
      components: { VueTextarea },
    },
  },
);
