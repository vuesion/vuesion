import { render } from '@testing-library/vue';
import VueLoader from './VueLoader.vue';

describe('VueLoader.vue', () => {
  test('renders default loader', () => {
    const { html } = render(VueLoader);

    expect(html()).toMatch('<div class="vueLoader">');
    expect(html()).toMatch('<svg viewBox="25 25 50 50" class="svg">');
    expect(html()).toMatch(
      '<circle cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" class="circle">',
    );
  });
});
