import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import VueSelect from '@/components/input-and-actions/VueSelect/VueSelect.vue';
import VueSidebar from './VueSidebar.vue';
import VueSidebarGroup from './VueSidebarGroup.vue';
import VueSidebarGroupItem from './VueSidebarGroupItem.vue';

const story = storiesOf('Navigation|Sidebar', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueSidebar, VueSidebarGroup, VueSidebarGroupItem, ComponentDocs, VueSelect },
    methods: {
      onGroupClick: action('@group-click'),
      onGroupIconClick: action('@group-icon-click'),
    },
    template: `<component-docs
      component-name="Sidebar"
      usage="Primary navigation element used to take users to the most critical product areas - can be used with Navbar."
      story="Show sidebar."
    >
    <vue-sidebar>
      <vue-sidebar-group name="Language & Theme" as="div" @click="onGroupClick" @icon-click="onGroupIconClick">
        <vue-select :items="[{ label: 'English', value: 'en' }]" label="Language" name="lang" id="lang" value="en" />
        <vue-select :items="[{ label: 'Dark', value: 'dark' }]" label="Theme" name="theme" id="theme" hide-description value="dark" />
      </vue-sidebar-group>

      <vue-sidebar-group name="Navigation" icon="plus-circle" @click="onGroupClick" @icon-click="onGroupIconClick">
        <vue-sidebar-group-item leading-icon="eye" name="Vuex Example" to="/example/counter" />
        <vue-sidebar-group-item leading-icon="eye" name="Apollo Example" to="/example/apollo" />
        <vue-sidebar-group-item leading-icon="eye" name="Form Example" to="/example/form" />
      </vue-sidebar-group>

      <vue-sidebar-group name="Documentation" @click="onGroupClick" @icon-click="onGroupIconClick">
        <vue-sidebar-group-item leading-icon="book" name="Documentation" href="https://vuesion.github.io/docs/en/" />
        <vue-sidebar-group-item leading-icon="star" name="Design System" href="/storybook/?path=/story/design-system-design-system--intro" />
        <vue-sidebar-group-item leading-icon="package" name="Components" href="/storybook/?path=/story/atoms-badge--badge-variants" />
      </vue-sidebar-group>

      <vue-sidebar-group name="Community" @click="onGroupClick" @icon-click="onGroupIconClick">
        <vue-sidebar-group-item leading-icon="github" name="Github" href="https://github.com/vuesion/vuesion" />
        <vue-sidebar-group-item leading-icon="chat" name="Discord" href="https://discord.gg/59x5cg2" />
        <vue-sidebar-group-item leading-icon="twitter" name="Twitter" href="https://twitter.com/vuesion1" />
      </vue-sidebar-group>
    </vue-sidebar>
    </component-docs>`,
  }),
  {
    info: {
      components: { VueSidebar, VueSidebarGroup, VueSidebarGroupItem },
    },
  },
);
