import CTokens from './components/ColorTokens.vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Foundation/General',
  component: null,
  argTypes: {},
  parameters: { controls: { disabled: true } },
};

const Template = (args) => ({
  components: {
    ComponentDocs,
    CTokens,
  },
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="Color tokens"
      usage="The Vuesion color system aims to make user interfaces more usable by helping teams apply colors in a functional and meaningful way.
Color tokens are defined by their function in an interface.
This allows the designer to focus “how” and “why” rather than “what color should this be?”"
      suffix=""
  >
  <c-tokens />
  </component-docs>`,
});

export const ColorTokens = Template.bind({});
