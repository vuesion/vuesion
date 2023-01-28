import { describe, beforeEach, test, expect } from 'vitest';
import { fireEvent, render, RenderResult } from '@testing-library/vue';
import LearnMore from './LearnMore.vue';

describe('LearnMore.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(LearnMore);
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('Authentication.');
  });

  test('should emit login-click event', async () => {
    const { getByText, emitted } = harness;

    await fireEvent.click(getByText('Login'));

    expect(emitted()['login-click']).toBeTruthy();
  });
});
