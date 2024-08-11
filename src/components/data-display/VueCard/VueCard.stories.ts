import type { StoryFn } from '@storybook/vue3';
import VueCard from './VueCard.vue';
import ComponentDocs from 'assets/design-system/docs/components/ComponentDocs.vue';
import VueTiles from '~/components/layout/VueTiles/VueTiles.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueColumns from '~/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '~/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueAvatar from '~/components/data-display/VueAvatar/VueAvatar.vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import VueBox from '~/components/layout/VueBox/VueBox.vue';
import VueInline from '~/components/layout/VueInline/VueInline.vue';
import VueButton from '~/components/input-and-actions/VueButton/VueButton.vue';

export default {
  title: 'Data Display/Card',
  component: VueCard,
  argTypes: {
    default: { table: { disable: true } },
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
  <vue-tiles :columns="[1, 2, 3, 4]">
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
            <vue-text look="medium-title" color="text-high" weight="semi-bold">
              Heading
            </vue-text>
            <vue-text color="text-medium">
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
    padding: 16,
    space: 24,
  },
};
