import { fireEvent, render, RenderResult } from '@testing-library/vue';
import VueToggle from './VueToggle.vue';

describe('VueToggle.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueToggle, {
      props: {
        name: 'foo',
        id: 'foo',
        label: 'Test',
        description: 'Description',
      },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('Test');
    getByText('Description');
  });

  test('should emit click event', async () => {
    const { getByText, emitted } = harness;

    await fireEvent.click(getByText('Test'));

    expect(emitted().click).toBeTruthy();
  });

  test('should set checked attribute', async () => {
    const { updateProps, getByText } = harness;
    const input: any = getByText('Test').parentElement.querySelector('#foo');

    expect(input.checked).toBeFalsy();

    await updateProps({ checked: true });

    expect(input.checked).toBeTruthy();
  });

  test('should disable checkbox', async () => {
    const { getByText, emitted, updateProps } = harness;

    await updateProps({ disabled: true });

    await fireEvent.click(getByText('Test'));

    expect(emitted().click).toBeFalsy();
  });
});
