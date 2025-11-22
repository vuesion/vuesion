import type { StoryFn } from '@storybook/vue3-vite';
import VueText from './VueText.vue';
import ComponentDocs from 'assets/design-system/docs/components/ComponentDocs.vue';
import UtilityTokenSection from 'assets/design-system/docs/components/UtilityTokenSection.vue';
import VueStack from '@/components/design-system/layout/VueStack/VueStack.vue';
import VueColumns from '@/components/design-system/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/design-system/layout/VueColumns/VueColumn/VueColumn.vue';

export default {
  title: 'Design System Foundation',
  component: null,
  argTypes: {},
  parameters: { controls: { disabled: true } },
};

const TextStylesTemplate: StoryFn = (args) => ({
  components: { VueText, ComponentDocs, UtilityTokenSection, VueStack, VueColumns, VueColumn },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs component-name="Typography" suffix="">
  <vue-stack space="64">
    <utility-token-section title="Headline" description="Text styles that are reserved for important text that leads or describe the following content.">
      <table width="100%">
        <thead>
        <tr>
          <th><vue-text weight="semi-bold" color="low">Text Style </vue-text></th>
          <th><vue-text weight="semi-bold" color="low">Look</vue-text></th>
          <th><vue-text weight="semi-bold" color="low">Size</vue-text></th>
          <th><vue-text weight="semi-bold" color="low">Height</vue-text></th>
          <th><vue-text weight="semi-bold" color="low">Space</vue-text></th>
          <th><vue-text weight="semi-bold" color="low">Weight</vue-text></th>
          <th><vue-text weight="semi-bold" color="low">Family</vue-text></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td width="350px"><vue-text look="hero" weight="extra-bold">Hero</vue-text></td>
          <td width="200px">hero</td>
          <td>61</td>
          <td>74</td>
          <td>-0.5</td>
          <td>extra-bold</td>
          <td>Inter</td>
        </tr>
        <tr>
          <td width="350px"><vue-text look="h1" weight="bold">Headline 1</vue-text></td>
          <td width="200px">h1</td>
          <td>49</td>
          <td>59</td>
          <td>-0.5</td>
          <td>bold</td>
          <td>Inter</td>
        </tr>
        <tr>
          <td width="350px"><vue-text look="h2" weight="bold">Headline 2</vue-text></td>
          <td width="200px">h2</td>
          <td>39</td>
          <td>47</td>
          <td>-0.5</td>
          <td>bold</td>
          <td>Inter</td>
        </tr>
        <tr>
          <td width="350px"><vue-text look="h3" weight="bold">Headline 3</vue-text></td>
          <td width="200px">h3</td>
          <td>31</td>
          <td>38</td>
          <td>-0.5</td>
          <td>bold</td>
          <td>Inter</td>
        </tr>
        <tr>
          <td width="350px"><vue-text look="h4" weight="bold">Headline 4</vue-text></td>
          <td width="200px">h4</td>
          <td>25</td>
          <td>30</td>
          <td>-0.5</td>
          <td>bold</td>
          <td>Inter</td>
        </tr>
        <tr>
          <td width="350px"><vue-text look="h5" weight="bold">Headline 5</vue-text></td>
          <td width="200px">h5</td>
          <td>20</td>
          <td>24</td>
          <td>-0.5</td>
          <td>bold</td>
          <td>Inter</td>
        </tr>
        <tr>
          <td width="350px"><vue-text look="h6" weight="bold">Headline 6</vue-text></td>
          <td width="200px">h6</td>
          <td>16</td>
          <td>20</td>
          <td>-0.5</td>
          <td>bold</td>
          <td>Inter</td>
        </tr>
        </tbody>
      </table>
    </utility-token-section>

    <utility-token-section title="Description" description="Text that follows a headline that provides more context about the following content.">
      <table width="100%">
        <thead>
        <tr>
          <th><vue-text weight="semi-bold" color="low">Text Style </vue-text></th>
          <th><vue-text weight="semi-bold" color="low">Look</vue-text></th>
          <th><vue-text weight="semi-bold" color="low">Size</vue-text></th>
          <th><vue-text weight="semi-bold" color="low">Height</vue-text></th>
          <th><vue-text weight="semi-bold" color="low">Space</vue-text></th>
          <th><vue-text weight="semi-bold" color="low">Weight</vue-text></th>
          <th><vue-text weight="semi-bold" color="low">Family</vue-text></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td width="350px"><vue-text look="description-lg" weight="regular">Description LG</vue-text></td>
          <td width="200px">description-lg</td>
          <td>24</td>
          <td>34</td>
          <td>0</td>
          <td>regular</td>
          <td>Inter</td>
        </tr>
        <tr>
          <td width="350px"><vue-text look="description-md" weight="regular">Description MD</vue-text></td>
          <td width="200px">description-lg</td>
          <td>20</td>
          <td>30</td>
          <td>0</td>
          <td>regular</td>
          <td>Inter</td>
        </tr>
        <tr>
          <td width="350px"><vue-text look="description-sm" weight="regular">Description SM</vue-text></td>
          <td width="200px">description-lg</td>
          <td>18</td>
          <td>28</td>
          <td>0</td>
          <td>regular</td>
          <td>Inter</td>
        </tr>
        </tbody>
      </table>
    </utility-token-section>

    <utility-token-section title="Component" description="These text styles are meant to be applied to components and other user interface elements.">
      <table width="100%">
        <thead>
        <tr>
          <th><vue-text weight="semi-bold" color="low">Text Style </vue-text></th>
          <th><vue-text weight="semi-bold" color="low">Look</vue-text></th>
          <th><vue-text weight="semi-bold" color="low">Size</vue-text></th>
          <th><vue-text weight="semi-bold" color="low">Height</vue-text></th>
          <th><vue-text weight="semi-bold" color="low">Space</vue-text></th>
          <th><vue-text weight="semi-bold" color="low">Weight</vue-text></th>
          <th><vue-text weight="semi-bold" color="low">Family</vue-text></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td width="350px"><vue-text look="title-lg" weight="semi-bold">Title LG</vue-text></td>
          <td width="200px">title-lg</td>
          <td>25</td>
          <td>32</td>
          <td>-0.25</td>
          <td>semi-bold</td>
          <td>Inter</td>
        </tr>
        <tr>
          <td width="350px"><vue-text look="title-md" weight="semi-bold">Title MD</vue-text></td>
          <td width="200px">title-md</td>
          <td>20</td>
          <td>26</td>
          <td>-0.25</td>
          <td>semi-bold</td>
          <td>Inter</td>
        </tr>
        <tr>
          <td width="350px"><vue-text look="title-sm" weight="semi-bold">Title SM</vue-text></td>
          <td width="200px">title-sm</td>
          <td>18</td>
          <td>24</td>
          <td>-0.25</td>
          <td>semi-bold</td>
          <td>Inter</td>
        </tr>
        <tr>
          <td width="350px"><vue-text look="default" weight="regular">Default</vue-text></td>
          <td width="200px">default</td>
          <td>16</td>
          <td>24</td>
          <td>0</td>
          <td>regular</td>
          <td>Inter</td>
        </tr>
        <tr>
          <td width="350px"><vue-text look="default" weight="semi-bold">Default Semi Bold</vue-text></td>
          <td width="200px">default</td>
          <td>16</td>
          <td>24</td>
          <td>0</td>
          <td>semi-bold</td>
          <td>Inter</td>
        </tr>
        <tr>
          <td width="350px"><vue-text look="label" weight="semi-bold">Label</vue-text></td>
          <td width="200px">label</td>
          <td>14</td>
          <td>20</td>
          <td>0.25</td>
          <td>semi-bold</td>
          <td>Inter</td>
        </tr>
        <tr>
          <td width="350px"><vue-text look="button-lg" weight="semi-bold">Button LG</vue-text></td>
          <td width="200px">button-lg</td>
          <td>18</td>
          <td>20</td>
          <td>0.5</td>
          <td>semi-bold</td>
          <td>Inter</td>
        </tr>
        <tr>
          <td width="350px"><vue-text look="button-md" weight="semi-bold">Button MD</vue-text></td>
          <td width="200px">button-md</td>
          <td>16</td>
          <td>20</td>
          <td>0.5</td>
          <td>semi-bold</td>
          <td>Inter</td>
        </tr>
        <tr>
          <td width="350px"><vue-text look="button-sm" weight="semi-bold">Button SM</vue-text></td>
          <td width="200px">button-sm</td>
          <td>14</td>
          <td>20</td>
          <td>0.5</td>
          <td>semi-bold</td>
          <td>Inter</td>
        </tr>
        </tbody>
      </table>
    </utility-token-section>

    <utility-token-section title="Support" description="For supporting text e.g. hints, list items, errors messages on text input, timestamp, progress indicator">
      <table width="100%">
        <thead>
        <tr>
          <th><vue-text weight="semi-bold" color="low">Text Style </vue-text></th>
          <th><vue-text weight="semi-bold" color="low">Look</vue-text></th>
          <th><vue-text weight="semi-bold" color="low">Size</vue-text></th>
          <th><vue-text weight="semi-bold" color="low">Height</vue-text></th>
          <th><vue-text weight="semi-bold" color="low">Space</vue-text></th>
          <th><vue-text weight="semi-bold" color="low">Weight</vue-text></th>
          <th><vue-text weight="semi-bold" color="low">Family</vue-text></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td width="350px"><vue-text look="support-lg" weight="regular">Support LG</vue-text></td>
          <td width="200px">support-lg</td>
          <td>14</td>
          <td>20</td>
          <td>0.25</td>
          <td>regular</td>
          <td>Inter</td>
        </tr>
        <tr>
          <td width="350px"><vue-text look="support-lg" weight="semi-bold">Support LG Semi Bold</vue-text></td>
          <td width="200px">support-lg</td>
          <td>14</td>
          <td>20</td>
          <td>0.25</td>
          <td>semi-bold</td>
          <td>Inter</td>
        </tr>
        <tr>
          <td width="350px"><vue-text look="support-md" weight="regular">Support MD</vue-text></td>
          <td width="200px">support-md</td>
          <td>13</td>
          <td>18</td>
          <td>0.25</td>
          <td>regular</td>
          <td>Inter</td>
        </tr>
        <tr>
          <td width="350px"><vue-text look="support-md" weight="semi-bold">Support MD Semi Bold</vue-text></td>
          <td width="200px">support-md</td>
          <td>13</td>
          <td>18</td>
          <td>0.25</td>
          <td>semi-bold</td>
          <td>Inter</td>
        </tr>
        <tr>
          <td width="350px"><vue-text look="support-sm" weight="regular">Support SM</vue-text></td>
          <td width="200px">support-sm</td>
          <td>12</td>
          <td>16</td>
          <td>0.25</td>
          <td>regular</td>
          <td>Inter</td>
        </tr>
        <tr>
          <td width="350px"><vue-text look="support-sm" weight="semi-bold">Support SM Semi Bold</vue-text></td>
          <td width="200px">support-sm</td>
          <td>12</td>
          <td>16</td>
          <td>0.25</td>
          <td>semi-bold</td>
          <td>Inter</td>
        </tr>
        </tbody>
      </table>
    </utility-token-section>
  </vue-stack>
  </component-docs>`,
});

export const TextStyles = {
  render: TextStylesTemplate,
};
