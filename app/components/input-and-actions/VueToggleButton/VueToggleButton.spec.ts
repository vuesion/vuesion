import { describe, beforeEach, test, expect } from 'vitest';
import { fireEvent, render, type RenderResult } from '@testing-library/vue';
import VueToggleButton from './VueToggleButton.vue';
import type { IItem } from '~~/interfaces/IItem';

describe('VueToggleButton.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueToggleButton, {
      props: {
        items: [
          {
            leadingIcon: 'view-grid',
            label: 'Grid view',
            value: 'grid-view',
          },
          {
            leadingIcon: 'view-list',
            label: 'List view',
            value: 'list-view',
          },
          {
            leadingIcon: 'Folder',
            label: 'Folder view',
            value: 'folder-view',
          },
        ],
      },
    });
  });

  test('should emit update:modelValue event', async () => {
    const { getByTestId, emitted } = harness;

    await fireEvent.click(getByTestId('toggle-button-list-view'));

    expect(emitted<Array<IItem>>()['update:modelValue'][0][0]).toEqual({
      label: 'List view',
      leadingIcon: 'view-list',
      value: 'list-view',
    });
  });

  test('should handle IItem as value', async () => {
    const { rerender, getByTestId } = harness;

    await rerender({
      modelValue: {
        leadingIcon: 'Folder',
        label: 'Folder view',
        value: 'folder-view',
      },
    });

    expect(getByTestId('toggle-button-folder-view').classList.toString()).toMatch('primary');
  });

  test('should handle String as value', async () => {
    const { rerender, getByTestId } = harness;

    await rerender({
      modelValue: 'folder-view',
    });

    expect(getByTestId('toggle-button-folder-view').classList.toString()).toMatch('primary');
  });
});
