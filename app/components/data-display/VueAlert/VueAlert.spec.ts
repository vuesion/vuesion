import { describe, beforeEach, test } from 'vitest';
import { render, type RenderResult } from '@testing-library/vue';
import VueAlert from './VueAlert.vue';

describe('VueAlert.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueAlert, {
      props: {
        title: 'Headline',
        text: 'Information and details here. and it can go to a second line',
        type: 'success',
      },
    });
  });

  test('renders component as success', () => {
    const { getByText } = harness;

    getByText('Headline');
    getByText('Information and details here. and it can go to a second line');
  });

  test('renders component as info', async () => {
    const { getByText, rerender } = harness;

    await rerender({ type: 'info' });

    getByText('Headline');
    getByText('Information and details here. and it can go to a second line');
  });

  test('renders component as warning', async () => {
    const { getByText, rerender } = harness;

    await rerender({ type: 'warning' });

    getByText('Headline');
    getByText('Information and details here. and it can go to a second line');
  });

  test('renders component as danger', async () => {
    const { getByText, rerender } = harness;

    await rerender({ type: 'danger' });

    getByText('Headline');
    getByText('Information and details here. and it can go to a second line');
  });
});
