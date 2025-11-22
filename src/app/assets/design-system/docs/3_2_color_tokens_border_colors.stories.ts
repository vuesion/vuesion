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
      component-name="Color Tokens: Border Colors"
      usage="These tokens are used for borders and dividers"
  >
    <color-tokens-section
      :columns="[
        {
          dark: true,
          tokens: [
            { figmaVar: 'border-default-high', cssVar: 'border-default-high', paletteColor: 'neutral 4' },
            { figmaVar: 'border-default-medium', cssVar: 'border-default-medium', paletteColor: 'neutral 3' },
            { figmaVar: 'border-default-low', cssVar: 'border-default-low', paletteColor: 'neutral 2' },
          ],
        },
        {
          dark: false,
          tokens: [
            { figmaVar: 'border-inverse-high', cssVar: 'border-inverse-high', paletteColor: 'neutral 6' },
            { figmaVar: 'border-inverse-medium', cssVar: 'border-inverse-medium', paletteColor: 'neutral 7' },
            { figmaVar: 'border-inverse-low', cssVar: 'border-inverse-low', paletteColor: 'neutral 8' },
          ],
        },
      ]"
    />

    <color-tokens-section
      :columns="[
        {
          dark: false,
          tokens: [
            { figmaVar: 'border-success-high', cssVar: 'border-success-high', paletteColor: 'success 5' },
            { figmaVar: 'border-success-medium', cssVar: 'border-success-medium', paletteColor: 'success 4' },
            { figmaVar: 'border-success-low', cssVar: 'border-success-low', paletteColor: 'success 3' },
          ],
        },
        {
          dark: false,
          tokens: [
            { figmaVar: 'border-info-high', cssVar: 'border-info-high', paletteColor: 'info 5' },
            { figmaVar: 'border-info-medium', cssVar: 'border-info-medium', paletteColor: 'info 4' },
            { figmaVar: 'border-info-low', cssVar: 'border-info-low', paletteColor: 'info 3' },
          ],
        },
      ]"
    />

    <color-tokens-section
      :columns="[
        {
          dark: false,
          tokens: [
            { figmaVar: 'border-warning-high', cssVar: 'border-warning-high', paletteColor: 'warning 5' },
            { figmaVar: 'border-warning-medium', cssVar: 'border-warning-medium', paletteColor: 'warning 4' },
            { figmaVar: 'border-warning-low', cssVar: 'border-warning-low', paletteColor: 'warning 3' },
          ],
        },
        {
          dark: false,
          tokens: [
            { figmaVar: 'border-danger-high', cssVar: 'border-danger-high', paletteColor: 'danger 5' },
            { figmaVar: 'border-danger-medium', cssVar: 'border-danger-medium', paletteColor: 'danger 4' },
            { figmaVar: 'border-danger-low', cssVar: 'border-danger-low', paletteColor: 'danger 3' },
          ],
        },
      ]"
    />

    <color-tokens-section
      :columns="[
        {
          dark: false,
          tokens: [
            { figmaVar: 'border-primary-high', cssVar: 'border-primary-high', paletteColor: 'primary 5' },
            { figmaVar: 'border-primary-medium', cssVar: 'border-primary-medium', paletteColor: 'primary 4' },
            { figmaVar: 'border-primary-low', cssVar: 'border-primary-low', paletteColor: 'primary 3' },
          ],
        },
      ]"
    />
  </component-docs>`,
});

export const BorderColors = {
  render: Template,
};
