import type { StoryFn } from '@storybook/vue3';
import VueHidden from './VueHidden.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Foundation/Utils',
  component: VueHidden,
};

const Template: StoryFn = (args) => ({
  components: { VueHidden, ComponentDocs },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="Hidden"
      usage="Use to hide content in different viewports."
  >
  <vue-hidden v-bind="args">
    Text content, HTML elements or components go here.
  </vue-hidden>
  </component-docs>`,
});

export const Hidden = {
  render: Template,

  args: {
    as: 'div',
    phone: false,
    tabletPortrait: false,
    tabletLandscape: false,
    smallDesktop: false,
    largeDesktop: false,
    onScreen: false,
  },
};
