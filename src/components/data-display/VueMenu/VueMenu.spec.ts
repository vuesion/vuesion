import { fireEvent, render, RenderResult } from '@testing-library/vue';
import VueMenu from './VueMenu.vue';

describe('VueMenu.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueMenu, {
      props: {
        items: [
          { label: 'Value 1', value: 'Value 1', description: 'Description 1', leadingIcon: 'hashtag' },
          { label: 'Value 2', value: 'Value 2', description: 'Description 2', trailingIcon: 'hashtag' },
          { label: '', value: 'separator' },
          { label: 'Value 3', value: 'Value 3', description: 'Description 3', leadingIcon: 'hashtag', disabled: true },
          { label: 'Value 4', value: 'Value 4', description: 'Description 4', trailingIcon: 'hashtag' },
        ],
      },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('Value 1');
    getByText('Value 2');
    getByText('Value 3');
    getByText('Value 4');

    getByText('Description 1');
    getByText('Description 2');
    getByText('Description 3');
    getByText('Description 4');
  });

  test('should select 1st item and emit click event via keyboard', async () => {
    const { getByTestId, emitted } = harness;
    const firstItem = getByTestId('Value 1-0');
    const menu = firstItem.parentElement;

    await fireEvent.keyDown(menu, { key: 'ArrowLeft', code: 'ArrowLeft' });
    await fireEvent.keyDown(menu, { key: 'ArrowDown', code: 'ArrowDown' });
    await fireEvent.keyDown(menu, { key: 'ArrowDown', code: 'ArrowDown' });
    await fireEvent.keyDown(menu, { key: 'ArrowDown', code: 'ArrowDown' });
    await fireEvent.keyDown(menu, { key: 'ArrowDown', code: 'ArrowDown' });
    await fireEvent.keyDown(menu, { key: 'ArrowDown', code: 'ArrowDown' });
    await fireEvent.keyDown(menu, { key: 'Enter', code: 'Enter' });

    expect(emitted().click).toEqual([
      [
        {
          description: 'Description 1',
          label: 'Value 1',
          leadingIcon: 'hashtag',
          value: 'Value 1',
        },
      ],
    ]);
  });

  test('should select last item and emit click event via keyboard', async () => {
    const { getByTestId, emitted } = harness;
    const firstItem = getByTestId('Value 1-0');
    const menu = firstItem.parentElement;

    await fireEvent.keyDown(menu, { key: 'ArrowRight', code: 'ArrowRight' });
    await fireEvent.keyDown(menu, { key: 'ArrowUp', code: 'ArrowUp' });
    await fireEvent.keyDown(menu, { key: 'ArrowUp', code: 'ArrowUp' });
    await fireEvent.keyDown(menu, { key: 'ArrowUp', code: 'ArrowUp' });
    await fireEvent.keyDown(menu, { key: 'ArrowUp', code: 'ArrowUp' });
    await fireEvent.keyDown(menu, { key: 'ArrowUp', code: 'ArrowUp' });
    await fireEvent.keyDown(menu, { key: 'Enter', code: 'Enter' });

    expect(emitted().click).toEqual([
      [
        {
          description: 'Description 4',
          label: 'Value 4',
          trailingIcon: 'hashtag',
          value: 'Value 4',
        },
      ],
    ]);
  });

  test('disabled item should not emit click event', async () => {
    const { getByTestId, emitted } = harness;
    const firstItem = getByTestId('Value 1-0');
    const menu = firstItem.parentElement;

    await fireEvent.keyDown(menu, { key: 'ArrowRight', code: 'ArrowRight' });
    await fireEvent.keyDown(menu, { key: 'ArrowDown', code: 'ArrowDown' });
    await fireEvent.keyDown(menu, { key: 'ArrowDown', code: 'ArrowDown' });
    await fireEvent.keyDown(menu, { key: 'ArrowDown', code: 'ArrowDown' });
    await fireEvent.keyDown(menu, { key: 'Enter', code: 'Enter' });

    await fireEvent.click(getByTestId('Value 3-3'));

    expect(emitted().click).toBeFalsy();
  });
});
