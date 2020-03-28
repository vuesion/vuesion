import { storiesOf } from '@storybook/vue';
import VueGrid from './VueGrid.vue';
import VueGridRow from './VueGridRow/VueGridRow.vue';
import VueGridColumn from './VueGridColumn/VueGridColumn.vue';
import VueButton from '../VueButton/VueButton.vue';

const story = storiesOf('Layout|Grid', module) as any;

story.add(
  'With vertical spacing',
  () => ({
    components: { VueGrid, VueGridRow, VueGridColumn, VueButton },
    template: `<vue-grid with-vertical-space>
        <vue-grid-row>
            <vue-grid-column>
                <vue-button block>Item 1</vue-button>
            </vue-grid-column>
            <vue-grid-column :width="50">
                <vue-button block>Item 2</vue-button>
            </vue-grid-column>
            <vue-grid-column>
                <vue-button block>Item 3</vue-button>
            </vue-grid-column>
        </vue-grid-row>
        <vue-grid-row>
            <vue-grid-column :width="50">
                <vue-button block>Item 1</vue-button>
            </vue-grid-column>
            <vue-grid-column>
                <vue-button block>Item 2</vue-button>
            </vue-grid-column>
            <vue-grid-column>
                <vue-button block>Item 3</vue-button>
            </vue-grid-column>
        </vue-grid-row>
    </vue-grid>`,
  }),
  {
    info: {
      components: { VueGrid, VueGridRow, VueGridColumn },
    },
  },
);

story.add(
  'Stack with vertical spacing',
  () => ({
    components: { VueGrid, VueGridRow, VueGridColumn, VueButton },
    template: `<vue-grid with-vertical-space>
        <vue-grid-row>
            <vue-grid-column>
                <vue-button block>Item 1</vue-button>
            </vue-grid-column>
        </vue-grid-row>
        <vue-grid-row>
            <vue-grid-column>
                <vue-button block>Item 2</vue-button>
            </vue-grid-column>
        </vue-grid-row>
    </vue-grid>`,
  }),
  {
    info: {
      components: { VueGrid, VueGridRow, VueGridColumn },
    },
  },
);

story.add(
  'Mixed with vertical spacing',
  () => ({
    components: { VueGrid, VueGridRow, VueGridColumn, VueButton },
    template: `<vue-grid>
        <vue-grid-row>
            <vue-grid-column>
                <vue-grid-row with-vertical-space>
                    <vue-grid-column><vue-button block>Item 1</vue-button></vue-grid-column>
                </vue-grid-row>
                <vue-grid-row with-vertical-space>
                    <vue-grid-column><vue-button block>Item 2</vue-button></vue-grid-column>
                </vue-grid-row>
            </vue-grid-column>
            <vue-grid-column>
                <vue-grid-row with-vertical-space>
                    <vue-grid-column><vue-button block>Item 1</vue-button></vue-grid-column>
                </vue-grid-row>
                <vue-grid-row with-vertical-space>
                    <vue-grid-column><vue-button block>Item 2</vue-button></vue-grid-column>
                </vue-grid-row>
            </vue-grid-column>
        </vue-grid-row>
    </vue-grid>`,
  }),
  {
    info: {
      components: { VueGrid, VueGridRow, VueGridColumn },
    },
  },
);

story.add(
  'No spacings',
  () => ({
    components: { VueGrid, VueGridRow, VueGridColumn, VueButton },
    template: `<vue-grid space="none">
        <vue-grid-row>
            <vue-grid-column>
                <vue-button block>Item 1</vue-button>
            </vue-grid-column>
            <vue-grid-column :width="50">
                <vue-button block>Item 2</vue-button>
            </vue-grid-column>
            <vue-grid-column>
                <vue-button block>Item 3</vue-button>
            </vue-grid-column>
        </vue-grid-row>
        <vue-grid-row>
            <vue-grid-column :width="50">
                <vue-button block>Item 1</vue-button>
            </vue-grid-column>
            <vue-grid-column>
                <vue-button block>Item 2</vue-button>
            </vue-grid-column>
            <vue-grid-column>
                <vue-button block>Item 3</vue-button>
            </vue-grid-column>
        </vue-grid-row>
    </vue-grid>`,
  }),
  {
    info: {
      components: { VueGrid, VueGridRow, VueGridColumn },
    },
  },
);

story.add(
  'Text align',
  () => ({
    components: { VueGrid, VueGridRow, VueGridColumn, VueButton },
    template: `<vue-grid with-vertical-space text-align="center">
        <vue-grid-row>
            <vue-grid-column>Text 1</vue-grid-column>
            <vue-grid-column>Text 2</vue-grid-column>
            <vue-grid-column>text 3</vue-grid-column>
        </vue-grid-row>
        <vue-grid-row text-align="left">
            <vue-grid-column>Text 1 </vue-grid-column>
            <vue-grid-column>Text 2</vue-grid-column>
            <vue-grid-column>Text 3</vue-grid-column>
        </vue-grid-row>
        <vue-grid-row text-align="right">
            <vue-grid-column>Text 1 </vue-grid-column>
            <vue-grid-column>Text 2</vue-grid-column>
            <vue-grid-column>Text 3</vue-grid-column>
        </vue-grid-row>
        <vue-grid-row>
            <vue-grid-column text-align="left">Text 1 </vue-grid-column>
            <vue-grid-column>Text 2</vue-grid-column>
            <vue-grid-column text-align="right">Text 3</vue-grid-column>
        </vue-grid-row>
    </vue-grid>`,
  }),
  {
    info: {
      components: { VueGrid, VueGridRow, VueGridColumn },
    },
  },
);

story.add(
  '100% width',
  () => ({
    components: { VueGrid, VueGridRow, VueGridColumn, VueButton },
    template: `<vue-grid with-vertical-space fill>
        <vue-grid-row>
            <vue-grid-column>
                <vue-button block>Item 1</vue-button>
            </vue-grid-column>
            <vue-grid-column :width="50">
                <vue-button block>Item 2</vue-button>
            </vue-grid-column>
            <vue-grid-column>
                <vue-button block>Item 3</vue-button>
            </vue-grid-column>
        </vue-grid-row>
        <vue-grid-row>
            <vue-grid-column :width="50">
                <vue-button block>Item 1</vue-button>
            </vue-grid-column>
            <vue-grid-column>
                <vue-button block>Item 2</vue-button>
            </vue-grid-column>
            <vue-grid-column>
                <vue-button block>Item 3</vue-button>
            </vue-grid-column>
        </vue-grid-row>
    </vue-grid>`,
  }),
  {
    info: {
      components: { VueGrid, VueGridRow, VueGridColumn },
    },
  },
);
