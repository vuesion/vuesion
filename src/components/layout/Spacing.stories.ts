import { storiesOf } from '@storybook/vue';
import { textColorVariations } from '@/components/prop-validators';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import UtilityTokenSection from '@/assets/design-system/docs/components/UtilityTokenSection.vue';
import VueText from '@/components/typography/VueText/VueText.vue';

const story = storiesOf('Foundation|General', module) as any;

story.add(
  'Spacings',
  () => ({
    components: { VueText, ComponentDocs, UtilityTokenSection },
    data() {
      return {
        textVariations: textColorVariations,
      };
    },
    template: `<component-docs
      component-name="Spacing"
      usage="White space is the most often cited but poorly used tool in design — digital or not. Vuesion provides a few simple rules to help design hierarchical and functional layouts"
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
          <tr>
            <td width="300px">space-0</td>
            <td>0 px</td>
            <td></td>
            <td><div :style="{ width: '0px', height: '0px', background: 'var(--brand-interaction-primary-hovered)' }" /></td>
          </tr>
          <tr>
            <td width="300px">space-2</td>
            <td>2 px</td>
            <td>parts of component</td>
            <td><div :style="{ width: '2px', height: '2px', background: 'var(--brand-interaction-primary-hovered)' }" /></td>
          </tr>
          <tr>
            <td width="300px">space-4</td>
            <td>4 px</td>
            <td>parts of component</td>
            <td><div :style="{ width: '4px', height: '4px', background: 'var(--brand-interaction-primary-hovered)' }" /></td>
          </tr>
          <tr>
            <td width="300px">space-8</td>
            <td>8 px</td>
            <td>parts of component, component</td>
            <td><div :style="{ width: '8px', height: '8px', background: 'var(--brand-interaction-primary-hovered)' }" /></td>
          </tr>
          <tr>
            <td width="300px">space-10</td>
            <td>10 px</td>
            <td>parts of component, component</td>
            <td><div :style="{ width: '10px', height: '10px', background: 'var(--brand-interaction-primary-hovered)' }" /></td>
          </tr>
          <tr>
            <td width="300px">space-12</td>
            <td>12 px</td>
            <td>parts of component, component</td>
            <td><div :style="{ width: '12px', height: '12px', background: 'var(--brand-interaction-primary-hovered)' }" /></td>
          </tr>
          <tr>
            <td width="300px">space-16</td>
            <td>16 px</td>
            <td>parts of component, component, panel sections</td>
            <td><div :style="{ width: '16px', height: '16px', background: 'var(--brand-interaction-primary-hovered)' }" /></td>
          </tr>
          <tr>
            <td width="300px">space-20</td>
            <td>20 px</td>
            <td>parts of component, component, panel sections</td>
            <td><div :style="{ width: '20px', height: '20px', background: 'var(--brand-interaction-primary-hovered)' }" /></td>
          </tr>
          <tr>
            <td width="300px">space-24</td>
            <td>24 px</td>
            <td>parts of component, component, panel sections</td>
            <td><div :style="{ width: '24px', height: '24px', background: 'var(--brand-interaction-primary-hovered)' }" /></td>
          </tr>
          <tr>
            <td width="300px">space-32</td>
            <td>32 px</td>
            <td>parts of component, component, panel sections, stacks, page sections</td>
            <td><div :style="{ width: '32px', height: '32px', background: 'var(--brand-interaction-primary-hovered)' }" /></td>
          </tr>
          <tr>
            <td width="300px">space-48</td>
            <td>48 px</td>
            <td>panel sections, stacks, page sections</td>
            <td><div :style="{ width: '48px', height: '48px', background: 'var(--brand-interaction-primary-hovered)' }" /></td>
          </tr>
          <tr>
            <td width="300px">space-64</td>
            <td>64 px</td>
            <td>panel sections, stacks, page sections</td>
            <td><div :style="{ width: '64px', height: '64px', background: 'var(--brand-interaction-primary-hovered)' }" /></td>
          </tr>
          <tr>
            <td width="300px">space-80</td>
            <td>80 px</td>
            <td>panel sections, stacks, page sections</td>
            <td><div :style="{ width: '80px', height: '80px', background: 'var(--brand-interaction-primary-hovered)' }" /></td>
          </tr>
          <tr>
            <td width="300px">space-96</td>
            <td>96 px</td>
            <td>panel sections, stacks, page sections</td>
            <td><div :style="{ width: '96px', height: '96px', background: 'var(--brand-interaction-primary-hovered)' }" /></td>
          </tr>
          <tr>
            <td width="300px">space-144</td>
            <td>144 px</td>
            <td>panel sections, stacks, page sections</td>
            <td><div :style="{ width: '144px', height: '144px', background: 'var(--brand-interaction-primary-hovered)' }" /></td>
          </tr>
          <tr>
            <td width="300px">space-192</td>
            <td>192 px</td>
            <td>panel sections, stacks, page sections</td>
            <td><div :style="{ width: '192px', height: '192px', background: 'var(--brand-interaction-primary-hovered)' }" /></td>
          </tr>
          </tbody>
        </table>
      </utility-token-section>
    </vue-stack>
      </component-docs>`,
  }),
  {
    info: {
      components: { VueText },
    },
  },
);
