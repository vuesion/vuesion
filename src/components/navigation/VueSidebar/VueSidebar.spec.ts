import { describe, beforeEach, test, expect } from 'vitest';
import { fireEvent, render, RenderResult } from '@testing-library/vue';
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
          `<vue-sidebar-group name="Navigation" icon="plus-circle">
        <vue-sidebar-group-item leading-icon="home" name="Vuex Example" to="/" />
        <vue-sidebar-group-item leading-icon="home" name="Apollo Example" href="/" />
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

  test('should emit click event when clicked', async () => {
    const { getByText, emitted } = harness;

    await fireEvent.click(getByText('Form Example'));

    expect(emitted().click).toBeTruthy();
  });
});
