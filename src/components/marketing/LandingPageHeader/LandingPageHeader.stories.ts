import { storiesOf } from '@storybook/vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import LandingPageHeader from './LandingPageHeader.vue';

const story = storiesOf('Marketing|LandingPageHeader', module) as any;

story.add(
  'Default',
  () => ({
    components: { ComponentDocs, LandingPageHeader },
    template: `<component-docs
      component-name="Landing page header"
      usage="Used to show brand value proposition and motivate user to click CTA"
      story="Display landing page header"
    >
      <landing-page-header />
    </component-docs>`,
  }),
  {
    info: {
      components: { LandingPageHeader },
    },
  },
);
