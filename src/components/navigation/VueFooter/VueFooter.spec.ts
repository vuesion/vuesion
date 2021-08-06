import { render, RenderResult } from '@testing-library/vue';
import VueFooter from './VueFooter.vue';

describe('VueFooter.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueFooter, {});
  });

  test('renders component', () => {
    const { getByText } = harness;
    const year = new Date().getFullYear();

    getByText('© ' + year + ' Johannes Werner. All rights reserved.');
    getByText('Subscribe to our newsletter');
  });

  test('renders component in slim mode', async () => {
    const { getByText, queryAllByText, updateProps } = harness;
    const year = new Date().getFullYear();

    await updateProps({ slim: true });

    getByText('© ' + year + ' Johannes Werner. All rights reserved.');
    expect(queryAllByText('Subscribe to our newsletter')).toHaveLength(0);
  });
});
