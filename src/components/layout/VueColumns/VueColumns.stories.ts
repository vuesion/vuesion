import { storiesOf } from '@storybook/vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueText from '@/components/atoms/VueText/VueText.vue';
import VueFooter from '@/components/organisms/VueFooter/VueFooter.vue';
import VueNavBar from '@/components/organisms/VueNavBar/VueNavBar.vue';
import VueColumn from './VueColumn/VueColumn.vue';
import VueColumns from './VueColumns.vue';

const story = storiesOf('Foundation|Layout/Columns', module) as any;

story.add(
  'Nested columns with responsive spacings and width',
  () => ({
    components: { VueBox, VueColumns, VueColumn, VueStack, VueText },
    template: `<vue-box :padding="[8, 16, 24, 32]">
    <vue-columns :space="[8, 16, 24, 32]" :align-y="['top', 'center']" stack-phone>
      <vue-column :width="['100%', '250px']">
        Sidebar
      </vue-column>
      <vue-column :width="['content', '100%']">
        <vue-columns :space="[8, 16, 24, 32]" :align-y="['top', 'bottom']" stack-phone>
          <vue-column>
            <vue-stack :space="[8, 16, 24, 32]">
              <vue-text>Main Content</vue-text>
              <vue-text>Main Content</vue-text>
              <vue-text>Main Content</vue-text>
              <vue-text>Main Content</vue-text>
              <vue-text>Main Content</vue-text>
            </vue-stack>
          </vue-column>
          <vue-column :width="[null, 'content']">
            Menu
          </vue-column>
        </vue-columns>
      </vue-column>
    </vue-columns>
    </vue-box>`,
  }),
  {
    info: {
      components: { VueColumns },
    },
  },
);

story.add(
  'Complex example',
  () => ({
    components: { VueBox, VueColumns, VueColumn, VueStack, VueText },
    template: `<vue-box>
    <vue-stack space="32">
      <vue-columns  :align-y="['top', 'center']">
        <vue-column width="content">Image</vue-column>
        <vue-column>
          <vue-columns stack-phone>
            <vue-column>
              <vue-stack space="4">
                <vue-text>Text</vue-text>
                <vue-text>Text</vue-text>
                <vue-text>Text</vue-text>
                <vue-text>Text</vue-text>
              </vue-stack>
            </vue-column>
            <vue-column>
              <vue-columns :space="[4, 24]" stack-phone>
                <vue-column width="content"><vue-text>Price</vue-text></vue-column>
                <vue-column :width="['content', '150px', '250px']">
                  <vue-text>Dropdown</vue-text>
                </vue-column>
                <vue-column :width="['content', '180px']">
                  <vue-text>Summary</vue-text>
                </vue-column>
              </vue-columns>
            </vue-column>
          </vue-columns>
        </vue-column>
      </vue-columns>
      <vue-columns  :align-y="['top', 'center']">
        <vue-column width="content">Image</vue-column>
        <vue-column>
          <vue-columns stack-phone>
            <vue-column>
              <vue-stack space="4">
                <vue-text>Text</vue-text>
                <vue-text>Text</vue-text>
                <vue-text>Text</vue-text>
                <vue-text>Text</vue-text>
              </vue-stack>
            </vue-column>
            <vue-column>
              <vue-columns :space="[4, 24]" stack-phone>
                <vue-column width="content"><vue-text>Price</vue-text></vue-column>
                <vue-column :width="['content', '150px', '250px']">
                  <vue-text>Dropdown</vue-text>
                </vue-column>
                <vue-column :width="['content', '180px']">
                  <vue-text>Summary Summary</vue-text>
                </vue-column>
              </vue-columns>
            </vue-column>
          </vue-columns>
        </vue-column>
      </vue-columns>
    </vue-stack>
    </vue-box>`,
  }),
  {
    info: {
      components: { VueColumns },
    },
  },
);

story.add(
  'As list element',
  () => ({
    components: { VueBox, VueColumns, VueColumn },
    template: `<vue-box :padding="[8, 16, 24, 32]">
    <vue-columns as="ul" :space="[8, 16, 24, 32]" :align-y="['top', 'center']" stack-phone>
      <vue-column :width="['100%', '250px']">
        Sidebar
      </vue-column>
      <vue-column>
        <vue-columns as="ul" :space="[8, 16, 24, 32]" :align-y="['top', 'bottom']" stack-phone>
          <vue-column>
            Main Content
            <br/>
            Main Content
            <br/>
            Main Content
            <br/>
            Main Content
            <br/>
            Main Content
            <br/>
          </vue-column>
          <vue-column :width="['100%', 'content']">Menu</vue-column>
        </vue-columns>
      </vue-column>
    </vue-columns>
    </vue-box>`,
  }),
  {
    info: {
      components: { VueColumns },
    },
  },
);

story.add(
  'With responsive revert',
  () => ({
    components: { VueBox, VueColumns, VueColumn },
    template: `<vue-box :padding="[8, 16, 24, 32]">
    <vue-columns :revert="[null, null, null, true, true]">
      <vue-column>
        Test 1
      </vue-column>
      <vue-column>
        Test 2
      </vue-column>
    </vue-columns>
    </vue-box>`,
  }),
  {
    info: {
      components: { VueColumns },
    },
  },
);

story.add(
  'Stacked full page layout',
  () => ({
    components: { VueBox, VueColumns, VueColumn, VueNavBar, VueFooter },
    template: `<vue-columns
      :space="null"
      full-page
      stack-phone
      stack-tablet-portrait
      stack-tablet-landscape
      stack-small-desktop
      stack-large-desktop
    >
      <vue-column width="content">
        <vue-nav-bar />
      </vue-column>
      <vue-column align="center" align-y="center">
        Content
      </vue-column>
      <vue-column width="content">
        <vue-footer />
      </vue-column>
    </vue-columns>`,
  }),
  {
    info: {
      components: { VueColumns },
    },
  },
);
