import { describe, beforeEach, test, expect } from 'vitest';
import { fireEvent, render, type RenderResult } from '@testing-library/vue';
import VueDropdown from './VueDropdown.vue';
import { sleep, triggerWindow } from '~/test/test-utils';

describe('VueDropdown.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueDropdown, {
      props: {
        buttonText: 'Dropdown',
        items: [
          { label: 'Value 1', value: 'Value 1', description: 'Description 1', leadingIcon: 'hashtag' },
          { label: 'Value 2', value: 'Value 2', description: 'Description 2', trailingIcon: 'hashtag' },
          { label: '', value: 'separator' },
          { label: 'Value 3', value: 'Value 3', description: 'Description 3', leadingIcon: 'hashtag' },
          { label: 'Value 4', value: 'Value 4', description: 'Description 4', trailingIcon: 'hashtag' },
        ],
      },
    });
  });

  test('renders component', async () => {
    const { getByText, html } = harness;

    getByText('Dropdown');

    await fireEvent.click(getByText('Dropdown'));

    expect(html()).toMatch('left');
  });

  test('should emit click event', async () => {
    const { getByText, emitted } = harness;

    await fireEvent.click(getByText('Dropdown'));

    expect(emitted().click).toBeTruthy();
  });

  test('should emit item-click event', async () => {
    const { getByText, emitted } = harness;

    await fireEvent.click(getByText('Dropdown'));
    await fireEvent.click(getByText('Value 2'));

    expect(emitted()['item-click']).toEqual([
      [
        {
          description: 'Description 2',
          label: 'Value 2',
          trailingIcon: 'hashtag',
          value: 'Value 2',
        },
      ],
    ]);
  });

  test('should open and close menu via keyboard', async () => {
    const { getByText, queryAllByText } = harness;
    const dropdown = getByText('Dropdown').parentElement as HTMLElement;

    await fireEvent.keyDown(dropdown, { key: 'ArrowLeft', code: 'ArrowLeft' });

    expect(queryAllByText('Value 1')).toHaveLength(0);

    await fireEvent.keyDown(dropdown, { key: 'Enter', code: 'Enter' });

    await sleep(50);

    expect(queryAllByText('Value 1')).toHaveLength(1);

    await fireEvent.keyDown(dropdown, { key: 'Escape', code: 'Escape' });

    expect(queryAllByText('Value 1')).toHaveLength(0);
  });

  test('should open menu and close it via outline click', async () => {
    const { getByText, queryAllByText } = harness;
    const dropdown = getByText('Dropdown').parentElement as HTMLElement;

    await fireEvent.keyDown(dropdown, { key: 'Enter', code: 'Enter' });

    await sleep(50);

    expect(queryAllByText('Value 1')).toHaveLength(1);

    const target = document.createElement('span');
    triggerWindow.click({ target, composedPath: () => [] });

    await sleep(250);

    expect(queryAllByText('Value 1')).toHaveLength(0);
  });

  test('renders component with different menu alignment', async () => {
    const { getByText, html, rerender } = harness;

    await rerender({ alignMenu: 'right', alignYMenu: 'top' });

    getByText('Dropdown');

    await fireEvent.click(getByText('Dropdown'));
    const markup = html();

    expect(markup).toMatch('right');
    expect(markup).toMatch('top');
  });
});
