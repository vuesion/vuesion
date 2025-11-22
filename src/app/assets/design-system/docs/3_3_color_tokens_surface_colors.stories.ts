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
      component-name="Color Tokens: Surface Colors"
      usage="These Tokens are used for elements that sit on top of the document body or page sections"
  >
    <color-tokens-section
      :columns="[
        {
          dark: true,
          tokens: [
            { figmaVar: 'surface-default-high', cssVar: 'surface-default-high', paletteColor: 'neutral 0' },
            { figmaVar: 'surface-default-medium', cssVar: 'surface-default-medium', paletteColor: 'neutral 1' },
            { figmaVar: 'surface-default-low', cssVar: 'surface-default-low', paletteColor: 'neutral 2' },
          ],
        },
        {
          dark: false,
          tokens: [
            { figmaVar: 'surface-inverse-high', cssVar: 'surface-inverse-high', paletteColor: 'neutral 9' },
            { figmaVar: 'surface-inverse-medium', cssVar: 'surface-inverse-medium', paletteColor: 'neutral 8' },
            { figmaVar: 'surface-inverse-low', cssVar: 'surface-inverse-low', paletteColor: 'neutral 7' },
          ],
        },
      ]"
    />

    <color-tokens-section
      :columns="[
        {
          dark: false,
          tokens: [
            { figmaVar: 'surface-success-high', cssVar: 'surface-success-high', paletteColor: 'success 3' },
            { figmaVar: 'surface-success-medium', cssVar: 'surface-success-medium', paletteColor: 'success 2' },
            { figmaVar: 'surface-success-low', cssVar: 'surface-success-low', paletteColor: 'success 1' },
          ],
        },
        {
          dark: false,
          tokens: [
            { figmaVar: 'surface-info-high', cssVar: 'surface-info-high', paletteColor: 'info 3' },
            { figmaVar: 'surface-info-medium', cssVar: 'surface-info-medium', paletteColor: 'info 2' },
            { figmaVar: 'surface-info-low', cssVar: 'surface-info-low', paletteColor: 'info 1' },
          ],
        },
      ]"
    />

    <color-tokens-section
      :columns="[
        {
          dark: false,
          tokens: [
            { figmaVar: 'surface-warning-high', cssVar: 'surface-warning-high', paletteColor: 'warning 3' },
            { figmaVar: 'surface-warning-medium', cssVar: 'surface-warning-medium', paletteColor: 'warning 2' },
            { figmaVar: 'surface-warning-low', cssVar: 'surface-warning-low', paletteColor: 'warning 1' },
          ],
        },
        {
          dark: false,
          tokens: [
            { figmaVar: 'surface-danger-high', cssVar: 'surface-danger-high', paletteColor: 'danger 3' },
            { figmaVar: 'surface-danger-medium', cssVar: 'surface-danger-medium', paletteColor: 'danger 2' },
            { figmaVar: 'surface-danger-low', cssVar: 'surface-danger-low', paletteColor: 'danger 1' },
          ],
        },
      ]"
    />

    <color-tokens-section
      :columns="[
        {
          dark: false,
          tokens: [
            { figmaVar: 'surface-primary-high', cssVar: 'surface-primary-high', paletteColor: 'primary 3' },
            { figmaVar: 'surface-primary-medium', cssVar: 'surface-primary-medium', paletteColor: 'primary 2' },
            { figmaVar: 'surface-primary-low', cssVar: 'surface-primary-low', paletteColor: 'primary 1' },
          ],
        },
      ]"
    />
  </component-docs>`,
});

export const SurfaceColors = {
  render: Template,
};
