import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import ColorTokensSection from 'assets/design-system/docs/components/ColorTokensSection.vue';

export default {
  title: 'Design System Foundation',
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
      component-name="Utility Component Tokens"
      usage="These are other tokenized design values. Some of these tokens do were not able to be properly translated to Figma so new components will have to manually input these values."
  >
    <color-tokens-section
      :columns="[
        {
          dark: false,
          tokens: [
            { figmaVar: 'Elevation 1', cssVar: 'elevation-1', elevation: 1, circleColor: 'surface-default-high' },
            { figmaVar: 'Elevation 2', cssVar: 'elevation-2', elevation: 2, circleColor: 'surface-default-high' },
          ],
        },
        {
          dark: false,
          tokens: [
            { figmaVar: 'Elevation 3', cssVar: 'elevation-3', elevation: 3, circleColor: 'surface-default-high' },
            { figmaVar: 'Focused', cssVar: 'focused', focused: true, circleColor: 'surface-default-high' },
          ],
        },
      ]"
    />
  </component-docs>`,
});

export const UtilityTokens = {
  render: Template,
};
