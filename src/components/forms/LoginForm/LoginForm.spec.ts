import { describe, beforeEach, test, expect } from 'vitest';
import { fireEvent, render, RenderResult } from '@testing-library/vue';
import flushPromises from 'flush-promises';
import LoginForm from './LoginForm.vue';

describe('FeatureList.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(LoginForm);
  });

  test('should emit submit event', async () => {
    const { getByLabelText, getByTestId, emitted } = harness;

    await fireEvent.update(getByLabelText('Email (Demo: account@example.com) *'), 'master.mind');
    await fireEvent.update(getByLabelText('Password (Demo: password) *'), 'master.mind1337');

    await flushPromises();

    await fireEvent.submit(getByTestId('login-form'));

    expect(emitted().submit).toBeTruthy();
  });
});
