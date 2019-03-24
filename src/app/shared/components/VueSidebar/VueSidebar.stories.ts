import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueSidebar from './VueSidebar.vue';
import VueSidebarGroup from './VueSidebarGroup/VueSidebarGroup.vue';
import VueSidebarGroupItem from './VueSidebarGroupItem/VueSidebarGroupItem.vue';
import VueIconCode from '../icons/VueIconCode/VueIconCode.vue';

const story = storiesOf('Organisms|Sidebar', module) as any;

story.add(
  'Default',
  withInfo({})(() => ({
    components: { VueSidebar },
    template: `<vue-sidebar>VueSidebar</vue-sidebar>`,
  })),
);

story.add(
  'Internal Navigation',
  withInfo({})(() => ({
    components: { VueSidebar, VueSidebarGroup, VueSidebarGroupItem, VueIconCode },
    template: `<vue-sidebar>
  <vue-sidebar-group title="Navigation">
  <vue-sidebar-group-item to="/">
  <vue-icon-code />
  Home
</vue-sidebar-group-item>
  <vue-sidebar-group-item to="/docs">
  Docs
</vue-sidebar-group-item>
  </vue-sidebar-group>
</vue-sidebar>`,
  })),
);

story.add(
  'External Navigation',
  withInfo({})(() => ({
    components: { VueSidebar, VueSidebarGroup, VueSidebarGroupItem, VueIconCode },
    template: `<vue-sidebar>
  <vue-sidebar-group title="Navigation">
        <vue-sidebar-group-item>
          <a href="https://github.com/vuesion/vuesion" target="_blank" rel="noopener">
            <vue-icon-code />
            Github
          </a>
        </vue-sidebar-group-item>
  </vue-sidebar-group>
</vue-sidebar>`,
  })),
);
