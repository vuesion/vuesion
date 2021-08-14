import { render, RenderResult } from '@testing-library/vue';
import Download from './download.vue';

describe('Download.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(Download, {
      stubs: ['nuxt-link'],
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('Downloads');
    getByText('IDEs');
    getByText('Jetbrains');
    getByText('Visual Studio Code');
  });
});
