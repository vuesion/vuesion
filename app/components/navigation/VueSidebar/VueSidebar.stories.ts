import type { StoryFn } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import VueSidebar from './VueSidebar.vue';
import VueSidebarGroup from './VueSidebarGroup.vue';
import VueSidebarGroupItem from './VueSidebarGroupItem.vue';
import VueSelect from '~/app/components/input-and-actions/VueSelect/VueSelect.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Navigation/Sidebar',
  component: VueSidebar,
  argTypes: {},
};

const Template: StoryFn = (args) => ({
  components: { VueSidebar, VueSidebarGroup, VueSidebarGroupItem, ComponentDocs, VueSelect },
  inheritAttrs: false,
  setup() {
    return {
      args,
      onGroupClick: action('@group-click'),
      onGroupIconClick: action('@group-icon-click'),
      onItemClick: action('@click'),
    };
  },
  template: `<component-docs
      component-name="Sidebar"
      usage="Primary navigation element used to take users to the most critical product areas - can be used with Navbar."
      story="Show sidebar."
      no-bg
  >
  <vue-sidebar>
    <vue-sidebar-group label="Group Header" icon="plus-circle" @click="onGroupClick" @icon-click="onGroupIconClick">
      <vue-sidebar-group-item label="Nuxt-link" icon="home" badge-content="2" to="/test" active @click="onItemClick"/>
      <vue-sidebar-group-item label="Link" icon="home" badge-content="2" href="https://vuesion.herokuapp.com" @click="onItemClick"/>
      <vue-sidebar-group-item label="Item with Icon & Badge" icon="home" badge-content="2" @click="onItemClick"/>
      <vue-sidebar-group-item label="Item with Icon" icon="home" @click="onItemClick"/>
      <vue-sidebar-group-item label="Item with Badge" badge-content="2" @click="onItemClick"/>
      <vue-sidebar-group-item label="Item" @click="onItemClick"/>
    </vue-sidebar-group>
  </vue-sidebar>
  </component-docs>`,
});

export const Default = {
  render: Template,
  args: {},
};
