import type { StoryFn } from '@storybook/vue3';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';
import UtilityTokenSection from '~/assets/design-system/docs/components/UtilityTokenSection.vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import { SpacingValues } from '~/components/prop-types';

export default {
  title: 'Foundation/General',
  component: null,
  argTypes: {},
  parameters: { controls: { disabled: true } },
};

const Template: StoryFn = () => ({
  components: {
    VueText,
    ComponentDocs,
    UtilityTokenSection,
  },
  inheritAttrs: false,
  setup() {
    return { spacings: SpacingValues };
  },
  template: `<component-docs
      component-name="Layout & Grids"
      usage="Vuesion uses the concept of Layout Components. Rather than managing a grid, we focus on managing space between elements with Auto Layout."
      suffix=""
  >
  <vue-stack space="64">
    <utility-token-section title="Spacing" description="This scale is meant for individual components. Larger sizes are meant for layouts. Use smaller sizes for detailed components.">
      <table width="100%">
        <thead>
        <tr>
          <th>SPACING TOKEN</th>
          <th>PIXEL</th>
          <th>PURPOSE</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="spacing in spacings">
          <td width="300px">space-{{spacing}}</td>
          <td>{{spacing}} px</td>
          <td></td>
          <td><div :style="{ width: spacing+'px', height: spacing+'px', background: 'var(--surface-inverse-high)' }" /></td>
        </tr>
        </tbody>
      </table>
    </utility-token-section>
  </vue-stack>
  </component-docs>`,
});

export const Spacings = {
  render: Template,
};
