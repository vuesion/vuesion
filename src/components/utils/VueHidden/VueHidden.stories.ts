import { Story } from '@storybook/vue3';
import VueHidden from './VueHidden.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Foundation/Utils',
  component: VueHidden,
};

const Template: Story = (args) => ({
  components: { VueHidden, ComponentDocs },
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

export const Hidden = Template.bind({});

Hidden.args = {
  as: 'div',
  phone: false,
  tabletPortrait: false,
  tabletLandscape: false,
  smallDesktop: false,
  largeDesktop: false,
  onScreen: false,
};
