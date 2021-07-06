import { fireEvent, render, RenderResult } from '@testing-library/vue';
import VueCheckbox from './VueCheckbox.vue';

describe('VueCheckbox.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueCheckbox, {
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

  test('should disable checkbox', async () => {
    const { getByText, emitted, updateProps } = harness;

    await updateProps({ disabled: true });

    await fireEvent.click(getByText('Test'));

    expect(emitted().click).toBeFalsy();
  });
});
