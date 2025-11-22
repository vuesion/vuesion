import type { StoryFn } from '@storybook/vue3-vite';
import VueCard from './VueCard.vue';
import ComponentDocs from 'assets/design-system/docs/components/ComponentDocs.vue';
import VueTiles from '@/components/design-system/layout/VueTiles/VueTiles.vue';
import VueStack from '@/components/design-system/layout/VueStack/VueStack.vue';
import VueColumns from '@/components/design-system/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/design-system/layout/VueColumns/VueColumn/VueColumn.vue';
import VueAvatar from '@/components/design-system/identity/VueAvatar/VueAvatar.vue';
import VueText from '@/components/design-system/typography/VueText/VueText.vue';
import VueBox from '@/components/design-system/layout/VueBox/VueBox.vue';
import VueInline from '@/components/design-system/layout/VueInline/VueInline.vue';
import VueButton from '@/components/design-system/forms-and-actions/VueButton/VueButton.vue';
import { BadgeStatusValues } from '@/components/utils/prop-types/components';
import { SurfaceColorValues } from '@/components/utils/prop-types/colors';
import { SpacingValues } from '@/components/utils/prop-types/spacings';
import { FlexAlignValues, FlexJustifyValues } from '@/components/utils/prop-types/layout';

export default {
  title: 'Design System Components/Surfaces and Feedback/Card',
  component: VueCard,
  argTypes: {
    surfaceColor: {
      control: { type: 'select' },
      options: SurfaceColorValues,
    },
    space: {
      control: { type: 'select' },
      options: SpacingValues,
    },
    alignX: {
      control: { type: 'select' },
      options: FlexAlignValues,
    },
    alignY: {
      control: { type: 'select' },
      options: FlexJustifyValues,
    },
  },
};

const Template: StoryFn = (args) => ({
  components: {
    VueCard,
    ComponentDocs,
    VueTiles,
    VueStack,
    VueColumns,
    VueColumn,
    VueAvatar,
    VueText,
    VueBox,
    VueInline,
    VueButton,
  },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="Card"
      usage="Cards are used to group similar concepts and tasks together."
      story="Display different variations of the card component."
      no-bg
  >
  <vue-tiles :columns="[1, 2, 3, 4]" space="16">
    <vue-card v-for="id in [1, 2, 3, 4]" :key="id" v-bind="args">
      <vue-columns space="16" align-y="center">
        <vue-column width="56px" no-grow v-if="id === 1 || id === 3">
          <vue-avatar
            name="avatar"
            size="md"
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3150&q=80"
          />
        </vue-column>
        <vue-column>
          <vue-stack space="0" align-y="between">
            <vue-text look="medium-title" color="high" weight="semi-bold">
              Heading
            </vue-text>
            <vue-text color="medium">
              {{ id === 1 || id === 4 ? 'Subheading' : null }}
              {{id === 2 ? '&nbsp;' : null }}
            </vue-text>
          </vue-stack>
        </vue-column>
      </vue-columns>

      <vue-text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et dolore
        magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren.
      </vue-text>

      <vue-inline space="8" revert>
        <vue-button look="primary" trailing-icon="arrow-right">Read more</vue-button>
      </vue-inline>
    </vue-card>
  </vue-tiles>
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {
    surfaceColor: 'high',
    padding: 16,
    space: 8,
    alignX: 'start',
    alignY: 'between',
    interactive: false,
    disabled: false,
  },
};
