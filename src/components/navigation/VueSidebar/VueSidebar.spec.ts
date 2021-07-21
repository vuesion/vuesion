import Vue from 'vue';
import { render, RenderResult } from '@testing-library/vue';
import VueSidebar from './VueSidebar.vue';
import VueSidebarGroup from './VueSidebarGroup.vue';
import VueSidebarGroupItem from './VueSidebarGroupItem.vue';

Vue.component('VueSidebarGroup', VueSidebarGroup);
Vue.component('VueSidebarGroupItem', VueSidebarGroupItem);

describe('VueSidebar.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueSidebar, {
      stubs: ['nuxt-link'],
      slots: {
        default: [
          `<vue-sidebar-group name="Navigation" icon="plus-circle">
        <vue-sidebar-group-item leading-icon="home" name="Vuex Example" />
        <vue-sidebar-group-item leading-icon="home" name="Apollo Example" />
        <vue-sidebar-group-item leading-icon="home" name="Form Example" />
      </vue-sidebar-group>`,
        ],
      },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('Navigation');
    getByText('Vuex Example');
    getByText('Apollo Example');
    getByText('Form Example');
  });
});
