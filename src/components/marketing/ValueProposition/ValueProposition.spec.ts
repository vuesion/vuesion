import { fireEvent, render, RenderResult } from '@testing-library/vue';
import { sleep } from '@/test/test-utils';
import ValueProposition from './ValueProposition.vue';

describe('ValueProposition.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(ValueProposition, {
      stubs: ['nuxt-link'],
    });
  });

  test('renders component and changes tab', async () => {
    const { getByText, queryAllByText } = harness;

    getByText('All you need for a productive product team');

    await fireEvent.click(queryAllByText('Designer')[0]);

    await sleep(50);

    getByText('All the best user experience & interface practices built-in');
  });
});
