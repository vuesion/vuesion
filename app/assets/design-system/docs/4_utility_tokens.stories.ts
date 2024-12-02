import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';
import UtilityTokenSection from '~/assets/design-system/docs/components/UtilityTokenSection.vue';
import VueStack from '~/app/components/layout/VueStack/VueStack.vue';
import TokenItem from '~/assets/design-system/docs/components/TokenItem.vue';
import VueTiles from '~/app/components/layout/VueTiles/VueTiles.vue';
import VueText from '~/app/components/typography/VueText/VueText.vue';
import VueBox from '~/app/components/layout/VueBox/VueBox.vue';

export default {
  title: 'Foundation/General',
  component: null,
  argTypes: {},
  parameters: { controls: { disabled: true } },
};

const Template = () => ({
  components: {
    ComponentDocs,
    UtilityTokenSection,
    VueStack,
    TokenItem,
    VueTiles,
    VueText,
    VueBox,
  },
  template: `<component-docs
      component-name="Utility Component Tokens"
      usage="These are other tokenized design values. Some of these tokens do were not able to be properly translated to Figma so new components will have to manually input these values."
      suffix=""
  >
  <vue-stack space="64">
    <utility-token-section title="Elevation" description="These are the possible elevations, or distances between surfaces.">
      <vue-stack>
        <token-item
            figma="Elevation 1"
            css="elevation-1"
            palette="neutral 10"
            :elevation="1"
            circle-color="surface-default-high"
        />
        <token-item
            figma="Elevation 2"
            css="elevation-2"
            palette="neutral 10"
            :elevation="2"
            circle-color="surface-default-high"
        />
        <token-item
            figma="Elevation 3"
            css="elevation-3"
            palette="neutral 10"
            :elevation="3"
            circle-color="surface-default-high"
        />
        <token-item
            figma="Elevation 4"
            css="elevation-4"
            palette="neutral 10"
            :elevation="4"
            circle-color="surface-default-high"
        />
      </vue-stack>
    </utility-token-section>
    <utility-token-section title="Accessibility" description="Tokens used for accessibility such as focus.">
      <vue-stack>
        <token-item
            figma="Interaction - Focused"
            css="focused"
            palette="primary 3"
            circle-color="surface-default-high"
            focused
        />
      </vue-stack>
    </utility-token-section>
  </vue-stack>
  </component-docs>`,
});

export const UtilityTokens = {
  render: Template,
};
