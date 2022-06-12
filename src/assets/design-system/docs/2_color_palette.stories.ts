import Palette from './components/ColorPalette.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Foundation/General',
  component: null,
  argTypes: {},
  parameters: { controls: { disabled: true } },
};

const Template = (args) => ({
  components: {
    ComponentDocs,
    Palette,
  },
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="Color Palette"
      usage="This palette are the base colors used for the color tokens."
      suffix=""
  >
  <palette />
  </component-docs>`,
});

export const ColorPalette = Template.bind({});
