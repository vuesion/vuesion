import type { StoryFn } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import VueNavbar from './VueNavbar.vue';
import ComponentDocs from 'assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Navigation/Navbar',
  component: VueNavbar,
  argTypes: {},
};

const Template: StoryFn = (args) => ({
  components: {
    VueNavbar,
    ComponentDocs,
  },
  inheritAttrs: false,
  setup() {
    return {
      args,
      onMenuClick: action('@menu-click'),
      onMenuItemClick: action('@menu-item-click'),
    };
  },
  template: `<component-docs
      component-name="Navbar"
      usage="Primary navigation element used to take users to the most critical product areas - can be used with Sidebar."
      story="Show navbar."
  >
  <vue-navbar
      v-bind="args"
      @menu-click="onMenuClick"
      @menu-item-click="onMenuItemClick"
  />
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {
    userName: 'Isabella-Maria Del Campo',
    userImage:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3150&q=80',
    showMenuIcon: true,
    dropdownDuration: 250,
  },
};
