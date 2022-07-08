import { ref } from 'vue';
import VueToggleButton from './VueToggleButton.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import { ShirtSizeValues } from '~/components/prop-types';

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

const Template = (args) => ({
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

export const Default = Template.bind({});
Default.args = {
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
};
