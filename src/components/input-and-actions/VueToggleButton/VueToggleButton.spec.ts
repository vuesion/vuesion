import { fireEvent, render, RenderResult } from '@testing-library/vue';
import VueToggleButton from './VueToggleButton.vue';

describe('VueToggleButton.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueToggleButton, {
      stubs: ['nuxt-link'],
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

  test('should emit input event', async () => {
    const { getByTestId, emitted } = harness;

    await fireEvent.click(getByTestId('toggle-button-list-view'));

    expect(emitted().input[0][0]).toEqual({ label: 'List view', leadingIcon: 'view-list', value: 'list-view' });
  });

  test('should handle IItem as value', async () => {
    const { updateProps, getByTestId } = harness;

    await updateProps({
      value: {
        leadingIcon: 'Folder',
        label: 'Folder view',
        value: 'folder-view',
      },
    });

    expect(getByTestId('toggle-button-folder-view').classList.contains('primary')).toBeTruthy();
  });

  test('should handle String as value', async () => {
    const { updateProps, getByTestId } = harness;

    await updateProps({
      value: 'folder-view',
    });

    expect(getByTestId('toggle-button-folder-view').classList.contains('primary')).toBeTruthy();
  });
});
