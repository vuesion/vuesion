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
      component-name="Color Tokens: Interaction Colors"
      usage="These Tokens are used for user interface elements and components like Buttons and their corresponding states."
  >
    <color-tokens-section
      :columns="[
        {
          dark: false,
          tokens: [
            { figmaVar: 'interaction-primary-enabled', cssVar: 'interaction-primary-enabled', paletteColor: 'primary 5' },
            { figmaVar: 'interaction-primary-hovered', cssVar: 'interaction-primary-hovered', paletteColor: 'primary 6' },
            { figmaVar: 'interaction-primary-activated', cssVar: 'interaction-primary-activated', paletteColor: 'primary 7' },
          ],
        },
        {
          dark: true,
          tokens: [
            { figmaVar: 'interaction-secondary-enabled', cssVar: 'interaction-secondary-enabled', paletteColor: 'neutral 0' },
            { figmaVar: 'interaction-secondary-hovered', cssVar: 'interaction-secondary-hovered', paletteColor: 'neutral 1' },
            { figmaVar: 'interaction-secondary-activated', cssVar: 'interaction-secondary-activated', paletteColor: 'neutral 2' },
          ],
        },
      ]"
    />
    <color-tokens-section
      :columns="[
        {
          dark: false,
          tokens: [
            { figmaVar: 'interaction-danger-enabled', cssVar: 'interaction-danger-enabled', paletteColor: 'danger 5' },
            { figmaVar: 'interaction-danger-hovered', cssVar: 'interaction-danger-hovered', paletteColor: 'danger 6' },
            { figmaVar: 'interaction-danger-activated', cssVar: 'interaction-danger-activated', paletteColor: 'danger 7' },
          ],
        },
      ]"
    />
  </component-docs>`,
});

export const InteractionColors = {
  render: Template,
};
