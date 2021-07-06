import { fireEvent, render, RenderResult } from '@testing-library/vue';
import VueRadio from './VueRadio.vue';

describe('VueRadio.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueRadio, {
      props: {
        name: 'foo',
        id: 'foo',
        label: 'Test',
      },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('Test');
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

    await updateProps({ value: 'foo' });

    expect(input.checked).toBeTruthy();
  });

  test('should disable radio button', async () => {
    const { getByText, emitted, updateProps } = harness;

    await updateProps({ disabled: true });

    await fireEvent.click(getByText('Test'));

    expect(emitted().click).toBeFalsy();
  });
});
