import { describe, beforeEach, test, expect } from 'vitest';
import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import VueStepper from './VueStepper.vue';

describe('VueStepper.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueStepper, {
      props: {
        steps: [
          { label: 'Personal Info', description: 'Step details here', leadingIcon: 'user', value: 0 },
          { label: 'Billing Info', description: 'Step details here', leadingIcon: 'credit-card', value: 1 },
          { label: 'Confirmation', description: 'Step details here', leadingIcon: 'printer', value: 1 },
        ],
        activeStep: 1,
      },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('Personal Info');
    getByText('Billing Info');
    getByText('Confirmation');
  });

  test('should emit step-click event with mouse', async () => {
    const { getByText, emitted } = harness;

    await fireEvent.click(getByText('Personal Info'));
    await fireEvent.click(getByText('Billing Info'));
    await fireEvent.click(getByText('Confirmation'));

    expect(emitted()['step-click']).toBeTruthy();
  });

  test('should emit step-click event with keyboard', async () => {
    const { getByText, emitted } = harness;

    await fireEvent.keyDown(getByText('Personal Info'), { key: 'Enter' });
    await fireEvent.keyDown(getByText('Billing Info'), { key: 'Enter' });
    await fireEvent.keyDown(getByText('Confirmation'), { key: 'Enter' });

    expect(emitted()['step-click']).toBeTruthy();
  });
});
