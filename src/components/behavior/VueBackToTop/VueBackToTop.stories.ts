import { storiesOf } from '@storybook/vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import { i18n } from '@/test/i18n';
import VueBackToTop from './VueBackToTop.vue';

const story = storiesOf('Behavior|BackToTop', module) as any;

story.add(
  'Default',
  () => ({
    i18n,
    components: { VueBackToTop, ComponentDocs },
    template: `<component-docs
      component-name="BackToTop"
      usage="A button to return to the top of the page allows the user to quickly return to the top of the page."
      story="To see the back-to-top-button please scroll down to the end of the page and start scrolling up again."
    >
    <div :style="{height: '6000px'}"><vue-back-to-top /></div>
    </component-docs>`,
  }),
  {
    info: {
      components: { VueBackToTop },
    },
  },
);
