import { storiesOf } from '@storybook/vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import VueTiles from '@/components/layout/VueTiles/VueTiles.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueColumns from '@/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueAvatar from '@/components/data-display/VueAvatar/VueAvatar.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';
import VueButton from '@/components/input-and-actions/VueButton/VueButton.vue';
import VueCard from './VueCard.vue';

const story = storiesOf('Data Display|Card', module) as any;

story.add(
  'Default',
  () => ({
    components: {
      ComponentDocs,
      VueTiles,
      VueCard,
      VueStack,
      VueColumns,
      VueColumn,
      VueAvatar,
      VueText,
      VueBox,
      VueInline,
      VueButton,
    },
    template: `<component-docs
      component-name="Card"
      usage="Cards are used to group similar concepts and tasks together."
      story="Display different variations of the card component."
    >
    <vue-tiles :columns="[1, 2, 3, 4]">
      <vue-card padding="0" v-for="id in [1, 2, 3, 4]" :key="id">
        <vue-stack space="0">
          <vue-box padding="16 16 12 16">
            <vue-columns space="12" align-y="center">
              <vue-column width="56px" v-if="id === 1 || id === 3">
                <vue-avatar name="avatar" size="md" src="https://via.placeholder.com/56"/>
              </vue-column>
              <vue-column>
                <vue-stack space="0">
                  <vue-text look="h4" color="text-high">
                    Heading
                  </vue-text>
                  <vue-text look="h6" color="text-medium">
                    {{ id === 1 || id === 4 ? 'Subheading' : '&nbsp;' }}
                  </vue-text>
                </vue-stack>
              </vue-column>
            </vue-columns>
          </vue-box>

          <hr v-if="id === 1 || id === 4" />

          <vue-box padding="12 16 16 16">
            <vue-text>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam
              et justo duo dolores et ea rebum. Stet clita kasd gubergren.
            </vue-text>
          </vue-box>

          <hr v-if="id === 3 || id === 4" />

          <vue-box padding="16">
            <vue-inline space="8" revert>
              <vue-button look="primary">Submit</vue-button>
              <vue-button look="secondary">Cancel</vue-button>
            </vue-inline>
          </vue-box>
        </vue-stack>
      </vue-card>
    </vue-tiles>
    </component-docs>`,
  }),
  {
    info: {
      components: { VueCard },
    },
  },
);
