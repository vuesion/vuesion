import { storiesOf } from '@storybook/vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import VueImage from './VueImage.vue';

const story = storiesOf('Data Display|Image', module) as any;

story.add(
  'Native',
  () => ({
    components: { VueImage, ComponentDocs },
    template: `<component-docs
      component-name="Image"
      usage="Use this component instead of the native img-tag to benefit from IntersectionObserver and lazy loading."
      story="Display image only when it is in the view port.">
    <vue-image src="https://via.placeholder.com/512" alt="foo" />
    </component-docs>`,
  }),
  {
    info: {
      components: { VueImage },
    },
  },
);

story.add(
  'Use a div instead img tag',
  () => ({
    components: { VueImage, ComponentDocs },
    template: `<component-docs
      story="Display image only when it is in the view port and render it as background image of a div-tag.">
    <vue-image src="https://via.placeholder.com/512" alt="foo" :native="false" :style="{width:'280px',height:'280px',backgroundSize:'cover'}" />
    </component-docs>`,
  }),
  {
    info: {
      components: { VueImage },
    },
  },
);
