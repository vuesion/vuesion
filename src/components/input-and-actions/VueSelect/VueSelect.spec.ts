import { fireEvent, render, RenderResult } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import { sleep, triggerDocument } from '@/test/test-utils';
import VueSelect from './VueSelect.vue';

describe('VueSelect.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueSelect, {
      props: {
        id: 'select',
        name: 'select',
        label: 'Select',
        placeholder: 'Placeholder',
        items: [
          { label: 'Value 1', value: 'Value 1', description: 'Description 1' },
          { label: 'Value 2', value: 'Value 2', description: 'Description 2' },
          { label: 'Value 3', value: 'Value 3', description: 'Description 3' },
          { label: 'Value 4', value: 'Value 4', description: 'Description 4' },
        ],
        duration: 0,
      },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('Select');
  });

  test('should emit input event of the native select', async () => {
    const { getByTestId, emitted } = harness;

    await userEvent.selectOptions(getByTestId('native-select'), ['Value 2']);

    expect(emitted().input).toEqual([
      [
        {
          label: 'Value 2',
          value: 'Value 2',
        },
      ],
    ]);
  });

  test('should not emit input event of the native select is disabled', async () => {
    const { getByTestId, updateProps, emitted } = harness;

    await updateProps({ disabled: true });
    await userEvent.selectOptions(getByTestId('native-select'), ['Value 2']);

    expect(emitted().input).toBeFalsy();
  });

  test('should emit input event of the custom select', async () => {
    const { getByTestId, emitted } = harness;

    await fireEvent.click(getByTestId('custom-select'));
    await fireEvent.click(getByTestId('Value 2-1'));

    expect(emitted().input).toEqual([
      [
        {
          description: 'Description 2',
          label: 'Value 2',
          trailingIcon: null,
          value: 'Value 2',
        },
      ],
    ]);
  });

  test('should not emit input event of the custom select is disabled', async () => {
    const { getByTestId, queryAllByTestId, updateProps } = harness;

    await updateProps({ disabled: true });
    await fireEvent.click(getByTestId('custom-select'));

    expect(queryAllByTestId('Value 2-1')).toHaveLength(0);
  });

  test('should open and close menu via keyboard', async () => {
    const { getByText, queryAllByText } = harness;
    const select = getByText('Select').parentElement;

    await fireEvent.keyDown(select, { key: 'Tab', code: 'Tab' });
    await fireEvent.keyDown(select, { key: 'ShiftLeft', code: 'ShiftLeft' });
    await fireEvent.keyDown(select, { key: 'ShiftRight', code: 'ShiftRight' });

    expect(queryAllByText('Value 1')).toHaveLength(1);

    await fireEvent.keyDown(select, { key: 'Enter', code: 'Enter' });

    expect(queryAllByText('Value 1')).toHaveLength(2);

    await fireEvent.keyDown(select, { key: 'Escape', code: 'Escape' });

    expect(queryAllByText('Value 1')).toHaveLength(1);
  });

  test('should open menu on toggle icon click', async () => {
    const { getByTestId, queryAllByText } = harness;
    const toggle = getByTestId('toggle-select');

    expect(queryAllByText('Value 1')).toHaveLength(1);

    await fireEvent.click(toggle);

    expect(queryAllByText('Value 1')).toHaveLength(2);

    await fireEvent.click(toggle);

    expect(queryAllByText('Value 1')).toHaveLength(1);
  });

  test('should open menu and close it via outside click', async () => {
    const { getByText, queryAllByText } = harness;
    const select = getByText('Select').parentElement;

    await fireEvent.keyDown(select, { key: 'Enter', code: 'Enter' });

    expect(queryAllByText('Value 1')).toHaveLength(2);

    triggerDocument.mousedown({ target: null });

    await sleep(10);

    expect(queryAllByText('Value 1')).toHaveLength(1);
  });

  test('should support string as input value', async () => {
    const { getByText, getByTestId, updateProps } = harness;

    await updateProps({ value: 'Value 1' });

    const select = getByText('Select').parentElement;

    await fireEvent.keyDown(select, { key: 'Enter', code: 'Enter' });

    expect(getByTestId('Value 1-0').innerHTML).toMatch('<div class="trailing">');
  });

  test('should support IItem as input value', async () => {
    const { getByText, getByTestId, updateProps } = harness;

    await updateProps({ value: { label: 'Value 1', value: 'Value 1' } });

    const select = getByText('Select').parentElement;

    await fireEvent.keyDown(select, { key: 'Enter', code: 'Enter' });

    expect(getByTestId('Value 1-0').innerHTML).toMatch('<div class="trailing">');
  });

  test('renders component with different menu alignment', async () => {
    const { getByText, getByTestId, updateProps } = harness;
    const select = getByText('Select').parentElement;

    await updateProps({ alignMenu: 'right', alignYMenu: 'top' });
    await fireEvent.keyDown(select, { key: 'Enter', code: 'Enter' });

    const menu = getByTestId('menu');

    expect(menu.classList.contains('right')).toBeTruthy();
    expect(menu.classList.contains('top')).toBeTruthy();
  });

  test('custom select should support multi-select', async () => {
    const { getByTestId, updateProps, emitted } = harness;

    await updateProps({
      multiSelect: true,
      value: [{ label: 'Value 1', value: 'Value 1', description: 'Description 1' }],
    });
    await fireEvent.click(getByTestId('custom-select'));
    await fireEvent.click(getByTestId('Value 2-1'));

    expect(emitted().input[0][0]).toEqual([
      {
        description: 'Description 1',
        label: 'Value 1',
        value: 'Value 1',
      },
      {
        description: 'Description 2',
        label: 'Value 2',
        value: 'Value 2',
      },
    ]);

    await fireEvent.click(getByTestId('Value 1-0'));

    expect(emitted().input[1][0]).toEqual([]);
  });

  test('native select should support multi-select', async () => {
    const { getByTestId, emitted, updateProps } = harness;

    await updateProps({
      multiSelect: true,
      value: [
        {
          label: 'Value 1',
          value: 'Value 1',
        },
      ],
    });
    await userEvent.selectOptions(getByTestId('native-select'), ['Value 2']);

    expect(emitted().input[0][0]).toEqual([
      {
        label: 'Value 1',
        value: 'Value 1',
      },
      {
        label: 'Value 2',
        value: 'Value 2',
      },
    ]);
  });
});
