import { describe, beforeEach, test, expect } from 'vitest';
import { fireEvent, render, type RenderResult } from '@testing-library/vue';
import flushPromises from 'flush-promises';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(LoginForm);
  });

  test('should not emit submit event', async () => {
    const { getByLabelText, getByTestId, emitted } = harness;

    await fireEvent.update(getByLabelText('Email (Demo: account@example.com) *'), 'master.mind');
    await fireEvent.update(getByLabelText('Password (Demo: password) *'), 'mas');

    await flushPromises();

    await fireEvent.click(getByTestId('login-button'));

    expect(emitted().submit).toBeFalsy();
  });

  test('should emit submit event', async () => {
    const { getByLabelText, getByTestId, emitted } = harness;

    await fireEvent.update(getByLabelText('Email (Demo: account@example.com) *'), 'master.mind@example.com');
    await fireEvent.update(getByLabelText('Password (Demo: password) *'), 'master.mind1337');

    await flushPromises();

    await fireEvent.click(getByTestId('login-button'));

    expect(emitted().submit).toBeTruthy();
  });
});
