import Palette from './components/ColorPalette.vue';
import ComponentDocs from '~/app/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Foundation/General',
  component: null,
  argTypes: {},
  parameters: { controls: { disabled: true } },
};

const Template = () => ({
  components: {
    ComponentDocs,
    Palette,
  },
  template: `<component-docs
      component-name="Color Palette"
      usage="This palette are the base colors used for the color tokens."
      suffix=""
  >
  <palette />
  </component-docs>`,
});

export const ColorPalette = {
  render: Template,
};
