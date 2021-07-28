import { storiesOf } from '@storybook/vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import VueHidden from './VueHidden.vue';

const story = storiesOf('Foundation|Utils/Hidden', module) as any;

story.add(
  'Hide content on phone and large desktop',
  () => ({
    components: { VueHidden, ComponentDocs },
    template: `<component-docs
      component-name="Hidden"
      usage="Use to hide content in different viewports."
      story="Hide content on phone and large desktop."
    >
    <vue-hidden phone large-desktop>
    Only visible on tabletPortrait, tabletLandscape and smallDesktop
    </vue-hidden>
    </component-docs>`,
  }),
  {
    info: {
      components: { VueHidden },
    },
  },
);

story.add(
  'Show content only for screen readers',
  () => ({
    components: { VueHidden, ComponentDocs },
    template: `<component-docs
      story="Show content only for screen readers. Open the inspector to see this content."
    >
      <vue-hidden on-screen>Only visible for screen readers</vue-hidden>
    </component-docs>`,
  }),
  {
    info: {
      components: { VueHidden },
    },
  },
);
