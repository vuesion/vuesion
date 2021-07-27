import { storiesOf } from '@storybook/vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import VueNavbar from './VueNavbar.vue';

const story = storiesOf('Navigation|Navbar', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueNavbar, ComponentDocs },
    template: `<component-docs
      component-name="Navbar"
      usage="Primary navigation element used to take users to the most critical product areas - can be used with Sidebar."
      story="Show navbar."
    >
    <vue-navbar
      user-name="Isabella-Maria Del Campo"
      user-image="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3150&q=80"
    />
    </component-docs>`,
  }),
  {
    info: {
      components: { VueNavbar },
    },
  },
);
