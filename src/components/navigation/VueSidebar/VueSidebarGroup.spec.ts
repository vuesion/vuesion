import { describe, beforeEach, test, expect } from 'vitest';
import { fireEvent, render, type RenderResult } from '@testing-library/vue';
import VueSidebarGroup from './VueSidebarGroup.vue';

describe('VueSidebarGroup.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueSidebarGroup, {
      props: {
        label: 'Group 1',
        icon: 'user',
      },
    });
  });

  test('renders component as div', () => {
    const { getByText } = harness;

    getByText('Group 1');
  });

  test('should emit icon-click event when clicked', async () => {
    const { getByTestId, emitted } = harness;

    await fireEvent.click(getByTestId('sidebar-group-icon'));
    await fireEvent.keyDown(getByTestId('sidebar-group-icon'), { key: 'Enter' });

    expect(emitted()['icon-click']).toBeTruthy();
  });
});
