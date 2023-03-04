import { describe, beforeEach, test } from 'vitest';
import { fireEvent, render, RenderResult } from '@testing-library/vue';
import ValueProposition from './ValueProposition.vue';
import { sleep } from '~/test/test-utils';

describe('ValueProposition.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(ValueProposition, {
      global: {
        stubs: ['nuxt-link'],
      },
    });
  });

  test('renders component and changes tab', async () => {
    const { getByText, queryAllByText } = harness;

    getByText('All you need for a productive product team');

    await fireEvent.click(queryAllByText('Engineering Manager')[0]);
    await sleep(50);
    getByText('Enable your team to work agile and stay on top of things');

    await fireEvent.click(queryAllByText('Designer')[0]);
    await sleep(50);
    getByText('All the best user experience & interface practices built-in');

    await fireEvent.click(queryAllByText('Engineer')[0]);
    await sleep(50);
    getByText('Keep your codebase clean and focus on your domain logic');

    await fireEvent.click(queryAllByText('Team')[0]);
    await sleep(50);
    getByText('Happy, Happy, Happy 😊');
  });
});
