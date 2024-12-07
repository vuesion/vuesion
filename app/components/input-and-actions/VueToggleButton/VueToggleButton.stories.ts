import type { StoryFn } from '@storybook/vue3';
import { ref } from 'vue';
import VueToggleButton from './VueToggleButton.vue';
import VueStack from '~/app/components/layout/VueStack/VueStack.vue';
import VueText from '~/app/components/typography/VueText/VueText.vue';
import ComponentDocs from 'assets/design-system/docs/components/ComponentDocs.vue';
import { ShirtSizeValues } from '~/app/components/prop-types';

export default {
  title: 'Input & Actions/ToggleButton',
  component: VueToggleButton,
  argTypes: {
    modelValue: { table: { disable: true } },
    'update:modelValue': { table: { disable: true } },
    size: {
      options: ShirtSizeValues,
      control: { type: 'select' },
    },
  },
};

const Template: StoryFn = (args) => ({
  components: {
    VueToggleButton,
    ComponentDocs,
    VueStack,
    VueText,
  },
  data(): any {
    return {
      model: null,
    };
  },
  inheritAttrs: false,
  setup() {
    const model = ref(null);
    return {
      args,
      model,
    };
  },
  template: `<component-docs
      component-name="ToggleButton"
      usage="Used to toggle an option, e.g. text alignment, switching views."
      story="Show toggle-button with all it's properties."
  >
  <vue-stack>
    <vue-text weight="semi-bold">v-model: {{ model }}</vue-text>
    <vue-toggle-button v-model="model" v-bind="args" />
  </vue-stack>
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {
    items: [
      {
        leadingIcon: 'view-grid',
        label: 'Grid view',
        value: 'grid-view',
      },
      {
        leadingIcon: 'view-list',
        label: 'List view',
        value: 'list-view',
      },
      {
        leadingIcon: 'Folder',
        label: 'Folder view',
        value: 'folder-view',
      },
      {
        leadingIcon: 'Code',
        label: 'Code view',
        value: 'code',
      },
    ],
    size: 'md',
  },
};
