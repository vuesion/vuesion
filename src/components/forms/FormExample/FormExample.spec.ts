import { describe, beforeEach, test, expect } from 'vitest';
import { fireEvent, render, RenderResult } from '@testing-library/vue';
import flushPromises from 'flush-promises';
import FormExample from './FormExample.vue';

describe('FormExample.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(FormExample);
  });

  test('should emit submit event', async () => {
    const { getByLabelText, getByTestId, emitted } = harness;

    await fireEvent.update(getByLabelText('First name *'), 'Max');
    await fireEvent.update(getByLabelText('Last name *'), 'Mustermann');
    await fireEvent.update(getByLabelText('E-mail *'), 'max.mustermann@example.com');
    await fireEvent.click(getByLabelText('I accept the terms'));
    await fireEvent.click(getByLabelText('I want to subscribe to the newsletter'));
    await fireEvent.update(getByLabelText('Street *'), 'Wallstreet 1337');
    await fireEvent.update(getByLabelText('Zip code *'), '13378');
    await fireEvent.update(getByLabelText('City *'), 'New York');
    await fireEvent.click(getByTestId('custom-country'));
    await fireEvent.click(getByTestId('us-8'));
    await fireEvent.update(getByLabelText('Notes *'), 'my note');

    await flushPromises();

    await fireEvent.submit(getByTestId('form-example'));

    expect(emitted().submit[0][0]).toEqual({
      firstname: 'Max',
      lastname: 'Mustermann',
      email: 'max.mustermann@example.com',
      street: 'Wallstreet 1337',
      zipCode: '13378',
      city: 'New York',
      country: 'us',
      acceptTerms: true,
      newsletter: true,
      notes: 'my note',
    });
  });
});
