import { describe, beforeEach, test, expect } from 'vitest';
import { fireEvent, render, RenderResult } from '@testing-library/vue';
import VueNavbar from './VueNavbar.vue';

describe('VueNavbar.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueNavbar, {
      props: {
        userName: 'foo bar',
        showMenuIcon: true,
        dropdownDuration: 0,
      },
      slots: {
        center: ['center content'],
      },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('fb');
    getByText('center content');
  });

  test('without dropdown', async () => {
    const { queryAllByTestId, rerender } = harness;

    await rerender({
      userName: undefined,
      userImage: undefined,
    });

    expect(queryAllByTestId('dropdown')).toHaveLength(0);
  });

  test('emit menu-click event', async () => {
    const { getByTestId, emitted } = harness;

    await fireEvent.click(getByTestId('menu'));

    expect(emitted()['menu-click']).toBeTruthy();
  });

  test('emit menu-item-click event', async () => {
    const { getByTestId, emitted } = harness;

    await fireEvent.click(getByTestId('dropdown'));
    await fireEvent.click(getByTestId('profile-0'));

    expect(emitted()['menu-item-click']).toBeTruthy();
  });
});
