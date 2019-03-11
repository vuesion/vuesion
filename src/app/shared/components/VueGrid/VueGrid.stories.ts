import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueGrid from './VueGrid.vue';
import VueGridItem from '../VueGridItem/VueGridItem.vue';
import VueGridRow from '../VueGridRow/VueGridRow.vue';

const story = storiesOf('Molecules|Grid', module) as any;

story.add(
  'Default',
  withInfo({})(() => ({
    components: { VueGrid },
    template: `<vue-grid>VueGrid</vue-grid>`,
  })),
);

story.add(
  'With rows and items',
  withInfo({})(() => ({
    components: { VueGrid, VueGridItem, VueGridRow },
    template: `<vue-grid>
                 <vue-grid-row>
                   <vue-grid-item>item 1</vue-grid-item>
                 </vue-grid-row>
                 <vue-grid-row>
                   <vue-grid-item>item 2</vue-grid-item>
                   <vue-grid-item>item 3</vue-grid-item>
                 </vue-grid-row>
               </vue-grid>`,
  })),
);

story.add(
  'With row inside a row',
  withInfo({})(() => ({
    components: { VueGrid, VueGridItem, VueGridRow },
    template: `<vue-grid>
                 <vue-grid-row>
                   <vue-grid-item>item 1</vue-grid-item>
                 </vue-grid-row>
                 <vue-grid-row>
                   <vue-grid-item>
                     <vue-grid-row>
                       <vue-grid-item>item 2</vue-grid-item>
                       <vue-grid-item>item 3</vue-grid-item>
                     </vue-grid-row>
                     <vue-grid-row>
                       <vue-grid-item>item 4</vue-grid-item>
                       <vue-grid-item>item 5</vue-grid-item>
                     </vue-grid-row>
                   </vue-grid-item>
                   <vue-grid-item>item 6</vue-grid-item>
                 </vue-grid-row>
               </vue-grid>`,
  })),
);
