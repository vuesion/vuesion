import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import ColorTokensSection from 'assets/design-system/docs/components/ColorTokensSection.vue';

export default {
  components: { ColorTokensSection },
  title: 'Design System Foundation/Color Tokens',
  component: null,
  argTypes: {},
  parameters: { controls: { disabled: true } },
};

const Template = () => ({
  components: {
    ComponentDocs,
    ColorTokensSection,
  },
  template: `<component-docs
      component-name="Color Tokens: Background Colors"
      usage="These Tokens are used as background colors for the document body or page sections"
  >
    <color-tokens-section
      :columns="[
        {
          dark: true,
          tokens: [
            { figmaVar: 'bg-default-high', cssVar: 'bg-default-high', paletteColor: 'neutral 1' },
            { figmaVar: 'bg-default-medium', cssVar: 'bg-default-medium', paletteColor: 'neutral 2' },
            { figmaVar: 'bg-default-low', cssVar: 'bg-default-low', paletteColor: 'neutral 3' },
          ],
        },
        {
          dark: false,
          tokens: [
            { figmaVar: 'bg-inverse-high', cssVar: 'bg-inverse-high', paletteColor: 'neutral 10' },
            { figmaVar: 'bg-inverse-medium', cssVar: 'bg-inverse-medium', paletteColor: 'neutral 9' },
            { figmaVar: 'bg-inverse-low', cssVar: 'bg-inverse-low', paletteColor: 'neutral 8' },
          ],
        },
      ]"
    />
  </component-docs>`,
});

export const BackgroundColors = {
  render: Template,
};
