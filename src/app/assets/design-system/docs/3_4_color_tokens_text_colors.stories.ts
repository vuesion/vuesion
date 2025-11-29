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
      component-name="Color Tokens: Text Colors"
      usage="These tokens are used for text, content, and icons."
  >
    <color-tokens-section
      :columns="[
        {
          dark: false,
          tokens: [
            { figmaVar: 'text-default-high', cssVar: 'text-default-high', paletteColor: 'neutral 9' },
            { figmaVar: 'text-default-medium', cssVar: 'text-default-medium', paletteColor: 'neutral 7' },
            { figmaVar: 'text-default-low', cssVar: 'text-default-low', paletteColor: 'neutral 5' },
            { figmaVar: 'text-dark', cssVar: 'text-dark', paletteColor: 'neutral 9' },
          ],
        },
        {
          dark: true,
          tokens: [
            { figmaVar: 'text-inverse-high', cssVar: 'text-inverse-high', paletteColor: 'neutral 1' },
            { figmaVar: 'text-inverse-medium', cssVar: 'text-inverse-medium', paletteColor: 'neutral 3' },
            { figmaVar: 'text-inverse-low', cssVar: 'text-inverse-low', paletteColor: 'neutral 4' },
            { figmaVar: 'text-light', cssVar: 'text-light', paletteColor: 'neutral 1' },
          ],
        },
      ]"
    />

    <color-tokens-section
      :columns="[
        {
          dark: false,
          tokens: [
            { figmaVar: 'text-success', cssVar: 'text-success', paletteColor: 'success 5' },
            { figmaVar: 'text-info', cssVar: 'text-info', paletteColor: 'info 5' },
            { figmaVar: 'text-warning', cssVar: 'text-warning', paletteColor: 'warning 5' },
          ],
        },
        {
          dark: false,
          tokens: [
            { figmaVar: 'text-danger', cssVar: 'text-danger', paletteColor: 'danger 5' },
            { figmaVar: 'text-primary', cssVar: 'text-primary', paletteColor: 'primary 5' },
            { figmaVar: 'text-link', cssVar: 'text-link', paletteColor: 'info 6' },
          ],
        },
      ]"
    />

    <color-tokens-section
      :columns="[
        {
          dark: true,
          tokens: [
            { figmaVar: 'text-interaction-primary-enabled', cssVar: 'text-interaction-primary-enabled', paletteColor: 'neutral 1' },
            { figmaVar: 'text-interaction-primary-hovered', cssVar: 'text-interaction-primary-hovered', paletteColor: 'neutral 1' },
            { figmaVar: 'text-interaction-primary-activated', cssVar: 'text-interaction-primary-activated', paletteColor: 'neutral 1' },
          ],
        },
        {
          dark: false,
          tokens: [
            { figmaVar: 'text-interaction-secondary-enabled', cssVar: 'text-interaction-secondary-enabled', paletteColor: 'neutral 9' },
            { figmaVar: 'text-interaction-secondary-hovered', cssVar: 'text-interaction-secondary-hovered', paletteColor: 'neutral 9' },
            { figmaVar: 'text-interaction-secondary-activated', cssVar: 'text-interaction-secondary-activated', paletteColor: 'neutral 9' },
          ],
        },
      ]"
    />

    <color-tokens-section
      :columns="[
        {
          dark: true,
          tokens: [
            { figmaVar: 'text-interaction-danger-enabled', cssVar: 'text-interaction-danger-enabled', paletteColor: 'neutral 1' },
            { figmaVar: 'text-interaction-danger-hovered', cssVar: 'text-interaction-danger-hovered', paletteColor: 'neutral 1' },
            { figmaVar: 'text-interaction-danger-activated', cssVar: 'text-interaction-danger-activated', paletteColor: 'neutral 1' },
          ],
        },
      ]"
    />
  </component-docs>`,
});

export const TextColors = {
  render: Template,
};
