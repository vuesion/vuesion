import type { StoryFn } from '@storybook/vue3-vite';
import VueBreadcrumb from './VueBreadcrumb.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Navigation/Breadcrumb',
  component: VueBreadcrumb,
  argTypes: {},
};

const Template: StoryFn = (args) => ({
  components: {
    VueBreadcrumb,
    ComponentDocs,
    VueStack,
  },
  inheritAttrs: false,
  setup() {
    return {
      args,
      items2: [
        { label: 'Level 1', value: '/level-1' },
        { label: 'Level 2', value: '/level-2' },
      ],
      items3: [{ label: 'Level 1', value: '/level-1' }],
    };
  },
  template: `<component-docs
      component-name="Breadcrumb"
      usage="List of links that show hierarchy and navigational context for a user’s location within an app."
      story="Display breadcrumb. Please switch to the mobile viewport to see the mobile version of this component."
  >
  <vue-stack>
    <vue-breadcrumb :items="args.items" />
    <vue-breadcrumb :items="items2" />
    <vue-breadcrumb :items="items3" />
  </vue-stack>
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {
    items: [
      { label: 'Level 1', value: '/level-1' },
      { label: 'Level 2', value: '/level-2' },
      { label: 'Level 3', value: '/level-3' },
    ],
  },
};
