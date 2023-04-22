import { StoryFn } from '@storybook/vue3';
import LandingPageHeader from './LandingPageHeader.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Marketing/LandingPageHeader',
  component: LandingPageHeader,
};

const Template: StoryFn = (args) => ({
  components: { LandingPageHeader, ComponentDocs },
  data() {
    return {
      server: process.server,
    };
  },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="Landing page header"
      usage="Used to show brand value proposition and motivate user to click CTA."
      story="Display landing page header."
  >
  <landing-page-header />
  </component-docs>`,
});

export const Default = {
  render: Template,
  args: {},
};
