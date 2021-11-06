import { storiesOf } from '@storybook/vue';
import { textColorVariations } from '@/components/prop-validators';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import UtilityTokenSection from '@/assets/design-system/docs/components/UtilityTokenSection.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueColumns from '@/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/layout/VueColumns/VueColumn/VueColumn.vue';
import ColorTokensSection from '@/assets/design-system/docs/components/ColorTokensSection.vue';
import VueText from './VueText.vue';

const story = storiesOf('Foundation|Typography', module) as any;

story.add(
  'Text Styles',
  () => ({
    components: { VueText, ComponentDocs, UtilityTokenSection, VueStack, VueColumns, VueColumn },
    data() {
      return {
        textVariations: textColorVariations,
      };
    },
    template: `<component-docs
      component-name="Typography"
      usage="Typography can help create clear hierarchies, organize information, and guide users through a product or experience."
      suffix=""
    >

    <vue-stack space="64">
      <utility-token-section title="Atomic Typography Styles" description="This is the basic scale and weights used for our typography styles.">
        <vue-columns>
          <vue-column>
            <vue-stack space="4">
              <vue-text look="large-title" color="text-high" weight="semi-bold">Scale</vue-text>
              <vue-text look="support" uppercase weight="semi-bold">FONT SIZE (PX) / LINE HEIGHT (PX)</vue-text>
              <vue-text>12/16</vue-text>
              <vue-text>14/20</vue-text>
              <vue-text>16/24</vue-text>
              <vue-text>20/28</vue-text>
              <vue-text>24/32</vue-text>
              <vue-text>30/36</vue-text>
              <vue-text>36/44</vue-text>
              <vue-text>48/56</vue-text>
            </vue-stack>
          </vue-column>
          <vue-column>
            <vue-stack space="4">
              <vue-text look="large-title" color="text-high" weight="semi-bold">Font Weights</vue-text>
              <vue-text>Regular - 400</vue-text>
              <vue-text>Semibold - 600</vue-text>
            </vue-stack>
          </vue-column>
          <vue-column>
            <vue-stack space="4">
              <vue-text look="large-title" color="text-high" weight="semi-bold">Font Families</vue-text>
              <vue-text>Inter - Sans Serif</vue-text>
            </vue-stack>
          </vue-column>
        </vue-columns>
      </utility-token-section>
      <utility-token-section title="Headlines" description="These text styles are reserved for important text that leads or describe the following content.">
        <table width="100%">
          <thead>
          <tr>
            <th>TEXT STYLE</th>
            <th>LOOK</th>
            <th>DESCRIPTION</th>
            <th>FONT SIZE</th>
            <th>LINE-HEIGHT</th>
            <th>CHARACTER</th>
            <th>WEIGHT</th>
            <th>TYPEFACE</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td width="300px"><vue-text look="h1">Headline 1</vue-text></td>
            <td width="30px">h1</td>
            <td width="300px">Used for title of screen & entire feature flow. Naming of title is often after the function of the screen or feature flow.</td>
            <td>48 px</td>
            <td>56 px</td>
            <td>0</td>
            <td>regular</td>
            <td>inter</td>
          </tr>
          <tr>
            <td width="300px"><vue-text look="h2">Headline 2</vue-text></td>
            <td width="30px">h2</td>
            <td width="300px">Used for large groups of related components & information that have a lot of functionality. For example, cards should use Section title.</td>
            <td>36 px</td>
            <td>48 px</td>
            <td>0</td>
            <td>regular</td>
            <td>inter</td>
          </tr>
          <tr>
            <td width="300px"><vue-text look="h3">Headline 3</vue-text></td>
            <td width="30px">h3</td>
            <td width="300px">Sometimes a section will further divide information into subsections.</td>
            <td>30 px</td>
            <td>40 px</td>
            <td>0</td>
            <td>regular</td>
            <td>inter</td>
          </tr>
          <tr>
            <td width="300px"><vue-text look="h4">Headline 4</vue-text></td>
            <td width="30px">h4</td>
            <td width="300px">If necessary use for headers for layouts</td>
            <td>24 px</td>
            <td>32 px</td>
            <td>0</td>
            <td>regular</td>
            <td>inter</td>
          </tr>
          <tr>
            <td width="300px"><vue-text look="h5">Headline 5</vue-text></td>
            <td width="30px">h5</td>
            <td width="300px">If necessary use for headers for layouts</td>
            <td>20 px</td>
            <td>24 px</td>
            <td>0</td>
            <td>regular</td>
            <td>inter</td>
          </tr>
          <tr>
            <td width="300px"><vue-text look="h6">Headline 6</vue-text></td>
            <td width="30px">h6</td>
            <td width="300px">If necessary use for headers for layouts</td>
            <td>16 px</td>
            <td>24 px</td>
            <td>0</td>
            <td>regular</td>
            <td>inter</td>
          </tr>
          </tbody>
        </table>
      </utility-token-section>
      <utility-token-section title="Description" description="Text that follows a headline that provides a more context about the following content.">
        <table width="100%">
          <thead>
          <tr>
            <th>TEXT STYLE</th>
            <th>LOOK</th>
            <th>DESCRIPTION</th>
            <th>FONT SIZE</th>
            <th>LINE-HEIGHT</th>
            <th>CHARACTER</th>
            <th>WEIGHT</th>
            <th>TYPEFACE</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td width="300px"><vue-text look="description" as="div">Description</vue-text></td>
            <td width="30px">description</td>
            <td width="300px">Text that follows a headline that provides a more context about the following content.</td>
            <td>16 px</td>
            <td>24 px</td>
            <td>0</td>
            <td>regular</td>
            <td>inter</td>
          </tr>
          </tbody>
        </table>
      </utility-token-section>
      <utility-token-section title="Component" description="These text styles are meant to be applied to components and other user interface elements.">
        <table width="100%">
          <thead>
          <tr>
            <th>TEXT STYLE</th>
            <th>LOOK</th>
            <th>DESCRIPTION</th>
            <th>FONT SIZE</th>
            <th>LINE-HEIGHT</th>
            <th>CHARACTER</th>
            <th>WEIGHT</th>
            <th>TYPEFACE</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td width="300px"><vue-text look="large-title" weight="semi-bold" as="div">Large title</vue-text></td>
            <td width="30px">large-title</td>
            <td width="300px">Use the large title to draw visual attention</td>
            <td>24 px</td>
            <td>32 px</td>
            <td>0</td>
            <td>semibold</td>
            <td>inter</td>
          </tr>
          <tr>
            <td width="300px"><vue-text look="medium-title" weight="semi-bold" as="div">Medium title</vue-text></td>
            <td width="30px">medium-title</td>
            <td width="300px">Some components have a name or title that needs to be a bit larger</td>
            <td>20 px</td>
            <td>24 px</td>
            <td>0</td>
            <td>semibold</td>
            <td>inter</td>
          </tr>
          <tr>
            <td width="300px"><vue-text look="small-title" weight="semi-bold" as="div">Small title</vue-text></td>
            <td width="30px">small-title</td>
            <td width="300px">Some components have a name or title that needs to be a bit larger</td>
            <td>14 px</td>
            <td>20 px</td>
            <td>0</td>
            <td>semibold</td>
            <td>inter</td>
          </tr>
          <tr>
            <td width="300px"><vue-text as="div">Default</vue-text></td>
            <td width="30px">default</td>
            <td width="300px">General use for normal reading e.g. buttons, text input, or written copy</td>
            <td>14 px</td>
            <td>20 px</td>
            <td>0</td>
            <td>regular</td>
            <td>inter</td>
          </tr>
          <tr>
            <td width="300px"><vue-text look="label" as="div">Label</vue-text></td>
            <td width="30px">label</td>
            <td width="300px">Text style for labels such as with inputs and text areas</td>
            <td>12 px</td>
            <td>16 px</td>
            <td>0</td>
            <td>regular</td>
            <td>inter</td>
          </tr>
          <tr>
            <td width="300px"><vue-text look="button" weight="semi-bold" as="div">Button</vue-text></td>
            <td width="30px">button</td>
            <td width="300px">Text style used with buttons</td>
            <td>14 px</td>
            <td>20 px</td>
            <td>0</td>
            <td>semibold</td>
            <td>inter</td>
          </tr>
          </tbody>
        </table>
      </utility-token-section>
      <utility-token-section title="Support" description="For supporting text e.g. hints, list items, errors messages on text input, timestamp, progress indicator.">
        <table width="100%">
          <thead>
          <tr>
            <th>TEXT STYLE</th>
            <th>LOOK</th>
            <th>DESCRIPTION</th>
            <th>FONT SIZE</th>
            <th>LINE-HEIGHT</th>
            <th>CHARACTER</th>
            <th>WEIGHT</th>
            <th>TYPEFACE</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td width="300px">
              <vue-text look="support" as="div">Support</vue-text>
              <vue-text look="support" weight="semi-bold" as="div">Support (semibold)</vue-text>
            </td>
            <td width="30px">support</td>
            <td width="300px">For supporting text e.g. hints, list items, errors messages on text input, timestamp, progress indicator</td>
            <td>12 px</td>
            <td>16 px</td>
            <td>0</td>
            <td>regular, semibold</td>
            <td>inter</td>
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

story.add(
  'Text Colors',
  () => ({
    components: { VueText, ComponentDocs, ColorTokensSection },
    data() {
      return {
        textVariations: textColorVariations,
      };
    },
    template: `<component-docs
      component-name="Text Colors"
    >
    <color-tokens-section
      title="Text Colors"
      description="These tokens are to be applied to text, content, and icons."
      :columns="[
        {
          dark: false,
          tokens: [
            {
              figmaVar: '📀 Text - Default - High',
              cssVar: 'text-high',
              paletteColor: 'neutral 10',
              circleColor:'brand-text-default-high',
              smallCircleColor:'brand-text-default-high',
            },
            {
              figmaVar: '📀 Text - Default - Medium',
              cssVar: 'text-medium',
              paletteColor: 'neutral 8',
              circleColor:'brand-text-default-medium',
              smallCircleColor:'brand-text-default-medium',
            },
            {
              figmaVar: '📀 Text - Default - Low',
              cssVar: 'text-low',
              paletteColor: 'neutral 6',
              circleColor:'brand-text-default-low',
              smallCircleColor:'brand-text-default-low',
            },
          ],
        },
        {
          dark: true,
          tokens: [
            {
              figmaVar: '📀 Text - Inverse - High',
              cssVar: 'text-inverse-high',
              paletteColor: 'neutral 0',
              circleColor:'brand-text-inverse-high',
              smallCircleColor:'brand-text-inverse-high',
            },
            {
              figmaVar: '📀 Text - Inverse - Medium',
              cssVar: 'text-inverse-medium',
              paletteColor: 'neutral 2',
              circleColor:'brand-text-inverse-medium',
              smallCircleColor:'brand-text-inverse-medium',
            },
            {
              figmaVar: '📀 Text - Inverse - Low',
              cssVar: 'text-inverse-low',
              paletteColor: 'neutral 4',
              circleColor:'brand-text-inverse-low',
              smallCircleColor:'brand-text-inverse-low',
            },
          ],
        },
        {
          dark: false,
          tokens: [
            {
              figmaVar: '📀 Text - Info',
              cssVar: 'info',
              paletteColor: 'primary 7',
              circleColor:'brand-text-info',
              smallCircleColor:'brand-text-info',
            },
            {
              figmaVar: '📀 Text - Success',
              cssVar: 'success',
              paletteColor: 'success 7',
              circleColor:'brand-text-success',
              smallCircleColor:'brand-text-success',
            },
            {
              figmaVar: '📀 Text - Warning',
              cssVar: 'warning',
              paletteColor: 'warning 7',
              circleColor:'brand-text-warning',
              smallCircleColor:'brand-text-warning',
            },
            {
              figmaVar: '📀 Text - Danger',
              cssVar: 'danger',
              paletteColor: 'danger 7',
              circleColor:'brand-text-danger',
              smallCircleColor:'brand-text-danger',
            },
          ],
        },
      ]"
    />
    </component-docs>`,
  }),
  {
    info: {
      components: { VueText },
    },
  },
);
