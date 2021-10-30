import { storiesOf } from '@storybook/vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueFooter from '@/components/navigation/VueFooter/VueFooter.vue';
import VueNavbar from '@/components/navigation/VueNavbar/VueNavbar.vue';
import VueColumn from './VueColumn/VueColumn.vue';
import VueColumns from './VueColumns.vue';

const story = storiesOf('Foundation|Layout/Columns', module) as any;

story.add(
  'Nested columns with responsive spacings and width',
  () => ({
    components: { VueBox, VueColumns, VueColumn, VueStack, VueText },
    template: `<vue-box :padding="[8, 16, 24, 32]">
    <vue-columns :space="[8, 16, 24, 32]" :align-y="['top', 'center']" stack-phone class="border">
      <vue-column :width="['100%', '250px']" :can-shrink="false" class="border">
        Sidebar
      </vue-column>
      <vue-column class="border">
        <vue-columns :space="[8, 16, 24, 32]" :align-y="['top', 'bottom']" stack-phone class="border">
          <vue-column class="border">
            <vue-stack :space="[8, 16, 24, 32]">
              <vue-text>Main Content</vue-text>
              <vue-text>Main Content</vue-text>
              <vue-text>Main Content</vue-text>
              <vue-text>Main Content</vue-text>
              <vue-text>Main Content</vue-text>
            </vue-stack>
          </vue-column>
          <vue-column :width="['100%', 'content']" class="border">
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
      <vue-columns  :align-y="['top', 'center']" class="border">
        <vue-column width="content" class="border">Image</vue-column>
        <vue-column class="border">
          <vue-columns stack-phone class="border">
            <vue-column class="border">
              <vue-stack space="4" class="border">
                <vue-text>Text</vue-text>
                <vue-text>Text</vue-text>
                <vue-text>Text</vue-text>
                <vue-text>Text</vue-text>
              </vue-stack>
            </vue-column>
            <vue-column class="border">
              <vue-columns :space="[4, 24]" stack-phone class="border">
                <vue-column width="content" class="border"><vue-text>Price</vue-text></vue-column>
                <vue-column :width="['content', '150px', '250px']" class="border">
                  <vue-text>Dropdown</vue-text>
                </vue-column>
                <vue-column :width="['content', '180px']" class="border">
                  <vue-text>Summary</vue-text>
                </vue-column>
              </vue-columns>
            </vue-column>
          </vue-columns>
        </vue-column>
      </vue-columns>
      <vue-columns  :align-y="['top', 'center']" class="border">
        <vue-column width="content" class="border">Image</vue-column>
        <vue-column class="border">
          <vue-columns stack-phone class="border">
            <vue-column class="border">
              <vue-stack space="4" class="border">
                <vue-text>Text</vue-text>
                <vue-text>Text</vue-text>
                <vue-text>Text</vue-text>
                <vue-text>Text</vue-text>
              </vue-stack>
            </vue-column>
            <vue-column class="border">
              <vue-columns :space="[4, 24]" stack-phone class="border">
                <vue-column width="content" class="border"><vue-text>Price</vue-text></vue-column>
                <vue-column :width="['content', '150px', '250px']" class="border">
                  <vue-text>Dropdown</vue-text>
                </vue-column>
                <vue-column :width="['content', '180px']" class="border">
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
    <vue-columns as="ul" :space="[8, 16, 24, 32]" :align-y="['top', 'center']" stack-phone class="border">
      <vue-column :width="['100%', '250px']" :can-shrink="false" class="border">
        Sidebar
      </vue-column>
      <vue-column class="border">
        <vue-columns as="ul" :space="[8, 16, 24, 32]" :align-y="['top', 'bottom']" stack-phone class="border">
          <vue-column class="border">
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
          <vue-column :width="['100%', 'content']" class="border">Menu</vue-column>
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
    <vue-columns :revert="[null, null, null, true, true]" class="border">
      <vue-column class="border">
        Test 1
      </vue-column>
      <vue-column class="border">
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
    components: { VueBox, VueColumns, VueColumn, VueNavbar, VueFooter },
    template: `<vue-columns
      :space="null"
      full-page
      stack-phone
      stack-tablet-portrait
      stack-tablet-landscape
      stack-small-desktop
      stack-large-desktop
       class="border"
    >
      <vue-column width="content" auto-height class="border">
        <vue-navbar />
      </vue-column>
      <vue-column align="center" align-y="center" class="border">
        Content
      </vue-column>
      <vue-column width="content" class="border">
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
