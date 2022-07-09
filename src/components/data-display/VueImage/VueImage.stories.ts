import VueImage from './VueImage.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Data Display/Image',
  component: VueImage,
  argTypes: {},
  parameters: { controls: { disabled: true } },
};

const NativeTemplate = (args) => ({
  components: {
    VueImage,
    ComponentDocs,
  },
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="Image"
      usage="Use this component instead of the native img-tag to benefit from IntersectionObserver and lazy loading."
      story="Display image only when it is in the view port.">
  <vue-image src="https://via.placeholder.com/512" alt="foo" />
  </component-docs>`,
});

export const Native = NativeTemplate.bind({});

const DivAsImageTemplate = (args) => ({
  components: {
    VueImage,
    ComponentDocs,
  },
  setup() {
    return { args };
  },
  template: `<component-docs
  story="Display image only when it is in the view port and render it as background image of a div-tag.">
  <vue-image src="https://via.placeholder.com/512" alt="foo" :native="false" :style="{width:'280px',height:'280px',backgroundSize:'cover'}" />
  </component-docs>`,
});

export const DivAsImage = DivAsImageTemplate.bind({});
