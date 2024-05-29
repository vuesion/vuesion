import { describe, beforeEach, test } from 'vitest';
import { render, type RenderResult } from '@testing-library/vue';
import VueSidebar from './VueSidebar.vue';
import VueSidebarGroup from './VueSidebarGroup.vue';
import VueSidebarGroupItem from './VueSidebarGroupItem.vue';

describe('VueSidebar.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueSidebar, {
      global: {
        stubs: {
          'vue-sidebar-group': VueSidebarGroup,
          'vue-sidebar-group-item': VueSidebarGroupItem,
        },
      },
      slots: {
        default: [
          `<vue-sidebar-group label="Navigation" icon="plus-circle">
        <vue-sidebar-group-item leading-icon="home" label="Vuex Example" to="/" exact />
        <vue-sidebar-group-item trailing-icon="home" label="Apollo Example" href="/" />
        <vue-sidebar-group-item label="Form Example" />
      </vue-sidebar-group>
      <vue-sidebar-group label="Navigation2">
        <vue-sidebar-group-item label="Vuex Example2" to="/" exact />
      </vue-sidebar-group>`,
        ],
      },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('Navigation');
    getByText('Navigation2');
    getByText('Vuex Example');
    getByText('Vuex Example2');
    getByText('Apollo Example');
    getByText('Form Example');
  });
});
