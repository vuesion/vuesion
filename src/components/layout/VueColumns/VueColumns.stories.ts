import { storiesOf } from '@storybook/vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueText from '@/components/atoms/VueText/VueText.vue';
import VueColumn from './VueColumn/VueColumn.vue';
import VueColumns from './VueColumns.vue';

const story = storiesOf('Design System|Layout/Columns', module) as any;

story.add(
  'Nested columns with responsive spacings and width',
  () => ({
    components: { VueBox, VueColumns, VueColumn },
    template: `<vue-box :padding="[8, 16, 24, 32]">
    <vue-columns :space="[8, 16, 24, 32]" :align-y="['top', 'center']" stack-phone>
      <vue-column :width="['100%', '250px']">
        Sidebar
      </vue-column>
      <vue-column>
        <vue-columns :space="[8, 16, 24, 32]" :align-y="['top', 'bottom']" stack-phone>
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
  'Complex example',
  () => ({
    components: { VueBox, VueColumns, VueColumn, VueStack, VueText },
    template: `<vue-stack>
  <vue-columns  align-y="center">
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
          <vue-columns align="right" :space="[4, 24]" stack-phone>
            <vue-column width="content"><vue-text>Price</vue-text></vue-column>
            <vue-column :width="['content', '250px']"><vue-text>Dropdown</vue-text></vue-column>
            <vue-column width="180px" align="right"><vue-text align="right">Summary</vue-text></vue-column>
          </vue-columns>
        </vue-column>
      </vue-columns>
    </vue-column>
  </vue-columns>

  <vue-columns align-y="center">
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
          <vue-columns align="right" :space="[4, 24]" stack-phone>
            <vue-column width="content"><vue-text>Price</vue-text></vue-column>
            <vue-column :width="['content', '250px']"><vue-text>Dropdown</vue-text></vue-column>
            <vue-column width="180px" align="right">
              <vue-text>Summary Summary</vue-text>
            </vue-column>
          </vue-columns>
        </vue-column>
      </vue-columns>
    </vue-column>
  </vue-columns>
</vue-stack>`,
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
